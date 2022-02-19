package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.otkaz.srv.api.service.EmailService;
import com.otkaz.srv.api.service.UserService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.EmployeeDto;
import com.otkaz.srv.dto.LoginDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.PasswordForgotDto;
import com.otkaz.srv.dto.PasswordResetDto;
import com.otkaz.srv.dto.ResendActivationDto;
import com.otkaz.srv.dto.RoleDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.dto.UserActivationDto;
import com.otkaz.srv.dto.UserDto;
import com.otkaz.srv.entity.Users;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.InvalidFpTokenException;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.EmployeeView;
import com.otkaz.srv.projection.UserView;
import com.otkaz.srv.repository.UserRepository;
import com.otkaz.srv.security.utils.JwtTokenUtil;
import com.otkaz.srv.security.utils.PasswordResetTokenUtil;
import com.otkaz.srv.security.utils.UserActivationTokenUtil;
import com.otkaz.srv.utils.Constants;
import com.otkaz.srv.utils.Utils;

@Service(value = "userService")
public class UserServiceImpl implements UserDetailsService, UserService {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserActivationTokenUtil userActivationTokenUtil;

	@Autowired
	private PasswordResetTokenUtil passwordResetTokenUtil;

	@Autowired
	private EmailService emailService;

	@Override
	public UserDto login(LoginDto loginDto) throws OTException {
		authenticationManager
		.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
		Users user = userRepository.findByEmail(loginDto.getEmail());
		if (user == null)
			throw new OTException("#user.auth.fail", 0);
		UserView userView;
		if(user.getRole() == Roles.SUPER_ADMIN) {
			userView = userRepository.findAdminUser(user.getId());
		} else {
			userView = userRepository.findEmployeeUser(user.getId());
		}
		final UserDto userDto = new UserDto(userView);
		if(userDto.getActive() == null || !userDto.getActive()) 
			throw new OTException("#inactive.user.access", 400);
		if(userDto.getActivated() == null || !userDto.getActivated()) 
			throw new OTException("#user.not.activated", 400);
		final String jwtToken = jwtTokenUtil.generateToken(userDto);
		userDto.setJwtToken(jwtToken);
		return userDto;
	}

	@Override
	public PaginationDto fetchUsers(String search, Boolean active, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<UserView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.userRepository.findUserListBySuperAdmin(search, active, pagingParams);
		} else {
			responseList = this.userRepository.findUserListBySuperAdmin(search, active, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				UserDto userDto = new UserDto(item);
				baseDto.add(userDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public UserDto createUser(UserDto userDto) throws OTException {
		Users user = new Users();
		UserDto response = null;
		if(!Utils.isValid(userDto.getEmail())) 
			throw new OTException("#user.invalid.email", 400);
		if(emailAlreadyExisting(userDto.getEmail()))
			throw new OTException("#user.email.exists", 400);	
		if(!employeeExists(userDto.getCode()))
			throw new OTException("#employee.invalid", 400);	
		
		user.setEmployeeCode(userDto.getCode());
		user.setEmail(userDto.getEmail());
		user.setRole(Roles.valueOf(userDto.getRole()));
		user.setPassword(bcryptEncoder.encode(Constants.DEFAULT_USER_PASSWORD));
		user.setCreatedOn(new Date());
		user.setUpdatedOn(new Date());
		user.setActive(true);
		user.setActivated(false);

		response = new UserDto(userRepository.save(user));
		sendRegistrationEmail(response);
		return response;
	}

	@Override
	public BaseDto resendActivation(ResendActivationDto resendActivationDto) throws OTException {
		Users user = userRepository.findByEmail(resendActivationDto.getEmail());
		if(user == null)
			throw new OTException("#user.invalid.email", 400);
		final UserDto userDto = new UserDto(user);
		sendRegistrationEmail(userDto);
		return new BaseDto();
	}

	@Override
	public BaseDto verifyToken(String token) throws InvalidFpTokenException {
		String email = userActivationTokenUtil.getUserEmailForToken(token);
		if (StringUtils.hasText(email)) {
			Users user = userRepository.findByEmail(email);
			if (user == null) {
				throw new InvalidFpTokenException("#user.token.invalid", 0);
			}
		} else {
			throw new InvalidFpTokenException("#user.token.invalid", 0);
		}
		return new BaseDto();
	}

	@Override
	public BaseDto activateUser(UserActivationDto userActivationDto) throws OTException {
		String email = userActivationTokenUtil.getUserEmailForToken(userActivationDto.getToken());
		if (StringUtils.hasText(email)) {
			Users user = userRepository.findByEmail(email);
			if (user == null) 
				throw new OTException("#user.token.invalid", 400);
			if(!Utils.isValidPassword(userActivationDto.getPassword())) 
				throw new OTException("#user.invalid.password", 400);
			user.setPassword(bcryptEncoder.encode(userActivationDto.getPassword()));
			user.setActivated(true);
			userRepository.save(user);
			userActivationTokenUtil.deleteToken(userActivationDto.getToken());
		} else {
			throw new OTException("#user.token.invalid", 400);
		}
		return new BaseDto();
	}

	@Override
	public BaseDto forgotPassword(PasswordForgotDto forgotPasswordDto) throws OTException {
		Users user = userRepository.findByEmail(forgotPasswordDto.getEmail());
		if(user == null)
			throw new OTException("#user.invalid.email", 400);
		final UserDto userDto = new UserDto(user);
		String token = passwordResetTokenUtil.generateToken(userDto);
		emailService.sendForgotPasswordMail(userDto.getEmail(), userDto.getName(),
				"/#/forgotPassword/" + token);
		return new BaseDto();
	}

	@Override
	public BaseDto verifyFpToken(String token) throws InvalidFpTokenException {
		String email = passwordResetTokenUtil.getUserEmailForToken(token);
		if (StringUtils.hasText(email)) {
			Users user = userRepository.findByEmail(email);
			if (user == null) {
				throw new InvalidFpTokenException("#user.token.invalid", 0);
			}
		} else {
			throw new InvalidFpTokenException("#user.token.invalid", 0);
		}
		return new BaseDto();
	}

	@Override
	public BaseDto resetPassword(PasswordResetDto passwordResetDto) throws OTException {
		String email = passwordResetTokenUtil.getUserEmailForToken(passwordResetDto.getToken());
		if (StringUtils.hasText(email)) {
			Users user = userRepository.findByEmail(email);
			if (user == null) 
				throw new OTException("#user.token.invalid", 400);
			if(!Utils.isValidPassword(passwordResetDto.getPassword())) 
				throw new OTException("#user.invalid.password", 400);
			user.setPassword(bcryptEncoder.encode(passwordResetDto.getPassword()));
			userRepository.save(user);
			passwordResetTokenUtil.deleteToken(passwordResetDto.getToken());
		} else {
			throw new OTException("#user.token.invalid", 400);
		}
		return new BaseDto();
	}

	@Override
	public List<RoleDto> fetchRoles() {
		List<RoleDto> response = new ArrayList<RoleDto>();
		SubjectDto loggedInUser = Utils.getCurrentUserDetails();
		Roles role = getRoleForCreation(Roles.valueOf(loggedInUser.getRole()));
		response.add(new RoleDto(role.name(), role.name()));
		return response;
	}

	@Override
	public PaginationDto fetchEmployees(String search, Pageable pagingParams) {
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		Page<EmployeeView> responseList = this.userRepository.fetchEmployees(search, pagingParams);
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				EmployeeDto userDto = new EmployeeDto(item);
				baseDto.add(userDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	private void sendRegistrationEmail(UserDto userDto) throws OTException {
		try {
			String token = userActivationTokenUtil.generateToken(userDto);
			emailService.sendUserActivationLink(userDto.getEmail(), userDto.getName(), "/#/activate/" + token);
		} catch (Exception e) {
			throw new OTException("#email.authcode.failed", 400);
		}
	}
	
	private Roles getRoleForCreation(Roles role) {
		switch(role) {
			case SUPER_ADMIN:
				return Roles.EAST_WEST_CEO;
			case EAST_WEST_CEO:
				return Roles.CMO;
			case CMO:
				return Roles.CLUSTER_CEO;
			case CLUSTER_CEO:
				return Roles.HEAD_OF_SALES;
			case HEAD_OF_SALES:
				return Roles.SALES_PERSON;
			default:
				return Roles.SALES_PERSON;
		}
	}
	
	@Override
	public UserDto findById(long id) {
		Users user = findUser(id);
		return new UserDto(user);
	}

	private Users findUser(long id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new EmptyResultDataAccessException("#data.not.found", 0));
	}

	public List<SimpleGrantedAuthority> getAuthority(Roles role) {
		return Arrays.asList(new SimpleGrantedAuthority(role.toString()));
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users user = userRepository.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("#user.not.found");
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
				getAuthority(user.getRole()));
	}
	
	/**
	 * @param email
	 * find the occurrence of mail id more than once
	 * @return
	 */
	public boolean emailAlreadyExisting(String email) {
		return this.userRepository.countByEmail(email) > 0 ? true : false;
	}
	
	/**
	 * @param employeeCode
	 * find the employee exists or not
	 * @return
	 */
	public boolean employeeExists(String employeeCode) {
		EmployeeView employeeView = this.userRepository.validateEmployeeCode(employeeCode);
		if(employeeView != null) 
			return true;
		return false;
	}
}
