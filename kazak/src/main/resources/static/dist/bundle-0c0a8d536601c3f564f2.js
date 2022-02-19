(self["webpackChunkocp_kaz"] = self["webpackChunkocp_kaz"] || []).push([[179],{

/***/ 48829:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./src/constants/locations.ts
var Locations;

(function (Locations) {
  Locations["DASHBOARD"] = "/";
  Locations["MY_INBOX"] = "/my-inbox";
  Locations["MY_TASK"] = "/my-task";
  Locations["MY_ENQUIRY"] = "/my-enquiry";
  Locations["MY_OFFER"] = "/my-offer";
  Locations["MY_ORDERS"] = "/my-orders";
  Locations["REPORTS"] = "/reports";
  Locations["POWER_BI_REPORT"] = "/power-bi-report";
  Locations["MY_DOCUMENTS"] = "/my-documents";
  Locations["INVOICES"] = "/invoices";
  Locations["CERTIFICATES"] = "/certificates";
  Locations["OTHERS"] = "/others";
})(Locations || (Locations = {}));

;
var ReportLocations;

(function (ReportLocations) {
  ReportLocations["ORDERBOOK_ANALYSIS"] = "/reports/orderbook-analysis";
  ReportLocations["COMMERCIAL_CONTROLLING"] = "/reports/commercial-controlling";
  ReportLocations["NEGATIVE_EBITDA_CUSTOMERS"] = "/reports/negative-ebitda-customers";
  ReportLocations["MIL_LOAD"] = "/reports/mil-load";
  ReportLocations["STOCK_REPORT"] = "/reports/stock";
  ReportLocations["DATA_ENTRY"] = "/reports/dataEntry";
})(ReportLocations || (ReportLocations = {}));

;
var PowerBiReportLocations;

(function (PowerBiReportLocations) {
  PowerBiReportLocations["ORDER_REPORT"] = "/power-bi-report/order-report ";
  PowerBiReportLocations["STOCK_REPORT"] = "/power-bi-report/stock-report";
  PowerBiReportLocations["PROFITABILITY_REPORT"] = "/power-bi-report/profitability-report";
  PowerBiReportLocations["MONTHLY_REPORT"] = "/power-bi-report/monthly-report";
})(PowerBiReportLocations || (PowerBiReportLocations = {}));

;
var CommercialControllingLocations;

(function (CommercialControllingLocations) {
  CommercialControllingLocations["SALES"] = "/reports/commercial-controlling/sales";
  CommercialControllingLocations["PROFITABILITY"] = "/reports/commercial-controlling/profitability";
})(CommercialControllingLocations || (CommercialControllingLocations = {}));

;
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/constants/index.ts

var Language;

(function (Language) {
  Language["ENGLISH"] = "en";
  Language["RUSSIAN"] = "ru";
})(Language || (Language = {}));

;
var StoredKeys;

(function (StoredKeys) {
  StoredKeys["USER_DETAILS"] = "USER_DETAILS";
})(StoredKeys || (StoredKeys = {}));

;
var ResponseType;

(function (ResponseType) {
  ResponseType["FULFILLED"] = "FULFILLED";
  ResponseType["REJECTED"] = "REJECTED";
  ResponseType["PENDING"] = "PENDING";
})(ResponseType || (ResponseType = {}));

;
var OrderBookTabs;

(function (OrderBookTabs) {
  OrderBookTabs["ORDERBOOK"] = "ORDERBOOK";
  OrderBookTabs["ZAYVKAS"] = "ZAYVKAS";
  OrderBookTabs["SPARVKA"] = "SPARVKA";
})(OrderBookTabs || (OrderBookTabs = {}));

;
var OrderBookSubHeader;

(function (OrderBookSubHeader) {
  OrderBookSubHeader["SUMMARY"] = "SUMMARY";
})(OrderBookSubHeader || (OrderBookSubHeader = {}));

;
var TimeFrame;

(function (TimeFrame) {
  TimeFrame["DAILY"] = "DAILY";
  TimeFrame["WEEKILY"] = "WEEKLY";
  TimeFrame["MONTHLY"] = "MONTHLY";
  TimeFrame["QUARTERLY"] = "QUARTERLY";
  TimeFrame["HALF_YEARLY"] = "HALF_YEARLY";
  TimeFrame["YEARLY"] = "YEARLY";
})(TimeFrame || (TimeFrame = {}));

;
var Quarter;

(function (Quarter) {
  Quarter["Q1"] = "Q1 (Jan-Mar)";
  Quarter["Q2"] = "Q2 (Apr-Jun)";
  Quarter["Q3"] = "Q3 (Jul-Sep)";
  Quarter["Q4"] = "Q4 (Oct-Dec)";
})(Quarter || (Quarter = {}));

;
var Quarters = [{
  id: 1,
  text: Quarter.Q1,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 0),
  toDate: dayjs_min_default()().set('date', 31).set('month', 2)
}, {
  id: 2,
  text: Quarter.Q2,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 3),
  toDate: dayjs_min_default()().set('date', 30).set('month', 5)
}, {
  id: 3,
  text: Quarter.Q3,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 6),
  toDate: dayjs_min_default()().set('date', 30).set('month', 8)
}, {
  id: 4,
  text: Quarter.Q4,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 9),
  toDate: dayjs_min_default()().set('date', 31).set('month', 11)
}];
var Semester;

(function (Semester) {
  Semester["H1"] = "H1 (Jan-Jun)";
  Semester["H2"] = "H2 (Jul-Dec)";
})(Semester || (Semester = {}));

;
var Semesters = [{
  id: 1,
  text: Semester.H1,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 0),
  toDate: dayjs_min_default()().set('date', 30).set('month', 5)
}, {
  id: 2,
  text: Semester.H2,
  fromDate: dayjs_min_default()().set('date', 1).set('month', 6),
  toDate: dayjs_min_default()().set('date', 31).set('month', 11)
}];
var initLogginUser = function initLogginUser() {
  return {
    active: false,
    code: '',
    email: '',
    id: 0,
    jwt_token: '',
    mobile: 0,
    name: '',
    number: '',
    role: '',
    activated: false,
    createdBy: 0,
    fax: undefined,
    phone: ''
  };
};
var DataEntryTab;

(function (DataEntryTab) {
  DataEntryTab["VariableFixCost"] = "VariableFixCost";
  DataEntryTab["ProductGroup"] = "ProductGroup";
  DataEntryTab["Product"] = "Product";
  DataEntryTab["ProductInv"] = "ProductInv";
  DataEntryTab["ProductWip"] = "ProductWip";
  DataEntryTab["InvenstionWip"] = "InvenstionWip";
  DataEntryTab["Country"] = "Country";
  DataEntryTab["Region"] = "Region";
  DataEntryTab["CountrySupply"] = "CountrySupply";
})(DataEntryTab || (DataEntryTab = {}));

;
var MonthPicker = [{
  name: 'JAN',
  key: 1
}, {
  name: 'FEB',
  key: 2
}, {
  name: 'MAR',
  key: 3
}, {
  name: 'APR',
  key: 4
}, {
  name: 'MAY',
  key: 5
}, {
  name: 'JUN',
  key: 6
}, {
  name: 'JUL',
  key: 7
}, {
  name: 'AUG',
  key: 8
}, {
  name: 'SEP',
  key: 9
}, {
  name: 'OCT',
  key: 10
}, {
  name: 'NOV',
  key: 11
}, {
  name: 'DEC',
  key: 12
}];
var PivotProductTableName = [{
  name: 'PRODUCT'
}, {
  name: 'SORT'
}];
var PivotCountryTableName = [{
  name: 'COUNTRY'
}, {
  name: 'PRODUCT'
}, {
  name: 'SORT'
}];
var PivotCustomerTableName = [{
  name: 'CUSTOMER'
}, {
  name: 'COUNTRY'
}, {
  name: 'PRODUCT'
}, {
  name: 'SORT'
}];
var PivotRegionTableName = [{
  name: 'REGION'
}, {
  name: 'PRODUCT'
}, {
  name: 'SORT'
}];
var Top10CustomersProfitabilityHeader = [{
  name: 'Net Volume',
  key: 'net_volume'
}, {
  name: 'NRP Amount',
  key: 'nrp_amount_in_million'
}, {
  name: 'NRP $/T',
  key: 'nrp_usd_per_ton'
}, {
  name: 'EBITDA Amount',
  key: 'ebitda_amount_in_million'
}, {
  name: 'EBITDA $/T',
  key: 'ebitda_usd_per_ton'
}, {
  name: 'Contribution Amount',
  key: 'contribution_amount_in_million'
}, {
  name: 'Contribution $/T',
  key: 'contribution_usd_per_ton'
}];
var Top10CustomersSalesHeader = [{
  name: 'Net Volume',
  key: 'net_volume'
}, {
  name: 'EXW Amount',
  key: 'exw_amount_in_million'
}, {
  name: 'EXW $/t',
  key: 'exw_usd_per_ton'
}, {
  name: 'VAT Amount',
  key: 'vat_amount_in_million'
}, {
  name: 'Gross Net Of VAT',
  key: 'gross_net_of_vat'
}, {
  name: 'Contribution Amount',
  key: 'contribution_amount_in_million'
}, {
  name: 'Contribution $/T',
  key: 'contribution_usd_per_ton'
}];
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/i18/index.tsx




function evalTemplate(strans, params) {
  var tString = strans;

  if (params && Object.keys(params).length && params.S && Object.keys(params.S).length) {
    Object.keys(params.S).forEach(function (k) {
      tString = tString.replace("${S.".concat(k, "}"), params.S[k]);
    });
  }

  return tString;
}

function i18Get(key, lang, S) {
  // const translations = useSelector((store: AppStore) => store.translations);
  // const trans = translations.translations && translations.translations.translations ? translations.translations.translations[lang] : '';
  var trans = {};

  try {
    var transText = key;

    if (trans && key in trans) {
      transText = trans[key];
    } else {
      transText = key;
    } // transText = '' + transText + '';


    return evalTemplate(transText, {
      S: S
    });
  } catch (err) {// console.log(err)
    // nothing to catch
  }

  return key;
}
/* harmony default export */ var i18 = (function (props) {
  var key = props.tkey; // const translations = useSelector((store: AppStore) => store.translations);
  // const language = translations && translations.language && translations.language.languageCode ? translations.language.languageCode : Language.ENGLISH;

  var language = Language.ENGLISH;
  var S = props.params;
  var replaceKey = props.replaceKey;
  var replaceVal = props.replaceVal;
  var value = i18Get(key, language, S);

  if (replaceKey && replaceKey.length && replaceVal && replaceVal.length) {
    replaceKey.forEach(function (key, index) {
      if (key && replaceVal[index]) {
        value = value.replace(key, replaceVal[index]);
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: value
  });
});
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 5 modules
var message = __webpack_require__(93809);
;// CONCATENATED MODULE: ./src/utils/utils.ts


var language = Language.ENGLISH;

var getLanguage = function getLanguage() {
  return language;
};

var setLanguage = function setLanguage(lang) {
  language = lang;
};

var showSuccess = function showSuccess(msg) {
  message/* default.success */.ZP.success(msg);
};

var showInfo = function showInfo(msg) {
  message/* default.info */.ZP.info(msg);
};

var showError = function showError(msg) {
  message/* default.error */.ZP.error(msg);
};

var regexEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

var toPascalCase = function toPascalCase(text) {
  if (!text) {
    return text;
  }

  return text.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

var checkForParameter = function checkForParameter(parameterName, location) {
  var result = null,
      tmp = [];
  location.search.substr(1).split("&").forEach(function (item) {
    tmp = item.split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  });
  return result;
};


;// CONCATENATED MODULE: ./src/components/user/login/components/email-input.tsx






;

var EmailInput = function EmailInput(props, ref) {
  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      invalid = _useState4[0],
      setInvalid = _useState4[1];

  (0,react.useImperativeHandle)(ref, function () {
    return {
      get: function get() {
        return value;
      },
      validate: function validate() {
        if (!value || !value.trim() || !regexEmail.test(value)) {
          setInvalid(true);
          return false;
        }

        return true;
      }
    };
  });

  var onEmailChange = function onEmailChange(event) {
    setValue(event.target.value);
    setInvalid(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "input_container login-text-box ",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      type: "email",
      maxLength: 100,
      value: value,
      placeholder: i18Get('Email', getLanguage()),
      onChange: onEmailChange
    }), invalid ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "invalid-text",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
        tkey: "Enter valid email"
      })
    }) : '']
  });
};

/* harmony default export */ var email_input = (/*#__PURE__*/(0,react.forwardRef)(EmailInput));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js + 1 modules
var EyeInvisibleOutlined = __webpack_require__(88633);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(95357);
;// CONCATENATED MODULE: ./src/components/user/login/components/password-input.tsx







;

var PasswordInput = function PasswordInput(props, ref) {
  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      showPassword = _useState4[0],
      setShowPassword = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  (0,react.useImperativeHandle)(ref, function () {
    return {
      get: function get() {
        return value;
      },
      validate: function validate() {
        if (!value || !value.trim()) {
          setInvalid(true);
          return false;
        }

        return true;
      }
    };
  });

  var onPasswordChange = function onPasswordChange(event) {
    setValue(event.target.value);
    setInvalid(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "input_container login-text-box",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      type: showPassword ? "text" : "password",
      maxLength: 100,
      value: value,
      placeholder: i18Get('Password', getLanguage()),
      onChange: onPasswordChange
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        return setShowPassword(!showPassword);
      },
      className: "eye_password",
      children: showPassword ? /*#__PURE__*/(0,jsx_runtime.jsx)(EyeInvisibleOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(EyeOutlined/* default */.Z, {})
    }), invalid ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "invalid-text",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
        tkey: "Enter valid password"
      })
    }) : '']
  });
};

/* harmony default export */ var password_input = (/*#__PURE__*/(0,react.forwardRef)(PasswordInput));
;// CONCATENATED MODULE: ./src/components/user/login/components/login-form.tsx





;
;
;

var LoginForm = function LoginForm(props, ref) {
  var emailRef = (0,react.useRef)(null);
  var passwordRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return {
      get: function get() {
        return {
          email: emailRef.current ? emailRef.current.get() : '',
          password: passwordRef.current ? passwordRef.current.get() : ''
        };
      },
      validate: function validate() {
        var validEmail = emailRef.current && emailRef.current.validate();
        var validPassword = passwordRef.current && passwordRef.current.validate();
        return validEmail && validPassword;
      }
    };
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(email_input, {
      ref: emailRef
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(password_input, {
      ref: passwordRef
    })]
  });
};

/* harmony default export */ var login_form = (/*#__PURE__*/(0,react.forwardRef)(LoginForm));
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(39704);
;// CONCATENATED MODULE: ./src/plugins/action-button/index.tsx





;
var ActionButton = function ActionButton(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var actions = (0,es/* useSelector */.v9)(function (store) {
    return store.actionBtn;
  });

  var onButtonClick = function onButtonClick(event) {
    event.preventDefault();

    if (props.onClick && !isLoading) {
      setIsLoading(true);
      props.onClick();
    }
  };

  if (isLoading !== actions.actionTriggered) {
    setIsLoading(actions.actionTriggered);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
    className: props.className ? props.className : "common_button",
    disabled: isLoading,
    onClick: onButtonClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
      tkey: isLoading ? "Loading..." : props.text
    })
  });
};
;// CONCATENATED MODULE: ./src/plugins/action-button/redux/events.ts
var ActionButtonEvents;

(function (ActionButtonEvents) {
  ActionButtonEvents["TRIGGER_ACTION_BUTTON"] = "TRIGGER_ACTION_BUTTON";
  ActionButtonEvents["CLEAR_TRIGGER_ACTION_BUTTON"] = "CLEAR_TRIGGER_ACTION_BUTTON";
})(ActionButtonEvents || (ActionButtonEvents = {}));

;
;// CONCATENATED MODULE: ./src/plugins/action-button/redux/action.ts

var triggerActionButton = function triggerActionButton() {
  return {
    type: ActionButtonEvents.TRIGGER_ACTION_BUTTON
  };
};
var clearTriggerActionButton = function clearTriggerActionButton() {
  return {
    type: ActionButtonEvents.CLEAR_TRIGGER_ACTION_BUTTON
  };
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);
;// CONCATENATED MODULE: ./src/config.ts
// export default {
//     apiRoot : 'http://localhost:8095/api/v1',
//     apiRootSecure : 'http://localhost:8095/api/v1/secure',
//      //apiRoot : 'http://10.21.199.97:8092/api/v1',
//      //apiRootSecure : 'http://10.21.199.97:809/api/v1/secure',
//     env: ''
// }
/* harmony default export */ var config = ({
  apiRoot: '/api/v1',
  apiRootSecure: '/api/v1/secure',
  env: ''
});
;// CONCATENATED MODULE: ./src/components/user/login/redux/events.ts
var LoginEvents;

(function (LoginEvents) {
  LoginEvents["LOGIN"] = "LOGIN";
  LoginEvents["LOGIN_FULLFILED"] = "LOGIN_FULFILLED";
  LoginEvents["LOGIN_REJECTED"] = "LOGIN_REJECTED";
  LoginEvents["CLEAR_LOGIN"] = "CLEAR_LOGIN";
})(LoginEvents || (LoginEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/user/login/redux/action.ts



var login = function login(payload) {
  return {
    type: LoginEvents.LOGIN,
    payload: axios_default().post("".concat(config.apiRoot, "/login"), payload)
  };
};
var clearLogin = function clearLogin() {
  return {
    type: LoginEvents.CLEAR_LOGIN
  };
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/user/login/login.scss
var login_login = __webpack_require__(96890);
;// CONCATENATED MODULE: ./src/components/user/login/login.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(login_login/* default */.Z, options);




       /* harmony default export */ var user_login_login = (login_login/* default */.Z && login_login/* default.locals */.Z.locals ? login_login/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/user/login/index.tsx













var Login = function Login() {
  var loginFormRef = (0,react.useRef)(null);
  var dispatch = (0,es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();
  var loginReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.login;
  });
  (0,react.useEffect)(function () {
    if (loginReducer.loginCompleted === ResponseType.FULFILLED) {
      localStorage.setItem(StoredKeys.USER_DETAILS, window.btoa(JSON.stringify(loginReducer.userDetails)));
      dispatch(clearLogin());
      dispatch(clearTriggerActionButton());
      history.push(ReportLocations.ORDERBOOK_ANALYSIS);
    }

    if (loginReducer.loginCompleted === ResponseType.REJECTED) {
      dispatch(clearLogin());
      dispatch(clearTriggerActionButton());
    }
  }, [loginReducer.loginCompleted]);

  var loginOnEnterKey = function loginOnEnterKey(event) {
    if (event.code == 'Enter') {
      loginClicked();
    }
  };

  var loginClicked = function loginClicked() {
    if (loginFormRef.current && loginFormRef.current.validate()) {
      dispatch(triggerActionButton());
      var loginData = loginFormRef.current.get();
      var payload = {
        email: loginData.email,
        password: loginData.password
      };
      dispatch(login(payload));
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "login_bg",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "login_shade"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "login_card",
        onKeyPress: loginOnEnterKey,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text_align_center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            className: "header_logo",
            src: "./images/logo.png"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Welcome to your Arcelormittal One Commercial Platform"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "input_container login-text-box ",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(login_form, {
            ref: loginFormRef
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "input_container pl-15 pr-15",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionButton, {
            text: 'Login',
            onClick: loginClicked,
            className: "login-button"
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/user/index.tsx





;
var User = function User() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: Locations.DASHBOARD,
      component: Login
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: Locations.DASHBOARD
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 49 modules
var es_select = __webpack_require__(91714);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/header/header.scss
var header = __webpack_require__(41595);
;// CONCATENATED MODULE: ./src/components/main-container/header/header.scss

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());

      header_options.insert = insertBySelector_default().bind(null, "head");
    
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.Z, header_options);




       /* harmony default export */ var header_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/header/index.tsx








var Header = function Header() {
  var _useState = (0,react.useState)(Language.ENGLISH),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("nav", {
      className: "navbar navbar-expand-md custom_navbar d-flex justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "navbar-brand",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: "./images/Arcelormittal_logo.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
          children: "One Commercial Platform"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "language_select",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
          value: language,
          onChange: function onChange(e) {
            return setLanguage(e);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
            value: Language.ENGLISH,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "English"
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
            value: Language.RUSSIAN,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Russian"
                })
              })
            })
          })]
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js + 1 modules
var ArrowRightOutlined = __webpack_require__(93488);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/side-bar/sidebar.scss
var sidebar = __webpack_require__(60825);
;// CONCATENATED MODULE: ./src/components/main-container/side-bar/sidebar.scss

      
      
      
      
      
      
      
      
      

var sidebar_options = {};

sidebar_options.styleTagTransform = (styleTagTransform_default());
sidebar_options.setAttributes = (setAttributesWithoutAttributes_default());

      sidebar_options.insert = insertBySelector_default().bind(null, "head");
    
sidebar_options.domAPI = (styleDomAPI_default());
sidebar_options.insertStyleElement = (insertStyleElement_default());

var sidebar_update = injectStylesIntoStyleTag_default()(sidebar/* default */.Z, sidebar_options);




       /* harmony default export */ var side_bar_sidebar = (sidebar/* default */.Z && sidebar/* default.locals */.Z.locals ? sidebar/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/side-bar/index.tsx







var SideBar = function SideBar(props) {
  var history = (0,react_router/* useHistory */.k6)();
  var locations = (0,react_router/* useLocation */.TH)();

  var navigate = function navigate(path) {
    history.push(path);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "main_sidebar",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "sidebar_toggler",
      onClick: function onClick() {
        return props.setSidebarToggle(!props.sidebarToggle);
      },
      children: props.sidebarToggle ? /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRightOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_INBOX);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/inbox.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Inbox"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_TASK);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/my thask.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Task"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_ENQUIRY);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/my enqu.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Enquiry"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_OFFER);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/myoffer.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Offer"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_ORDERS);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/my order.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Orders"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item ".concat(locations.pathname.startsWith(Locations.REPORTS) ? 'sidebar_item_active' : ''),
        onClick: function onClick() {
          return navigate(Locations.REPORTS);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/report.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Reports"
          })
        })]
      }), locations.pathname.startsWith(Locations.REPORTS) ? /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(ReportLocations.ORDERBOOK_ANALYSIS) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(ReportLocations.ORDERBOOK_ANALYSIS);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "OrderBook Analysis"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item sidebar_sub_item_prime ".concat(locations.pathname.startsWith(ReportLocations.COMMERCIAL_CONTROLLING) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(ReportLocations.COMMERCIAL_CONTROLLING);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Commercial Controlling"
          })
        }), locations.pathname.startsWith(ReportLocations.COMMERCIAL_CONTROLLING) ? /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "sidebar_sub_item ".concat(locations.pathname.startsWith(CommercialControllingLocations.SALES) ? 'sidebar_sub_item_active' : ''),
            onClick: function onClick() {
              return navigate(CommercialControllingLocations.SALES);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Sales"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "sidebar_sub_item ".concat(locations.pathname.startsWith(CommercialControllingLocations.PROFITABILITY) ? 'sidebar_sub_item_active' : ''),
            onClick: function onClick() {
              return navigate(CommercialControllingLocations.PROFITABILITY);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Customer Profitability Report(CPR)"
            })
          })]
        }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item",
          onClick: function onClick() {
            return navigate(ReportLocations.MIL_LOAD);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Mil Load"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(ReportLocations.STOCK_REPORT) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(ReportLocations.STOCK_REPORT);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Stock Report"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(ReportLocations.DATA_ENTRY) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(ReportLocations.DATA_ENTRY);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Data Entry"
          })
        })]
      }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item ".concat(locations.pathname.startsWith(Locations.POWER_BI_REPORT) ? "sidebar_item_active" : ''),
        onClick: function onClick() {
          return navigate(Locations.POWER_BI_REPORT);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/Power-bi.png",
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Power Bi Reports"
          })
        })]
      }), locations.pathname.startsWith(Locations.POWER_BI_REPORT) ? /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(PowerBiReportLocations.ORDER_REPORT) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(PowerBiReportLocations.ORDER_REPORT);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Order Report"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(PowerBiReportLocations.STOCK_REPORT) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(PowerBiReportLocations.STOCK_REPORT);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Stock Report"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(PowerBiReportLocations.PROFITABILITY_REPORT) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(PowerBiReportLocations.PROFITABILITY_REPORT);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Profitability Report"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "sidebar_sub_item ".concat(locations.pathname.startsWith(PowerBiReportLocations.MONTHLY_REPORT) ? 'sidebar_sub_item_active' : ''),
          onClick: function onClick() {
            return navigate(PowerBiReportLocations.MONTHLY_REPORT);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Monthly Report"
            })
          })
        })]
      }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.MY_DOCUMENTS);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/my doc.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "My Documents"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.INVOICES);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/invoice.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Invoices"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.CERTIFICATES);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/certificate.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Certificates"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "sidebar_item",
        onClick: function onClick() {
          return navigate(Locations.OTHERS);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "mr-2",
          src: "/images/others.png"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Others"
          })
        })]
      })]
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/redux/events.ts
var OrderBookEvents;

(function (OrderBookEvents) {
  OrderBookEvents["FETCH_ORDERBOOK_REGIONS"] = "FETCH_ORDERBOOK_REGIONS";
  OrderBookEvents["FETCH_ORDERBOOK_REGIONS_FULFILLED"] = "FETCH_ORDERBOOK_REGIONS_FULFILLED";
  OrderBookEvents["FETCH_ORDERBOOK_REGIONS_REJECTED"] = "FETCH_ORDERBOOK_REGIONS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ORDERBOOK_REGIONS"] = "CLEAR_FETCH_ORDERBOOK_REGIONS";
  OrderBookEvents["FETCH_ORDERBOOK_PRODUCTS"] = "FETCH_ORDERBOOK_PRODUCTS";
  OrderBookEvents["FETCH_ORDERBOOK_PRODUCTS_FULFILLED"] = "FETCH_ORDERBOOK_PRODUCTS_FULFILLED";
  OrderBookEvents["FETCH_ORDERBOOK_PRODUCTS_REJECTED"] = "FETCH_ORDERBOOK_PRODUCTS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ORDERBOOK_PRODUCTS"] = "CLEAR_FETCH_ORDERBOOK_PRODUCTS";
  OrderBookEvents["FETCH_WEEKS"] = "FETCH_WEEKS";
  OrderBookEvents["FETCH_WEEKS_FULFILLED"] = "FETCH_WEEKS_FULFILLED";
  OrderBookEvents["FETCH_WEEKS_REJECTED"] = "FETCH_WEEKS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_WEEKS"] = "CLEAR_FETCH_WEEKS";
  OrderBookEvents["FETCH_ZAYVKAS_PRODUCTS"] = "FETCH_ZAYVKAS_PRODUCTS";
  OrderBookEvents["FETCH_ZAYVKAS_PRODUCTS_FULFILLED"] = "FETCH_ZAYVKAS_PRODUCTS_FULFILLED";
  OrderBookEvents["FETCH_ZAYVKAS_PRODUCTS_REJECTED"] = "FETCH_ZAYVKAS_PRODUCTS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ZAYVKAS_PRODUCTS"] = "CLEAR_FETCH_ZAYVKAS_PRODUCTS";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_USER_STATUS"] = "FETCH_ORDER_BOOK_FILTER_USER_STATUS";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_USER_STATUS_FULFILLED"] = "FETCH_ORDER_BOOK_FILTER_USER_STATUS_FULFILLED";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_USER_STATUS_REJECTED"] = "FETCH_ORDER_BOOK_FILTER_USER_STATUS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ORDER_BOOK_FILTER_USER_STATUS"] = "CLEAR_FETCH_ORDER_BOOK_FILTER_USER_STATUS";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_PLANTS"] = "FETCH_ORDER_BOOK_FILTER_PLANTS";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_PLANTS_FULFILLED"] = "FETCH_ORDER_BOOK_FILTER_PLANTS_FULFILLED";
  OrderBookEvents["FETCH_ORDER_BOOK_FILTER_PLANTS_REJECTED"] = "FETCH_ORDER_BOOK_FILTER_PLANTS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ORDER_BOOK_FILTER_PLANTS"] = "CLEAR_FETCH_ORDER_BOOK_FILTER_PLANTS";
  OrderBookEvents["FETCH_ZAYVKAS_FILTER_PLANTS"] = "FETCH_ZAYVKAS_FILTER_PLANTS";
  OrderBookEvents["FETCH_ZAYVKAS_FILTER_PLANTS_FULFILLED"] = "FETCH_ZAYVKAS_FILTER_PLANTS_FULFILLED";
  OrderBookEvents["FETCH_ZAYVKAS_FILTER_PLANTS_REJECTED"] = "FETCH_ZAYVKAS_FILTER_PLANTS_REJECTED";
  OrderBookEvents["CLEAR_FETCH_ZAYVKAS_FILTER_PLANTS"] = "CLEAR_FETCH_ZAYVKAS_FILTER_PLANTS";
})(OrderBookEvents || (OrderBookEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/redux/action.ts



var fetchOrderBookRegions = function fetchOrderBookRegions() {
  return {
    type: OrderBookEvents.FETCH_ORDERBOOK_REGIONS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/regions"))
  };
};
var clearFetchOrderbookRegions = function clearFetchOrderbookRegions() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ORDERBOOK_REGIONS
  };
};
var fetchOrderBookProducts = function fetchOrderBookProducts(query) {
  return {
    type: OrderBookEvents.FETCH_ORDERBOOK_PRODUCTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchOrderBookProducts = function clearFetchOrderBookProducts() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ORDERBOOK_PRODUCTS
  };
};
var fetchWeeks = function fetchWeeks(year) {
  return {
    type: OrderBookEvents.FETCH_WEEKS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/weeks/").concat(year))
  };
};
var clearFetchWeeks = function clearFetchWeeks() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_WEEKS
  };
};
var fetchZayvkasProducts = function fetchZayvkasProducts(query) {
  return {
    type: OrderBookEvents.FETCH_ZAYVKAS_PRODUCTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/zayvkas/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchZayvkasProducts = function clearFetchZayvkasProducts() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ZAYVKAS_PRODUCTS
  };
};
var fetchOrderBookFilterUserStatus = function fetchOrderBookFilterUserStatus() {
  return {
    type: OrderBookEvents.FETCH_ORDER_BOOK_FILTER_USER_STATUS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/zayvkas/usersts"))
  };
};
var clearFetchOrderBookFilterUserStatus = function clearFetchOrderBookFilterUserStatus() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ORDER_BOOK_FILTER_USER_STATUS
  };
};
var fetchOrderBookFilterPlants = function fetchOrderBookFilterPlants() {
  return {
    type: OrderBookEvents.FETCH_ORDER_BOOK_FILTER_PLANTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/plants"))
  };
};
var clearFetchOrderBookFilterPlants = function clearFetchOrderBookFilterPlants() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ORDER_BOOK_FILTER_PLANTS
  };
};
var fetchZayvkasFilterPlants = function fetchZayvkasFilterPlants() {
  return {
    type: OrderBookEvents.FETCH_ZAYVKAS_FILTER_PLANTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/orderReport/zayvkas/plants"))
  };
};
var clearFetchZayvkasFilterPlants = function clearFetchZayvkasFilterPlants() {
  return {
    type: OrderBookEvents.CLEAR_FETCH_ZAYVKAS_FILTER_PLANTS
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/time-frame.tsx







var List = [TimeFrame.DAILY, TimeFrame.WEEKILY, TimeFrame.MONTHLY, TimeFrame.QUARTERLY, TimeFrame.HALF_YEARLY, TimeFrame.YEARLY];
;
var TimeFrameList = function TimeFrameList(props) {
  var _useState = (0,react.useState)(List),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  (0,react.useEffect)(function () {
    if (props.skipDaily) {
      setList(function (prevState) {
        return list.filter(function (el) {
          return el !== TimeFrame.DAILY;
        });
      });
    }
  }, [props.skipDaily]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
    className: "mr-2",
    placeholder: "Select TimeFrame",
    value: props.value,
    allowClear: props.activeTab === OrderBookTabs.ZAYVKAS ? false : true,
    onChange: function onChange(selectedValue) {
      return props.onChange(selectedValue);
    },
    children: list.map(function (el) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: el,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: toPascalCase(el.replace(/_/g, ' '))
        })
      }, el);
    })
  });
};
// EXTERNAL MODULE: ./node_modules/rc-picker/lib/generate/dayjs.js
var dayjs = __webpack_require__(75977);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/generatePicker/index.js + 56 modules
var generatePicker = __webpack_require__(23761);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/style/index.js + 6 modules
var style = __webpack_require__(40759);
;// CONCATENATED MODULE: ./src/plugins/date-picker/index.tsx



var DatePicker = (0,generatePicker/* default */.ZP)(dayjs/* default */.Z);
// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/Checkbox.js
var Checkbox = __webpack_require__(62270);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/week-picker.tsx














;
var WeekPicker = function WeekPicker(props) {
  var _useState = (0,react.useState)(dayjs_min_default()()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      weeks = _useState4[0],
      setWeeks = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      weeksRangeShow = _useState6[0],
      setWeeksRangeShow = _useState6[1];

  var _useState7 = (0,react.useState)(undefined),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      selectedWeek = _useState8[0],
      setSelectedWeek = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var orderBook = (0,es/* useSelector */.v9)(function (state) {
    return state.orderBook;
  });
  var RangePicker = DatePicker.RangePicker;
  (0,react.useEffect)(function () {
    if (year) {
      dispatch(fetchWeeks(dayjs_min_default()(year).get('year')));
    } else {
      setWeeks([]);
    }
  }, [year]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchWeeksComplete === ResponseType.FULFILLED) {
      setWeeks(orderBook.weeks);
      dispatch(clearFetchWeeks());
    }

    if (orderBook.fetchWeeksComplete === ResponseType.REJECTED) {
      dispatch(clearFetchWeeks());
    }
  }, [orderBook.fetchWeeksComplete]);

  var onYearChange = function onYearChange(date, dateString) {
    setYear(date);
  };

  var weeksRangeToggler = function weeksRangeToggler() {
    setWeeksRangeShow(!weeksRangeShow);
    setWeeks([]);
    setYear(null);
    setSelectedWeek(undefined);
  };

  var onRangeWeekChange = function onRangeWeekChange(values, formatString) {
    props.onDateChange({
      fromDate: values && values[0] ? values[0] : null,
      toDate: values && values[1] ? values[1] : null,
      periodLevel: values && values[0] ? dayjs_min_default()(values[0]).week() : null
    });
  };

  var onWeekChange = function onWeekChange(data) {
    setSelectedWeek(data);
    var date = {
      week: 0,
      from_date: '',
      to_date: ''
    };

    if (data) {
      weeks.forEach(function (week) {
        if (week.week === data) {
          date = week;
        }
      });
    }

    props.onDateChange({
      fromDate: date.from_date ? dayjs_min_default()(date.from_date, 'DD/MM/YYYY') : null,
      toDate: date.to_date ? dayjs_min_default()(date.to_date, 'DD/MM/YYYY') : null,
      periodLevel: date.week ? date.week : null
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!weeksRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      className: "mr-2",
      value: year,
      onChange: onYearChange,
      picker: "year"
    }), props.orderBookAnalysisPage && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "pr-2 d-flex align-items-center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "text-nowrap pr-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Weeks in Range"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox["default"], {
        onClick: weeksRangeToggler
      })]
    }), !weeksRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
      placeholder: i18Get('Week', getLanguage()),
      notFoundContent: i18Get('Select an year', getLanguage()),
      value: selectedWeek,
      onChange: onWeekChange,
      children: weeks.map(function (week) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default.Option */.Z.Option, {
          value: week.week,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Week"
          }), "\xA0", week.week, " (", week.from_date, " - ", week.to_date, ")"]
        }, "week-".concat(week.week));
      })
    }), weeksRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker, {
      picker: "week",
      onChange: onRangeWeekChange,
      format: "wo"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/init/index.ts

var initQuaterData = function initQuaterData() {
  return {
    id: 0,
    text: '',
    fromDate: dayjs_min_default()(),
    toDate: dayjs_min_default()()
  };
};
var initHalfYearlyData = function initHalfYearlyData() {
  return {
    id: 0,
    text: '',
    fromDate: dayjs_min_default()(),
    toDate: dayjs_min_default()()
  };
};
var initFilterData = function initFilterData() {
  return {
    userStatus: [],
    plants: []
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/quarter-picker.tsx












;
var QuaterPicker = function QuaterPicker(props) {
  var _useState = (0,react.useState)(dayjs_min_default()()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      quarter = _useState4[0],
      setQuarter = _useState4[1];

  (0,react.useEffect)(function () {
    if (year && quarter) {
      var selectedQuarter = initQuaterData();
      Quarters.forEach(function (el) {
        if (el.id === quarter) {
          selectedQuarter = el;
        }
      });
      props.onChange({
        fromDate: selectedQuarter.fromDate ? dayjs_min_default()(selectedQuarter.fromDate).set('year', year === null || year === void 0 ? void 0 : year.get('year')) : null,
        toDate: selectedQuarter.toDate ? dayjs_min_default()(selectedQuarter.toDate).set('year', year === null || year === void 0 ? void 0 : year.get('year')) : null,
        periodLevel: selectedQuarter.id ? selectedQuarter.id : null
      });
    }
  }, [year, quarter]);

  var onYearChange = function onYearChange(date, dateString) {
    setYear(date);
  };

  var onQuarterChange = function onQuarterChange(data) {
    setQuarter(data);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      className: "mr-2",
      value: year,
      onChange: onYearChange,
      picker: "year"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
      placeholder: i18Get('Quarter', getLanguage()),
      notFoundContent: i18Get('Select a year', getLanguage()),
      value: quarter,
      onChange: onQuarterChange,
      children: Quarters.map(function (quarter) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: quarter.id,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: quarter.text
          })
        }, "Q-".concat(quarter.id));
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/half-year-picker.tsx












;
var HalfYearPicker = function HalfYearPicker(props) {
  var _useState = (0,react.useState)(dayjs_min_default()()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      halfYear = _useState4[0],
      setHalfYear = _useState4[1];

  (0,react.useEffect)(function () {
    if (year && halfYear) {
      var selectedQuarter = initHalfYearlyData();
      Semesters.forEach(function (el) {
        if (el.id === halfYear) {
          selectedQuarter = el;
        }
      });
      props.onChange({
        fromDate: selectedQuarter.fromDate ? dayjs_min_default()(selectedQuarter.fromDate).set('year', year.get('year')) : null,
        toDate: selectedQuarter.toDate ? dayjs_min_default()(selectedQuarter.toDate).set('year', year.get('year')) : null,
        periodLevel: selectedQuarter.id ? selectedQuarter.id : null
      });
    }
  }, [year, halfYear]);

  var onYearChange = function onYearChange(date, dateString) {
    setYear(date);
  };

  var onHalfYearChange = function onHalfYearChange(data) {
    setHalfYear(data);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      className: "mr-2",
      value: year,
      onChange: onYearChange,
      picker: "year"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
      placeholder: i18Get('Half Year', getLanguage()),
      notFoundContent: i18Get('Select a year', getLanguage()),
      value: halfYear,
      onChange: onHalfYearChange,
      children: Semesters.map(function (sem) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: sem.id,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: sem.text
          })
        }, "H-".concat(sem.id));
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/month-picker.tsx









;
var month_picker_MonthPicker = function MonthPicker(props) {
  var RangePicker = DatePicker.RangePicker;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      monthlyRangeShow = _useState2[0],
      setMonthlyRangeShow = _useState2[1];

  var monthlyRangeToggler = function monthlyRangeToggler() {
    setMonthlyRangeShow(!monthlyRangeShow);
  };

  var onRangeMonthChange = function onRangeMonthChange(values, formatString) {
    props.onDateChange({
      fromDate: values && values[0] ? values[0] : null,
      toDate: values && values[1] ? values[1] : null,
      periodLevel: values && values[0] ? dayjs_min_default()(values[0]).month() + 1 : null
    });
  };

  var onMonthlyDateChange = function onMonthlyDateChange(date, dateString) {
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };

    if (date) {
      prevState.fromDate = dayjs_min_default()(date).set('date', 1);
      prevState.toDate = dayjs_min_default()(date).set('date', dayjs_min_default()(date).daysInMonth());
      prevState.periodLevel = dayjs_min_default()(date).get('month') + 1;
    }

    props.onDateChange(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [props.orderBookAnalysisPage && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "pr-2 d-flex align-items-center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "text-nowrap pr-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Months in Range"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox["default"], {
        onClick: monthlyRangeToggler
      })]
    }), !monthlyRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      value: props.fromDate,
      format: "MM/YYYY",
      picker: "month",
      onChange: onMonthlyDateChange
    }), monthlyRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker, {
      onChange: onRangeMonthChange,
      picker: "month"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/dailyPicker.tsx








;
var DailyPicker = function DailyPicker(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      dailyRangeShow = _useState2[0],
      setDailyRangeTogglerShow = _useState2[1];

  var RangePicker = DatePicker.RangePicker;

  var onDailyDateChange = function onDailyDateChange(date, dateString) {
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };

    if (date) {
      prevState.fromDate = date;
      prevState.toDate = date;
    }

    props.onChange(prevState);
  };

  var onRangeDailyChange = function onRangeDailyChange(date) {
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };

    if (date) {
      prevState.fromDate = date[0];
      prevState.toDate = date[1];
    }

    props.onChange(prevState);
  };

  var dailyRangeToggler = function dailyRangeToggler() {
    setDailyRangeTogglerShow(!dailyRangeShow);
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };
    props.onChange(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [props.orderBookAnalysisPage && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "pr-2 d-flex align-items-center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "text-nowrap pr-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Day in Range"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox["default"], {
        onClick: dailyRangeToggler
      })]
    }), !dailyRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      format: "DD/MM/YYYY",
      value: props.fromDate,
      onChange: onDailyDateChange
    }), dailyRangeShow && /*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker, {
      onChange: onRangeDailyChange,
      format: "DD/MM/YYYY"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/range-picker.tsx











;
var RangeDatePicker = function RangeDatePicker(props) {
  var onMonthlyDateChange = function onMonthlyDateChange(date, dateString) {
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };

    if (date) {
      prevState.fromDate = dayjs_min_default()(date).set('date', 1);
      prevState.toDate = dayjs_min_default()(date).set('date', dayjs_min_default()(date).daysInMonth());
      prevState.periodLevel = dayjs_min_default()(date).get('month') + 1;
    }

    props.onChange(prevState);
  };

  var onYearlyDateChange = function onYearlyDateChange(date, dateString) {
    var prevState = {
      fromDate: null,
      toDate: null,
      periodLevel: null
    };

    if (date) {
      prevState.fromDate = dayjs_min_default()(date).set('month', 0).set('date', 1);
      prevState.toDate = dayjs_min_default()(date).set('month', 11).set('date', 31);
      prevState.periodLevel = 1;
    }

    props.onChange(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [props.timeFrame === TimeFrame.DAILY ? /*#__PURE__*/(0,jsx_runtime.jsx)(DailyPicker, {
      fromDate: props.fromDate,
      toDate: props.toDate,
      onChange: props.onChange,
      orderBookAnalysisPage: props.orderBookAnalysisPage
    }) : '', props.timeFrame === TimeFrame.WEEKILY ? /*#__PURE__*/(0,jsx_runtime.jsx)(WeekPicker, {
      orderBookAnalysisPage: props.orderBookAnalysisPage,
      onDateChange: function onDateChange(dates) {
        return props.onChange(dates);
      }
    }) : '', props.timeFrame === TimeFrame.MONTHLY ? /*#__PURE__*/(0,jsx_runtime.jsx)(month_picker_MonthPicker, {
      orderBookAnalysisPage: props.orderBookAnalysisPage,
      fromDate: props.fromDate,
      onDateChange: function onDateChange(dates) {
        return props.onChange(dates);
      }
    }) : '', props.timeFrame === TimeFrame.QUARTERLY ? /*#__PURE__*/(0,jsx_runtime.jsx)(QuaterPicker, {
      onChange: function onChange(dates) {
        return props.onChange(dates);
      }
    }) : '', props.timeFrame === TimeFrame.HALF_YEARLY ? /*#__PURE__*/(0,jsx_runtime.jsx)(HalfYearPicker, {
      onChange: function onChange(dates) {
        return props.onChange(dates);
      }
    }) : '', props.timeFrame === TimeFrame.YEARLY ? /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
      value: props.fromDate,
      format: "YYYY",
      picker: "year",
      onChange: onYearlyDateChange
    }) : '']
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/order-book-sub-header.scss
var order_book_sub_header = __webpack_require__(49507);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/order-book-sub-header.scss

      
      
      
      
      
      
      
      
      

var order_book_sub_header_options = {};

order_book_sub_header_options.styleTagTransform = (styleTagTransform_default());
order_book_sub_header_options.setAttributes = (setAttributesWithoutAttributes_default());

      order_book_sub_header_options.insert = insertBySelector_default().bind(null, "head");
    
order_book_sub_header_options.domAPI = (styleDomAPI_default());
order_book_sub_header_options.insertStyleElement = (insertStyleElement_default());

var order_book_sub_header_update = injectStylesIntoStyleTag_default()(order_book_sub_header/* default */.Z, order_book_sub_header_options);




       /* harmony default export */ var orderbook_subheader_order_book_sub_header = (order_book_sub_header/* default */.Z && order_book_sub_header/* default.locals */.Z.locals ? order_book_sub_header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-subheader/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













;
var OrderbookSubheader = function OrderbookSubheader(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      regions = _useState2[0],
      setRegions = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      timeFrame = _useState4[0],
      setTimeFrame = _useState4[1];

  var _useState5 = (0,react.useState)(true),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      orderBookAnalysisPage = _useState6[0],
      setOrderBookAnalysisPage = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      userStatus = _useState8[0],
      setUserStatus = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      plants = _useState10[0],
      setPlants = _useState10[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var orderBook = (0,es/* useSelector */.v9)(function (state) {
    return state.orderBook;
  });
  (0,react.useEffect)(function () {
    dispatch(fetchOrderBookRegions());
  }, []);
  (0,react.useEffect)(function () {
    var prevState = [];

    if (plants.length) {
      plants.map(function (d) {
        if (props.activeTab === OrderBookTabs.ORDERBOOK) {
          if (d.name.includes('1005') || d.name.includes('1006') || d.name.includes('1011')) {
            prevState.push(d.code);
          }
        } else if (props.activeTab === OrderBookTabs.ZAYVKAS) {
          if (d.name.includes('1006') || d.name.includes('1011')) {
            prevState.push(d.code);
          }
        }
      });
      props.setFilter(_objectSpread(_objectSpread({}, props.filter), {}, {
        plants: prevState
      }));
    }
  }, [plants, props.activeTab]);
  (0,react.useEffect)(function () {
    setPlants([]);

    if (props.activeTab === OrderBookTabs.ORDERBOOK) {
      setTimeFrame(undefined);
      dispatch(fetchOrderBookFilterPlants());
    } else if (props.activeTab === OrderBookTabs.ZAYVKAS) {
      setTimeFrame(TimeFrame.YEARLY);
      dispatch(fetchOrderBookFilterUserStatus());
      dispatch(fetchZayvkasFilterPlants());
    }
  }, [props.activeTab]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchOrderbookRegionsComplete === ResponseType.FULFILLED) {
      setRegions(orderBook.regions);
      dispatch(clearFetchOrderbookRegions());
    }

    if (orderBook.fetchOrderbookRegionsComplete === ResponseType.REJECTED) {
      dispatch(clearFetchOrderbookRegions());
    }
  }, [orderBook.fetchOrderbookRegionsComplete]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchOrderBookFilterUserStatusComplete === ResponseType.FULFILLED) {
      setUserStatus(orderBook.FilterUserStatus);
      dispatch(clearFetchOrderBookFilterUserStatus());
    }

    if (orderBook.fetchOrderBookFilterUserStatusComplete === ResponseType.REJECTED) {
      dispatch(clearFetchOrderBookFilterUserStatus());
    }
  }, [orderBook.fetchOrderBookFilterUserStatusComplete]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchOrderBookFilterPlantsComplete === ResponseType.FULFILLED) {
      setPlants(orderBook.FilterPlants);
      dispatch(clearFetchOrderBookFilterPlants());
    }

    if (orderBook.fetchOrderBookFilterPlantsComplete === ResponseType.REJECTED) {
      dispatch(clearFetchOrderBookFilterPlants());
    }
  }, [orderBook.fetchOrderBookFilterPlantsComplete]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchZayvkasFilterPlantsComplete === ResponseType.FULFILLED) {
      setPlants(orderBook.zayvkasFilterPlants);
      dispatch(clearFetchZayvkasFilterPlants());
    }

    if (orderBook.fetchZayvkasFilterPlantsComplete === ResponseType.REJECTED) {
      dispatch(clearFetchZayvkasFilterPlants());
    }
  }, [orderBook.fetchZayvkasFilterPlantsComplete]);

  var onActiveRegionChange = function onActiveRegionChange(region) {
    props.onRegionChange(region === OrderBookSubHeader.SUMMARY ? null : region);
  };

  var timeFrameChanged = function timeFrameChanged(selectedValue) {
    setTimeFrame(selectedValue);
    props.onDateChange({
      fromDate: null,
      toDate: null
    });
  };

  var usersStatusChange = function usersStatusChange(e) {
    props.setFilter(_objectSpread(_objectSpread({}, props.filter), {}, {
      userStatus: e
    }));
  };

  var plantChange = function plantChange(e) {
    props.setFilter(_objectSpread(_objectSpread({}, props.filter), {}, {
      plants: e
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "d-flex justify-content-between ".concat(props.activeTab === OrderBookTabs.ORDERBOOK && (timeFrame === TimeFrame.WEEKILY || timeFrame === TimeFrame.MONTHLY || timeFrame === TimeFrame.DAILY) ? 'flex-wrap' : '', " "),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "filter_tabs_container",
      children: props.activeTab === OrderBookTabs.ORDERBOOK ? /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        className: "nav",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onActiveRegionChange(OrderBookSubHeader.SUMMARY);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link ".concat(!props.region ? 'active' : ''),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "OB Summary"
            })
          })
        }), regions && regions.map(function (region) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onActiveRegionChange(region.code);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link ".concat(props.region === region.code ? 'active' : ''),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "OB ".concat(toPascalCase(region.name))
              })
            })
          }, "region-".concat(region.code));
        })]
      }) : ''
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "time_frame_container d-flex order_book_filters ".concat(props.activeTab === OrderBookTabs.ORDERBOOK && (timeFrame === TimeFrame.WEEKILY || timeFrame === TimeFrame.MONTHLY || timeFrame === TimeFrame.DAILY) ? 'order_book_weekly_filter' : ''),
      children: [props.activeTab === OrderBookTabs.ZAYVKAS && /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
        className: "mr-2",
        mode: "multiple",
        allowClear: true,
        placeholder: "User status",
        value: props.filter.userStatus,
        onChange: usersStatusChange,
        children: userStatus.length ? userStatus.map(function (d, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
            value: d.code,
            children: d.name
          }, "userStatus".concat(index));
        }) : ''
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
        className: "mr-2",
        mode: "multiple",
        allowClear: true,
        placeholder: "Plants",
        value: props.filter.plants,
        onChange: plantChange,
        children: plants.length ? plants.map(function (d, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
            value: d.code,
            children: d.name
          }, "userStatus".concat(index));
        }) : ''
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(TimeFrameList, {
        value: timeFrame,
        activeTab: props.activeTab,
        onChange: timeFrameChanged
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(RangeDatePicker, {
        fromDate: props.fromDate,
        toDate: props.toDate,
        timeFrame: timeFrame,
        onChange: function onChange(dates) {
          return props.onDateChange({
            fromDate: dates.fromDate,
            toDate: dates.toDate
          });
        },
        orderBookAnalysisPage: orderBookAnalysisPage
      })]
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/init/product-response.ts
var ProductDataInit = function ProductDataInit() {
  return {
    amount1: 0,
    amount2: 0,
    amount3: 0,
    amount4: 0,
    product: '',
    total_amount: 0,
    total_volume: 0,
    volume1: 0,
    volume2: 0,
    volume3: 0,
    volume4: 0
  };
};
var ProductsResponseInit = function ProductsResponseInit() {
  return {
    rolled_products: [],
    semis_products: [],
    total_rolled: ProductDataInit(),
    total_semis: ProductDataInit(),
    total: ProductDataInit(),
    consignment_products: [],
    total_consignment: ProductDataInit(),
    total_pigiron: ProductDataInit()
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/orderbook-table.tsx



function orderbook_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function orderbook_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { orderbook_table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { orderbook_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












;
var OrderBookTable = function OrderBookTable(props) {
  var _useState = (0,react.useState)(orderbook_table_objectSpread({}, ProductsResponseInit())),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var orderBook = (0,es/* useSelector */.v9)(function (state) {
    return state.orderBook;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    setLoading(true);
    var query = '';
    props.filter.plants.map(function (d, i) {
      query += i == 0 ? "plants=".concat(d) : "&plants=".concat(d);
    });
    query += props.fromDate ? "&fromDate=".concat(dayjs_min_default()(props.fromDate).format('DD/MM/YYYY')) : "&fromDate=";
    query += props.toDate ? "&toDate=".concat(dayjs_min_default()(props.toDate).format('DD/MM/YYYY')) : "&toDate=";
    query += props.region ? "&region=".concat(props.region) : '';
    dispatch(fetchOrderBookProducts(query));
  }, [props.fromDate, props.toDate, props.region, props.filter]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchOrderbookProductsComplete === ResponseType.FULFILLED) {
      setList(orderBook.products);
      setLoading(false);
      dispatch(clearFetchOrderBookProducts());
    }

    if (orderBook.fetchOrderbookProductsComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchOrderBookProducts());
    }
  }, [orderBook.fetchOrderbookProductsComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table ",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "0-30 days"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "31-60 days"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "61-90 days"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "> 90 days"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Total"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "vertical-align-th no-border-th disabled_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Product"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !loading ? list && (list.rolled_products && list.rolled_products.length || list.semis_products && list.semis_products.length || list.consignment_products && list.consignment_products.length) ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [list.rolled_products.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data['product'] ? data['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume1'] ? Math.round(data['volume1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount1'] ? Math.round(data['amount1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume2'] ? Math.round(data['volume2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount2'] ? Math.round(data['amount2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume3'] ? Math.round(data['volume3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount3'] ? Math.round(data['amount3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume4'] ? Math.round(data['volume4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount4'] ? Math.round(data['amount4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                })]
              }, "roll-product-".concat(index));
            }), list.rolled_products && list.rolled_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_rolled['product'] ? list.total_rolled['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['volume1'] ? Math.round(list.total_rolled['volume1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['amount1'] ? Math.round(list.total_rolled['amount1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['volume2'] ? Math.round(list.total_rolled['volume2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['amount2'] ? Math.round(list.total_rolled['amount2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['volume3'] ? Math.round(list.total_rolled['volume3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['amount3'] ? Math.round(list.total_rolled['amount3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['volume4'] ? Math.round(list.total_rolled['volume4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['amount4'] ? Math.round(list.total_rolled['amount4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['total_volume'] ? Math.round(list.total_rolled['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['total_amount'] ? Math.round(list.total_rolled['total_amount']) : '-'
              })]
            }) : '', list.semis_products.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data['product'] ? data['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume1'] ? Math.round(data['volume1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount1'] ? Math.round(data['amount1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume2'] ? Math.round(data['volume2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount2'] ? Math.round(data['amount2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume3'] ? Math.round(data['volume3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount3'] ? Math.round(data['amount3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['volume4'] ? Math.round(data['volume4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['amount4'] ? Math.round(data['amount4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                })]
              }, "semis-prd-".concat(index));
            }), list.semis_products && list.semis_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_semis['product'] ? list.total_semis['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['volume1'] ? Math.round(list.total_semis['volume1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['amount1'] ? Math.round(list.total_semis['amount1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['volume2'] ? Math.round(list.total_semis['volume2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['amount2'] ? Math.round(list.total_semis['amount2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['volume3'] ? Math.round(list.total_semis['volume3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['amount3'] ? Math.round(list.total_semis['amount3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['volume4'] ? Math.round(list.total_semis['volume4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['amount4'] ? Math.round(list.total_semis['amount4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['total_volume'] ? Math.round(list.total_semis['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['total_amount'] ? Math.round(list.total_semis['total_amount']) : '-'
              })]
            }) : '', list.rolled_products && list.rolled_products.length || list.semis_products && list.semis_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "main_total_row gap_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total['product'] ? list.total['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['volume1'] ? Math.round(list.total['volume1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['amount1'] ? Math.round(list.total['amount1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['volume2'] ? Math.round(list.total['volume2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['amount2'] ? Math.round(list.total['amount2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['volume3'] ? Math.round(list.total['volume3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['amount3'] ? Math.round(list.total['amount3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['volume4'] ? Math.round(list.total['volume4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['amount4'] ? Math.round(list.total['amount4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['total_volume'] ? Math.round(list.total['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['total_amount'] ? Math.round(list.total['total_amount']) : '-'
              })]
            }) : '', list.consignment_products && list.consignment_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.consignment_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['volume1'] ? Math.round(data['volume1']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['amount1'] ? Math.round(data['amount1']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['volume2'] ? Math.round(data['volume2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['amount2'] ? Math.round(data['amount2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['volume3'] ? Math.round(data['volume3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['amount3'] ? Math.round(data['amount3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['volume4'] ? Math.round(data['volume4']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['amount4'] ? Math.round(data['amount4']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                  })]
                }, "semis-prd-".concat(index));
              }), list.consignment_products && list.consignment_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_consignment['product'] ? list.total_consignment['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['volume1'] ? Math.round(list.total_consignment['volume1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['amount1'] ? Math.round(list.total_consignment['amount1']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['volume2'] ? Math.round(list.total_consignment['volume2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['amount2'] ? Math.round(list.total_consignment['amount2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['volume3'] ? Math.round(list.total_consignment['volume3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['amount3'] ? Math.round(list.total_consignment['amount3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['volume4'] ? Math.round(list.total_consignment['volume4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['amount4'] ? Math.round(list.total_consignment['amount4']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['total_volume'] ? Math.round(list.total_consignment['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['total_amount'] ? Math.round(list.total_consignment['total_amount']) : '-'
                })]
              }) : '']
            }) : '', list.total_pigiron ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row gap_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_pigiron['product'] ? list.total_pigiron['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['volume1'] ? Math.round(list.total_pigiron['volume1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['amount1'] ? Math.round(list.total_pigiron['amount1']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['volume2'] ? Math.round(list.total_pigiron['volume2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['amount2'] ? Math.round(list.total_pigiron['amount2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['volume3'] ? Math.round(list.total_pigiron['volume3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['amount3'] ? Math.round(list.total_pigiron['amount3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['volume4'] ? Math.round(list.total_pigiron['volume4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['amount4'] ? Math.round(list.total_pigiron['amount4']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['total_volume'] ? Math.round(list.total_pigiron['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['total_amount'] ? Math.round(list.total_pigiron['total_amount']) : '-'
              })]
            }) : '']
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/overview/reports/orderbook-analysis/orderbook-analysis.scss
var orderbook_analysis = __webpack_require__(75789);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/orderbook-analysis.scss

      
      
      
      
      
      
      
      
      

var orderbook_analysis_options = {};

orderbook_analysis_options.styleTagTransform = (styleTagTransform_default());
orderbook_analysis_options.setAttributes = (setAttributesWithoutAttributes_default());

      orderbook_analysis_options.insert = insertBySelector_default().bind(null, "head");
    
orderbook_analysis_options.domAPI = (styleDomAPI_default());
orderbook_analysis_options.insertStyleElement = (insertStyleElement_default());

var orderbook_analysis_update = injectStylesIntoStyleTag_default()(orderbook_analysis/* default */.Z, orderbook_analysis_options);




       /* harmony default export */ var orderbook_analysis_orderbook_analysis = (orderbook_analysis/* default */.Z && orderbook_analysis/* default.locals */.Z.locals ? orderbook_analysis/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/init/zayvkas-response.ts
var ZayvkaProductDataInit = function ZayvkaProductDataInit() {
  return {
    product: '',
    total_amount: 0,
    total_volume: 0
  };
};
var ZayvkaProductsResponseInit = function ZayvkaProductsResponseInit() {
  return {
    rolled_products: [],
    semis_products: [],
    total_rolled: ZayvkaProductDataInit(),
    total_semis: ZayvkaProductDataInit(),
    total: ZayvkaProductDataInit(),
    consignment_products: [],
    total_consignment: ZayvkaProductDataInit(),
    total_pigiron: ZayvkaProductDataInit()
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/zayvkas-table.tsx



function zayvkas_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function zayvkas_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { zayvkas_table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { zayvkas_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












;
var ZayvkasTable = function ZayvkasTable(props) {
  var _useState = (0,react.useState)(zayvkas_table_objectSpread({}, ZayvkaProductsResponseInit())),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var orderBook = (0,es/* useSelector */.v9)(function (state) {
    return state.orderBook;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    if (props.fromDate && props.toDate) {
      setLoading(true);
      var query = "fromDate=".concat(dayjs_min_default()(props.fromDate).format('DD/MM/YYYY'));
      query += "&toDate=".concat(dayjs_min_default()(props.toDate).format('DD/MM/YYYY'));
      props.filter.plants.map(function (d, i) {
        query += "&plants=".concat(d);
      });
      props.filter.userStatus.map(function (d) {
        query += "&usersts=".concat(d);
      });
      dispatch(fetchZayvkasProducts(query));
    } else {
      setList(zayvkas_table_objectSpread({}, ZayvkaProductsResponseInit()));
    }
  }, [props.fromDate, props.toDate, props.filter]);
  (0,react.useEffect)(function () {
    if (orderBook.fetchZayvkasComplete === ResponseType.FULFILLED) {
      setList(orderBook.zayvkasProduct);
      setLoading(false);
      dispatch(clearFetchZayvkasProducts());
    }

    if (orderBook.fetchZayvkasComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchZayvkasProducts());
    }
  }, [orderBook.fetchZayvkasComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "w-25",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Product"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Vol"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "$/T"
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !loading ? list && (list.rolled_products && list.rolled_products.length || list.semis_products && list.semis_products.length) ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [list.rolled_products.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data['product'] ? data['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                })]
              }, "roll-product-".concat(index));
            }), list.rolled_products && list.rolled_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_rolled['product'] ? list.total_rolled['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['total_volume'] ? Math.round(list.total_rolled['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_rolled['total_amount'] ? Math.round(list.total_rolled['total_amount']) : '-'
              })]
            }) : '', list.semis_products.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data['product'] ? data['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center",
                  children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                })]
              }, "semis-prd-".concat(index));
            }), list.semis_products && list.semis_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_semis['product'] ? list.total_semis['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['total_volume'] ? Math.round(list.total_semis['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_semis['total_amount'] ? Math.round(list.total_semis['total_amount']) : '-'
              })]
            }) : '', list.rolled_products && list.rolled_products.length || list.semis_products && list.semis_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "main_total_row gap_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total['product'] ? list.total['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['total_volume'] ? Math.round(list.total['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total['total_amount'] ? Math.round(list.total['total_amount']) : '-'
              })]
            }) : '', list.consignment_products && list.consignment_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.consignment_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['total_volume'] ? Math.round(data['total_volume']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center",
                    children: data['total_amount'] ? Math.round(data['total_amount']) : '-'
                  })]
                }, "semis-prd-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_consignment['product'] ? list.total_consignment['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['total_volume'] ? Math.round(list.total_consignment['total_volume']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold",
                  children: list.total_consignment['total_amount'] ? Math.round(list.total_consignment['total_amount']) : '-'
                })]
              })]
            }) : '', list.total_pigiron ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row gap_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_pigiron['product'] ? list.total_pigiron['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['total_volume'] ? Math.round(list.total_pigiron['total_volume']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold",
                children: list.total_pigiron['total_amount'] ? Math.round(list.total_pigiron['total_amount']) : '-'
              })]
            }) : '']
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading text-center",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(84391);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/components/export.tsx











;
var Export = function Export(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var getExportLink = function getExportLink() {
    switch (props.activeTab) {
      case OrderBookTabs.ORDERBOOK:
        return '/reports/orderbook/products';

      case OrderBookTabs.ZAYVKAS:
        return '/reports/zayvkas/products';

      default:
        return '';
    }
  };

  var exportExcel = function exportExcel() {
    // if(props.fromDate && props.toDate) {
    var query = props.fromDate ? "fromDate=".concat(dayjs_min_default()(props.fromDate).format('DD/MM/YYYY')) : "fromDate=";
    query += props.toDate ? "&toDate=".concat(dayjs_min_default()(props.toDate).format('DD/MM/YYYY')) : "&toDate=";
    query += OrderBookTabs.ORDERBOOK == props.activeTab && props.region ? "&region=".concat(props.region) : ''; // if(OrderBookTabs.ORDERBOOK) {

    props.filter.plants.map(function (d, i) {
      query += "&plants=".concat(d);
    }); // }

    if (OrderBookTabs.ZAYVKAS == props.activeTab) {
      props.filter.userStatus.map(function (d, i) {
        query += "&usersts=".concat(d);
      });
    }

    var userDetailString = localStorage.getItem(StoredKeys.USER_DETAILS);
    var userDetails = initLogginUser();

    if (userDetailString) {
      userDetails = JSON.parse(window.atob(userDetailString));
      setLoading(true);
      fetch("".concat(config.apiRootSecure).concat(getExportLink()).concat(query ? "?".concat(query) : ''), {
        headers: {
          Authorization: "Bearer ".concat(userDetails['jwt_token'])
        }
      }).then(function (res) {
        return res.blob();
      }).then(function (res) {
        var blob = new Blob([res], {
          type: 'application/vnd.ms-excel'
        });
        var url = URL.createObjectURL(blob);
        var element = document.createElement('a');
        element.href = url;
        element.download = "".concat(toPascalCase(props.activeTab), "_").concat(new Date().getTime(), ".xls");
        element.target = '_blank';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        setLoading(false);
      }).catch(function (err) {
        setLoading(false);
        console.log(err);
      });
    } // } else {
    //     showInfo(i18Get('Select a date', getLanguage()));
    // }

  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: props.activeTab !== OrderBookTabs.SPARVKA ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "primary_btn height_26_btn",
      onClick: exportExcel,
      children: loading ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Exporting"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Export"
        })]
      })
    }) : ''
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/index.tsx



function orderbook_analysis_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function orderbook_analysis_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { orderbook_analysis_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { orderbook_analysis_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













;
var OrderBookAnalysis = function OrderBookAnalysis() {
  var _useState = (0,react.useState)(OrderBookTabs.ORDERBOOK),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react.useState)({
    fromDate: null,
    toDate: null
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      region = _useState6[0],
      setRegion = _useState6[1];

  var _useState7 = (0,react.useState)(initFilterData),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      filter = _useState8[0],
      setFilter = _useState8[1];

  (0,react.useEffect)(function () {
    if (activeTab == OrderBookTabs.ZAYVKAS) {
      setDate({
        fromDate: dayjs_min_default()().set('month', 0).set('date', 1),
        toDate: dayjs_min_default()().set('month', 11).set('date', 31)
      });
    } else {
      setDate({
        fromDate: null,
        toDate: null
      });
    }
  }, [activeTab]);

  var onDateChange = function onDateChange(dates) {
    var prevState = orderbook_analysis_objectSpread({}, date);

    prevState.fromDate = dates.fromDate;
    prevState.toDate = dates.toDate;
    setDate(prevState);
  };

  var onRegionChange = function onRegionChange(region) {
    setRegion(region);
  };

  var onTabChange = function onTabChange(tab) {
    setActiveTab(tab);
    setRegion(null);
    setFilter(orderbook_analysis_objectSpread(orderbook_analysis_objectSpread({}, filter), {}, {
      plants: []
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my_overview_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "overview_tab_space_container d-flex justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "nav nav-tabs",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(OrderBookTabs.ORDERBOOK);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === OrderBookTabs.ORDERBOOK ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Orderbook"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(OrderBookTabs.ZAYVKAS);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === OrderBookTabs.ZAYVKAS ? 'active' : ''),
              "aria-disabled": "true",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Zayvkas"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "export_orderbook",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Export, {
          fromDate: date.fromDate,
          toDate: date.toDate,
          activeTab: activeTab,
          region: region,
          filter: filter
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "overview_tab_space_container order_book_subheader",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(OrderbookSubheader, {
        fromDate: date.fromDate,
        toDate: date.toDate,
        activeTab: activeTab,
        region: region,
        onDateChange: onDateChange,
        onRegionChange: onRegionChange,
        setFilter: setFilter,
        filter: filter
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "order_book_content_container pt-0",
      children: [activeTab === OrderBookTabs.ORDERBOOK ? /*#__PURE__*/(0,jsx_runtime.jsx)(OrderBookTable, {
        fromDate: date.fromDate,
        toDate: date.toDate,
        region: region,
        filter: filter
      }) : '', activeTab === OrderBookTabs.ZAYVKAS ? /*#__PURE__*/(0,jsx_runtime.jsx)(ZayvkasTable, {
        fromDate: date.fromDate,
        toDate: date.toDate,
        filter: filter
      }) : '']
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/redux/events.ts
var events_DataEntryEvents;

(function (DataEntryEvents) {
  DataEntryEvents["CREATE_VARIABLE_COST"] = "CREATE_VARIABLE_COST";
  DataEntryEvents["CREATE_VARIABLE_COST_FULFILLED"] = "CREATE_VARIABLE_COST_FULFILLED";
  DataEntryEvents["CREATE_VARIABLE_COST_REJECTED"] = "CREATE_VARIABLE_COST_REJECTED";
  DataEntryEvents["CLEAR_CREATE_VARIABLE_COST"] = "CLEAR_CREATE_VARIABLE_COST";
  DataEntryEvents["FETCH_PRODUCTS"] = "FETCH_PRODUCTS";
  DataEntryEvents["FETCH_PRODUCTS_FULFILLED"] = "FETCH_PRODUCTS_FULFILLED";
  DataEntryEvents["FETCH_PRODUCTS_REJECTED"] = "FETCH_PRODUCTS_REJECTED";
  DataEntryEvents["CLEAR_FETCH_PRODUCTS"] = "CLEAR_FETCH_PRODUCTS";
  DataEntryEvents["CREATE_PRODUCT"] = "CREATE_PRODUCT";
  DataEntryEvents["CREATE_PRODUCT_FULFILLED"] = "CREATE_PRODUCT_FULFILLED";
  DataEntryEvents["CREATE_PRODUCT_REJECTED"] = "CREATE_PRODUCT_REJECTED";
  DataEntryEvents["CLEAR_CREATE_PRODUCT"] = "CLEAR_CREATE_PRODUCT";
  DataEntryEvents["FETCH_ONE_PRODUCT"] = "FETCH_ONE_PRODUCT";
  DataEntryEvents["FETCH_ONE_PRODUCT_FULFILLED"] = "FETCH_ONE_PRODUCT_FULFILLED";
  DataEntryEvents["FETCH_ONE_PRODUCT_REJECTED"] = "FETCH_ONE_PRODUCT_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_PRODUCT"] = "CLEAR_FETCH_ONE_PRODUCT";
  DataEntryEvents["EDIT_PRODUCT"] = "EDIT_PRODUCT";
  DataEntryEvents["EDIT_PRODUCT_FULFILLED"] = "EDIT_PRODUCT_FULFILLED";
  DataEntryEvents["EDIT_PRODUCT_REJECTED"] = "EDIT_PRODUCT_REJECTED";
  DataEntryEvents["CLEAR_EDIT_PRODUCT"] = "CLEAR_EDIT_PRODUCT";
  DataEntryEvents["DELETE_PRODUCT"] = "DELETE_PRODUCT";
  DataEntryEvents["DELETE_PRODUCT_FULFILLED"] = "DELETE_PRODUCT_FULFILLED";
  DataEntryEvents["DELETE_PRODUCT_REJECTED"] = "DELETE_PRODUCT_REJECTED";
  DataEntryEvents["CLEAR_DELETE_PRODUCT"] = "CLEAR_DELETE_PRODUCT";
  DataEntryEvents["FETCH_VARIABLE_COST"] = "FETCH_VARIABLE_COST";
  DataEntryEvents["FETCH_VARIABLE_COST_FULFILLED"] = "FETCH_VARIABLE_COST_FULFILLED";
  DataEntryEvents["FETCH_VARIABLE_COST_REJECTED"] = "FETCH_VARIABLE_COST_REJECTED";
  DataEntryEvents["CLEAR_FETCH_VARIABLE_COST"] = "CLEAR_FETCH_VARIABLE_COST";
  DataEntryEvents["FETCH_ONE_VARIABLE_COST"] = "FETCH_ONE_VARIABLE_COST";
  DataEntryEvents["FETCH_ONE_VARIABLE_COST_FULFILLED"] = "FETCH_ONE_VARIABLE_COST_FULFILLED";
  DataEntryEvents["FETCH_ONE_VARIABLE_COST_REJECTED"] = "FETCH_ONE_VARIABLE_COST_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_VARIABLE_COST"] = "CLEAR_FETCH_ONE_VARIABLE_COST";
  DataEntryEvents["EDIT_VARIABLE_COST"] = "EDIT_VARIABLE_COST";
  DataEntryEvents["EDIT_VARIABLE_COST_FULFILLED"] = "EDIT_VARIABLE_COST_FULFILLED";
  DataEntryEvents["EDIT_VARIABLE_COST_REJECTED"] = "EDIT_VARIABLE_COST_REJECTED";
  DataEntryEvents["CLEAR_EDIT_VARIABLE_COST"] = "CLEAR_EDIT_VARIABLE_COST";
  DataEntryEvents["DELETE_VARIABLE_COST"] = "DELETE_VARIABLE_COST";
  DataEntryEvents["DELETE_VARIABLE_COST_FULFILLED"] = "DELETE_VARIABLE_COST_FULFILLED";
  DataEntryEvents["DELETE_VARIABLE_COST_REJECTED"] = "DELETE_VARIABLE_COST_REJECTED";
  DataEntryEvents["CLEAR_DELETE_VARIABLE_COST"] = "CLEAR_DELETE_VARIABLE_COST";
  DataEntryEvents["FETCH_PRODUCTS_INV"] = "FETCH_PRODUCTS_INV";
  DataEntryEvents["FETCH_PRODUCTS_INV_FULFILLED"] = "FETCH_PRODUCTS_INV_FULFILLED";
  DataEntryEvents["FETCH_PRODUCTS_INV_REJECTED"] = "FETCH_PRODUCTS_INV_REJECTED";
  DataEntryEvents["CLEAR_FETCH_PRODUCTS_INV"] = "CLEAR_FETCH_PRODUCTS_INV";
  DataEntryEvents["DELETE_PRODUCT_INV"] = "DELETE_PRODUCT_INV";
  DataEntryEvents["DELETE_PRODUCT_INV_FULFILLED"] = "DELETE_PRODUCT_INV_FULFILLED";
  DataEntryEvents["DELETE_PRODUCT_INV_REJECTED"] = "DELETE_PRODUCT_INV_REJECTED";
  DataEntryEvents["CLEAR_DELETE_PRODUCT_INV"] = "CLEAR_DELETE_PRODUCT_INV";
  DataEntryEvents["FETCH_ONE_PRODUCT_INV"] = "FETCH_ONE_PRODUCT_INV";
  DataEntryEvents["FETCH_ONE_PRODUCT_INV_FULFILLED"] = "FETCH_ONE_PRODUCT_INV_FULFILLED";
  DataEntryEvents["FETCH_ONE_PRODUCT_INV_REJECTED"] = "FETCH_ONE_PRODUCT_INV_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_PRODUCT_INV"] = "CLEAR_FETCH_ONE_PRODUCT_INV";
  DataEntryEvents["EDIT_PRODUCT_INV"] = "EDIT_PRODUCT_INV";
  DataEntryEvents["EDIT_PRODUCT_INV_FULFILLED"] = "EDIT_PRODUCT_INV_FULFILLED";
  DataEntryEvents["EDIT_PRODUCT_INV_REJECTED"] = "EDIT_PRODUCT_INV_REJECTED";
  DataEntryEvents["CLEAR_EDIT_PRODUCT_INV"] = "CLEAR_EDIT_PRODUCT_INV";
  DataEntryEvents["CREATE_PRODUCT_INV"] = "CREATE_PRODUCT_INV";
  DataEntryEvents["CREATE_PRODUCT_INV_FULFILLED"] = "CREATE_PRODUCT_INV_FULFILLED";
  DataEntryEvents["CREATE_PRODUCT_INV_REJECTED"] = "CREATE_PRODUCT_INV_REJECTED";
  DataEntryEvents["CLEAR_CREATE_PRODUCT_INV"] = "CLEAR_CREATE_PRODUCT_INV";
  DataEntryEvents["FETCH_COUNTRY_DATA_ENTRY"] = "FETCH_COUNTRY_DATA_ENTRY";
  DataEntryEvents["FETCH_COUNTRY_DATA_ENTRY_FULFILLED"] = "FETCH_COUNTRY_DATA_ENTRY_FULFILLED";
  DataEntryEvents["FETCH_COUNTRY_DATA_ENTRY_REJECTED"] = "FETCH_COUNTRY_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_COUNTRY_DATA_ENTRY"] = "CLEAR_FETCH_COUNTRY_DATA_ENTRY";
  DataEntryEvents["FETCH_ONE_COUNTRY_DATA_ENTRY"] = "FETCH_ONE_COUNTRY_DATA_ENTRY";
  DataEntryEvents["FETCH_ONE_COUNTRY_DATA_ENTRY_FULFILLED"] = "FETCH_ONE_COUNTRY_DATA_ENTRY_FULFILLED";
  DataEntryEvents["FETCH_ONE_COUNTRY_DATA_ENTRY_REJECTED"] = "FETCH_ONE_COUNTRY_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_COUNTRY_DATA_ENTRY"] = "CLEAR_FETCH_ONE_COUNTRY_DATA_ENTRY";
  DataEntryEvents["CREATE_COUNTRY"] = "CREATE_COUNTRY";
  DataEntryEvents["CREATE_COUNTRY_FULFILLED"] = "CREATE_COUNTRY_FULFILLED";
  DataEntryEvents["CREATE_COUNTRY_REJECTED"] = "CREATE_COUNTRY_REJECTED";
  DataEntryEvents["CLEAR_CREATE_COUNTRY"] = "CLEAR_CREATE_COUNTRY";
  DataEntryEvents["EDIT_COUNTRY"] = "EDIT_COUNTRY";
  DataEntryEvents["EDIT_COUNTRY_FULFILLED"] = "EDIT_COUNTRY_FULFILLED";
  DataEntryEvents["EDIT_COUNTRY_REJECTED"] = "EDIT_COUNTRY_REJECTED";
  DataEntryEvents["CLEAR_EDIT_COUNTRY"] = "CLEAR_EDIT_CREATE_COUNTRY";
  DataEntryEvents["DELETE_COUNTRY"] = "DELETE_COUNTRY";
  DataEntryEvents["DELETE_COUNTRY_FULFILLED"] = "DELETE_COUNTRY_FULFILLED";
  DataEntryEvents["DELETE_COUNTRY_REJECTED"] = "DELETE_COUNTRY_REJECTED";
  DataEntryEvents["CLEAR_DELETE_COUNTRY"] = "CLEAR_DELETE_COUNTRY";
  DataEntryEvents["FETCH_REGION_DATA_ENTRY"] = "FETCH_REGION_DATA_ENTRY";
  DataEntryEvents["FETCH_REGION_DATA_ENTRY_FULFILLED"] = "FETCH_REGION_DATA_ENTRY_FULFILLED";
  DataEntryEvents["FETCH_REGION_DATA_ENTRY_REJECTED"] = "FETCH_REGION_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_REGION_DATA_ENTRY"] = "CLEAR_FETCH_REGION_DATA_ENTRY";
  DataEntryEvents["FETCH_ONE_REGION_DATA_ENTRY"] = "FETCH_ONE_REGION_DATA_ENTRY";
  DataEntryEvents["FETCH_ONE_REGION_DATA_ENTRY_FULFILLED"] = "FETCH_ONE_REGION_DATA_ENTRY_FULFILLED";
  DataEntryEvents["FETCH_ONE_REGION_DATA_ENTRY_REJECTED"] = "FETCH_ONE_REGION_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_REGION_DATA_ENTRY"] = "CLEAR_FETCH_ONE_REGION_DATA_ENTRY";
  DataEntryEvents["EDIT_REGION_DATA_ENTRY"] = "EDIT_REGION_DATA_ENTRY";
  DataEntryEvents["EDIT_REGION_DATA_ENTRY_FULFILLED"] = "EDIT_REGION_DATA_ENTRY_FULFILLED";
  DataEntryEvents["EDIT_REGION_DATA_ENTRY_REJECTED"] = "EDIT_REGION_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_EDIT_REGION_DATA_ENTRY"] = "CLEAR_EDIT_FETCH_REGION_DATA_ENTRY";
  DataEntryEvents["CREATE_REGION_DATA_ENTRY"] = "CREATE_REGION_DATA_ENTRY";
  DataEntryEvents["CREATE_REGION_DATA_ENTRY_FULFILLED"] = "CREATE_REGION_DATA_ENTRY_FULFILLED";
  DataEntryEvents["CREATE_REGION_DATA_ENTRY_REJECTED"] = "CREATE_REGION_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_CREATE_REGION_DATA_ENTRY"] = "CLEAR_CREATE_REGION_DATA_ENTRY";
  DataEntryEvents["DELETE_REGION_DATA_ENTRY"] = "DELETE_REGION_DATA_ENTRY";
  DataEntryEvents["DELETE_REGION_DATA_ENTRY_FULFILLED"] = "DELETE_REGION_DATA_ENTRY_FULFILLED";
  DataEntryEvents["DELETE_REGION_DATA_ENTRY_REJECTED"] = "DELETE_REGION_DATA_ENTRY_REJECTED";
  DataEntryEvents["CLEAR_DELETE_REGION_DATA_ENTRY"] = "CLEAR_DELETE_REGION_DATA_ENTRY";
  DataEntryEvents["FETCH_PRODUCTS_GROUP"] = "FETCH_PRODUCTS_GROUP";
  DataEntryEvents["FETCH_PRODUCTS_GROUP_FULFILLED"] = "FETCH_PRODUCTS_GROUP_FULFILLED";
  DataEntryEvents["FETCH_PRODUCTS_GROUP_REJECTED"] = "FETCH_PRODUCTS_GROUP_REJECTED";
  DataEntryEvents["CLEAR_FETCH_PRODUCTS_GROUP"] = "CLEAR_FETCH_PRODUCTS_GROUP";
  DataEntryEvents["CREATE_PRODUCT_GROUP"] = "CREATE_PRODUCT_GROUP";
  DataEntryEvents["CREATE_PRODUCT_GROUP_FULFILLED"] = "CREATE_PRODUCT_GROUP_FULFILLED";
  DataEntryEvents["CREATE_PRODUCT_GROUP_REJECTED"] = "CREATE_PRODUCT_GROUP_REJECTED";
  DataEntryEvents["CLEAR_CREATE_PRODUCT_GROUP"] = "CLEAR_CREATE_PRODUCT_GROUP";
  DataEntryEvents["FETCH_ONE_PRODUCT_GROUP"] = "FETCH_ONE_PRODUCT_GROUP";
  DataEntryEvents["FETCH_ONE_PRODUCT_GROUP_FULFILLED"] = "FETCH_ONE_PRODUCT_GROUP_FULFILLED";
  DataEntryEvents["FETCH_ONE_PRODUCT_GROUP_REJECTED"] = "FETCH_ONE_PRODUCT_GROUP_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_PRODUCT_GROUP"] = "CLEAR_FETCH_ONE_PRODUCT_GROUP";
  DataEntryEvents["EDIT_PRODUCT_GROUP"] = "EDIT_PRODUCT_GROUP";
  DataEntryEvents["EDIT_PRODUCT_GROUP_FULFILLED"] = "EDIT_PRODUCT_GROUP_FULFILLED";
  DataEntryEvents["EDIT_PRODUCT_GROUP_REJECTED"] = "EDIT_PRODUCT_GROUP_REJECTED";
  DataEntryEvents["CLEAR_EDIT_PRODUCT_GROUP"] = "CLEAR_EDIT_PRODUCT_GROUP";
  DataEntryEvents["DELETE_PRODUCT_GROUP"] = "DELETE_PRODUCT_GROUP";
  DataEntryEvents["DELETE_PRODUCT_GROUP_FULFILLED"] = "DELETE_PRODUCT_GROUP_FULFILLED";
  DataEntryEvents["DELETE_PRODUCT_GROUP_REJECTED"] = "DELETE_PRODUCT_GROUP_REJECTED";
  DataEntryEvents["CLEAR_DELETE_PRODUCT_GROUP"] = "CLEAR_DELETE_PRODUCT_GROUP";
  DataEntryEvents["FETCH_COUNTRY_SUPPLY"] = "FETCH_COUNTRY_SUPPLY";
  DataEntryEvents["FETCH_COUNTRY_SUPPLY_FULFILLED"] = "FETCH_COUNTRY_SUPPLY_FULFILLED";
  DataEntryEvents["FETCH_COUNTRY_SUPPLY_REJECTED"] = "FETCH_COUNTRY_SUPPLY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_COUNTRY_SUPPLY"] = "CLEAR_FETCH_COUNTRY_SUPPLY";
  DataEntryEvents["FETCH_ONE_COUNTRY_SUPPLY"] = "FETCH_ONE_COUNTRY_SUPPLY";
  DataEntryEvents["FETCH_ONE_COUNTRY_SUPPLY_FULFILLED"] = "FETCH_ONE_COUNTRY_SUPPLY_FULFILLED";
  DataEntryEvents["FETCH_ONE_COUNTRY_SUPPLY_REJECTED"] = "FETCH_ONE_COUNTRY_SUPPLY_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_COUNTRY_SUPPLY"] = "CLEAR_FETCH_ONE_COUNTRY_SUPPLY";
  DataEntryEvents["CREATE_COUNTRY_SUPPLY"] = "CREATE_COUNTRY_SUPPLY";
  DataEntryEvents["CREATE_COUNTRY_SUPPLY_FULFILLED"] = "CREATE_COUNTRY_SUPPLY_FULFILLED";
  DataEntryEvents["CREATE_COUNTRY_SUPPLY_REJECTED"] = "CREATE_COUNTRY_SUPPLY_REJECTED";
  DataEntryEvents["CLEAR_CREATE_COUNTRY_SUPPLY"] = "CLEAR_CREATE_COUNTRY_SUPPLY";
  DataEntryEvents["EDIT_COUNTRY_SUPPLY"] = "EDIT_COUNTRY_SUPPLY";
  DataEntryEvents["EDIT_COUNTRY_SUPPLY_FULFILLED"] = "EDIT_COUNTRY_SUPPLY_FULFILLED";
  DataEntryEvents["EDIT_COUNTRY_SUPPLY_REJECTED"] = "EDIT_COUNTRY_SUPPLY_REJECTED";
  DataEntryEvents["CLEAR_EDIT_COUNTRY_SUPPLY"] = "CLEAR_EDIT_COUNTRY_SUPPLY";
  DataEntryEvents["DELETE_COUNTRY_SUPPLY"] = "DELETE_COUNTRY_SUPPLY";
  DataEntryEvents["DELETE_COUNTRY_SUPPLY_FULFILLED"] = "DELETE_COUNTRY_SUPPLY_FULFILLED";
  DataEntryEvents["DELETE_COUNTRY_SUPPLY_REJECTED"] = "DELETE_COUNTRY_SUPPLY_REJECTED";
  DataEntryEvents["CLEAR_DELETE_COUNTRY_SUPPLY"] = "CLEAR_DELETE_COUNTRY_SUPPLY";
  DataEntryEvents["FETCH_INVENSTION_WIP"] = "FETCH_INVENSTION_WIP";
  DataEntryEvents["FETCH_INVENSTION_WIP_FULFILLED"] = "FETCH_INVENSTION_WIP_FULFILLED";
  DataEntryEvents["FETCH_INVENSTION_WIP_REJECTED"] = "FETCH_INVENSTION_WIP_REJECTED";
  DataEntryEvents["CLEAR_FETCH_INVENSTION_WIP"] = "CLEAR_FETCH_INVENSTION_WIP";
  DataEntryEvents["DELETE_INVENSTION_WIP"] = "DELETE_INVENSTION_WIP";
  DataEntryEvents["DELETE_INVENSTION_WIP_FULFILLED"] = "DELETE_INVENSTION_WIP_FULFILLED";
  DataEntryEvents["DELETE_INVENSTION_WIP_REJECTED"] = "DELETE_INVENSTION_WIP_REJECTED";
  DataEntryEvents["CLEAR_DELETE_INVENSTION_WIP"] = "CLEAR_DELETE_INVENSTION_WIP";
  DataEntryEvents["FETCH_ONE_INVENSTION_WIP"] = "FETCH_ONE_INVENSTION_WIP";
  DataEntryEvents["FETCH_ONE_INVENSTION_WIP_FULFILLED"] = "FETCH_ONE_INVENSTION_WIP_FULFILLED";
  DataEntryEvents["FETCH_ONE_INVENSTION_WIP_REJECTED"] = "FETCH_ONE_INVENSTION_WIP_REJECTED";
  DataEntryEvents["CLEAR_FETCH_ONE_INVENSTION_WIP"] = "CLEAR_FETCH_ONE_INVENSTION_WIP";
  DataEntryEvents["EDIT_INVENSTION_WIP"] = "EDIT_INVENSTION_WIP";
  DataEntryEvents["EDIT_INVENSTION_WIP_FULFILLED"] = "EDIT_INVENSTION_WIP_FULFILLED";
  DataEntryEvents["EDIT_INVENSTION_WIP_REJECTED"] = "EDIT_INVENSTION_WIP_REJECTED";
  DataEntryEvents["CLEAR_EDIT_INVENSTION_WIP"] = "CLEAR_EDIT_INVENSTION_WIP";
  DataEntryEvents["CREATE_INVENSTION_WIP"] = "CREATE_INVENSTION_WIP";
  DataEntryEvents["CREATE_INVENSTION_WIP_FULFILLED"] = "CREATE_INVENSTION_WIP_FULFILLED";
  DataEntryEvents["CREATE_INVENSTION_WIP_REJECTED"] = "CREATE_INVENSTION_WIP_REJECTED";
  DataEntryEvents["CLEAR_CREATE_INVENSTION_WIP"] = "CLEAR_CREATE_INVENSTION_WIP";
  DataEntryEvents["FETCH_INVENSTIONS_WIP"] = "FETCH_INVENSTIONS_WIP";
  DataEntryEvents["CLEAR_FETCH_INVENSTIONS_WIP"] = "CLEAR_FETCH_INVENSTIONS_WIP";
  DataEntryEvents["FETCH_INVENSTIONS_WIP_FULFILLED"] = "FETCH_INVENSTIONS_WIP_FULFILLED";
  DataEntryEvents["FETCH_INVENSTIONS_WIP_REJECTED"] = "FETCH_INVENSTIONS_WIP_REJECTED";
  DataEntryEvents["CLEAR_FETCH_INVENSTION"] = "CLEAR_FETCH_INVENSTION";
})(events_DataEntryEvents || (events_DataEntryEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/redux/action.ts



var createVariableCost = function createVariableCost(payload) {
  return {
    type: events_DataEntryEvents.CREATE_VARIABLE_COST,
    payload: axios_default().post("".concat(config.apiRootSecure, "/productCosts/create"), payload)
  };
};
var clearCreateVariableCost = function clearCreateVariableCost() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_VARIABLE_COST
  };
};
var fetchVariableCost = function fetchVariableCost(query) {
  return {
    type: events_DataEntryEvents.FETCH_VARIABLE_COST,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productCosts/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchVariableCost = function clearFetchVariableCost() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_VARIABLE_COST
  };
};
var fetchOneVariableCost = function fetchOneVariableCost(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_VARIABLE_COST,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productCosts/").concat(id))
  };
};
var clearFetchOneVariableCost = function clearFetchOneVariableCost() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_VARIABLE_COST
  };
};
var editVariableCost = function editVariableCost(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_VARIABLE_COST,
    payload: axios_default().put("".concat(config.apiRootSecure, "/productCosts/").concat(id), payload)
  };
};
var clearEditVariableCost = function clearEditVariableCost() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_VARIABLE_COST
  };
};
var deleteVariableCost = function deleteVariableCost(id) {
  return {
    type: events_DataEntryEvents.DELETE_VARIABLE_COST,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/productCosts/").concat(id))
  };
};
var clearDeleteVariableCost = function clearDeleteVariableCost() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_VARIABLE_COST
  };
};
var fetchProducts = function fetchProducts(apiUrl, query) {
  return {
    type: events_DataEntryEvents.FETCH_PRODUCTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/").concat(apiUrl).concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProducts = function clearFetchProducts() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_PRODUCTS
  };
};
var createProduct = function createProduct(payload) {
  return {
    type: events_DataEntryEvents.CREATE_PRODUCT,
    payload: axios_default().post("".concat(config.apiRootSecure, "/products/create"), payload)
  };
};
var clearCreateProduct = function clearCreateProduct() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_PRODUCT
  };
};
var fetchOneProduct = function fetchOneProduct(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_PRODUCT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/products/").concat(id))
  };
};
var clearFetchOneProduct = function clearFetchOneProduct() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT
  };
};
var editProduct = function editProduct(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_PRODUCT,
    payload: axios_default().put("".concat(config.apiRootSecure, "/products/").concat(id), payload)
  };
};
var clearEditProduct = function clearEditProduct() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_PRODUCT
  };
};
var deleteProduct = function deleteProduct(id) {
  return {
    type: events_DataEntryEvents.DELETE_PRODUCT,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/products/").concat(id))
  };
};
var clearDeleteProduct = function clearDeleteProduct() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_PRODUCT
  };
};
var fetchProductsInv = function fetchProductsInv(query) {
  return {
    type: events_DataEntryEvents.FETCH_PRODUCTS_INV,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productinv/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProductsInv = function clearFetchProductsInv() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_PRODUCTS_INV
  };
};
var deleteProductInv = function deleteProductInv(id) {
  return {
    type: events_DataEntryEvents.DELETE_PRODUCT_INV,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/productinv/").concat(id))
  };
};
var clearDeleteProductInv = function clearDeleteProductInv() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_PRODUCT_INV
  };
};
var fetchOneProductInv = function fetchOneProductInv(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_PRODUCT_INV,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productinv/").concat(id))
  };
};
var clearFetchOneProductInv = function clearFetchOneProductInv() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT_INV
  };
};
var editProductInv = function editProductInv(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_PRODUCT_INV,
    payload: axios_default().put("".concat(config.apiRootSecure, "/productinv/").concat(id), payload)
  };
};
var clearEditProductInv = function clearEditProductInv() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_PRODUCT_INV
  };
};
var createProductInv = function createProductInv(payload) {
  return {
    type: events_DataEntryEvents.CREATE_PRODUCT_INV,
    payload: axios_default().post("".concat(config.apiRootSecure, "/productinv/create"), payload)
  };
};
var clearCreateProductInv = function clearCreateProductInv() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_PRODUCT_INV
  };
};
var fetchCountryDataEntry = function fetchCountryDataEntry(query) {
  return {
    type: events_DataEntryEvents.FETCH_COUNTRY_DATA_ENTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/country/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchCountryDataEntry = function clearFetchCountryDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_COUNTRY_DATA_ENTRY
  };
};
var fetchOneCountryDataEntry = function fetchOneCountryDataEntry(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_COUNTRY_DATA_ENTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/country/").concat(id))
  };
};
var clearOneFetchCountryDataEntry = function clearOneFetchCountryDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_COUNTRY_DATA_ENTRY
  };
};
var createCountry = function createCountry(payload) {
  return {
    type: events_DataEntryEvents.CREATE_COUNTRY,
    payload: axios_default().post("".concat(config.apiRootSecure, "/country/create"), payload)
  };
};
var clearCreateCountry = function clearCreateCountry() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_COUNTRY
  };
};
var editCountry = function editCountry(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_COUNTRY,
    payload: axios_default().put("".concat(config.apiRootSecure, "/country/").concat(id), payload)
  };
};
var clearEditCountry = function clearEditCountry() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_COUNTRY
  };
};
var deleteCountry = function deleteCountry(id) {
  return {
    type: events_DataEntryEvents.DELETE_COUNTRY,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/country/").concat(id))
  };
};
var clearDeleteCountry = function clearDeleteCountry() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_COUNTRY
  };
};
var fetchRegionDataEntry = function fetchRegionDataEntry(query) {
  return {
    type: events_DataEntryEvents.FETCH_REGION_DATA_ENTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/region/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchRegionDataEntry = function clearFetchRegionDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_REGION_DATA_ENTRY
  };
};
var editRegionDataEntry = function editRegionDataEntry(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_REGION_DATA_ENTRY,
    payload: axios_default().put("".concat(config.apiRootSecure, "/region/").concat(id), payload)
  };
};
var clearEditRegionDataEntry = function clearEditRegionDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_REGION_DATA_ENTRY
  };
};
var createRegionDataEntry = function createRegionDataEntry(payload) {
  return {
    type: events_DataEntryEvents.CREATE_REGION_DATA_ENTRY,
    payload: axios_default().post("".concat(config.apiRootSecure, "/region/create"), payload)
  };
};
var clearCreateRegionDataEntry = function clearCreateRegionDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_REGION_DATA_ENTRY
  };
};
var deleteRegionDataEntry = function deleteRegionDataEntry(id) {
  return {
    type: events_DataEntryEvents.DELETE_REGION_DATA_ENTRY,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/region/").concat(id))
  };
};
var clearDeleteRegionDataEntry = function clearDeleteRegionDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_REGION_DATA_ENTRY
  };
};
var fetchOneRegionDataEntry = function fetchOneRegionDataEntry(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_REGION_DATA_ENTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/region/").concat(id))
  };
};
var clearFetchOneRegionDataEntry = function clearFetchOneRegionDataEntry() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_REGION_DATA_ENTRY
  };
}; // /////

var fetchProductsGroup = function fetchProductsGroup(query) {
  return {
    type: events_DataEntryEvents.FETCH_PRODUCTS_GROUP,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productsgroup/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProductsGroup = function clearFetchProductsGroup() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_PRODUCTS_GROUP
  };
};
var createProductGroup = function createProductGroup(payload) {
  return {
    type: events_DataEntryEvents.CREATE_PRODUCT_GROUP,
    payload: axios_default().post("".concat(config.apiRootSecure, "/productsgroup/create"), payload)
  };
};
var clearCreateProductGroup = function clearCreateProductGroup() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_PRODUCT_GROUP
  };
};
var fetchOneProductGroup = function fetchOneProductGroup(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_PRODUCT_GROUP,
    payload: axios_default().get("".concat(config.apiRootSecure, "/productsgroup/").concat(id))
  };
};
var clearFetchOneProductGroup = function clearFetchOneProductGroup() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT_GROUP
  };
};
var editProductGroup = function editProductGroup(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_PRODUCT_GROUP,
    payload: axios_default().put("".concat(config.apiRootSecure, "/productsgroup/").concat(id), payload)
  };
};
var clearEditProductGroup = function clearEditProductGroup() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_PRODUCT_GROUP
  };
};
var deleteProductGroup = function deleteProductGroup(id) {
  return {
    type: events_DataEntryEvents.DELETE_PRODUCT_GROUP,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/productsgroup/").concat(id))
  };
};
var clearDeleteProductGroup = function clearDeleteProductGroup() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_PRODUCT_GROUP
  };
};
var fetchCountrySupply = function fetchCountrySupply(query) {
  return {
    type: events_DataEntryEvents.FETCH_COUNTRY_SUPPLY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/country/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchCountrySupply = function clearFetchCountrySupply() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_COUNTRY_SUPPLY
  };
};
var fetchOneCountrySupply = function fetchOneCountrySupply(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_COUNTRY_SUPPLY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/country/").concat(id))
  };
};
var clearOneFetchCountrySupply = function clearOneFetchCountrySupply() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_COUNTRY_SUPPLY
  };
};
var createCountrySupply = function createCountrySupply(payload) {
  return {
    type: events_DataEntryEvents.CREATE_COUNTRY_SUPPLY,
    payload: axios_default().post("".concat(config.apiRootSecure, "/country/create"), payload)
  };
};
var clearCreateCountrySupply = function clearCreateCountrySupply() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_COUNTRY_SUPPLY
  };
};
var editCountrySupply = function editCountrySupply(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_COUNTRY_SUPPLY,
    payload: axios_default().put("".concat(config.apiRootSecure, "/country/").concat(id), payload)
  };
};
var clearEditCountrySupply = function clearEditCountrySupply() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_COUNTRY_SUPPLY
  };
};
var deleteCountrySupply = function deleteCountrySupply(id) {
  return {
    type: events_DataEntryEvents.DELETE_COUNTRY_SUPPLY,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/country/").concat(id))
  };
};
var clearDeleteCountrySupply = function clearDeleteCountrySupply() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_COUNTRY_SUPPLY
  };
}; // Wip For

var fetchInvenstionsWip = function fetchInvenstionsWip(query) {
  return {
    type: events_DataEntryEvents.FETCH_INVENSTIONS_WIP,
    payload: axios_default().get("".concat(config.apiRootSecure, "/wip/list").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchInvenstionsWip = function clearFetchInvenstionsWip() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_INVENSTIONS_WIP
  };
};
var deleteInvenstionWip = function deleteInvenstionWip(id) {
  return {
    type: events_DataEntryEvents.DELETE_INVENSTION_WIP,
    payload: axios_default()["delete"]("".concat(config.apiRootSecure, "/wip/").concat(id))
  };
};
var clearDeleteInvenstionWip = function clearDeleteInvenstionWip() {
  return {
    type: events_DataEntryEvents.CLEAR_DELETE_INVENSTION_WIP
  };
};
var fetchOneInvenstionWip = function fetchOneInvenstionWip(id) {
  return {
    type: events_DataEntryEvents.FETCH_ONE_INVENSTION_WIP,
    payload: axios_default().get("".concat(config.apiRootSecure, "/wip/").concat(id))
  };
};
var clearFetchOneInvenstionWip = function clearFetchOneInvenstionWip() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_ONE_INVENSTION_WIP
  };
};
var editInvenstionWip = function editInvenstionWip(payload, id) {
  return {
    type: events_DataEntryEvents.EDIT_INVENSTION_WIP,
    payload: axios_default().put("".concat(config.apiRootSecure, "/wip/").concat(id), payload)
  };
};
var clearEditInvenstionWip = function clearEditInvenstionWip() {
  return {
    type: events_DataEntryEvents.CLEAR_EDIT_INVENSTION_WIP
  };
};
var createInvenstionWip = function createInvenstionWip(payload) {
  return {
    type: events_DataEntryEvents.CREATE_INVENSTION_WIP,
    payload: axios_default().post("".concat(config.apiRootSecure, "/wip/create"), payload)
  };
};
var clearCreateInvenstionWip = function clearCreateInvenstionWip() {
  return {
    type: events_DataEntryEvents.CLEAR_CREATE_INVENSTION_WIP
  };
};
var fetchInvenstions = function fetchInvenstions(apiUrl, query) {
  return {
    type: DataEntryEvents.FETCH_PRODUCTS,
    payload: axios.get("".concat(Config.apiRootSecure, "/").concat(apiUrl).concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchInvenstions = function clearFetchInvenstions() {
  return {
    type: events_DataEntryEvents.CLEAR_FETCH_INVENSTION
  };
};
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js
var popconfirm = __webpack_require__(75443);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(8212);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(73171);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/variable-cost/index.tsx













;
var VariableCost = function VariableCost(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllData();
  }, [props.filter]);

  var fetchAllData = function fetchAllData() {
    props.setLoading(true);
    var query = "offset=0&numResults=100";
    query += props.filter.year ? "&year=".concat(dayjs_min_default()(props.filter.year).format('YYYY')) : '';
    query += props.filter.month ? "&month=".concat(props.filter.month) : '';
    query += props.filter.productId ? "&productId=".concat(props.filter.productId) : '';
    dispatch(fetchVariableCost(query));
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchVariableCostComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.variableCostList.data);
      props.setLoading(false);
      dispatch(clearFetchVariableCost());
    }

    if (DataEntryReducer.fetchVariableCostComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchVariableCost());
    }
  }, [DataEntryReducer.fetchVariableCostComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createVariableCostComplete === ResponseType.FULFILLED) {
      fetchAllData();
      props.setShowModel(false);
      dispatch(clearCreateVariableCost());
    }

    if (DataEntryReducer.createVariableCostComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateVariableCost());
    }
  }, [DataEntryReducer.createVariableCostComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editVariableCostComplete === ResponseType.FULFILLED) {
      fetchAllData();
      props.setShowModel(false);
      props.setIsEdit(undefined);
      dispatch(clearEditVariableCost());
    }

    if (DataEntryReducer.editVariableCostComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditVariableCost());
    }
  }, [DataEntryReducer.editVariableCostComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteVariableCostComplete === ResponseType.FULFILLED) {
      fetchAllData();
      dispatch(clearDeleteVariableCost());
    }

    if (DataEntryReducer.deleteVariableCostComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteVariableCost());
    }
  }, [DataEntryReducer.deleteVariableCostComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteVariableCost(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_content_container pt-0",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_table h-100",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "table-responsive common_table_container",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          className: "table",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "table_toggle_width"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "vertical-align-th",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Month"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "vertical-align-th",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Year"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "vertical-align-th",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Product Name"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "vertical-align-th",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Variable Cost"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: "vertical-align-th",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Fixed Cost"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                colSpan: 7,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
              })
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: list && list.length ? list.map(function (d) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                      onClick: function onClick() {
                        return onEditClick(d.id);
                      },
                      className: "edit_icon mr-2"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                      title: i18Get('Are you sure to delete this item?', getLanguage()),
                      onConfirm: function onConfirm() {
                        return deleteClicked(d.id);
                      },
                      okText: i18Get('Yes', getLanguage()),
                      cancelText: i18Get('No', getLanguage()),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "ml-2 cursor-pointer data_delete",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                          className: "delete_icon"
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: d.month
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: d.year
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: d.productName
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: d.variableCost
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: d.fixedCost
                  })]
                });
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 7,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "No Data"
                  })
                })
              })
            })
          })]
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product/index.tsx












;
var Product = function Product(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllProducts();
  }, [props.filter]);

  var fetchAllProducts = function fetchAllProducts() {
    var apiUrl = "products/list";
    var query = "offset=0&numResults=100";
    query += props.filter.type ? "&type=".concat(props.filter.type) : '';
    dispatch(fetchProducts(apiUrl, query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.products.data);
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }

    if (DataEntryReducer.fetchProductsComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }
  }, [DataEntryReducer.fetchProductsComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createProductComplete === ResponseType.FULFILLED) {
      fetchAllProducts();
      dispatch(clearCreateProduct());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createProductComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateProduct());
    }
  }, [DataEntryReducer.createProductComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editProductComplete === ResponseType.FULFILLED) {
      fetchAllProducts();
      dispatch(clearEditProduct());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editProductComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditProduct());
    }
  }, [DataEntryReducer.editProductComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteProductComplete === ResponseType.FULFILLED) {
      fetchAllProducts();
      dispatch(clearDeleteProduct());
    }

    if (DataEntryReducer.deleteProductComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteProduct());
    }
  }, [DataEntryReducer.deleteProductComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteProduct(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Type"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Rank"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.type
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.rank
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product-inv/index.tsx












;
var ProductInv = function ProductInv(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllProductsInv();
  }, [props.filter]);

  var fetchAllProductsInv = function fetchAllProductsInv() {
    var query = "offset=0&numResults=100";
    query += props.filter.productName ? "&product=".concat(props.filter.productName) : '';
    dispatch(fetchProductsInv(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsInvComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.productsInv.data);
      props.setLoading(false);
      dispatch(clearFetchProductsInv());
    }

    if (DataEntryReducer.fetchProductsInvComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProductsInv());
    }
  }, [DataEntryReducer.fetchProductsInvComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createProductInvComplete === ResponseType.FULFILLED) {
      fetchAllProductsInv();
      dispatch(clearCreateProductInv());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createProductInvComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateProductInv());
    }
  }, [DataEntryReducer.createProductInvComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editProductInvComplete === ResponseType.FULFILLED) {
      fetchAllProductsInv();
      dispatch(clearEditProductInv());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editProductInvComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditProductInv());
    }
  }, [DataEntryReducer.editProductInvComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteProductInvComplete === ResponseType.FULFILLED) {
      fetchAllProductsInv();
      dispatch(clearDeleteProductInv());
    }

    if (DataEntryReducer.deleteProductInvComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteProductInv());
    }
  }, [DataEntryReducer.deleteProductInvComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteProductInv(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Product"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Rank"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.product
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.rank
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/data-entry-filter/index.tsx



function data_entry_filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function data_entry_filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_entry_filter_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_entry_filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












;
var DataEntryFilter = function DataEntryFilter(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      region = _useState4[0],
      setRegion = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      invenstions = _useState6[0],
      setInvenstions = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  var timer;
  (0,react.useEffect)(function () {
    if (props.activeTab === DataEntryTab.VariableFixCost || props.activeTab === DataEntryTab.ProductInv || props.activeTab === DataEntryTab.ProductGroup) {
      setLoading(true);
      fetchProductsCall();
    } else if (props.activeTab === DataEntryTab.Country) {
      setLoading(true);
      fetchAllRegionDataEntry();
    }
  }, [props.activeTab]);

  var fetchProductsCall = function fetchProductsCall() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var apiUrl = '';
    var query = "offset=0&numResults=100";
    query += "&search=".concat(e);

    if (props.activeTab === DataEntryTab.VariableFixCost) {
      apiUrl = "productCosts/productlist";
    } else if (props.activeTab === DataEntryTab.ProductInv) {
      apiUrl = "productinv/productlist";
    } else if (props.activeTab === DataEntryTab.InvenstionWip) {
      apiUrl = "wip/productlist";
    } else {
      apiUrl = "products/list";
    }

    dispatch(fetchProducts(apiUrl, query));
  };

  var fetchAllRegionDataEntry = function fetchAllRegionDataEntry() {
    var query = "offset=0&numResults=100";
    dispatch(fetchRegionDataEntry(query));
    setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.FULFILLED) {
      setRegion(DataEntryReducer.region.data);
      setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }

    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }
  }, [DataEntryReducer.fetchRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsComplete === ResponseType.FULFILLED) {
      setProducts(DataEntryReducer.products.data);
      setLoading(false);
      dispatch(clearFetchProducts());
    }

    if (DataEntryReducer.fetchProductsComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchProducts());
    }
  }, [DataEntryReducer.fetchProductsComplete]); // WIP

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchInvenstionsComplete === ResponseType.FULFILLED) {
      setInvenstions(DataEntryReducer.invenstions.data);
      setLoading(false);
      dispatch(clearFetchInvenstions());
    }

    if (DataEntryReducer.fetchInvenstionsComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchInvenstions());
    }
  }, [DataEntryReducer.fetchInvenstionsComplete]);

  var yearChange = function yearChange(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      year: e
    });

    props.setFilter(tempData);
  };

  var productChange = function productChange(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      product: e,
      productName: ''
    });

    if (products) {
      for (var i = 0; i < products.length; i++) {
        if (e == products[i].id) {
          tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, tempData), {}, {
            productId: products[i].id,
            productName: products[i].name
          });
          break;
        }
      }
    }

    props.setFilter(tempData);
  };

  var regionChange = function regionChange(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      region: e
    });

    props.setFilter(tempData);
  };

  var invenstionWipChange = function invenstionWipChange(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      product: e
    });

    if (invenstions) {
      for (var i = 0; i < invenstions.length; i++) {
        if (e == invenstions[i].id) {
          tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, tempData), {}, {
            product: invenstions[i].id
          });
          break;
        }
      }
    }

    props.setFilter(tempData);
  };

  var monthChange = function monthChange(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      month: e
    });

    props.setFilter(tempData);
  };

  var typeChanged = function typeChanged(e) {
    var tempData = data_entry_filter_objectSpread(data_entry_filter_objectSpread({}, props.filter), {}, {
      type: e
    });

    props.setFilter(tempData);
  };

  var onSearch = function onSearch(e) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fetchProductsCall(e);
    }, 600);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [props.activeTab === DataEntryTab.VariableFixCost ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
        value: props.filter.year,
        className: "mr-2",
        picker: "year",
        onChange: yearChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
        allowClear: true,
        className: "mr-2",
        placeholder: i18Get('Month', getLanguage()),
        value: props.filter.month,
        onChange: monthChange,
        children: MonthPicker && MonthPicker.length && MonthPicker.map(function (el, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
            value: el.key,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: toPascalCase(el.name)
            })
          }, "data-entry-filter-month-".concat(index));
        })
      })]
    }) : '', props.activeTab === DataEntryTab.Product ? /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
      allowClear: true,
      placeholder: i18Get('Type', getLanguage()),
      value: props.filter.type,
      loading: loading,
      onChange: typeChanged,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: 'ROLLED',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: 'ROLLED'
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: 'SEMIS',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: 'SEMIS'
        })
      })]
    }) : '', props.activeTab === DataEntryTab.VariableFixCost || props.activeTab === DataEntryTab.ProductInv || props.activeTab === DataEntryTab.ProductGroup ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
      allowClear: true,
      showSearch: true,
      onSearch: onSearch,
      filterOption: false,
      placeholder: i18Get('Products', getLanguage()),
      value: props.filter.productId,
      loading: loading,
      onChange: productChange,
      children: products && products.length && products.map(function (el, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: el.id ? el.id : '',
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: toPascalCase(el.name)
          })
        }, "data-entry-filter-Product-".concat(index));
      })
    }) : '', props.activeTab === DataEntryTab.Country ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
      className: "mr-2",
      allowClear: true,
      value: props.filter.region,
      placeholder: i18Get('Region', getLanguage()),
      onChange: regionChange,
      children: region.length ? region.map(function (d) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: d.id,
          children: d.name
        }, "region_select".concat(d.id));
      }) : ''
    }) : '', props.activeTab === DataEntryTab.InvenstionWip ? /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
      className: "mr-2",
      allowClear: true,
      value: props.filter.product,
      placeholder: i18Get('Product', getLanguage()),
      onChange: invenstionWipChange,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: "HOT ROLL",
        children: "HOT ROLL"
      }, "product_select1"), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: "COLD ROLL",
        children: "COLD ROLL"
      }, "product_select2")]
    }) : '']
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/init/index.ts
var initVariableCostData = function initVariableCostData() {
  return {
    id: undefined,
    month: undefined,
    year: null,
    productId: undefined,
    variableCost: '',
    fixedCost: '',
    productName: '',
    productType: '',
    productRank: undefined
  };
};
var initVariableCostResponse = function initVariableCostResponse() {
  return {
    count: '',
    data: []
  };
};
var initVariableCostDataApi = function initVariableCostDataApi() {
  return {
    year: '',
    id: undefined,
    productRank: undefined,
    productId: undefined,
    month: undefined,
    productName: '',
    productType: '',
    fixedCost: '',
    variableCost: ''
  };
};
var initProductData = function initProductData() {
  return {
    name: '',
    type: undefined,
    id: 0,
    rank: 0
  };
};
var initProductGroupData = function initProductGroupData() {
  return {
    name: '',
    product: undefined,
    product_group: undefined,
    id: 0,
    rank: 0
  };
};
var initProductsResponse = function initProductsResponse() {
  return {
    count: '',
    data: []
  };
};
var initProductsGroupResponse = function initProductsGroupResponse() {
  return {
    count: '',
    data: []
  };
};
var initProductsInvResponse = function initProductsInvResponse() {
  return {
    count: '',
    data: []
  };
};
var initProductInvOneResponse = function initProductInvOneResponse() {
  return {
    id: undefined,
    name: '',
    product: undefined,
    product_group: undefined,
    rank: undefined
  };
};
var initCountryDataEntryResponse = function initCountryDataEntryResponse() {
  return {
    count: '',
    data: []
  };
};
var initCountryDataEntryOneResponse = function initCountryDataEntryOneResponse() {
  return {
    id: 0,
    name: '',
    region: undefined
  };
};
var initRegionResponse = function initRegionResponse() {
  return {
    count: '',
    data: []
  };
};
var initRegionOneResponse = function initRegionOneResponse() {
  return {
    id: 0,
    name: '',
    rank: undefined
  };
};
var init_initFilterData = function initFilterData() {
  return {
    month: undefined,
    year: null,
    productId: undefined,
    productName: undefined,
    type: undefined,
    region: undefined,
    product: undefined
  };
};
var initCountrySupply = function initCountrySupply() {
  return {
    count: '',
    data: []
  };
};
var initCountrySupplyOne = function initCountrySupplyOne() {
  return {
    id: 0,
    name: '',
    region: undefined
  };
}; // Wip

var initInvenstionsWipResponse = function initInvenstionsWipResponse() {
  return {
    count: '',
    data: []
  };
};
var initInvenstionWipOneResponse = function initInvenstionWipOneResponse() {
  return {
    id: 0,
    product_type: '',
    product: 0,
    quantity: undefined,
    entry_date: undefined
  };
};
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 21 modules
var modal = __webpack_require__(90723);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product/product-create.tsx



function product_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var ProductCreate = function ProductCreate(props) {
  var _useState = (0,react.useState)(initProductData()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneProduct(props.isEdit));
      props.setLoading(true);
    }
  }, []);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneProductComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.productOne);
      props.setLoading(false);
      dispatch(clearFetchOneProduct());
    }

    if (DataEntryReducer.fetchOneProductComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneProduct());
    }
  }, [DataEntryReducer.fetchOneProductComplete]);
  (0,react.useEffect)(function () {
    var tempData = product_create_objectSpread(product_create_objectSpread({}, data), {}, {
      type: props.filter.type
    });

    setData(tempData);
  }, [props.filter]);

  var nameChanged = function nameChanged(e) {
    var tempData = product_create_objectSpread(product_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var typeChange = function typeChange(e) {
    var tempData = product_create_objectSpread(product_create_objectSpread({}, data), {}, {
      type: e
    });

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    if (!data.type) {
      showInfo('Please Select a Type');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editProduct(payload, props.isEdit));
      } else {
        dispatch(createProduct(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Product Group' : 'Create Product Group'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Type'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            value: data.type,
            placeholder: i18Get('Type', getLanguage()),
            onChange: typeChange,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
              value: 'ROLLED',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: 'ROLLED'
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
              value: 'SEMIS',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: 'SEMIS'
              })
            })]
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/variable-cost/variable-cost-create.tsx



function variable_cost_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function variable_cost_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { variable_cost_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { variable_cost_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















;
var VariableCostCreate = function VariableCostCreate(props) {
  var _useState = (0,react.useState)(initVariableCostData()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      products = _useState4[0],
      setProducts = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var dataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    setProducts(dataEntryReducer.products.data);

    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      year: props.filter.year,
      month: props.filter.month,
      productId: props.filter.productId
    });

    setData(tempData);
  }, [props.filter]);
  (0,react.useEffect)(function () {
    if (dataEntryReducer.fetchOneVariableCostComplete === ResponseType.FULFILLED) {
      var tempData = dataEntryReducer.variableCostOne;

      var tempDataApi = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, tempData), {}, {
        year: dayjs_min_default()().set('year', parseInt(tempData.year ? tempData.year : ''))
      });

      setData(tempDataApi);
      props.setLoading(false);
      dispatch(clearFetchOneVariableCost());
    }

    if (dataEntryReducer.fetchOneVariableCostComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneVariableCost());
    }
  }, [dataEntryReducer.fetchOneVariableCostComplete]);
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneVariableCost(props.isEdit));
      props.setLoading(true);
    }
  }, []);

  var yearChange = function yearChange(e) {
    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      year: e
    });

    setData(tempData);
  };

  var monthChange = function monthChange(e) {
    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      month: e
    });

    setData(tempData);
  };

  var variableCostChange = function variableCostChange(e) {
    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      variableCost: e
    });

    setData(tempData);
  };

  var fixedCostChange = function fixedCostChange(e) {
    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      fixedCost: e
    });

    setData(tempData);
  };

  var productChange = function productChange(e) {
    var tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
      productId: e,
      productName: ''
    });

    if (products) {
      for (var i = 0; i < products.length; i++) {
        if (e == products[i].id) {
          tempData = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, tempData), {}, {
            productId: products[i].id,
            productName: products[i].name
          });
          break;
        }
      }
    }

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.year) {
      showInfo('Please Select An Year');
      return false;
    }

    if (!data.month) {
      showInfo('Please Select A Month');
      return false;
    }

    if (!data.productId) {
      showInfo('Please Select A Period');
      return false;
    }

    if (!data.variableCost) {
      showInfo('Please Enter A Variable Cost');
      return false;
    }

    if (!data.fixedCost) {
      showInfo('Please Enter A Fixed Cost');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var _data$year;

      props.setLoading(true);

      var payload = variable_cost_create_objectSpread(variable_cost_create_objectSpread({}, data), {}, {
        year: (_data$year = data.year) === null || _data$year === void 0 ? void 0 : _data$year.format('YYYY')
      });

      if (props.isEdit) {
        dispatch(editVariableCost(payload, props.isEdit));
      } else {
        dispatch(createVariableCost(payload));
      }
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Variable Cost' : 'Create Variable Cost'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Year'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, {
            value: data.year,
            className: "mr-2",
            picker: "year",
            onChange: yearChange
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Month'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            allowClear: true,
            className: "mr-2",
            placeholder: i18Get('Month', getLanguage()),
            value: data.month,
            onChange: monthChange,
            children: MonthPicker && MonthPicker.length && MonthPicker.map(function (el, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: el.key,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: toPascalCase(el.name)
                })
              }, "variable-cost-data-month-".concat(index));
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Products'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            value: data.productId,
            placeholder: i18Get('Products', getLanguage()),
            onChange: productChange,
            children: products && products.length ? products.map(function (d, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: d.id,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: d.name
                })
              }, "variable-cost-data-product-".concat(index));
            }) : ''
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Variable Cost'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "number",
            value: data.variableCost,
            className: "mr-2",
            placeholder: i18Get('Variable Cost', getLanguage()),
            onChange: function onChange(e) {
              return variableCostChange(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Fixed Cost'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "number",
            value: data.fixedCost,
            className: "mr-2",
            placeholder: i18Get('Fixed Cost', getLanguage()),
            onChange: function onChange(e) {
              return fixedCostChange(e.target.value);
            }
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product-inv/product-inv-create.tsx



function product_inv_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_inv_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_inv_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_inv_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var ProductInvCreate = function ProductInvCreate(props) {
  var _useState = (0,react.useState)(initProductInvOneResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneProductInv(props.isEdit));
      props.setLoading(true);
    }

    fetchAllProducts();
  }, []);
  (0,react.useEffect)(function () {
    var tempData = product_inv_create_objectSpread(product_inv_create_objectSpread({}, data), {}, {
      product: props.filter.productId
    });

    setData(tempData);
  }, [props.filter]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.products.data);
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }

    if (DataEntryReducer.fetchProductsComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }
  }, [DataEntryReducer.fetchProductsComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneProductInvComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.productInvOne);
      props.setLoading(false);
      dispatch(clearFetchOneProductInv());
    }

    if (DataEntryReducer.fetchOneProductInvComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneProductInv());
    }
  }, [DataEntryReducer.fetchOneProductInvComplete]);

  var fetchAllProducts = function fetchAllProducts() {
    var apiUrl = "productinv/productlist";
    var query = "offset=0&numResults=100";
    query += props.filter.type ? "&type=".concat(props.filter.type) : '';
    dispatch(fetchProducts(apiUrl, query));
    props.setLoading(true);
  };

  var nameChanged = function nameChanged(e) {
    var tempData = product_inv_create_objectSpread(product_inv_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var productChange = function productChange(e) {
    var tempData = product_inv_create_objectSpread(product_inv_create_objectSpread({}, data), {}, {
      product: e,
      product_group: ''
    });

    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (e == list[i].id) {
          tempData = product_inv_create_objectSpread(product_inv_create_objectSpread({}, tempData), {}, {
            product: list[i].id,
            product_group: list[i].name
          });
          break;
        }
      }
    }

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    if (!data.product) {
      showInfo('Please Select A Product');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editProductInv(payload, props.isEdit));
      } else {
        dispatch(createProductInv(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Product Inv' : 'Create Product Inv'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Product'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            loading: props.loading,
            value: data.product,
            placeholder: i18Get('Product', getLanguage()),
            onChange: productChange,
            children: list.length ? list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: d.id,
                children: d.name
              }, "product_select".concat(d.id));
            }) : ''
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/country/index.tsx












;
var Country = function Country(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllCountryDataEntry();
  }, [props.filter]);

  var fetchAllCountryDataEntry = function fetchAllCountryDataEntry() {
    var query = "offset=0&numResults=100";
    dispatch(fetchCountryDataEntry(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchCountryDataEntryComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.countryDataEntry.data);
      props.setLoading(false);
      dispatch(clearFetchCountryDataEntry());
    }

    if (DataEntryReducer.fetchCountryDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchCountryDataEntry());
    }
  }, [DataEntryReducer.fetchCountryDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createCountryComplete === ResponseType.FULFILLED) {
      fetchAllCountryDataEntry();
      dispatch(clearCreateCountry());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createCountryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateCountry());
    }
  }, [DataEntryReducer.createCountryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editCountryComplete === ResponseType.FULFILLED) {
      fetchAllCountryDataEntry();
      dispatch(clearEditCountry());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editCountryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditCountry());
    }
  }, [DataEntryReducer.editCountryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteCountryComplete === ResponseType.FULFILLED) {
      fetchAllCountryDataEntry();
      dispatch(clearDeleteCountry());
    }

    if (DataEntryReducer.deleteCountryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteCountry());
    }
  }, [DataEntryReducer.deleteCountryComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteCountry(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Region"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Rank"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Country Rank"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.region
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.rank
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.country_rank
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/country/country-create.tsx



function country_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function country_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { country_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { country_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var CountryCreate = function CountryCreate(props) {
  var _useState = (0,react.useState)(initCountryDataEntryOneResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneCountryDataEntry(props.isEdit));
      props.setLoading(true);
    }

    fetchAllRegionDataEntry();
  }, []);
  (0,react.useEffect)(function () {
    var tempData = country_create_objectSpread(country_create_objectSpread({}, data), {}, {
      region: props.filter.region
    });

    setData(tempData);
  }, [props.filter]);

  var fetchAllRegionDataEntry = function fetchAllRegionDataEntry() {
    var query = "offset=0&numResults=100";
    dispatch(fetchRegionDataEntry(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.region.data);
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }

    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }
  }, [DataEntryReducer.fetchRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneCountryDataEntryComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.countryDataEntryOne);
      props.setLoading(false);
      dispatch(clearOneFetchCountryDataEntry());
    }

    if (DataEntryReducer.fetchOneCountryDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearOneFetchCountryDataEntry());
    }
  }, [DataEntryReducer.fetchOneCountryDataEntryComplete]);

  var nameChanged = function nameChanged(e) {
    var tempData = country_create_objectSpread(country_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var regionChange = function regionChange(e) {
    var tempData = country_create_objectSpread(country_create_objectSpread({}, data), {}, {
      region: e
    });

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editCountry(payload, props.isEdit));
      } else {
        dispatch(createCountry(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Country' : 'Create Country'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Region'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            loading: props.loading,
            value: data.region,
            placeholder: i18Get('Region', getLanguage()),
            onChange: regionChange,
            children: list.length ? list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: d.name,
                children: d.name
              }, "region_select".concat(d.name));
            }) : ''
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/country-supply/index.tsx












;
var CountrySupply = function CountrySupply(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });

  var fetchAllCountrySupply = function fetchAllCountrySupply() {
    var query = "offset=0&numResults=100";
    dispatch(fetchCountrySupply(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    fetchAllCountrySupply();
  }, [props.filter]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchCountrySupplyComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.countrySupply.data);
      props.setLoading(false);
      dispatch(clearFetchCountrySupply());
    }

    if (DataEntryReducer.fetchCountrySupplyComplete === ResponseType.FULFILLED) {
      props.setLoading(false);
      dispatch(clearFetchCountrySupply());
    }
  }, [DataEntryReducer.fetchCountrySupplyComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createCountrySupplyComplete === ResponseType.FULFILLED) {
      fetchAllCountrySupply();
      dispatch(clearCreateCountrySupply());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createCountrySupplyComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateCountrySupply());
    }
  }, [DataEntryReducer.createCountrySupplyComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editCountrySupplyComplete === ResponseType.FULFILLED) {
      fetchAllCountrySupply();
      dispatch(clearEditCountrySupply());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editCountrySupplyComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditCountrySupply());
    }
  }, [DataEntryReducer.editCountrySupplyComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteCountrySupplyComplete === ResponseType.FULFILLED) {
      fetchAllCountrySupply();
      dispatch(clearDeleteCountrySupply());
    }

    if (DataEntryReducer.deleteCountrySupplyComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteCountrySupply());
    }
  }, [DataEntryReducer.deleteCountrySupplyComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteCountrySupply(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Region"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.region
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/region/index.tsx












;
var Region = function Region(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllRegionDataEntry();
  }, []);

  var fetchAllRegionDataEntry = function fetchAllRegionDataEntry() {
    var query = "offset=0&numResults=100";
    dispatch(fetchRegionDataEntry(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.region.data);
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }

    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }
  }, [DataEntryReducer.fetchRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createRegionDataEntryComplete === ResponseType.FULFILLED) {
      fetchAllRegionDataEntry();
      dispatch(clearCreateRegionDataEntry());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateRegionDataEntry());
    }
  }, [DataEntryReducer.createRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editRegionDataEntryComplete === ResponseType.FULFILLED) {
      fetchAllRegionDataEntry();
      dispatch(clearEditRegionDataEntry());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditRegionDataEntry());
    }
  }, [DataEntryReducer.editRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteRegionDataEntryComplete === ResponseType.FULFILLED) {
      fetchAllRegionDataEntry();
      dispatch(clearDeleteRegionDataEntry());
    }

    if (DataEntryReducer.deleteRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteRegionDataEntry());
    }
  }, [DataEntryReducer.deleteRegionDataEntryComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteRegionDataEntry(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Rank"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.rank
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/region/region-create.tsx



function region_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function region_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { region_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { region_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var RegionCreate = function RegionCreate(props) {
  var _useState = (0,react.useState)(initRegionOneResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneRegionDataEntry(props.isEdit));
      props.setLoading(true);
    }
  }, []);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneRegionDataEntryComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.regionOne);
      props.setLoading(false);
      dispatch(clearFetchOneRegionDataEntry());
    }

    if (DataEntryReducer.fetchOneRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneRegionDataEntry());
    }
  }, [DataEntryReducer.fetchOneRegionDataEntryComplete]);

  var nameChanged = function nameChanged(e) {
    var tempData = region_create_objectSpread(region_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editRegionDataEntry(payload, props.isEdit));
      } else {
        dispatch(createRegionDataEntry(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Region' : 'Create Region'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product-group/index.tsx












;
var ProductGroup = function ProductGroup(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllProductsGroup();
  }, [props.filter]);

  var fetchAllProductsGroup = function fetchAllProductsGroup() {
    var query = "offset=0&numResults=100";
    query += props.filter.productName ? "&product=".concat(props.filter.productName) : '';
    dispatch(fetchProductsGroup(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsGroupComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.productsGroup.data);
      props.setLoading(false);
      dispatch(clearFetchProductsGroup());
    }

    if (DataEntryReducer.fetchProductsGroupComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProductsGroup());
    }
  }, [DataEntryReducer.fetchProductsGroupComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createProductGroupComplete === ResponseType.FULFILLED) {
      fetchAllProductsGroup();
      dispatch(clearCreateProductGroup());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createProductGroupComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateProductGroup());
    }
  }, [DataEntryReducer.createProductGroupComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editProductGroupComplete === ResponseType.FULFILLED) {
      fetchAllProductsGroup();
      dispatch(clearEditProductGroup());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editProductGroupComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditProductGroup());
    }
  }, [DataEntryReducer.editProductGroupComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteProductGroupComplete === ResponseType.FULFILLED) {
      fetchAllProductsGroup();
      dispatch(clearDeleteProductGroup());
    }

    if (DataEntryReducer.deleteProductGroupComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteProductGroup());
    }
  }, [DataEntryReducer.deleteProductGroupComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteProductGroup(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Product"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Rank"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.product
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.rank
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/product-group/product-group-create.tsx



function product_group_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_group_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_group_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_group_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var ProductGroupCreate = function ProductGroupCreate(props) {
  var _useState = (0,react.useState)(initProductGroupData()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneProductGroup(props.isEdit));
      props.setLoading(true);
    }

    fetchAllProducts();
  }, []);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.products.data);
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }

    if (DataEntryReducer.fetchProductsComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }
  }, [DataEntryReducer.fetchProductsComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneProductGroupComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.productGroupOne);
      props.setLoading(false);
      dispatch(clearFetchOneProductGroup());
    }

    if (DataEntryReducer.fetchOneProductGroupComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneProductGroup());
    }
  }, [DataEntryReducer.fetchOneProductGroupComplete]);
  (0,react.useEffect)(function () {
    var tempData = product_group_create_objectSpread(product_group_create_objectSpread({}, data), {}, {
      product: props.filter.productId
    });

    setData(tempData);
  }, [props.filter]);

  var fetchAllProducts = function fetchAllProducts() {
    var apiUrl = "products/list";
    var query = "offset=0&numResults=100";
    query += props.filter.type ? "&type=".concat(props.filter.type) : '';
    dispatch(fetchProducts(apiUrl, query));
    props.setLoading(true);
  };

  var nameChanged = function nameChanged(e) {
    var tempData = product_group_create_objectSpread(product_group_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var productChange = function productChange(e) {
    var tempData = product_group_create_objectSpread(product_group_create_objectSpread({}, data), {}, {
      product: e,
      product_group: ''
    });

    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (e == list[i].id) {
          tempData = product_group_create_objectSpread(product_group_create_objectSpread({}, tempData), {}, {
            product: list[i].id,
            product_group: list[i].name
          });
          break;
        }
      }
    }

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    if (!data.product) {
      showInfo('Please Select a Type');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editProductGroup(payload, props.isEdit));
      } else {
        dispatch(createProductGroup(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Product Group' : 'Create Product Group'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Product'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            loading: props.loading,
            value: data.product,
            placeholder: i18Get('Product', getLanguage()),
            onChange: productChange,
            children: list.length ? list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: d.id,
                children: d.name
              }, "product_select".concat(d.id));
            }) : ''
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/country-supply/country-supply-create.tsx



function country_supply_create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function country_supply_create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { country_supply_create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { country_supply_create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var CountrySupplyCreate = function CountrySupplyCreate(props) {
  var _useState = (0,react.useState)(initCountrySupplyOne()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });

  var fetchAllRegionDataEntry = function fetchAllRegionDataEntry() {
    var query = "offset=0&numResults=100";
    dispatch(fetchRegionDataEntry(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneCountrySupply(props.isEdit));
      props.setLoading(true);
    }

    fetchAllRegionDataEntry();
  }, []);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.region.data);
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }

    if (DataEntryReducer.fetchRegionDataEntryComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchRegionDataEntry());
    }
  }, [DataEntryReducer.fetchRegionDataEntryComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneCountrySupplyComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.countrySupplyOne);
      props.setLoading(false);
      dispatch(clearOneFetchCountrySupply());
    }

    if (DataEntryReducer.fetchOneCountrySupplyComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearOneFetchCountrySupply());
    }
  }, [DataEntryReducer.fetchOneCountrySupplyComplete]);

  var nameChanged = function nameChanged(e) {
    var tempData = country_supply_create_objectSpread(country_supply_create_objectSpread({}, data), {}, {
      name: e
    });

    setData(tempData);
  };

  var regionChange = function regionChange(e) {
    var tempData = country_supply_create_objectSpread(country_supply_create_objectSpread({}, data), {}, {
      region: e
    });

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.name) {
      showInfo('Please Enter A Name');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editCountrySupply(payload, props.isEdit));
      } else {
        dispatch(createCountrySupply(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Country' : 'Create Country'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.name,
            className: "mr-2",
            placeholder: i18Get('Name', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Region'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            loading: props.loading,
            value: data.region,
            placeholder: i18Get('Region', getLanguage()),
            onChange: regionChange,
            children: list.length ? list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: d.id,
                children: d.name
              }, "region_select".concat(d.id));
            }) : ''
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/invenstion-wip/index.tsx













;
var InvenstionWip = function InvenstionWip(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    fetchAllInvenstionsWip();
  }, [props.filter]);

  var fetchAllInvenstionsWip = function fetchAllInvenstionsWip() {
    var query = "offset=0&numResults=100";
    query += props.filter.product ? "&product=".concat(props.filter.product) : '';
    dispatch(fetchInvenstionsWip(query));
    props.setLoading(true);
  };

  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchInvenstionsWipComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.invenstionsWip.data);
      props.setLoading(false);
      dispatch(clearFetchInvenstionsWip());
    }

    if (DataEntryReducer.fetchInvenstionsWipComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchInvenstionsWip());
    }
  }, [DataEntryReducer.fetchInvenstionsWipComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.createInvenstionWipComplete === ResponseType.FULFILLED) {
      fetchAllInvenstionsWip();
      dispatch(clearCreateInvenstionWip());
      props.setShowModel(false);
    }

    if (DataEntryReducer.createInvenstionWipComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearCreateInvenstionWip());
    }
  }, [DataEntryReducer.createInvenstionWipComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.editInvenstionWipComplete === ResponseType.FULFILLED) {
      fetchAllInvenstionsWip();
      dispatch(clearEditInvenstionWip());
      props.setShowModel(false);
      props.setIsEdit(undefined);
    }

    if (DataEntryReducer.editInvenstionWipComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearEditInvenstionWip());
    }
  }, [DataEntryReducer.editInvenstionWipComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.deleteInvenstionWipComplete === ResponseType.FULFILLED) {
      fetchAllInvenstionsWip();
      dispatch(clearDeleteInvenstionWip());
    }

    if (DataEntryReducer.deleteInvenstionWipComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearDeleteInvenstionWip());
    }
  }, [DataEntryReducer.deleteInvenstionWipComplete]);

  var onEditClick = function onEditClick(id) {
    props.setIsEdit(id);
    props.setShowModel(true);
  };

  var deleteClicked = function deleteClicked(id) {
    dispatch(deleteInvenstionWip(id));
    props.setLoading(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container pt-0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "order_book_table h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "table-responsive common_table_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "table_toggle_width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Type"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Product"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Quantity"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  className: "vertical-align-th",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                    tkey: "Entry Date"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  colSpan: 6,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: list && list.length ? list.map(function (d) {
                  var getDates = moment_default()(d.entry_date).format("YYYY-MM-DD");
                  var getDates2 = moment_default()(getDates).format('MM/DD/YYYY');
                  var getDates3 = moment_default()(getDates).format('DD-MMM-YYYY');
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                        onClick: function onClick() {
                          return onEditClick(d.id);
                        },
                        className: "edit_icon mr-2"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                        title: i18Get('Are you sure to delete this item?', getLanguage()),
                        onConfirm: function onConfirm() {
                          return deleteClicked(d.id);
                        },
                        okText: i18Get('Yes', getLanguage()),
                        cancelText: i18Get('No', getLanguage()),
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "ml-2 cursor-pointer data_delete",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
                            className: "delete_icon"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.product_type
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.product
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: d.quantity
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: moment_default()(d.entry_date).utc().format('DD/MM/YYYY')
                    })]
                  });
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    colSpan: 6,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                      tkey: "No Data"
                    })
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/components/invenstion-wip/create.tsx



function create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















;
var InvenstionWipCreate = function InvenstionWipCreate(props) {
  var _useState = (0,react.useState)(initInvenstionWipOneResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var DataEntryReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.DataEntryReducer;
  });
  (0,react.useEffect)(function () {
    if (props.isEdit) {
      dispatch(fetchOneInvenstionWip(props.isEdit));
      props.setLoading(true);
    }

    fetchAllProducts();
  }, []);
  (0,react.useEffect)(function () {
    var tempData = create_objectSpread(create_objectSpread({}, data), {}, {
      product: props.filter.productId
    });

    setData(tempData);
  }, [props.filter]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchProductsComplete === ResponseType.FULFILLED) {
      setList(DataEntryReducer.products.data);
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }

    if (DataEntryReducer.fetchProductsComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchProducts());
    }
  }, [DataEntryReducer.fetchProductsComplete]);
  (0,react.useEffect)(function () {
    if (DataEntryReducer.fetchOneInvenstionWipComplete === ResponseType.FULFILLED) {
      setData(DataEntryReducer.InvenstionWipOne);
      props.setLoading(false);
      dispatch(clearFetchOneInvenstionWip());
    }

    if (DataEntryReducer.fetchOneInvenstionWipComplete === ResponseType.REJECTED) {
      props.setLoading(false);
      dispatch(clearFetchOneInvenstionWip());
    }
  }, [DataEntryReducer.fetchOneInvenstionWipComplete]);

  var fetchAllProducts = function fetchAllProducts() {
    var apiUrl = "productinv/productlist";
    var query = "offset=0&numResults=100";
    query += props.filter.type ? "&type=".concat(props.filter.type) : '';
    dispatch(fetchProducts(apiUrl, query));
    props.setLoading(true);
  };

  var nameChanged = function nameChanged(e) {
    var tempData = create_objectSpread(create_objectSpread({}, data), {}, {
      quantity: e
    });

    setData(tempData);
  };

  var productChange = function productChange(e) {
    var post_date = moment_default()(new Date()).format("YYYY-MM-DD"); // let tempData: ProductWipData = { ...data, product: '', product_type:'', quantity:''};

    var tempData = create_objectSpread(create_objectSpread({}, data), {}, {
      product: e,
      product_type: 'WIP',
      quantity: '',
      entry_date: post_date
    }); // let tempData: InvenstionWipData = { ...data, product: e, product_group:''};


    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (e == list[i].id) {
          //  tempData = { ...tempData, product: list[i].id, product_group:list[i].name};
          tempData = create_objectSpread(create_objectSpread({}, tempData), {}, {
            product: list[i].id,
            product_type: 'WIP',
            entry_date: post_date
          });
          break;
        }
      }
    }

    setData(tempData);
  };

  var validate = function validate() {
    if (!data.product) {
      showInfo('Please Select Product');
      return false;
    }

    if (!data.quantity) {
      showInfo('Please Enter Quantity');
      return false;
    }

    return true;
  };

  var addVariableField = function addVariableField() {
    if (validate()) {
      var payload = data;

      if (props.isEdit) {
        dispatch(editInvenstionWip(payload, props.isEdit));
      } else {
        dispatch(createInvenstionWip(payload));
      }

      props.setLoading(true);
    }
  };

  var cancelClicked = function cancelClicked() {
    props.setShowModel(false);
    props.setIsEdit(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: i18Get("".concat(props.isEdit ? 'Edit Product WIP' : 'Create Product WIP'), getLanguage()),
    visible: true,
    onOk: addVariableField,
    okButtonProps: {
      disabled: props.loading ? true : false
    },
    onCancel: cancelClicked,
    maskClosable: false,
    children: props.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model_loading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Product'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
            className: "mr-2",
            allowClear: true,
            loading: props.loading,
            value: data.product,
            placeholder: i18Get('Product', getLanguage()),
            onChange: productChange,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
              value: "HOT ROLL",
              children: "HOT ROLL"
            }, "product_select1"), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
              value: "COLD ROLL",
              children: "COLD ROLL"
            }, "product_select2")]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_0_0_140",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: 'Name'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex_1_1_10 common_input_container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            value: data.quantity,
            className: "mr-2",
            placeholder: i18Get('Quantity', getLanguage()),
            onChange: function onChange(e) {
              return nameChanged(e.target.value);
            }
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/overview/reports/data-entry/data-entry.scss
var data_entry = __webpack_require__(21748);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/data-entry.scss

      
      
      
      
      
      
      
      
      

var data_entry_options = {};

data_entry_options.styleTagTransform = (styleTagTransform_default());
data_entry_options.setAttributes = (setAttributesWithoutAttributes_default());

      data_entry_options.insert = insertBySelector_default().bind(null, "head");
    
data_entry_options.domAPI = (styleDomAPI_default());
data_entry_options.insertStyleElement = (insertStyleElement_default());

var data_entry_update = injectStylesIntoStyleTag_default()(data_entry/* default */.Z, data_entry_options);




       /* harmony default export */ var data_entry_data_entry = (data_entry/* default */.Z && data_entry/* default.locals */.Z.locals ? data_entry/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/index.tsx



















 // Wip







;
var DataEntry = function DataEntry() {
  var _useState = (0,react.useState)(DataEntryTab.VariableFixCost),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react.useState)(init_initFilterData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      showModel = _useState6[0],
      setShowModel = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      isEdit = _useState8[0],
      setIsEdit = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  (0,react.useEffect)(function () {
    setFilter(init_initFilterData());
  }, [activeTab]);

  var onTabChange = function onTabChange(tab) {
    setActiveTab(tab);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my_overview_container position-relative",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "overview_tab_space_container d-flex justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        className: "nav nav-tabs",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.VariableFixCost);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.VariableFixCost ? 'active' : ''),
            "aria-current": "page",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Variable Fix Cost"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.Product);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.Product ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Product"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.ProductGroup);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.ProductGroup ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Product Group"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.ProductInv);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.ProductInv ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Product Inv"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.InvenstionWip);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.InvenstionWip ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Product WIP"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.Country);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.Country ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Country"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.CountrySupply);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.CountrySupply ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Country Supply"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return onTabChange(DataEntryTab.Region);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "nav-link nav-link-top ".concat(activeTab === DataEntryTab.Region ? 'active' : ''),
            "aria-disabled": "true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: "Region"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "primary_btn height_26_btn",
        onClick: function onClick() {
          return setShowModel(true);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Create"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "overview_tab_space_container order_book_subheader time_frame_container common_input_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DataEntryFilter, {
        setFilter: setFilter,
        filter: filter,
        activeTab: activeTab
      })
    }), activeTab === DataEntryTab.VariableFixCost ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VariableCost, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(VariableCostCreate, {
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit,
        filter: filter
      }) : '']
    }) : '', activeTab === DataEntryTab.Product ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Product, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(ProductCreate, {
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit,
        filter: filter
      }) : '']
    }) : '', activeTab === DataEntryTab.ProductGroup ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ProductGroup, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(ProductGroupCreate, {
        filter: filter,
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit
      }) : '']
    }) : '', activeTab === DataEntryTab.ProductInv ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ProductInv, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(ProductInvCreate, {
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit,
        filter: filter
      }) : '']
    }) : '', activeTab === DataEntryTab.InvenstionWip ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InvenstionWip, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(InvenstionWipCreate, {
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit,
        filter: filter
      }) : '']
    }) : '', activeTab === DataEntryTab.Country ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Country, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(CountryCreate, {
        filter: filter,
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit
      }) : '']
    }) : '', activeTab === DataEntryTab.CountrySupply ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CountrySupply, {
        filter: filter,
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(CountrySupplyCreate, {
        filter: filter,
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit
      }) : '']
    }) : '', activeTab === DataEntryTab.Region ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Region, {
        setShowModel: setShowModel,
        setLoading: setLoading,
        loading: loading,
        setIsEdit: setIsEdit
      }), showModel ? /*#__PURE__*/(0,jsx_runtime.jsx)(RegionCreate, {
        setShowModel: setShowModel,
        loading: loading,
        setLoading: setLoading,
        isEdit: isEdit,
        setIsEdit: setIsEdit
      }) : '']
    }) : '']
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/model/index.ts
var Tabs;

(function (Tabs) {
  Tabs["BY_PRODUCT"] = "BY_PRODUCT";
  Tabs["BY_COUNTRY"] = "BY_COUNTRY";
  Tabs["BY_REGION"] = "BY_REGION";
  Tabs["BY_CUSTOMER"] = "BY_CUSTOMER";
  Tabs["NEGATIVE_EBITDA"] = "NEGATIVE_EBITDA";
  Tabs["PROFITABILITY"] = "PROFITABILITY";
  Tabs["TOP_10_CUSTOMERS"] = "TOP_10_CUSTOMERS";
})(Tabs || (Tabs = {}));

;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/redux/events.ts
var events_CommercialControllingEvents;

(function (CommercialControllingEvents) {
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT"] = "FETCH_PROFITABILITY_BY_PRODUCT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_FULFILLED"] = "FETCH_PROFITABILITY_BY_PRODUCT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_REJECTED"] = "FETCH_PROFITABILITY_BY_PRODUCT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_PRODUCT"] = "CLEAR_FETCH_PROFITABILITY_BY_PRODUCT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS"] = "FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_FULFILLED"] = "FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_PENDING"] = "FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_PENDING";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_REJECTED"] = "FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS"] = "CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_TOTAL"] = "FETCH_PROFITABILITY_BY_PRODUCT_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_REPORT_REGIONS"] = "FETCH_PROFITABILITY_REPORT_REGIONS";
  CommercialControllingEvents["FETCH_PROFITABILITY_REPORT_REGIONS_FULFILLED"] = "FETCH_PROFITABILITY_REPORT_REGIONS_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_REPORT_REGIONS_REJECTED"] = "FETCH_PROFITABILITY_REPORT_REGIONS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_REPORT_REGIONS"] = "CLEAR_FETCH_PROFITABILITY_REPORT_REGIONS";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY"] = "FETCH_PROFITABILITY_BY_COUNTRY";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_FULFILLED"] = "FETCH_PROFITABILITY_BY_COUNTRY_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_REJECTED"] = "FETCH_PROFITABILITY_BY_COUNTRY_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_COUNTRY"] = "CLEAR_FETCH_PROFITABILITY_BY_COUNTRY";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_TOTAL"] = "FETCH_PROFITABILITY_BY_COUNTRY_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW"] = "FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_FULFILLED"] = "FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_PENDING"] = "FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_REJECTED"] = "FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW"] = "CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER"] = "FETCH_PROFITABILITY_BY_CUSTOMER";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_FULFILLED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_REJECTED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER"] = "CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL"] = "FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW"] = "FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_FULFILLED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_PENDING"] = "FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_REJECTED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW"] = "CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION"] = "FETCH_PROFITABILITY_BY_REGION";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_FULFILLED"] = "FETCH_PROFITABILITY_BY_REGION_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_REJECTED"] = "FETCH_PROFITABILITY_BY_REGION_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_REGION"] = "CLEAR_FETCH_PROFITABILITY_BY_REGION";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_TOTAL"] = "FETCH_PROFITABILITY_BY_REGION_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_BY_REGION_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_BY_REGION_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_REGION_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_BY_REGION_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_SUB_ROW"] = "FETCH_PROFITABILITY_BY_REGION_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_SUB_ROW_FULFILLED"] = "FETCH_PROFITABILITY_BY_REGION_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_SUB_ROW_PENDING"] = "FETCH_PROFITABILITY_BY_REGION_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_SUB_ROW_REJECTED"] = "FETCH_PROFITABILITY_BY_REGION_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_REGION_SUB_ROW"] = "CLEAR_FETCH_PROFITABILITY_BY_REGION_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_PIVOT"] = "FETCH_PROFITABILITY_BY_PRODUCT_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_FULFILLED"] = "FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_REJECTED"] = "FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_PIVOT"] = "CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_PIVOT"] = "FETCH_PROFITABILITY_BY_COUNTRY_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_FULFILLED"] = "FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_REJECTED"] = "FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_PIVOT"] = "CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT"] = "FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_FULFILLED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_REJECTED"] = "FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT"] = "CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_PIVOT"] = "FETCH_PROFITABILITY_BY_REGION_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_PIVOT_FULFILLED"] = "FETCH_PROFITABILITY_BY_REGION_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_BY_REGION_PIVOT_REJECTED"] = "FETCH_PROFITABILITY_BY_REGION_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_BY_REGION_PIVOT"] = "CLEAR_FETCH_PROFITABILITY_BY_REGION_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_HEADERS"] = "FETCH_PROFITABILITY_TABLE_HEADERS";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_HEADERS_FULFILLED"] = "FETCH_PROFITABILITY_TABLE_HEADERS_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_HEADERS_REJECTED"] = "FETCH_PROFITABILITY_TABLE_HEADERS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_TABLE_HEADERS"] = "CLEAR_FETCH_PROFITABILITY_TABLE_HEADERS";
  CommercialControllingEvents["UPDATE_PROFITABILITY_HEADERS"] = "UPDATE_PROFITABILITY_HEADERS";
  CommercialControllingEvents["UPDATE_PROFITABILITY_HEADERS_FULFILLED"] = "UPDATE_PROFITABILITY_HEADERS_FULFILLED";
  CommercialControllingEvents["UPDATE_PROFITABILITY_HEADERS_REJECTED"] = "UPDATE_PROFITABILITY_HEADERS_REJECTED";
  CommercialControllingEvents["CLEAR_UPDATE_PROFITABILITY_HEADERS"] = "CLEAR_UPDATE_PROFITABILITY_HEADERS";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_DATA"] = "FETCH_PROFITABILITY_TABLE_DATA";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_DATA_FULFILLED"] = "FETCH_PROFITABILITY_TABLE_DATA_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_TABLE_DATA_REJECTED"] = "FETCH_PROFITABILITY_TABLE_DATA_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_TABLE_DATA"] = "CLEAR_FETCH_PROFITABILITY_TABLE_DATA";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS_FULFILLED"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS_REJECTED"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS"] = "CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_FULFILLED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_REJECTED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA"] = "CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_FULFILLED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_REJECTED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL"] = "CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_FULFILLED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_REJECTED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_REJECTED";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_PENDING"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_PENDING";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW"] = "CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_FULFILLED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_REJECTED"] = "FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT"] = "CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT";
  CommercialControllingEvents["FETCH_PROFITABILITY_FILTER_CUSTOMER"] = "FETCH_PROFITABILITY_FILTER_CUSTOMER";
  CommercialControllingEvents["FETCH_PROFITABILITY_FILTER_CUSTOMER_FULFILLED"] = "FETCH_PROFITABILITY_FILTER_CUSTOMER_FULFILLED";
  CommercialControllingEvents["FETCH_PROFITABILITY_FILTER_CUSTOMER_REJECTED"] = "FETCH_PROFITABILITY_FILTER_CUSTOMER_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_PROFITABILITY_FILTER_CUSTOMER"] = "CLEAR_FETCH_PROFITABILITY_FILTER_CUSTOMER";
})(events_CommercialControllingEvents || (events_CommercialControllingEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/redux/actions.ts



var fetchProfitabilityByProduct = function fetchProfitabilityByProduct(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByProduct = function clearFetchProfitabilityByProduct() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT
  };
};
var fetchProfitabilityByProductSubRow = function fetchProfitabilityByProductSubRow(query, key) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByProductSubRow = function clearFetchProfitabilityByProductSubRow() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS
  };
};
var fetchProfitabilityByProductTotal = function fetchProfitabilityByProductTotal(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/products/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByProductTotal = function clearFetchProfitabilityByProductTotal() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_TOTAL
  };
};
var fetchProfitabilityReportRegions = function fetchProfitabilityReportRegions() {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_REPORT_REGIONS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/regions"))
  };
};
var clearFetchProfitabilityReportRegions = function clearFetchProfitabilityReportRegions() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_REPORT_REGIONS
  };
};
var fetchProfitabilityByCountry = function fetchProfitabilityByCountry(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/countries").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCountry = function clearFetchProfitabilityByCountry() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY
  };
};
var fetchProfitabilityByCountryTotal = function fetchProfitabilityByCountryTotal(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/countries/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCountryTotal = function clearFetchProfitabilityByCountryTotal() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_TOTAL
  };
};
var fetchProfitabilityByCountrySubRow = function fetchProfitabilityByCountrySubRow(query, key) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/countries").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCountrySubRow = function clearFetchProfitabilityByCountrySubRow() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW
  };
};
var fetchProfitabilityByCustomer = function fetchProfitabilityByCustomer(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCustomer = function clearFetchProfitabilityByCustomer() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER
  };
};
var fetchProfitabilityByCustomerTotal = function fetchProfitabilityByCustomerTotal(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCustomerTotal = function clearFetchProfitabilityByCustomerTotal() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL
  };
};
var fetchProfitabilityByCustomerSubRow = function fetchProfitabilityByCustomerSubRow(query, key) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCustomerSubRow = function clearFetchProfitabilityByCustomerSubRow() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW
  };
};
var fetchProfitabilityByRegion = function fetchProfitabilityByRegion(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/region").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByRegion = function clearFetchProfitabilityByRegion() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION
  };
};
var fetchProfitabilityByRegionTotal = function fetchProfitabilityByRegionTotal(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/region/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByRegionTotal = function clearFetchProfitabilityByRegionTotal() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_TOTAL
  };
};
var fetchProfitabilityByRegionSubRow = function fetchProfitabilityByRegionSubRow(query, key) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/region").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByRegionSubRow = function clearFetchProfitabilityByRegionSubRow() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_SUB_ROW
  };
};
var fetchProfitabilityByProductPivot = function fetchProfitabilityByProductPivot(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/products/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByProductPivot = function clearFetchProfitabilityByProductPivot() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_PIVOT
  };
};
var fetchProfitabilityByCountryPivot = function fetchProfitabilityByCountryPivot(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/countries/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCountryPivot = function clearFetchProfitabilityByCountryPivot() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_PIVOT
  };
};
var fetchProfitabilityByCustomerPivot = function fetchProfitabilityByCustomerPivot(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByCustomerPivot = function clearFetchProfitabilityByCustomerPivot() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT
  };
};
var fetchProfitabilityByRegionPivot = function fetchProfitabilityByRegionPivot(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/region/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityByRegionPivot = function clearFetchProfitabilityByRegionPivot() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_PIVOT
  };
};
var fetchProfitabilityHeaders = function fetchProfitabilityHeaders(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_HEADERS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/column").concat(query ? "?".concat(query) : ''))
  };
};
var clearProfitabilityFetchHeader = function clearProfitabilityFetchHeader() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TABLE_HEADERS
  };
};
var updateProfitabilityHeaders = function updateProfitabilityHeaders(payload) {
  return {
    type: events_CommercialControllingEvents.UPDATE_PROFITABILITY_HEADERS,
    payload: axios_default().post("".concat(config.apiRootSecure, "/column"), payload)
  };
};
var clearUpdateProfitabilityHeaders = function clearUpdateProfitabilityHeaders() {
  return {
    type: events_CommercialControllingEvents.CLEAR_UPDATE_PROFITABILITY_HEADERS
  };
};
var fetchProfitabilityTableData = function fetchProfitabilityTableData(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_DATA,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sa/schedulingAgreement").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchProfitabilityTableData = function clearFetchProfitabilityTableData() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TABLE_DATA
  };
};
var fetchProfitabilityTop10Customers = function fetchProfitabilityTop10Customers(query, prime) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/top").concat(prime ? "/".concat(prime) : 'ALL', "?").concat(query))
  };
};
var clearFetchProfitabilityTop10Customers = function clearFetchProfitabilityTop10Customers() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS
  };
};
var fetchProfitabilityTop10CustomersTotal = function fetchProfitabilityTop10CustomersTotal(query, prime) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/top/total").concat(prime ? "/".concat(prime) : 'ALL', "?").concat(query))
  };
};
var clearFetchProfitabilityTop10CustomersTotal = function clearFetchProfitabilityTop10CustomersTotal() {
  return {
    type: CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL
  };
};
var fetchProfitabilityNegativeEbitda = function fetchProfitabilityNegativeEbitda(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers").concat(query ? "?ngtvEBITDA=1&".concat(query) : ''))
  };
};
var clearFetchProfitabilityNegativeEbitda = function clearFetchProfitabilityNegativeEbitda() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA
  };
};
var fetchProfitabilityNegativeEbitdaTotal = function fetchProfitabilityNegativeEbitdaTotal(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/total").concat(query ? "?ngtvEBITDA=1&".concat(query) : ''))
  };
};
var clearFetchProfitabilityNegativeEbitdaTotal = function clearFetchProfitabilityNegativeEbitdaTotal() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA
  };
};
var fetchProfitabilityNegativeEbitdaSubRow = function fetchProfitabilityNegativeEbitdaSubRow(query, key) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers").concat(query ? "?ngtvEBITDA=1&".concat(query) : ''))
  };
};
var clearFetchProfitabilityNegativeEbitdaSubRow = function clearFetchProfitabilityNegativeEbitdaSubRow() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW
  };
};
var fetchProfitabilityNegativeEbitdaPivot = function fetchProfitabilityNegativeEbitdaPivot(query) {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customers/pivot").concat(query ? "?ngtvEBITDA=1&".concat(query) : ''))
  };
};
var clearFetchProfitabilityNegativeEbitdaPivot = function clearFetchProfitabilityNegativeEbitdaPivot() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT
  };
};
var fetchProfitabilityFilterCustomer = function fetchProfitabilityFilterCustomer() {
  return {
    type: events_CommercialControllingEvents.FETCH_PROFITABILITY_FILTER_CUSTOMER,
    payload: axios_default().get("".concat(config.apiRootSecure, "/pf/customer"))
  };
};
var clearFetchProfitabilityFilterCustomer = function clearFetchProfitabilityFilterCustomer() {
  return {
    type: events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_FILTER_CUSTOMER
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/init/index.ts
var initProfitabilityGroupData = function initProfitabilityGroupData() {
  return {};
};
var initProfitabilityGroupResponse = function initProfitabilityGroupResponse() {
  return {
    count: 0,
    level: 1,
    parent: '',
    data: []
  };
};
var initProfitabilityGroupTotalData = function initProfitabilityGroupTotalData() {
  return {};
};
var initProfitabilityGroupPivotResponse = function initProfitabilityGroupPivotResponse() {
  return {
    count: 0,
    data: []
  };
};
var initHeaderResponse = function initHeaderResponse() {
  return {
    id: 0,
    user_id: 0,
    list_name: '',
    preferred_column: null,
    column_list: []
  };
}; // export const initProfitabilityGroupTotalResponse = (): totalResponse => ({
//     totalData: {}
// });

var initTop10Customers = function initTop10Customers() {
  return {
    contribution_amount_in_million: null,
    contribution_usd_per_ton: null,
    ebitda_usd_per_ton: null,
    ebitda_amount_in_million: null,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
    net_volume: null,
    nrp_usd_per_ton: null,
    nrp_amount_in_million: null
  };
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MinusOutlined.js + 1 modules
var MinusOutlined = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/table/row-def.tsx








;
var TableRowDef = function TableRowDef(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var spacing = function spacing() {
    var spaceTemp = [];

    for (var i = 1; i < props.level; i++) {
      spaceTemp.push( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "table_spacer"
      }));
    }

    return spaceTemp;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "d-flex align-items-center",
        children: [spacing(), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          onClick: function onClick() {
            return props.data.sub_row && setShow(!show);
          },
          className: "table_toggle",
          children: props.data.sub_row ? show ? /*#__PURE__*/(0,jsx_runtime.jsx)(MinusOutlined/* default */.Z, {
            className: "icon-color"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {
            className: "icon-color"
          }) : ''
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "ml-2",
          children: props.data.name ? props.data.name.toUpperCase().replace(/_/g, ' ') : '#'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-right",
        children: Math.round(props.data.net_volume)
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.nrp_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.nrp_usd_per_ton), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.ebitda_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.ebitda_usd_per_ton), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.contribution_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.contribution_usd_per_ton), " "]
      })]
    }), show ? /*#__PURE__*/(0,jsx_runtime.jsx)(TableRows, {
      isSubRow: true,
      parentArray: [].concat((0,toConsumableArray/* default */.Z)(props.parentArray), [props.data.name]),
      parentKey: props.data.name,
      level: props.level + 1,
      filter: props.filter,
      activeTab: props.activeTab
    }) : '']
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/table/rows.tsx











;
var TableRows = function TableRows(props) {
  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      metaVal = _useState6[0],
      setMetaVal = _useState6[1];

  (0,react.useEffect)(function () {
    if (props.isSubRow) {
      var query = "offset=0&numResults=100";
      query += "&periodicity=".concat(props.filter.timeFrame);
      query += "&periodLevel=".concat(props.filter.periodLevel);
      query += "&year=".concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      query += "&level=".concat(props.level);
      query += props.parentArray && props.parentArray.length ? "&bills=".concat(props.parentArray.join('&bills=')) : '';
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var meta = Math.floor(Math.random() * 100000);
      setMetaVal(meta);

      if (props.activeTab == Tabs.BY_PRODUCT) {
        dispatch(fetchProfitabilityByProductSubRow(query, meta));
      } else if (props.activeTab == Tabs.NEGATIVE_EBITDA) {
        dispatch(fetchProfitabilityNegativeEbitdaSubRow(query, meta));
      } else if (props.activeTab == Tabs.BY_COUNTRY) {
        dispatch(fetchProfitabilityByCountrySubRow(query, meta));
      } else if (props.activeTab == Tabs.BY_CUSTOMER) {
        dispatch(fetchProfitabilityByCustomerSubRow(query, meta));
      } else if (props.activeTab == Tabs.BY_REGION) {
        dispatch(fetchProfitabilityByRegionSubRow(query, meta));
      }

      setLoading(true);
    }
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByProductSubProductsComplete === ResponseType.FULFILLED && commercialControlProfitability.subProducts.parent == props.parentKey && commercialControlProfitability.subProducts.level == props.level && metaVal == commercialControlProfitability.subProducts.meta) {
      setList(commercialControlProfitability.subProducts.data);
      dispatch(clearFetchProfitabilityByProductSubRow());
      setLoading(false);
    }

    if (commercialControlProfitability.fetchProfitabilityByProductSubProductsComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByProductSubRow());
      setLoading(false);
    }
  }, [commercialControlProfitability.fetchProfitabilityByProductSubProductsComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCountrySubRowComplete === ResponseType.FULFILLED && commercialControlProfitability.subCountries.parent == props.parentKey && commercialControlProfitability.subCountries.level == props.level && metaVal == commercialControlProfitability.subCountries.meta) {
      setList(commercialControlProfitability.subCountries.data);
      dispatch(clearFetchProfitabilityByCountrySubRow());
      setLoading(false);
    }

    if (commercialControlProfitability.fetchProfitabilityByCountrySubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCountrySubRow());
      setLoading(false);
    }
  }, [commercialControlProfitability.fetchProfitabilityByCountrySubRowComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCustomerSubRowComplete === ResponseType.FULFILLED && commercialControlProfitability.subCustomers.parent == props.parentKey && commercialControlProfitability.subCustomers.level == props.level && metaVal == commercialControlProfitability.subCustomers.meta) {
      setList(commercialControlProfitability.subCustomers.data);
      dispatch(clearFetchProfitabilityByCustomerSubRow());
      setLoading(false);
    }

    if (commercialControlProfitability.fetchProfitabilityByCustomerSubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCustomerSubRow());
      setLoading(false);
    }
  }, [commercialControlProfitability.fetchProfitabilityByCustomerSubRowComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByRegionSubRowComplete === ResponseType.FULFILLED && commercialControlProfitability.subRegion.parent == props.parentKey && commercialControlProfitability.subRegion.level == props.level && metaVal == commercialControlProfitability.subRegion.meta) {
      setList(commercialControlProfitability.subRegion.data);
      dispatch(clearFetchProfitabilityByRegionSubRow());
      setLoading(false);
    }

    if (commercialControlProfitability.fetchProfitabilityByRegionSubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByRegionSubRow());
      setLoading(false);
    }
  }, [commercialControlProfitability.fetchProfitabilityByRegionSubRowComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaSubRowComplete === ResponseType.FULFILLED && commercialControlProfitability.NegativeEbitdaSubRow.parent == props.parentKey && commercialControlProfitability.NegativeEbitdaSubRow.level == props.level && metaVal == commercialControlProfitability.NegativeEbitdaSubRow.meta) {
      setList(commercialControlProfitability.NegativeEbitdaSubRow.data);
      dispatch(clearFetchProfitabilityNegativeEbitdaSubRow());
      setLoading(false);
      console.log('hit');
    }

    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaSubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityNegativeEbitdaSubRow());
      setLoading(false);
    }
  }, [commercialControlProfitability.fetchProfitabilityNegativeEbitdaSubRowComplete]);

  if (props.isSubRow) {
    if (loading) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          colSpan: 7,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
        })
      });
    } else {
      if (list && list.length) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: list.map(function (data, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(TableRowDef, {
              activeTab: props.activeTab,
              parentArray: props.parentArray ? props.parentArray : [],
              data: data,
              filter: props.filter,
              level: props.level
            }, "rowindex-".concat(i, "-").concat(props.parentKey));
          })
        });
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
      }
    }
  } else {
    return props.data ? /*#__PURE__*/(0,jsx_runtime.jsx)(TableRowDef, {
      activeTab: props.activeTab,
      data: props.data,
      parentArray: props.parentArray ? props.parentArray : [],
      filter: props.filter,
      level: props.level
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/table/index.tsx



function table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














;
var CommercialControllingTable = function CommercialControllingTable(props) {
  var _useState = (0,react.useState)(initProfitabilityGroupResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initProfitabilityGroupTotalData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)({
    page: 1,
    numResults: 20,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      tableOptions = _useState6[0],
      setTableOptions = _useState6[1];

  var _useState7 = (0,react.useState)('Product'),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      headerColumnName = _useState8[0],
      setHeaderColumnName = _useState8[1];

  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    if (props.filter.timeFrame && props.filter.fromDate && props.filter.toDate && props.filter.periodLevel) {
      setList(initProfitabilityGroupResponse());
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: true
        });
      });
      var query = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'), "&level=", 1, "&bills=");
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var totalQuery = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      totalQuery += props.filter.region ? "&region=".concat(props.filter.region) : '';
      totalQuery += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';

      if (props.activeTab == Tabs.BY_PRODUCT) {
        dispatch(fetchProfitabilityByProduct(query));
        dispatch(fetchProfitabilityByProductTotal(totalQuery));
        setHeaderColumnName('Product');
      } else if (props.activeTab == Tabs.BY_COUNTRY) {
        dispatch(fetchProfitabilityByCountry(query));
        dispatch(fetchProfitabilityByCountryTotal(totalQuery));
        setHeaderColumnName('Country');
      } else if (props.activeTab == Tabs.BY_CUSTOMER) {
        dispatch(fetchProfitabilityByCustomer(query));
        dispatch(fetchProfitabilityByCustomerTotal(totalQuery));
        setHeaderColumnName('Customer');
      } else if (props.activeTab == Tabs.BY_REGION) {
        dispatch(fetchProfitabilityByRegion(query));
        dispatch(fetchProfitabilityByRegionTotal(totalQuery));
        setHeaderColumnName('Region');
      } else if (props.activeTab == Tabs.NEGATIVE_EBITDA) {
        dispatch(fetchProfitabilityNegativeEbitda(query));
        dispatch(fetchProfitabilityNegativeEbitdaTotal(totalQuery));
        setHeaderColumnName('Customer');
      }
    } else {
      setList(initProfitabilityGroupResponse());
    }
  }, [props.activeTab, props.filter.timeFrame, props.filter.fromDate, props.filter.toDate, props.filter.periodLevel, props.filter.region, props.filter.customer]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByProductComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.products);
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByProduct());
    }

    if (commercialControlProfitability.fetchProfitabilityByProductComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByProduct());
    }
  }, [commercialControlProfitability.fetchProfitabilityByProductComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCountryComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.countries);
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCountry());
    }

    if (commercialControlProfitability.fetchProfitabilityByCountryComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCountry());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCountryComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByProductTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.total);
      dispatch(clearFetchProfitabilityByProductTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByProductTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByProductTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByProductTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCountryTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.countriesTotal);
      dispatch(clearFetchProfitabilityByCountryTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByCountryTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCountryTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCountryTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByRegionComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.region);
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByRegion());
    }

    if (commercialControlProfitability.fetchProfitabilityByRegionComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByRegion());
    }
  }, [commercialControlProfitability.fetchProfitabilityByRegionComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByRegionTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.regionTotal);
      dispatch(clearFetchProfitabilityByRegionTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByRegionTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByRegionTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByRegionTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCustomerComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.customers);
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCustomer());
    }

    if (commercialControlProfitability.fetchProfitabilityByCustomerComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCustomer());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCustomerComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.customersTotal);
      dispatch(clearFetchProfitabilityByCustomerTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCustomerTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete]); // 

  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.NegativeEbitda);
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityNegativeEbitda());
    }

    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_objectSpread(table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityNegativeEbitda());
    }
  }, [commercialControlProfitability.fetchProfitabilityNegativeEbitdaComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.NegativeEbitdaTotal);
      dispatch(clearFetchProfitabilityNegativeEbitdaTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityNegativeEbitdaTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 7,
              children: props.filter.fromDate && props.filter.toDate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [dayjs_min_default()(props.filter.fromDate).format('DD MMM YYYY'), " - ", dayjs_min_default()(props.filter.toDate).format('DD MMM YYYY')]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Date"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "vertical-align-th no-border-th disabled_th",
              children: headerColumnName
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Net Volume"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "NRP Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "NRP $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EBITDA Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EBITDA $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution $/T"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? list && list.data && list.data.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-left",
                children: total.name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.net_volume)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.nrp_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.nrp_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.ebitda_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.ebitda_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_usd_per_ton)
              })]
            }), list.data.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(TableRows, {
                data: data,
                filter: props.filter,
                level: 1,
                activeTab: props.activeTab
              }, "row-".concat(index));
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/table-expanded/table-rows-expanded.tsx



;
var TableRowsExpanded = function TableRowsExpanded(props) {
  return props.data ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
    children: [props.pivotHeader.map(function (d, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-left",
        children: props.data && props.data['level' + (index + 1)]
      });
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "text-right",
      children: Math.round(props.data.net_volume)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.nrp_amount_in_million), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.nrp_usd_per_ton), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.ebitda_amount_in_million), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.ebitda_usd_per_ton), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.contribution_amount_in_million), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [" ", Math.round(props.data.contribution_usd_per_ton), " "]
    })]
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
};
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 14 modules
var pagination = __webpack_require__(65996);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/table-expanded/index.tsx



function table_expanded_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function table_expanded_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_expanded_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_expanded_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















;
var CommercialControllingTableExpanded = function CommercialControllingTableExpanded(props) {
  var _useState = (0,react.useState)(initProfitabilityGroupPivotResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initProfitabilityGroupTotalData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)({
    page: 1,
    numResults: 500,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      tableOptions = _useState6[0],
      setTableOptions = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      pivotHeader = _useState8[0],
      setPivotHeader = _useState8[1];

  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    setTableOptions(table_expanded_objectSpread(table_expanded_objectSpread({}, tableOptions), {}, {
      page: 1,
      numResults: 500
    }));
  }, [props.activeTab]);
  (0,react.useEffect)(function () {
    if (props.filter.timeFrame && props.filter.fromDate && props.filter.toDate && props.filter.periodLevel) {
      setList(initProfitabilityGroupPivotResponse());
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: true
        });
      });
      var query = "offset=".concat(tableOptions.page - 1, "&numResults=").concat(tableOptions.numResults);
      query += "&periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'), "&level=", 1, "&bills=");
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var totalQuery = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      totalQuery += props.filter.region ? "&region=".concat(props.filter.region) : '';
      totalQuery += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';

      if (props.activeTab == Tabs.BY_PRODUCT) {
        setPivotHeader(PivotProductTableName);
        dispatch(fetchProfitabilityByProductPivot(query));
        dispatch(fetchProfitabilityByProductTotal(totalQuery));
      } else if (props.activeTab == Tabs.BY_COUNTRY) {
        setPivotHeader(PivotCountryTableName);
        dispatch(fetchProfitabilityByCountryPivot(query));
        dispatch(fetchProfitabilityByCountryTotal(totalQuery));
      } else if (props.activeTab == Tabs.BY_CUSTOMER) {
        setPivotHeader(PivotCustomerTableName);
        dispatch(fetchProfitabilityByCustomerPivot(query));
        dispatch(fetchProfitabilityByCustomerTotal(totalQuery));
      } else if (props.activeTab == Tabs.BY_REGION) {
        setPivotHeader(PivotRegionTableName);
        dispatch(fetchProfitabilityByRegionPivot(query));
        dispatch(fetchProfitabilityByRegionTotal(totalQuery));
      } else if (props.activeTab == Tabs.NEGATIVE_EBITDA) {
        setPivotHeader(PivotCustomerTableName);
        dispatch(fetchProfitabilityNegativeEbitdaPivot(query));
        dispatch(fetchProfitabilityNegativeEbitdaTotal(totalQuery));
      }
    } else {
      setList(initProfitabilityGroupPivotResponse());
    }
  }, [props.activeTab, props.filter.timeFrame, props.filter.fromDate, props.filter.toDate, props.filter.periodLevel, props.filter.region, tableOptions.page, tableOptions.numResults]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByProductPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.productsPivot);
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlProfitability.productsPivot.count
        });
      });
      dispatch(clearFetchProfitabilityByProductPivot());
    }

    if (commercialControlProfitability.fetchSalesByProductPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByProductPivot());
    }
  }, [commercialControlProfitability.fetchProfitabilityByProductPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCountryPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.countryPivot);
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlProfitability.countryPivot.count
        });
      });
      dispatch(clearFetchProfitabilityByCountryPivot());
    }

    if (commercialControlProfitability.fetchProfitabilityByCountryPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCountryPivot());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCountryPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCustomerPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.customerPivot);
      console.log('hit');
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlProfitability.customerPivot.count
        });
      });
      dispatch(clearFetchProfitabilityByCustomerPivot());
    }

    if (commercialControlProfitability.fetchProfitabilityByCustomerPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByCustomerPivot());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCustomerPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByRegionPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.regionPivot);
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlProfitability.regionPivot.count
        });
      });
      dispatch(clearFetchProfitabilityByRegionPivot());
    }

    if (commercialControlProfitability.fetchProfitabilityByRegionPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityByRegionPivot());
    }
  }, [commercialControlProfitability.fetchProfitabilityByRegionPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByProductTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.total);
      dispatch(clearFetchProfitabilityByProductTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByProductTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByProductTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByProductTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCountryTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.countriesTotal);
      dispatch(clearFetchProfitabilityByCountryTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByCountryTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCountryTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCountryTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByRegionTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.regionTotal);
      dispatch(clearFetchProfitabilityByRegionTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByRegionTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByRegionTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByRegionTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.customersTotal);
      dispatch(clearFetchProfitabilityByCustomerTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityByCustomerTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityByCustomerTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.NegativeEbitdaPivot);
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlProfitability.regionPivot.count
        });
      });
      dispatch(clearFetchProfitabilityNegativeEbitdaPivot());
    }

    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return table_expanded_objectSpread(table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchProfitabilityNegativeEbitdaPivot());
    }
  }, [commercialControlProfitability.fetchProfitabilityNegativeEbitdaPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.NegativeEbitdaTotal);
      dispatch(clearFetchProfitabilityNegativeEbitdaTotal());
    }

    if (commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchProfitabilityNegativeEbitdaTotal());
    }
  }, [commercialControlProfitability.fetchProfitabilityNegativeEbitdaTotalComplete]);

  var nameColFiller = function nameColFiller() {
    var temp = [];

    for (var i = 0; i < pivotHeader.length; i++) {
      temp.push( /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
        className: "".concat(i != pivotHeader.length - 1 ? 'border_right_transparent' : '')
      }));
    }

    return temp;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "order_book_table h-100",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container pagination_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [nameColFiller(), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 7,
              children: props.filter.fromDate && props.filter.toDate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [dayjs_min_default()(props.filter.fromDate).format('DD MMM YYYY'), " - ", dayjs_min_default()(props.filter.toDate).format('DD MMM YYYY')]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Date"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [pivotHeader.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: " ",
                children: d.name
              });
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Net Volume"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "NRP Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "NRP $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EBITDA Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EBITDA $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution $/T"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? list && list.data && list.data.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-left",
                colSpan: pivotHeader.length,
                children: total.name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.net_volume)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.nrp_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.nrp_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.ebitda_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.ebitda_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_usd_per_ton)
              })]
            }), list.data.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(TableRowsExpanded, {
                data: data,
                pivotHeader: pivotHeader
              }, "row-".concat(index));
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 7 + pivotHeader.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 7 + pivotHeader.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "pagination d-flex align-items-center justify-content-center pt-2",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.Z, {
        simple: true,
        current: tableOptions.page,
        pageSize: 500,
        total: tableOptions.total,
        onChange: function onChange(index) {
          setTableOptions(table_expanded_objectSpread(table_expanded_objectSpread({}, tableOptions), {}, {
            page: index
          }));
        }
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(57254);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/top-customers-table/index.tsx












;
var ProfitabilityTopCustomersTable = function ProfitabilityTopCustomersTable(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initTop10Customers()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react.useState)({
    page: 1,
    numResults: 10,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      tableOptions = _useState8[0],
      setTableOptions = _useState8[1];

  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    var query = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
    query += "&topBy=".concat(tableOptions.desc == 1 ? tableOptions.sort : '');
    query += props.filter.region ? "&region=".concat(props.filter.region) : '';
    dispatch(fetchProfitabilityTop10Customers(query, props.filter.prime));
    dispatch(fetchProfitabilityTop10CustomersTotal(query, props.filter.prime));
    setLoading(true);
  }, [tableOptions, props.filter]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityTop10CustomersComplete === ResponseType.FULFILLED) {
      setList(commercialControlProfitability.top10customers);
      setLoading(false);
      dispatch(clearFetchProfitabilityTop10Customers());
    }

    if (commercialControlProfitability.fetchProfitabilityTop10CustomersComplete === ResponseType.REJECTED) {
      setList([]);
      setLoading(false);
      dispatch(clearFetchProfitabilityTop10Customers());
    }
  }, [commercialControlProfitability.fetchProfitabilityTop10CustomersComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityTop10CustomersTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlProfitability.top10customersTotal);
      setLoading(false);
      dispatch(clearFetchProfitabilityTop10Customers());
    }

    if (commercialControlProfitability.fetchProfitabilityTop10CustomersTotalComplete === ResponseType.REJECTED) {
      setTotal(initTop10Customers());
      setLoading(false);
      dispatch(clearFetchProfitabilityTop10Customers());
    }
  }, [commercialControlProfitability.fetchProfitabilityTop10CustomersTotalComplete]);

  var onSortChange = function onSortChange(field) {
    var prevState = JSON.parse(JSON.stringify(tableOptions));

    if (field === tableOptions.sort) {
      prevState.desc = prevState.desc === 0 ? 1 : 0;
      prevState.sort = '';
    } else {
      prevState.sort = field;
      prevState.desc = 1;
    }

    setTableOptions(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "CUSTOMER"
              })
            }), Top10CustomersProfitabilityHeader.map(function (d, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("th", {
                className: "cursor-pointer",
                onClick: function onClick() {
                  return onSortChange(d.key);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: d.name
                }), tableOptions.sort == d.key ? tableOptions.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
                  className: "ml-2 sort_icon"
                }) : '' : '']
              }, "header-".concat(index));
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          }) : list.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-left",
                children: total.level1
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.net_volume ? Math.round(total.net_volume) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.nrp_amount_in_million ? Math.round(total.nrp_amount_in_million) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.nrp_usd_per_ton ? Math.round(total.nrp_usd_per_ton) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.ebitda_amount_in_million ? Math.round(total.ebitda_amount_in_million) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.ebitda_usd_per_ton ? Math.round(total.ebitda_usd_per_ton) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.contribution_usd_per_ton ? Math.round(total.contribution_usd_per_ton) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.contribution_amount_in_million ? Math.round(total.contribution_amount_in_million) : ''
              })]
            }), list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-left",
                  children: d.level1
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.net_volume ? Math.round(d.net_volume) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.nrp_amount_in_million ? Math.round(d.nrp_amount_in_million) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.nrp_usd_per_ton ? Math.round(d.nrp_usd_per_ton) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.ebitda_amount_in_million ? Math.round(d.ebitda_amount_in_million) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.ebitda_usd_per_ton ? Math.round(d.ebitda_usd_per_ton) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.contribution_usd_per_ton ? Math.round(d.contribution_usd_per_ton) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.contribution_amount_in_million ? Math.round(d.contribution_amount_in_million) : ''
                })]
              });
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/profitability-report-regions.tsx









;
var ProfitabilityReportRegions = function ProfitabilityReportRegions(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      regions = _useState2[0],
      setRegions = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  (0,react.useEffect)(function () {
    setLoading(true);
    dispatch(fetchProfitabilityReportRegions());
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityReportRegionsComplete === ResponseType.FULFILLED) {
      setRegions(commercialControlProfitability.regions);
      setLoading(false);
      dispatch(clearFetchProfitabilityReportRegions());
    }

    if (commercialControlProfitability.fetchProfitabilityReportRegionsComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchProfitabilityReportRegions());
    }
  }, [commercialControlProfitability.fetchProfitabilityReportRegionsComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
    allowClear: true,
    className: "mr-2",
    placeholder: i18Get('Region', getLanguage()),
    value: props.region,
    loading: loading,
    onChange: props.onChange,
    children: regions.length ? regions.map(function (el, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: el.code,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: toPascalCase(el.name)
        })
      }, "profitability-report-region-".concat(index));
    }) : ''
  });
};
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(55241);
// EXTERNAL MODULE: ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js + 1 modules
var react_sortable_hoc_esm = __webpack_require__(27503);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/manage-column.tsx




function manage_column_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function manage_column_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { manage_column_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { manage_column_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













;
var DragHandle = (0,react_sortable_hoc_esm/* SortableHandle */.W6)(function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: "ml-auto",
    children: ":::"
  });
});
var SortableItem = (0,react_sortable_hoc_esm/* SortableElement */.W8)(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    className: "dropdown-item cursor-pointer pl-2 dropdown-item-drag d-flex",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox["default"], {
      className: "mr-2",
      checked: props.status ? true : false,
      onChange: props.onOptionStatusChanged
    }), "     ", props.value, /*#__PURE__*/(0,jsx_runtime.jsx)(DragHandle, {})]
  });
});
var Sortable = (0,react_sortable_hoc_esm/* SortableContainer */.JN)(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    className: "pl-0",
    children: props.children
  });
});
var ManageColumn = function ManageColumn(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      tempList = _useState8[0],
      setTempList = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  (0,react.useEffect)(function () {
    setLoading(true);
    var query = "list_names=PROFITABILITY";
    dispatch(fetchProfitabilityHeaders(query));
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.fetchProfitabilityHeaderComplete === ResponseType.FULFILLED) {
      setLoading(false);
      setList(commercialControlProfitability.headers.column_list.sort(function (a, b) {
        return a.rank - b.rank;
      }));
      setTempList(commercialControlProfitability.headers.column_list);
      props.onHeaderChange(commercialControlProfitability.headers.column_list.filter(function (el) {
        return el.status;
      }));
      dispatch(clearProfitabilityFetchHeader());
    }

    if (commercialControlProfitability.fetchProfitabilityHeaderComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearProfitabilityFetchHeader());
    }
  }, [commercialControlProfitability.fetchProfitabilityHeaderComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlProfitability.updateProfitabilityHeaderComplete === ResponseType.FULFILLED) {
      var query = "list_names=PROFITABILITY";
      dispatch(fetchProfitabilityHeaders(query));
      setLoading(false);
      toggleVisisble(false);
      dispatch(clearUpdateProfitabilityHeaders());
    }

    if (commercialControlProfitability.updateProfitabilityHeaderComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearUpdateProfitabilityHeaders());
    }
  }, [commercialControlProfitability.updateProfitabilityHeaderComplete]);

  var toggleVisisble = function toggleVisisble(isVisible) {
    if (!isVisible) {
      setList(tempList);
    }

    setVisible(isVisible);
  };

  var onOptionStatusChanged = function onOptionStatusChanged(code) {
    if (code) {
      var index = list.findIndex(function (el) {
        return el.code === code;
      });

      if (index !== -1) {
        var prevState = JSON.parse(JSON.stringify(list));
        prevState[index] = manage_column_objectSpread(manage_column_objectSpread({}, prevState[index]), {}, {
          status: prevState[index]['status'] === 0 ? 1 : 0
        });
        setList(prevState);
      }
    }
  };

  var applyHeaders = function applyHeaders() {
    setLoading(true);
    var payload = {
      list_name: 'PROFITABILITY',
      preferred_column: JSON.stringify({
        column_list: list
      })
    };
    dispatch(updateProfitabilityHeaders(payload));
  };

  var onSortEnd = function onSortEnd(indexVal) {
    if (indexVal.newIndex < 0) return; // Ignores if outside designated area

    var items = (0,toConsumableArray/* default */.Z)(list);

    var item = items.splice(indexVal.oldIndex, 1)[0];
    items.splice(indexVal.newIndex, 0, item);
    items.map(function (d, i) {
      d.rank = i;
    });
    setList(items);
  };

  var headerOptions = function headerOptions() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "manage-columns-list",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Sortable, {
          onSortEnd: onSortEnd,
          useDragHandle: true,
          children: list.map(function (el, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(SortableItem, {
              status: el.status,
              index: index,
              value: el.name,
              onOptionStatusChanged: function (_onOptionStatusChanged) {
                function onOptionStatusChanged() {
                  return _onOptionStatusChanged.apply(this, arguments);
                }

                onOptionStatusChanged.toString = function () {
                  return _onOptionStatusChanged.toString();
                };

                return onOptionStatusChanged;
              }(function () {
                return onOptionStatusChanged(el.code);
              })
            }, "item-".concat(el.name));
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "manage-column-buttons",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "border_btn",
          disabled: loading,
          onClick: function onClick() {
            return toggleVisisble(false);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Cancel"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "primary_btn",
          disabled: loading,
          onClick: applyHeaders,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Apply"
          })
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
    placement: "bottom",
    trigger: "click",
    content: headerOptions(),
    visible: visible,
    onVisibleChange: toggleVisisble,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      className: "btn btn-outline-dark",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
        tkey: "Manage Columns"
      }), "\xA0", loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js + 1 modules
var UpOutlined = __webpack_require__(58491);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(67724);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/profitability-table.tsx



function profitability_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profitability_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profitability_table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profitability_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









;
var ProfitabilityTable = function ProfitabilityTable(props) {
  var _useState = (0,react.useState)({
    count: 0,
    data: []
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = (0,react.useState)({
    pageNumber: 1,
    numResults: 20,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      tableOptions = _useState4[0],
      setTableOptions = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var CommercialControllingProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  (0,react.useEffect)(function () {
    setTableOptions(function (prevState) {
      return profitability_table_objectSpread(profitability_table_objectSpread({}, prevState), {}, {
        loading: true
      });
    });
    var query = "offset=".concat((tableOptions.pageNumber - 1) * tableOptions.numResults, "&numResults=").concat(tableOptions.numResults);
    query += tableOptions.sort ? "&sortBy=".concat(tableOptions.sort, "&desc=").concat(tableOptions.desc) : '';
    dispatch(fetchProfitabilityTableData(query));
  }, [tableOptions.pageNumber, tableOptions.sort, tableOptions.desc]);
  (0,react.useEffect)(function () {
    if (CommercialControllingProfitability.fetchProfitabilityTableDataComplete === ResponseType.FULFILLED) {
      setListData(CommercialControllingProfitability.profitabilityTableData);
      setTableOptions(function (prevState) {
        return profitability_table_objectSpread(profitability_table_objectSpread({}, prevState), {}, {
          loading: false,
          total: CommercialControllingProfitability.profitabilityTableData.count
        });
      });
      dispatch(clearFetchProfitabilityTableData());
    }

    if (CommercialControllingProfitability.fetchProfitabilityTableDataComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return profitability_table_objectSpread(profitability_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      setListData({
        count: 0,
        data: []
      });
      dispatch(clearFetchProfitabilityTableData());
    }
  }, [CommercialControllingProfitability.fetchProfitabilityTableDataComplete]);

  var prevPage = function prevPage() {
    setTableOptions(function (prevState) {
      return profitability_table_objectSpread(profitability_table_objectSpread({}, prevState), {}, {
        pageNumber: --prevState.pageNumber
      });
    });
  };

  var nextPage = function nextPage() {
    setTableOptions(function (prevState) {
      return profitability_table_objectSpread(profitability_table_objectSpread({}, prevState), {}, {
        pageNumber: ++prevState.pageNumber
      });
    });
  };

  var onSortChange = function onSortChange(field) {
    var prevState = JSON.parse(JSON.stringify(tableOptions));

    if (field === tableOptions.sort) {
      prevState.desc = prevState.desc === 0 ? 1 : 0;
    } else {
      prevState.sort = field;
      prevState.desc = 1;
    }

    setTableOptions(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "order_book_table",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: " table-striped table-hover table position-relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: props.headerList.map(function (el, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("th", {
                className: "cursor-pointer",
                onClick: function onClick() {
                  return onSortChange(el.code);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: el.name
                }), "\xA0", tableOptions.sort === el.code ? tableOptions.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(UpOutlined/* default */.Z, {}) : '']
              }, "header-".concat(index));
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? listData && listData.data && listData.data.length ? listData.data.map(function (data, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
              children: props.headerList.map(function (el, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data[el.code.toLowerCase()]
                }, "sg-td-".concat(index));
              })
            }, "sg-tr-".concat(index));
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: props.headerList.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: props.headerList.length ? props.headerList.length : 5,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "text-center mt-2",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "btn btn-outline-dark page_btn",
        disabled: tableOptions.pageNumber === 1 || tableOptions.loading,
        onClick: prevPage,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LeftOutlined/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: "px-2",
        children: [tableOptions.pageNumber, "/", Math.ceil(tableOptions.total / tableOptions.numResults)]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "btn btn-outline-dark page_btn",
        disabled: tableOptions.pageNumber === Math.ceil(tableOptions.total / tableOptions.numResults) || tableOptions.loading,
        onClick: nextPage,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RightOutlined/* default */.Z, {})
      })]
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(12028);
;// CONCATENATED MODULE: ./src/utils/api-headers.ts

function apiHeaders() {
  var headers = {
    headers: {}
  };
  var userDetailString = localStorage.getItem(StoredKeys.USER_DETAILS);
  console.log(userDetailString);

  if (userDetailString) {
    var user = JSON.parse(window.atob(userDetailString));
    console.log(user);
    headers = {
      headers: {
        Authorization: 'Bearer ' + user.jwt_token
      }
    };
  }

  return headers;
}
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/export.tsx



function export_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function export_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { export_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { export_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













;
var export_Export = function Export(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var commercialControlProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });

  var getQuery = function getQuery() {
    var _props$filter$fromDat;

    var query = "grp=".concat(props.tableSwitch ? 'false' : 'true');
    query += props.filter.timeFrame ? "&periodicity=".concat(props.filter.timeFrame) : '';
    query += props.filter.periodLevel ? "&periodLevel=".concat(props.filter.periodLevel) : '';
    query += props.filter.fromDate ? "&year=".concat((_props$filter$fromDat = props.filter.fromDate) === null || _props$filter$fromDat === void 0 ? void 0 : _props$filter$fromDat.format('YYYY')) : '';
    query += props.filter.region ? "&region=".concat(props.filter.region.toLowerCase()) : '';
    query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
    query += props.activeTab === Tabs.NEGATIVE_EBITDA ? "&ngtvEBITDA=1" : '';
    return query;
  };

  var path = function path() {
    var path = "";

    if (props.activeTab === Tabs.NEGATIVE_EBITDA) {
      path = "BY_CUSTOMERS";
    } else if (props.activeTab === Tabs.BY_CUSTOMER) {
      path = "BY_CUSTOMERS";
    } else {
      path = props.activeTab;
    }

    return path;
  };

  var exportExcel = function exportExcel() {
    // if(commercialControlProfitability.products.count != 0) { 
    var query = getQuery();
    setLoading(true);
    axios_default()(export_objectSpread(export_objectSpread({
      url: "".concat(config.apiRootSecure, "/xprt/pf/").concat(path()).concat(query ? "?".concat(query) : '')
    }, apiHeaders()), {}, {
      method: 'GET',
      responseType: 'blob'
    })).then(function (response) {
      setLoading(false);
      var blob = new Blob([response.data], {
        type: 'application/vnd.ms-excel'
      });
      var windowUrl = window.URL || window.webkitURL;
      var downloadUrl = windowUrl.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "commercial_controlling_profitability_".concat(toPascalCase(props.activeTab), "_").concat(new Date().getTime(), ".xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (err) {
      setLoading(false);
      console.log(err);
    }); // }
    // else {
    //     message.error(i18Get('No Data Found', getLanguage()))
    // }       
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "primary_btn height_26_btn",
      onClick: exportExcel,
      children: loading ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Exporting"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Export"
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/components/customers.tsx









;
var CustomersFilter = function CustomersFilter(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      customers = _useState4[0],
      setCustomers = _useState4[1];

  var _useState5 = (0,react.useState)(true),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var CommercialControllingProfitability = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlProfitability;
  });
  (0,react.useEffect)(function () {
    dispatch(fetchProfitabilityFilterCustomer());
  }, []);
  (0,react.useEffect)(function () {
    if (CommercialControllingProfitability.fetchProfitabilityFilterCustomerComplete == ResponseType.FULFILLED) {
      setCustomers(CommercialControllingProfitability.filterCustomerData);
      setLoading(false);
      dispatch(clearFetchProfitabilityFilterCustomer());
    }

    if (CommercialControllingProfitability.fetchProfitabilityFilterCustomerComplete == ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchProfitabilityFilterCustomer());
    }
  }, [CommercialControllingProfitability.fetchProfitabilityFilterCustomerComplete]);
  (0,react.useEffect)(function () {
    if (customers.length) {
      var tempOptions = [];
      customers.map(function (el, index) {
        tempOptions.push( /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: el.code,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: toPascalCase(el.name)
          })
        }, "profitability-report-customer-".concat(index)));
      });
      setOptions(tempOptions);
    }
  }, [customers]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
    allowClear: true,
    className: "mr-2",
    placeholder: i18Get('Customer', getLanguage()),
    value: props.customer,
    loading: loading,
    onChange: props.onChange,
    children: options
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/index.tsx



function profitability_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profitability_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profitability_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profitability_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















;
var CommercialControllingProfitability = function CommercialControllingProfitability() {
  var _useState = (0,react.useState)(Tabs.BY_PRODUCT),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      tableSwitch = _useState4[0],
      setTableSwitch = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      headerList = _useState6[0],
      setHeaderList = _useState6[1];

  var _useState7 = (0,react.useState)({
    timeFrame: TimeFrame.YEARLY,
    fromDate: dayjs_min_default()().set('year', 2021).set('month', 0).set('date', 1),
    toDate: dayjs_min_default()().set('year', 2021).set('month', 11).set('date', 31),
    periodLevel: 1,
    region: undefined,
    customer: undefined,
    prime: 'ALL'
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      filter = _useState8[0],
      setFilter = _useState8[1];

  var onTabChange = function onTabChange(tab) {
    setActiveTab(tab);
  };

  var toggleTable = function toggleTable() {
    setTableSwitch(!tableSwitch);
  };

  var onHeaderChange = function onHeaderChange(headers) {
    setHeaderList(headers);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my_overview_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "overview_tab_space_container d-flex justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "nav nav-tabs",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.BY_PRODUCT);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.BY_PRODUCT ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.BY_PRODUCT.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.BY_COUNTRY);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.BY_COUNTRY ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.BY_COUNTRY.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.BY_REGION);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.BY_REGION ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.BY_REGION.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.BY_CUSTOMER);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.BY_CUSTOMER ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.BY_CUSTOMER.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.NEGATIVE_EBITDA);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.NEGATIVE_EBITDA ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.NEGATIVE_EBITDA.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(Tabs.TOP_10_CUSTOMERS);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === Tabs.TOP_10_CUSTOMERS ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(Tabs.TOP_10_CUSTOMERS.replace(/_/g, ' '))
              })
            })
          })]
        })
      }), activeTab === Tabs.BY_PRODUCT || activeTab === Tabs.BY_CUSTOMER || activeTab === Tabs.BY_COUNTRY || activeTab === Tabs.BY_REGION || activeTab === Tabs.NEGATIVE_EBITDA ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(export_Export, {
          activeTab: activeTab,
          filter: filter,
          tableSwitch: tableSwitch
        })
      }) : '']
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_subheader  d-flex align-items-center justify-content-between",
      children: activeTab === Tabs.PROFITABILITY ? /*#__PURE__*/(0,jsx_runtime.jsx)(ManageColumn, {
        selectedHeader: headerList,
        onHeaderChange: onHeaderChange
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [activeTab != Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "pr-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: 'Hierarchy'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
            defaultChecked: true,
            onChange: toggleTable
          })]
        }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "time_frame_container flex_1_1_10 ".concat(activeTab != Tabs.TOP_10_CUSTOMERS && (filter.timeFrame == TimeFrame.WEEKILY || filter.timeFrame == TimeFrame.HALF_YEARLY || filter.timeFrame == TimeFrame.QUARTERLY) ? 'time_frame_container_weekly' : ''),
          children: [activeTab != Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsx)(CustomersFilter, {
            customer: filter.customer,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return profitability_objectSpread(profitability_objectSpread({}, prevState), {}, {
                  customer: e
                });
              });
            }
          }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)(ProfitabilityReportRegions, {
            region: filter.region,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return profitability_objectSpread(profitability_objectSpread({}, prevState), {}, {
                  region: e
                });
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(TimeFrameList, {
            skipDaily: true,
            value: filter.timeFrame,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return profitability_objectSpread(profitability_objectSpread({}, prevState), {}, {
                  timeFrame: e,
                  fromDate: dayjs_min_default()().set('year', 2021).set('month', 0).set('date', 1),
                  toDate: dayjs_min_default()().set('year', 2021).set('month', 11).set('date', 31),
                  periodLevel: 1
                });
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RangeDatePicker, {
            fromDate: filter.fromDate,
            toDate: filter.toDate,
            timeFrame: filter.timeFrame,
            onChange: function onChange(dates) {
              return setFilter(function (prevState) {
                return profitability_objectSpread(profitability_objectSpread({}, prevState), {}, {
                  fromDate: dates.fromDate,
                  toDate: dates.toDate,
                  periodLevel: dates.periodLevel
                });
              });
            }
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container",
      children: activeTab === Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsx)(ProfitabilityTopCustomersTable, {
        filter: filter
      }) : activeTab === Tabs.PROFITABILITY ? /*#__PURE__*/(0,jsx_runtime.jsx)(ProfitabilityTable, {
        headerList: headerList
      }) : tableSwitch ? /*#__PURE__*/(0,jsx_runtime.jsx)(CommercialControllingTableExpanded, {
        filter: filter,
        activeTab: activeTab
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(CommercialControllingTable, {
        filter: filter,
        activeTab: activeTab
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/model/index.ts
var model_Tabs;

(function (Tabs) {
  Tabs["BY_PRODUCT"] = "BY_PRODUCT";
  Tabs["BY_COUNTRY"] = "BY_COUNTRY";
  Tabs["BY_REGION"] = "BY_REGION";
  Tabs["BY_CUSTOMER"] = "BY_CUSTOMER";
  Tabs["SALES"] = "SALES";
  Tabs["TOP_10_CUSTOMERS"] = "TOP_10_CUSTOMERS";
})(model_Tabs || (model_Tabs = {}));

;
;
;
;
;
;
;
;
;
;
;
;
;
;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/redux/events.ts
var redux_events_CommercialControllingEvents;

(function (CommercialControllingEvents) {
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT"] = "FETCH_SALES_BY_PRODUCT";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_FULFILLED"] = "FETCH_SALES_BY_PRODUCT_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_REJECTED"] = "FETCH_SALES_BY_PRODUCT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_PRODUCT"] = "CLEAR_FETCH_SALES_BY_PRODUCT";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS"] = "FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_FULFILLED"] = "FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_PENDING"] = "FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_PENDING";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_REJECTED"] = "FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS"] = "CLEAR_FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_TOTAL"] = "FETCH_SALES_BY_PRODUCT_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_TOTAL_FULFILLED"] = "FETCH_SALES_BY_PRODUCT_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_TOTAL_REJECTED"] = "FETCH_SALES_BY_PRODUCT_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_PRODUCT_TOTAL"] = "CLEAR_FETCH_SALES_BY_PRODUCT_TOTAL";
  CommercialControllingEvents["FETCH_SALES_REPORT_REGIONS"] = "FETCH_SALES_REPORT_REGIONS";
  CommercialControllingEvents["FETCH_SALES_REPORT_REGIONS_FULFILLED"] = "FETCH_SALES_REPORT_REGIONS_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_REPORT_REGIONS_REJECTED"] = "FETCH_SALES_REPORT_REGIONS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_REPORT_REGIONS"] = "CLEAR_FETCH_SALES_REPORT_REGIONS";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY"] = "FETCH_SALES_BY_COUNTRY";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_FULFILLED"] = "FETCH_SALES_BY_COUNTRY_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_REJECTED"] = "FETCH_SALES_BY_COUNTRY_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_COUNTRY"] = "CLEAR_FETCH_SALES_BY_COUNTRY";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_TOTAL"] = "FETCH_SALES_BY_COUNTRY_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_TOTAL_FULFILLED"] = "FETCH_SALES_BY_COUNTRY_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_TOTAL_REJECTED"] = "FETCH_SALES_BY_COUNTRY_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_COUNTRY_TOTAL"] = "CLEAR_FETCH_SALES_BY_COUNTRY_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_SUB_ROW"] = "FETCH_SALES_BY_COUNTRY_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_SUB_ROW_FULFILLED"] = "FETCH_SALES_BY_COUNTRY_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_SUB_ROW_PENDING"] = "FETCH_SALES_BY_COUNTRY_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_SUB_ROW_REJECTED"] = "FETCH_SALES_BY_COUNTRY_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_COUNTRY_SUB_ROW"] = "CLEAR_FETCH_SALES_BY_COUNTRY_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER"] = "FETCH_SALES_BY_CUSTOMER";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_FULFILLED"] = "FETCH_SALES_BY_CUSTOMER_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_REJECTED"] = "FETCH_SALES_BY_CUSTOMER_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_CUSTOMER"] = "CLEAR_FETCH_SALES_BY_CUSTOMER";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_TOTAL"] = "FETCH_SALES_BY_CUSTOMER_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_TOTAL_FULFILLED"] = "FETCH_SALES_BY_CUSTOMER_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_TOTAL_REJECTED"] = "FETCH_SALES_BY_CUSTOMER_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_CUSTOMER_TOTAL"] = "CLEAR_FETCH_SALES_BY_CUSTOMER_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_SUB_ROW"] = "FETCH_SALES_BY_CUSTOMER_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_SUB_ROW_FULFILLED"] = "FETCH_SALES_BY_CUSTOMER_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_SUB_ROW_PENDING"] = "FETCH_SALES_BY_CUSTOMER_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_SUB_ROW_REJECTED"] = "FETCH_SALES_BY_CUSTOMER_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_CUSTOMER_SUB_ROW"] = "CLEAR_FETCH_SALES_BY_CUSTOMER_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_REGION"] = "FETCH_SALES_BY_REGION";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_FULFILLED"] = "FETCH_SALES_BY_REGION_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_REJECTED"] = "FETCH_SALES_BY_REGION_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_REGION"] = "CLEAR_FETCH_SALES_BY_REGION";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_TOTAL"] = "FETCH_SALES_BY_REGION_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_TOTAL_FULFILLED"] = "FETCH_SALES_BY_REGION_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_TOTAL_REJECTED"] = "FETCH_SALES_BY_REGION_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_REGION_TOTAL"] = "CLEAR_FETCH_SALES_BY_REGION_TOTAL";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_SUB_ROW"] = "FETCH_SALES_BY_REGION_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_SUB_ROW_FULFILLED"] = "FETCH_SALES_BY_REGION_SUB_ROW_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_SUB_ROW_PENDING"] = "FETCH_SALES_BY_REGION_SUB_ROW_PENDING";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_SUB_ROW_REJECTED"] = "FETCH_SALES_BY_REGION_SUB_ROW_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_REGION_SUB_ROW"] = "CLEAR_FETCH_SALES_BY_REGION_SUB_ROW";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_PIVOT"] = "FETCH_SALES_BY_PRODUCT_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_PIVOT_FULFILLED"] = "FETCH_SALES_BY_PRODUCT_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_PRODUCT_PIVOT_REJECTED"] = "FETCH_SALES_BY_PRODUCT_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_PRODUCT_PIVOT"] = "CLEAR_FETCH_SALES_BY_PRODUCT_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_PIVOT"] = "FETCH_SALES_BY_COUNTRY_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_PIVOT_FULFILLED"] = "FETCH_SALES_BY_COUNTRY_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_COUNTRY_PIVOT_REJECTED"] = "FETCH_SALES_BY_COUNTRY_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_COUNTRY_PIVOT"] = "CLEAR_FETCH_SALES_BY_COUNTRY_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_PIVOT"] = "FETCH_SALES_BY_CUSTOMER_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_PIVOT_FULFILLED"] = "FETCH_SALES_BY_CUSTOMER_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_CUSTOMER_PIVOT_REJECTED"] = "FETCH_SALES_BY_CUSTOMER_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_CUSTOMER_PIVOT"] = "CLEAR_FETCH_SALES_BY_CUSTOMER_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_PIVOT"] = "FETCH_SALES_BY_REGION_PIVOT";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_PIVOT_FULFILLED"] = "FETCH_SALES_BY_REGION_PIVOT_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_BY_REGION_PIVOT_REJECTED"] = "FETCH_SALES_BY_REGION_PIVOT_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_BY_REGION_PIVOT"] = "CLEAR_FETCH_SALES_BY_REGION_PIVOT";
  CommercialControllingEvents["FETCH_SALES_TABLE_HEADERS"] = "FETCH_SALES_TABLE_HEADERS";
  CommercialControllingEvents["FETCH_SALES_TABLE_HEADERS_FULFILLED"] = "FETCH_SALES_TABLE_HEADERS_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_TABLE_HEADERS_REJECTED"] = "FETCH_SALES_TABLE_HEADERS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_TABLE_HEADERS"] = "CLEAR_FETCH_SALES_TABLE_HEADERS";
  CommercialControllingEvents["UPDATE_SALES_HEADERS"] = "UPDATE_SALES_HEADERS";
  CommercialControllingEvents["UPDATE_SALES_HEADERS_FULFILLED"] = "UPDATE_SALES_HEADERS_FULFILLED";
  CommercialControllingEvents["UPDATE_SALES_HEADERS_REJECTED"] = "UPDATE_SALES_HEADERS_REJECTED";
  CommercialControllingEvents["CLEAR_UPDATE_SALES_HEADERS"] = "CLEAR_UPDATE_SALES_HEADERS";
  CommercialControllingEvents["FETCH_SALES_TABLE_DATA"] = "FETCH_SALES_TABLE_DATA";
  CommercialControllingEvents["FETCH_SALES_TABLE_DATA_FULFILLED"] = "FETCH_SALES_TABLE_DATA_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_TABLE_DATA_REJECTED"] = "FETCH_SALES_TABLE_DATA_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_TABLE_DATA"] = "CLEAR_FETCH_SALES_TABLE_DATA";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS"] = "FETCH_SALES_TOP_10_CUSTOMERS";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS_FULFILLED"] = "FETCH_SALES_TOP_10_CUSTOMERS_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS_REJECTED"] = "FETCH_SALES_TOP_10_CUSTOMERS_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_TOP_10_CUSTOMERS"] = "CLEAR_FETCH_SALES_TOP_10_CUSTOMERS";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS_TOTAL"] = "FETCH_SALES_TOP_10_CUSTOMERS_TOTAL";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_FULFILLED"] = "FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_REJECTED"] = "FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_TOP_10_CUSTOMERS_TOTAL"] = "CLEAR_FETCH_SALES_TOP_10_CUSTOMERS_TOTAL";
  CommercialControllingEvents["FETCH_SALES_FILTER_CUSTOMER"] = "FETCH_SALES_FILTER_CUSTOMER";
  CommercialControllingEvents["FETCH_SALES_FILTER_CUSTOMER_FULFILLED"] = "FETCH_SALES_FILTER_CUSTOMER_FULFILLED";
  CommercialControllingEvents["FETCH_SALES_FILTER_CUSTOMER_REJECTED"] = "FETCH_SALES_FILTER_CUSTOMER_REJECTED";
  CommercialControllingEvents["CLEAR_FETCH_SALES_FILTER_CUSTOMER"] = "CLEAR_FETCH_SALES_FILTER_CUSTOMER";
})(redux_events_CommercialControllingEvents || (redux_events_CommercialControllingEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/redux/actions.ts



var fetchSalesByProduct = function fetchSalesByProduct(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByProduct = function clearFetchSalesByProduct() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT
  };
};
var fetchSalesByProductSubRow = function fetchSalesByProductSubRow(query, key) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/products").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByProductSubRow = function clearFetchSalesByProductSubRow() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS
  };
};
var fetchSalesByProductTotal = function fetchSalesByProductTotal(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/products/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByProductTotal = function clearFetchSalesByProductTotal() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_TOTAL
  };
};
var fetchSalesReportRegions = function fetchSalesReportRegions() {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_REPORT_REGIONS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/regions"))
  };
};
var clearFetchSalesReportRegions = function clearFetchSalesReportRegions() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_REPORT_REGIONS
  };
};
var fetchSalesByCountry = function fetchSalesByCountry(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/countries").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCountry = function clearFetchSalesByCountry() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY
  };
};
var fetchSalesByCountryTotal = function fetchSalesByCountryTotal(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/countries/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCountryTotal = function clearFetchSalesByCountryTotal() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_TOTAL
  };
};
var fetchSalesByCountrySubRow = function fetchSalesByCountrySubRow(query, key) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/countries").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCountrySubRow = function clearFetchSalesByCountrySubRow() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_SUB_ROW
  };
};
var fetchSalesByCustomer = function fetchSalesByCustomer(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCustomer = function clearFetchSalesByCustomer() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER
  };
};
var fetchSalesByCustomerTotal = function fetchSalesByCustomerTotal(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCustomerTotal = function clearFetchSalesByCustomerTotal() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_TOTAL
  };
};
var fetchSalesByCustomerSubRow = function fetchSalesByCustomerSubRow(query, key) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCustomerSubRow = function clearFetchSalesByCustomerSubRow() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_SUB_ROW
  };
};
var fetchSalesByRegion = function fetchSalesByRegion(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/region").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByRegion = function clearFetchSalesByRegion() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION
  };
};
var fetchSalesByRegionTotal = function fetchSalesByRegionTotal(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/region/total").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByRegionTotal = function clearFetchSalesByRegionTotal() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_TOTAL
  };
};
var fetchSalesByRegionSubRow = function fetchSalesByRegionSubRow(query, key) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_SUB_ROW,
    meta: key,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/region").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByRegionSubRow = function clearFetchSalesByRegionSubRow() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_SUB_ROW
  };
};
var fetchSalesByProductPivot = function fetchSalesByProductPivot(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/products/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByProductPivot = function clearFetchSalesByProductPivot() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_PIVOT
  };
};
var fetchSalesByCountryPivot = function fetchSalesByCountryPivot(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/countries/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCountryPivot = function clearFetchSalesByCountryPivot() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_PIVOT
  };
};
var fetchSalesByCustomerPivot = function fetchSalesByCustomerPivot(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByCustomerPivot = function clearFetchSalesByCustomerPivot() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_PIVOT
  };
};
var fetchSalesByRegionPivot = function fetchSalesByRegionPivot(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_PIVOT,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/region/pivot").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesByRegionPivot = function clearFetchSalesByRegionPivot() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_PIVOT
  };
};
var fetchSalesHeaders = function fetchSalesHeaders(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_HEADERS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/column").concat(query ? "?".concat(query) : ''))
  };
};
var clearSalesFetchHeader = function clearSalesFetchHeader() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TABLE_HEADERS
  };
};
var updateSalesHeaders = function updateSalesHeaders(payload) {
  return {
    type: redux_events_CommercialControllingEvents.UPDATE_SALES_HEADERS,
    payload: axios_default().post("".concat(config.apiRootSecure, "/column"), payload)
  };
};
var clearUpdateSalesHeaders = function clearUpdateSalesHeaders() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_UPDATE_SALES_HEADERS
  };
};
var fetchSalesTableData = function fetchSalesTableData(query) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_DATA,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sa/schedulingAgreement").concat(query ? "?".concat(query) : ''))
  };
};
var clearFetchSalesTableData = function clearFetchSalesTableData() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TABLE_DATA
  };
};
var fetchSalesTop10Customers = function fetchSalesTop10Customers(query, prime) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers/top").concat(prime ? "/".concat(prime) : 'ALL', "?").concat(query))
  };
};
var clearFetchSalesTop10Customers = function clearFetchSalesTop10Customers() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TOP_10_CUSTOMERS
  };
};
var fetchSalesTop10CustomersTotal = function fetchSalesTop10CustomersTotal(query, prime) {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS_TOTAL,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customers/top/total").concat(prime ? "/".concat(prime) : 'ALL', "?").concat(query))
  };
};
var clearFetchSalesTop10CustomersTotal = function clearFetchSalesTop10CustomersTotal() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TOP_10_CUSTOMERS_TOTAL
  };
};
var fetchSalesFilterCustomer = function fetchSalesFilterCustomer() {
  return {
    type: redux_events_CommercialControllingEvents.FETCH_SALES_FILTER_CUSTOMER,
    payload: axios_default().get("".concat(config.apiRootSecure, "/sales/customer"))
  };
};
var clearFetchSalesFilterCustomer = function clearFetchSalesFilterCustomer() {
  return {
    type: redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_FILTER_CUSTOMER
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/init/index.ts
var initSalesGroupData = function initSalesGroupData() {
  return {
    name: '',
    level: 1,
    sub_row: false,
    net_volume: 0,
    exw_usd_per_ton: 0,
    exw_amount_in_million: 0,
    contribution_usd_per_ton: 0,
    contribution_amount_in_million: 0,
    vat_amount_in_million: 0,
    gross_net_of_vat: 0
  };
};
var initSalesGroupResponse = function initSalesGroupResponse() {
  return {
    count: 0,
    level: 1,
    parent: '',
    data: []
  };
};
var initSalesGroupPivotResponse = function initSalesGroupPivotResponse() {
  return {
    count: 0,
    data: []
  };
};
var initSalesGroupTotalData = function initSalesGroupTotalData() {
  return {
    name: '',
    level: null,
    sub_row: null,
    net_volume: 0,
    exw_usd_per_ton: 0,
    exw_amount_in_million: 0,
    contribution_usd_per_ton: 0,
    contribution_amount_in_million: 0,
    vat_amount_in_million: 0,
    gross_net_of_vat: 0
  };
};
var init_initHeaderResponse = function initHeaderResponse() {
  return {
    id: 0,
    user_id: 0,
    list_name: '',
    preferred_column: null,
    column_list: []
  };
};
var initTop10CustomersData = function initTop10CustomersData() {
  return {
    contribution_amount_in_million: null,
    contribution_usd_per_ton: null,
    exw_amount_in_million: null,
    exw_usd_per_ton: null,
    gross_net_of_vat: null,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
    net_volume: null,
    vat_amount_in_million: null
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table/row-def.tsx








;
var row_def_TableRowDef = function TableRowDef(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var spacing = function spacing() {
    var spaceTemp = [];

    for (var i = 1; i < props.level; i++) {
      spaceTemp.push( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "table_spacer"
      }));
    }

    return spaceTemp;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "d-flex align-items-center",
        children: [spacing(), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          onClick: function onClick() {
            return props.data.sub_row && setShow(!show);
          },
          className: "table_toggle",
          children: props.data.sub_row ? show ? /*#__PURE__*/(0,jsx_runtime.jsx)(MinusOutlined/* default */.Z, {
            className: "icon-color"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {
            className: "icon-color"
          }) : ''
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "ml-2",
          children: props.data.name ? props.data.name.toUpperCase().replace(/_/g, ' ') : '#'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-right",
        children: Math.round(props.data.net_volume)
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.exw_usd_per_ton), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.exw_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.vat_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.gross_net_of_vat), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.contribution_amount_in_million), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [" ", Math.round(props.data.contribution_usd_per_ton), " "]
      })]
    }), show ? /*#__PURE__*/(0,jsx_runtime.jsx)(rows_TableRows, {
      isSubRow: true,
      parentArray: [].concat((0,toConsumableArray/* default */.Z)(props.parentArray), [props.data.name]),
      parentKey: props.data.name,
      level: props.level + 1,
      filter: props.filter,
      activeTab: props.activeTab
    }) : '']
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table/rows.tsx











;
var rows_TableRows = function TableRows(props) {
  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      metaVal = _useState6[0],
      setMetaVal = _useState6[1];

  (0,react.useEffect)(function () {
    if (props.isSubRow) {
      var query = "offset=0&numResults=100";
      query += "&periodicity=".concat(props.filter.timeFrame);
      query += "&periodLevel=".concat(props.filter.periodLevel);
      query += "&year=".concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      query += "&level=".concat(props.level);
      query += props.parentArray && props.parentArray.length ? "&bills=".concat(props.parentArray.join('&bills=')) : '';
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var meta = Math.floor(Math.random() * 100000);
      setMetaVal(meta);

      if (props.activeTab == model_Tabs.BY_PRODUCT) {
        dispatch(fetchSalesByProductSubRow(query, meta));
      } else if (props.activeTab == model_Tabs.BY_COUNTRY) {
        dispatch(fetchSalesByCountrySubRow(query, meta));
      } else if (props.activeTab == model_Tabs.BY_CUSTOMER) {
        dispatch(fetchSalesByCustomerSubRow(query, meta));
      } else if (props.activeTab == model_Tabs.BY_REGION) {
        dispatch(fetchSalesByRegionSubRow(query, meta));
      }

      setLoading(true);
    }
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByProductSubProductsComplete === ResponseType.FULFILLED && commercialControlSales.subProducts.parent == props.parentKey && commercialControlSales.subProducts.level == props.level && metaVal == commercialControlSales.subProducts.meta) {
      setList(commercialControlSales.subProducts.data);
      dispatch(clearFetchSalesByProductSubRow());
      setLoading(false);
    }

    if (commercialControlSales.fetchSalesByProductSubProductsComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByProductSubRow());
      setLoading(false);
    }
  }, [commercialControlSales.fetchSalesByProductSubProductsComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCountrySubRowComplete === ResponseType.FULFILLED && commercialControlSales.subCountries.parent == props.parentKey && commercialControlSales.subCountries.level == props.level && metaVal == commercialControlSales.subCountries.meta) {
      setList(commercialControlSales.subCountries.data);
      dispatch(clearFetchSalesByCountrySubRow());
      setLoading(false);
    }

    if (commercialControlSales.fetchSalesByCountrySubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCountrySubRow());
      setLoading(false);
    }
  }, [commercialControlSales.fetchSalesByCountrySubRowComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCustomerSubRowComplete === ResponseType.FULFILLED && commercialControlSales.subCustomers.parent == props.parentKey && commercialControlSales.subCustomers.level == props.level && metaVal == commercialControlSales.subCustomers.meta) {
      setList(commercialControlSales.subCustomers.data);
      dispatch(clearFetchSalesByCustomerSubRow());
      setLoading(false);
    }

    if (commercialControlSales.fetchSalesByCustomerSubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCustomerSubRow());
      setLoading(false);
    }
  }, [commercialControlSales.fetchSalesByCustomerSubRowComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByRegionSubRowComplete === ResponseType.FULFILLED && commercialControlSales.subRegion.parent == props.parentKey && commercialControlSales.subRegion.level == props.level && metaVal == commercialControlSales.subRegion.meta) {
      setList(commercialControlSales.subRegion.data);
      dispatch(clearFetchSalesByRegionSubRow());
      setLoading(false);
    }

    if (commercialControlSales.fetchSalesByRegionSubRowComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByRegionSubRow());
      setLoading(false);
    }
  }, [commercialControlSales.fetchSalesByRegionSubRowComplete]);

  if (props.isSubRow) {
    if (loading) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          colSpan: 7,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
        })
      });
    } else {
      if (list && list.length) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: list.map(function (data, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(row_def_TableRowDef, {
              activeTab: props.activeTab,
              parentArray: props.parentArray ? props.parentArray : [],
              data: data,
              filter: props.filter,
              level: props.level
            }, "rowindex-".concat(i, "-").concat(props.parentKey));
          })
        });
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
      }
    }
  } else {
    return props.data ? /*#__PURE__*/(0,jsx_runtime.jsx)(row_def_TableRowDef, {
      activeTab: props.activeTab,
      data: props.data,
      parentArray: props.parentArray ? props.parentArray : [],
      filter: props.filter,
      level: props.level
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/overview/reports/commercial-controlling/sales/components/table/commercial-controlling.scss
var commercial_controlling = __webpack_require__(62923);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table/commercial-controlling.scss

      
      
      
      
      
      
      
      
      

var commercial_controlling_options = {};

commercial_controlling_options.styleTagTransform = (styleTagTransform_default());
commercial_controlling_options.setAttributes = (setAttributesWithoutAttributes_default());

      commercial_controlling_options.insert = insertBySelector_default().bind(null, "head");
    
commercial_controlling_options.domAPI = (styleDomAPI_default());
commercial_controlling_options.insertStyleElement = (insertStyleElement_default());

var commercial_controlling_update = injectStylesIntoStyleTag_default()(commercial_controlling/* default */.Z, commercial_controlling_options);




       /* harmony default export */ var table_commercial_controlling = (commercial_controlling/* default */.Z && commercial_controlling/* default.locals */.Z.locals ? commercial_controlling/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table/index.tsx



function components_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var table_CommercialControllingTable = function CommercialControllingTable(props) {
  var _useState = (0,react.useState)(initSalesGroupResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initSalesGroupTotalData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)({
    page: 1,
    numResults: 20,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      tableOptions = _useState6[0],
      setTableOptions = _useState6[1];

  var _useState7 = (0,react.useState)('Product'),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      headerColumnName = _useState8[0],
      setHeaderColumnName = _useState8[1];

  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    if (props.filter.timeFrame && props.filter.fromDate && props.filter.toDate && props.filter.periodLevel) {
      setList(initSalesGroupResponse());
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: true
        });
      });
      var query = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'), "&level=", 1, "&bills=");
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var totalQuery = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      totalQuery += props.filter.region ? "&region=".concat(props.filter.region) : '';
      totalQuery += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';

      if (props.activeTab == model_Tabs.BY_PRODUCT) {
        dispatch(fetchSalesByProduct(query));
        dispatch(fetchSalesByProductTotal(totalQuery));
        setHeaderColumnName('Product');
      } else if (props.activeTab == model_Tabs.BY_COUNTRY) {
        dispatch(fetchSalesByCountry(query));
        dispatch(fetchSalesByCountryTotal(totalQuery));
        setHeaderColumnName('Country');
      } else if (props.activeTab == model_Tabs.BY_CUSTOMER) {
        dispatch(fetchSalesByCustomer(query));
        dispatch(fetchSalesByCustomerTotal(totalQuery));
        setHeaderColumnName('Customer');
      } else if (props.activeTab == model_Tabs.BY_REGION) {
        dispatch(fetchSalesByRegion(query));
        dispatch(fetchSalesByRegionTotal(totalQuery));
        setHeaderColumnName('Region');
      }
    } else {
      setList(initSalesGroupResponse());
    }
  }, [props.activeTab, props.filter.timeFrame, props.filter.fromDate, props.filter.toDate, props.filter.periodLevel, props.filter.region, props.filter.customer]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByProductComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.products);
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByProduct());
    }

    if (commercialControlSales.fetchSalesByProductComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByProduct());
    }
  }, [commercialControlSales.fetchSalesByProductComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCountryComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.countries);
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCountry());
    }

    if (commercialControlSales.fetchSalesByCountryComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCountry());
    }
  }, [commercialControlSales.fetchSalesByCountryComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByProductTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.total);
      dispatch(clearFetchSalesByProductTotal());
    }

    if (commercialControlSales.fetchSalesByProductTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByProductTotal());
    }
  }, [commercialControlSales.fetchSalesByProductTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCountryTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.countriesTotal);
      dispatch(clearFetchSalesByCountryTotal());
    }

    if (commercialControlSales.fetchSalesByCountryTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCountryTotal());
    }
  }, [commercialControlSales.fetchSalesByCountryTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByRegionComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.region);
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByRegion());
    }

    if (commercialControlSales.fetchSalesByRegionComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByRegion());
    }
  }, [commercialControlSales.fetchSalesByRegionComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByRegionTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.regionTotal);
      dispatch(clearFetchSalesByRegionTotal());
    }

    if (commercialControlSales.fetchSalesByRegionTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByRegionTotal());
    }
  }, [commercialControlSales.fetchSalesByRegionTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCustomerComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.customers);
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCustomer());
    }

    if (commercialControlSales.fetchSalesByCustomerComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_objectSpread(components_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCustomer());
    }
  }, [commercialControlSales.fetchSalesByCustomerComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCustomerTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.customersTotal);
      dispatch(clearFetchSalesByCustomerTotal());
    }

    if (commercialControlSales.fetchSalesByCustomerTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCustomerTotal());
    }
  }, [commercialControlSales.fetchSalesByCustomerTotalComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 7,
              children: props.filter.fromDate && props.filter.toDate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [dayjs_min_default()(props.filter.fromDate).format('DD MMM YYYY'), ' ', "-", ' ', dayjs_min_default()(props.filter.toDate).format('DD MMM YYYY')]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Date"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "vertical-align-th no-border-th disabled_th",
              children: headerColumnName
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Net Volume"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EXW $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EXW Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "VAT Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Gross Net Of Vat"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution $/T"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? list && list.data && list.data.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-left",
                children: total.name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.net_volume)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.exw_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.exw_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.vat_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.gross_net_of_vat)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_usd_per_ton)
              })]
            }), list.data.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(rows_TableRows, {
                data: data,
                filter: props.filter,
                level: 1,
                activeTab: props.activeTab
              }, "row-".concat(index));
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table-expanded/table-rows-expanded.tsx



var table_rows_expanded_TableRowsExpanded = function TableRowsExpanded(props) {
  return props.data ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
    children: [props.pivotHeader.map(function (d, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-left",
        children: props.data && props.data['level' + (index + 1)]
      });
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "text-right",
      children: Math.round(props.data.net_volume)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.exw_usd_per_ton), ' ']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.exw_amount_in_million), ' ']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.vat_amount_in_million), ' ']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.gross_net_of_vat), ' ']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.contribution_amount_in_million), ' ']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
      className: "text-right",
      children: [Math.round(props.data.contribution_usd_per_ton), ' ']
    })]
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/table-expanded/index.tsx



function components_table_expanded_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_table_expanded_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_table_expanded_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_table_expanded_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var table_expanded_CommercialControllingTableExpanded = function CommercialControllingTableExpanded(props) {
  var _useState = (0,react.useState)(initSalesGroupPivotResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initSalesGroupTotalData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)({
    page: 1,
    numResults: 500,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      tableOptions = _useState6[0],
      setTableOptions = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      pivotHeader = _useState8[0],
      setPivotHeader = _useState8[1];

  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    setTableOptions(components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, tableOptions), {}, {
      page: 1,
      numResults: 500
    }));
  }, [props.activeTab]);
  (0,react.useEffect)(function () {
    if (props.filter.timeFrame && props.filter.fromDate && props.filter.toDate && props.filter.periodLevel) {
      setList(initSalesGroupPivotResponse());
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: true
        });
      });
      var query = "offset=".concat(tableOptions.page - 1, "&numResults=").concat(tableOptions.numResults);
      query += "&periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      query += props.filter.region ? "&region=".concat(props.filter.region) : '';
      query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
      var totalQuery = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
      totalQuery += props.filter.region ? "&region=".concat(props.filter.region) : '';
      totalQuery += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';

      if (props.activeTab == model_Tabs.BY_PRODUCT) {
        setPivotHeader(PivotProductTableName);
        dispatch(fetchSalesByProductPivot(query));
        dispatch(fetchSalesByProductTotal(totalQuery));
      } else if (props.activeTab == model_Tabs.BY_COUNTRY) {
        setPivotHeader(PivotCountryTableName);
        dispatch(fetchSalesByCountryPivot(query));
        dispatch(fetchSalesByCountryTotal(totalQuery));
      } else if (props.activeTab == model_Tabs.BY_CUSTOMER) {
        setPivotHeader(PivotCustomerTableName);
        dispatch(fetchSalesByCustomerPivot(query));
        dispatch(fetchSalesByCustomerTotal(totalQuery));
      } else if (props.activeTab == model_Tabs.BY_REGION) {
        setPivotHeader(PivotRegionTableName);
        dispatch(fetchSalesByRegionPivot(query));
        dispatch(fetchSalesByRegionTotal(totalQuery));
      }
    } else {
      setList(initSalesGroupPivotResponse());
    }
  }, [props.activeTab, props.filter.timeFrame, props.filter.fromDate, props.filter.toDate, props.filter.periodLevel, props.filter.region, props.filter.customer, tableOptions.page, tableOptions.numResults]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByProductPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.productsPivot);
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlSales.productsPivot.count
        });
      });
      dispatch(clearFetchSalesByProductPivot());
    }

    if (commercialControlSales.fetchSalesByProductPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByProductPivot());
    }
  }, [commercialControlSales.fetchSalesByProductPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCountryPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.countryPivot);
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlSales.countryPivot.count
        });
      });
      dispatch(clearFetchSalesByCountryPivot());
    }

    if (commercialControlSales.fetchSalesByCountryPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCountryPivot());
    }
  }, [commercialControlSales.fetchSalesByCountryPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByProductTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.total);
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByProductTotal());
    }

    if (commercialControlSales.fetchSalesByProductTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByProductTotal());
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
    }
  }, [commercialControlSales.fetchSalesByProductTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCountryTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.countriesTotal);
      dispatch(clearFetchSalesByCountryTotal());
    }

    if (commercialControlSales.fetchSalesByCountryTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCountryTotal());
    }
  }, [commercialControlSales.fetchSalesByCountryTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByRegionPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.regionPivot);
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlSales.regionPivot.count
        });
      });
      dispatch(clearFetchSalesByRegionPivot());
    }

    if (commercialControlSales.fetchSalesByRegionPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByRegionPivot());
    }
  }, [commercialControlSales.fetchSalesByRegionPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByRegionTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.regionTotal);
      dispatch(clearFetchSalesByRegionTotal());
    }

    if (commercialControlSales.fetchSalesByRegionTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByRegionTotal());
    }
  }, [commercialControlSales.fetchSalesByRegionTotalComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCustomerPivotComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.customerPivot);
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false,
          total: commercialControlSales.customerPivot.count
        });
      });
      dispatch(clearFetchSalesByCustomerPivot());
    }

    if (commercialControlSales.fetchSalesByCustomerPivotComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      dispatch(clearFetchSalesByCustomerPivot());
    }
  }, [commercialControlSales.fetchSalesByCustomerPivotComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesByCustomerTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.customersTotal);
      dispatch(clearFetchSalesByCustomerTotal());
    }

    if (commercialControlSales.fetchSalesByCustomerTotalComplete === ResponseType.REJECTED) {
      dispatch(clearFetchSalesByCustomerTotal());
    }
  }, [commercialControlSales.fetchSalesByCustomerTotalComplete]);

  var nameColFiller = function nameColFiller() {
    var temp = [];

    for (var i = 0; i < pivotHeader.length; i++) {
      temp.push( /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
        className: "".concat(i != pivotHeader.length - 1 ? 'border_right_transparent' : '')
      }));
    }

    return temp;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "order_book_table h-100",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container pagination_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [nameColFiller(), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 7,
              children: props.filter.fromDate && props.filter.toDate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [dayjs_min_default()(props.filter.fromDate).format('DD MMM YYYY'), ' ', "-", ' ', dayjs_min_default()(props.filter.toDate).format('DD MMM YYYY')]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Date"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [pivotHeader.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                className: " ",
                children: d.name
              });
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Net Volume"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EXW $/T"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "EXW Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "VAT Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Gross Net Of Vat"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution Amount"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Contribution $/t"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? list && list.data && list.data.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                colSpan: pivotHeader.length,
                className: "text-left",
                children: total.name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.net_volume)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.exw_usd_per_ton)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.exw_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.vat_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.gross_net_of_vat)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_amount_in_million)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: Math.round(total.contribution_usd_per_ton)
              })]
            }), list.data.map(function (data, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(table_rows_expanded_TableRowsExpanded, {
                data: data,
                pivotHeader: pivotHeader
              }, "row-".concat(index));
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 7 + pivotHeader.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 7 + pivotHeader.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "pagination d-flex align-items-center justify-content-center pt-2",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.Z, {
        simple: true,
        current: tableOptions.page,
        pageSize: 500,
        total: tableOptions.total,
        onChange: function onChange(index) {
          setTableOptions(components_table_expanded_objectSpread(components_table_expanded_objectSpread({}, tableOptions), {}, {
            page: index
          }));
        }
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/top-customers-table/index.tsx












;
var SalesTopCustomersTable = function SalesTopCustomersTable(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(initTop10CustomersData()),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react.useState)({
    page: 1,
    numResults: 10,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      tableOptions = _useState8[0],
      setTableOptions = _useState8[1];

  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    var query = "periodicity=".concat(props.filter.timeFrame, "&periodLevel=").concat(props.filter.periodLevel, "&year=").concat(dayjs_min_default()(props.filter.fromDate).get('year'));
    query += "&topBy=".concat(tableOptions.desc == 1 ? tableOptions.sort : '');
    query += props.filter.region ? "&region=".concat(props.filter.region) : '';
    dispatch(fetchSalesTop10Customers(query, props.filter.prime));
    dispatch(fetchSalesTop10CustomersTotal(query, props.filter.prime));
    setLoading(true);
  }, [tableOptions, props.filter.region, props.filter.prime, props.filter.fromDate, props.filter.toDate]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesTop10CustomersComplete === ResponseType.FULFILLED) {
      setList(commercialControlSales.top10customers);
      setLoading(false);
      dispatch(clearFetchSalesTop10Customers());
    }

    if (commercialControlSales.fetchSalesTop10CustomersComplete === ResponseType.REJECTED) {
      setList([]);
      setLoading(false);
      dispatch(clearFetchSalesTop10Customers());
    }
  }, [commercialControlSales.fetchSalesTop10CustomersComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesTop10CustomersTotalComplete === ResponseType.FULFILLED) {
      setTotal(commercialControlSales.top10customersTotal);
      setLoading(false);
      dispatch(clearFetchSalesTop10CustomersTotal());
    }

    if (commercialControlSales.fetchSalesTop10CustomersTotalComplete === ResponseType.REJECTED) {
      setTotal(initTop10CustomersData());
      setLoading(false);
      dispatch(clearFetchSalesTop10CustomersTotal());
    }
  }, [commercialControlSales.fetchSalesTop10CustomersTotalComplete]);

  var onSortChange = function onSortChange(field) {
    var prevState = JSON.parse(JSON.stringify(tableOptions));

    if (field === tableOptions.sort) {
      prevState.desc = prevState.desc === 0 ? 1 : 0;
      prevState.sort = '';
    } else {
      prevState.sort = field;
      prevState.desc = 1;
    }

    setTableOptions(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table custom_table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "CUSTOMER"
              })
            }), Top10CustomersSalesHeader.map(function (d, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("th", {
                className: "cursor-pointer",
                onClick: function onClick() {
                  return onSortChange(d.key);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: d.name
                }), tableOptions.sort == d.key ? tableOptions.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
                  className: "ml-2 sort_icon"
                }) : '' : '']
              }, "header-".concat(index));
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          }) : list.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "total_row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-left",
                children: total.level1
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.net_volume ? Math.round(total.net_volume) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.exw_amount_in_million ? Math.round(total.exw_amount_in_million) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.exw_usd_per_ton ? Math.round(total.exw_usd_per_ton) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.vat_amount_in_million ? Math.round(total.vat_amount_in_million) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.gross_net_of_vat ? Math.round(total.gross_net_of_vat) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.contribution_amount_in_million ? Math.round(total.contribution_amount_in_million) : ''
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text-right",
                children: total.contribution_usd_per_ton ? Math.round(total.contribution_usd_per_ton) : ''
              })]
            }), list.map(function (d) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-left",
                  children: d.level1
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.net_volume ? Math.round(d.net_volume) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.exw_amount_in_million ? Math.round(d.exw_amount_in_million) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.exw_usd_per_ton ? Math.round(d.exw_usd_per_ton) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.vat_amount_in_million ? Math.round(d.vat_amount_in_million) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.gross_net_of_vat ? Math.round(d.gross_net_of_vat) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.contribution_amount_in_million ? Math.round(d.contribution_amount_in_million) : ''
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: d.contribution_usd_per_ton ? Math.round(d.contribution_usd_per_ton) : ''
                })]
              });
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: 11,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/sales-report-regions.tsx









;
var SalesReportRegions = function SalesReportRegions(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      regions = _useState2[0],
      setRegions = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  (0,react.useEffect)(function () {
    setLoading(true);
    dispatch(fetchSalesReportRegions());
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesReportRegionsComplete === ResponseType.FULFILLED) {
      setRegions(commercialControlSales.regions);
      setLoading(false);
      dispatch(clearFetchSalesReportRegions());
    }

    if (commercialControlSales.fetchSalesReportRegionsComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchSalesReportRegions());
    }
  }, [commercialControlSales.fetchSalesReportRegionsComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
    allowClear: true,
    className: "mr-2",
    placeholder: i18Get('Region', getLanguage()),
    value: props.region,
    loading: loading,
    onChange: props.onChange,
    children: regions.length ? regions.map(function (el, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
        value: el.code,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: toPascalCase(el.name)
        })
      }, "sales-report-region-".concat(index));
    }) : ''
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/manage-column.tsx




function components_manage_column_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_manage_column_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_manage_column_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_manage_column_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













;
var manage_column_DragHandle = (0,react_sortable_hoc_esm/* SortableHandle */.W6)(function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: "ml-auto",
    children: ":::"
  });
});
var manage_column_SortableItem = (0,react_sortable_hoc_esm/* SortableElement */.W8)(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    className: "dropdown-item cursor-pointer pl-2 dropdown-item-drag d-flex",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox["default"], {
      className: "mr-2",
      checked: props.status ? true : false,
      onChange: props.onOptionStatusChanged
    }), "     ", props.value, /*#__PURE__*/(0,jsx_runtime.jsx)(manage_column_DragHandle, {})]
  });
});
var manage_column_Sortable = (0,react_sortable_hoc_esm/* SortableContainer */.JN)(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    className: "pl-0",
    children: props.children
  });
});
var manage_column_ManageColumn = function ManageColumn(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      tempList = _useState8[0],
      setTempList = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var commercialControlSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  (0,react.useEffect)(function () {
    setLoading(true);
    var query = "list_name=SALES";
    dispatch(fetchSalesHeaders(query));
  }, []);
  (0,react.useEffect)(function () {
    if (commercialControlSales.fetchSalesHeaderComplete === ResponseType.FULFILLED) {
      setLoading(false);
      setList(commercialControlSales.headers.column_list.sort(function (a, b) {
        return a.rank - b.rank;
      }));
      setTempList(commercialControlSales.headers.column_list);
      props.onHeaderChange(commercialControlSales.headers.column_list.filter(function (el) {
        return el.status;
      }));
      dispatch(clearSalesFetchHeader());
    }

    if (commercialControlSales.fetchSalesHeaderComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearSalesFetchHeader());
    }
  }, [commercialControlSales.fetchSalesHeaderComplete]);
  (0,react.useEffect)(function () {
    if (commercialControlSales.updateSalesHeaderComplete === ResponseType.FULFILLED) {
      var query = "list_name=SALES";
      dispatch(fetchSalesHeaders(query));
      toggleVisisble(false);
      dispatch(clearUpdateSalesHeaders());
    }

    if (commercialControlSales.updateSalesHeaderComplete === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearUpdateSalesHeaders());
    }
  }, [commercialControlSales.updateSalesHeaderComplete]);

  var toggleVisisble = function toggleVisisble(isVisible) {
    if (!isVisible) {
      setList(tempList);
    }

    setVisible(isVisible);
  };

  var onOptionStatusChanged = function onOptionStatusChanged(code) {
    if (code) {
      var index = list.findIndex(function (el) {
        return el.code === code;
      });

      if (index !== -1) {
        var prevState = JSON.parse(JSON.stringify(list));
        prevState[index] = components_manage_column_objectSpread(components_manage_column_objectSpread({}, prevState[index]), {}, {
          status: prevState[index]['status'] === 0 ? 1 : 0
        });
        setList(prevState);
      }
    }
  };

  var applyHeaders = function applyHeaders() {
    setLoading(true);
    var payload = {
      list_name: 'SALES',
      preferred_column: JSON.stringify({
        column_list: list
      })
    };
    dispatch(updateSalesHeaders(payload));
  };

  var onSortEnd = function onSortEnd(indexVal) {
    if (indexVal.newIndex < 0) return; // Ignores if outside designated area

    var items = (0,toConsumableArray/* default */.Z)(list);

    var item = items.splice(indexVal.oldIndex, 1)[0];
    items.splice(indexVal.newIndex, 0, item);
    items.map(function (d, i) {
      d.rank = i;
    });
    setList(items);
  };

  var headerOptions = function headerOptions() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "manage-columns-list",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(manage_column_Sortable, {
          onSortEnd: onSortEnd,
          useDragHandle: true,
          children: list.map(function (el, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(manage_column_SortableItem, {
              status: el.status,
              index: index,
              value: el.name,
              onOptionStatusChanged: function (_onOptionStatusChanged) {
                function onOptionStatusChanged() {
                  return _onOptionStatusChanged.apply(this, arguments);
                }

                onOptionStatusChanged.toString = function () {
                  return _onOptionStatusChanged.toString();
                };

                return onOptionStatusChanged;
              }(function () {
                return onOptionStatusChanged(el.code);
              })
            }, "item-".concat(el.name));
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "manage-column-buttons",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "border_btn",
          disabled: loading,
          onClick: function onClick() {
            return toggleVisisble(false);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Cancel"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "primary_btn",
          disabled: loading,
          onClick: applyHeaders,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: "Apply"
          })
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
    placement: "bottom",
    trigger: "click",
    content: headerOptions(),
    visible: visible,
    onVisibleChange: toggleVisisble,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      className: "btn btn-outline-dark",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
        tkey: "Manage Columns"
      }), "\xA0", loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/sales-table.tsx



function sales_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sales_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sales_table_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sales_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









;
var SalesTable = function SalesTable(props) {
  var _useState = (0,react.useState)({
    count: 0,
    data: []
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = (0,react.useState)({
    pageNumber: 1,
    numResults: 20,
    loading: false,
    total: 0,
    sort: '',
    desc: 0
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      tableOptions = _useState4[0],
      setTableOptions = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var CommercialControllingSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  (0,react.useEffect)(function () {
    setTableOptions(function (prevState) {
      return sales_table_objectSpread(sales_table_objectSpread({}, prevState), {}, {
        loading: true
      });
    });
    var query = "offset=".concat((tableOptions.pageNumber - 1) * tableOptions.numResults, "&numResults=").concat(tableOptions.numResults);
    query += tableOptions.sort ? "&sortBy=".concat(tableOptions.sort, "&desc=").concat(tableOptions.desc) : '';
    dispatch(fetchSalesTableData(query));
  }, [tableOptions.pageNumber, tableOptions.sort, tableOptions.desc]);
  (0,react.useEffect)(function () {
    if (CommercialControllingSales.fetchSalesTableDataComplete === ResponseType.FULFILLED) {
      setListData(CommercialControllingSales.salesTableData);
      setTableOptions(function (prevState) {
        return sales_table_objectSpread(sales_table_objectSpread({}, prevState), {}, {
          loading: false,
          total: CommercialControllingSales.salesTableData.count
        });
      });
      dispatch(clearFetchSalesTableData());
    }

    if (CommercialControllingSales.fetchSalesTableDataComplete === ResponseType.REJECTED) {
      setTableOptions(function (prevState) {
        return sales_table_objectSpread(sales_table_objectSpread({}, prevState), {}, {
          loading: false
        });
      });
      setListData({
        count: 0,
        data: []
      });
      dispatch(clearFetchSalesTableData());
    }
  }, [CommercialControllingSales.fetchSalesTableDataComplete]);

  var prevPage = function prevPage() {
    setTableOptions(function (prevState) {
      return sales_table_objectSpread(sales_table_objectSpread({}, prevState), {}, {
        pageNumber: --prevState.pageNumber
      });
    });
  };

  var nextPage = function nextPage() {
    setTableOptions(function (prevState) {
      return sales_table_objectSpread(sales_table_objectSpread({}, prevState), {}, {
        pageNumber: ++prevState.pageNumber
      });
    });
  };

  var onSortChange = function onSortChange(field) {
    var prevState = JSON.parse(JSON.stringify(tableOptions));

    if (field === tableOptions.sort) {
      prevState.desc = prevState.desc === 0 ? 1 : 0;
    } else {
      prevState.sort = field;
      prevState.desc = 1;
    }

    setTableOptions(prevState);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "order_book_table",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: " table-striped table-hover table position-relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: props.headerList.map(function (el, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("th", {
                className: "cursor-pointer",
                onClick: function onClick() {
                  return onSortChange(el.code);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: el.name
                }), "\xA0", tableOptions.sort === el.code ? tableOptions.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(UpOutlined/* default */.Z, {}) : '']
              }, "header-".concat(index));
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !tableOptions.loading ? listData && listData.data && listData.data.length ? listData.data.map(function (data, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
              children: props.headerList.map(function (el, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: data[el.code.toLowerCase()]
                }, "sg-td-".concat(index));
              })
            }, "sg-tr-".concat(index));
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              colSpan: props.headerList.length,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              colSpan: props.headerList.length ? props.headerList.length : 5,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "text-center mt-2",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "btn btn-outline-dark page_btn",
        disabled: tableOptions.pageNumber === 1 || tableOptions.loading,
        onClick: prevPage,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LeftOutlined/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: "px-2",
        children: [tableOptions.pageNumber, "/", Math.ceil(tableOptions.total / tableOptions.numResults)]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "btn btn-outline-dark page_btn",
        disabled: tableOptions.pageNumber === Math.ceil(tableOptions.total / tableOptions.numResults) || tableOptions.loading,
        onClick: nextPage,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RightOutlined/* default */.Z, {})
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/export.tsx



function sales_export_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sales_export_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sales_export_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sales_export_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












;
var sales_export_Export = function Export(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // const CommercialControllingSales: CommercialControllingSalesReducer = useSelector((state: AppStore) => state.commercialControlProfitability);


  var getQuery = function getQuery() {
    var _props$filter$fromDat;

    var query = "grp=".concat(props.tableSwitch ? 'false' : 'true');
    query += props.filter.timeFrame ? "&periodicity=".concat(props.filter.timeFrame) : '';
    query += props.filter.periodLevel ? "&periodLevel=".concat(props.filter.periodLevel) : '';
    query += props.filter.fromDate ? "&year=".concat((_props$filter$fromDat = props.filter.fromDate) === null || _props$filter$fromDat === void 0 ? void 0 : _props$filter$fromDat.format('YYYY')) : '';
    query += props.filter.region ? "&region=".concat(props.filter.region.toLowerCase()) : '';
    query += props.filter.customer ? "&customer=".concat(props.filter.customer) : '';
    return query;
  };

  var path = function path() {
    var path = "";

    if (props.activeTab === model_Tabs.BY_CUSTOMER) {
      path = "BY_CUSTOMERS";
    } else {
      path = props.activeTab;
    }

    return path;
  };

  var exportExcel = function exportExcel() {
    // if(commercialControlProfitability.products.count != 0) { 
    var query = getQuery();
    setLoading(true);
    axios_default()(sales_export_objectSpread(sales_export_objectSpread({
      url: "".concat(config.apiRootSecure, "/xprt/sales/").concat(path()).concat(query ? "?".concat(query) : '')
    }, apiHeaders()), {}, {
      method: 'GET',
      responseType: 'blob'
    })).then(function (response) {
      setLoading(false);
      var blob = new Blob([response.data], {
        type: 'application/vnd.ms-excel'
      });
      var windowUrl = window.URL || window.webkitURL;
      var downloadUrl = windowUrl.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "commercial_controlling_sales_".concat(toPascalCase(props.activeTab), "_").concat(new Date().getTime(), ".xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (err) {
      setLoading(false);
      console.log(err);
    }); // }
    // else {
    //     message.error(i18Get('No Data Found', getLanguage()))
    // }    
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "primary_btn height_26_btn",
      onClick: exportExcel,
      children: loading ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Exporting"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Export"
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/components/customers.tsx









;
var customers_CustomersFilter = function CustomersFilter(props) {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      customers = _useState4[0],
      setCustomers = _useState4[1];

  var _useState5 = (0,react.useState)(true),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var CommercialControllingSales = (0,es/* useSelector */.v9)(function (state) {
    return state.commercialControlSales;
  });
  (0,react.useEffect)(function () {
    dispatch(fetchSalesFilterCustomer());
  }, []);
  (0,react.useEffect)(function () {
    if (CommercialControllingSales.fetchSalesFilterCustomerComplete == ResponseType.FULFILLED) {
      setCustomers(CommercialControllingSales.filterCustomerData);
      setLoading(false);
      dispatch(clearFetchSalesFilterCustomer());
    }

    if (CommercialControllingSales.fetchSalesFilterCustomerComplete == ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearFetchSalesFilterCustomer());
    }
  }, [CommercialControllingSales.fetchSalesFilterCustomerComplete]);
  (0,react.useEffect)(function () {
    if (customers.length) {
      var tempOptions = [];
      customers.map(function (el, index) {
        tempOptions.push( /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
          value: el.code,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
            tkey: toPascalCase(el.name)
          })
        }, "sales-report-customer-".concat(index)));
      });
      setOptions(tempOptions);
    }
  }, [customers]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
    allowClear: true,
    className: "mr-2",
    placeholder: i18Get('Customer', getLanguage()),
    value: props.customer,
    loading: loading,
    onChange: props.onChange,
    children: options
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/index.tsx



function sales_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sales_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sales_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sales_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















var CommercialControllingSales = function CommercialControllingSales() {
  var _useState = (0,react.useState)(model_Tabs.BY_PRODUCT),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      switchTable = _useState4[0],
      setSwitchTable = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      headerList = _useState6[0],
      setHeaderList = _useState6[1];

  var _useState7 = (0,react.useState)({
    timeFrame: TimeFrame.YEARLY,
    fromDate: dayjs_min_default()().set('year', 2021).set('month', 0).set('date', 1),
    toDate: dayjs_min_default()().set('year', 2021).set('month', 11).set('date', 31),
    periodLevel: 1,
    region: undefined,
    customer: undefined,
    prime: 'ALL'
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      filter = _useState8[0],
      setFilter = _useState8[1];

  var onTabChange = function onTabChange(tab) {
    setActiveTab(tab);
  };

  var toggleTable = function toggleTable() {
    setSwitchTable(!switchTable);
  };

  var onHeaderChange = function onHeaderChange(headers) {
    setHeaderList(headers);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my_overview_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "overview_tab_space_container d-flex justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "nav nav-tabs",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(model_Tabs.BY_PRODUCT);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === model_Tabs.BY_PRODUCT ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(model_Tabs.BY_PRODUCT.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(model_Tabs.BY_COUNTRY);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === model_Tabs.BY_COUNTRY ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(model_Tabs.BY_COUNTRY.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(model_Tabs.BY_REGION);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === model_Tabs.BY_REGION ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(model_Tabs.BY_REGION.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(model_Tabs.BY_CUSTOMER);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === model_Tabs.BY_CUSTOMER ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(model_Tabs.BY_CUSTOMER.replace(/_/g, ' '))
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return onTabChange(model_Tabs.TOP_10_CUSTOMERS);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top ".concat(activeTab === model_Tabs.TOP_10_CUSTOMERS ? 'active' : ''),
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: toPascalCase(model_Tabs.TOP_10_CUSTOMERS.replace(/_/g, ' '))
              })
            })
          })]
        })
      }), activeTab === model_Tabs.BY_PRODUCT || activeTab === model_Tabs.BY_CUSTOMER || activeTab === model_Tabs.BY_COUNTRY || activeTab === model_Tabs.BY_REGION ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(sales_export_Export, {
          activeTab: activeTab,
          filter: filter,
          tableSwitch: switchTable
        })
      }) : '']
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_subheader d-flex align-items-center justify-content-between",
      children: activeTab === model_Tabs.SALES ? /*#__PURE__*/(0,jsx_runtime.jsx)(manage_column_ManageColumn, {
        selectedHeader: headerList,
        onHeaderChange: onHeaderChange
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [activeTab != model_Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "pr-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
              tkey: 'Hierarchy'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
            defaultChecked: true,
            onChange: toggleTable
          })]
        }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "time_frame_container flex_1_1_10 ".concat(activeTab != model_Tabs.TOP_10_CUSTOMERS && (filter.timeFrame == TimeFrame.WEEKILY || filter.timeFrame == TimeFrame.HALF_YEARLY || filter.timeFrame == TimeFrame.QUARTERLY) ? 'time_frame_container_weekly' : ''),
          children: [activeTab != model_Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsx)(customers_CustomersFilter, {
            customer: filter.customer,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return sales_objectSpread(sales_objectSpread({}, prevState), {}, {
                  customer: e
                });
              });
            }
          }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)(SalesReportRegions, {
            region: filter.region,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return sales_objectSpread(sales_objectSpread({}, prevState), {}, {
                  region: e
                });
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(TimeFrameList, {
            skipDaily: true,
            value: filter.timeFrame,
            onChange: function onChange(e) {
              return setFilter(function (prevState) {
                return sales_objectSpread(sales_objectSpread({}, prevState), {}, {
                  timeFrame: e,
                  fromDate: dayjs_min_default()().set('year', 2021).set('month', 0).set('date', 1),
                  toDate: dayjs_min_default()().set('year', 2021).set('month', 11).set('date', 31),
                  periodLevel: 1
                });
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RangeDatePicker, {
            fromDate: filter.fromDate,
            toDate: filter.toDate,
            timeFrame: filter.timeFrame,
            onChange: function onChange(dates) {
              return setFilter(function (prevState) {
                return sales_objectSpread(sales_objectSpread({}, prevState), {}, {
                  fromDate: dates.fromDate,
                  toDate: dates.toDate,
                  periodLevel: dates.periodLevel
                });
              });
            }
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container",
      children: activeTab === model_Tabs.TOP_10_CUSTOMERS ? /*#__PURE__*/(0,jsx_runtime.jsx)(SalesTopCustomersTable, {
        filter: filter
      }) : activeTab === model_Tabs.SALES ? /*#__PURE__*/(0,jsx_runtime.jsx)(SalesTable, {
        headerList: headerList
      }) : switchTable ? /*#__PURE__*/(0,jsx_runtime.jsx)(table_expanded_CommercialControllingTableExpanded, {
        filter: filter,
        activeTab: activeTab
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(table_CommercialControllingTable, {
        filter: filter,
        activeTab: activeTab
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/index.tsx






;
var CommercialControlling = function CommercialControlling() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: CommercialControllingLocations.SALES,
      component: CommercialControllingSales
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: CommercialControllingLocations.PROFITABILITY,
      component: CommercialControllingProfitability
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: CommercialControllingLocations.SALES
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/redux/events.ts
var StockReportEvents;

(function (StockReportEvents) {
  StockReportEvents["FETCH_STOCK_REPORTS"] = "FETCH_STOCK_REPORTS";
  StockReportEvents["FETCH_STOCK_REPORTS_FULFILLED"] = "FETCH_STOCK_REPORTS_FULFILLED";
  StockReportEvents["FETCH_STOCK_REPORTS_REJECTED"] = "FETCH_STOCK_REPORTS_REJECTED";
  StockReportEvents["CLEAR_FETCH_STOCK_REPORTS"] = "CLEAR_FETCH_STOCK_REPORTS";
})(StockReportEvents || (StockReportEvents = {}));

;
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/redux/action.ts



var fetchStockReport = function fetchStockReport() {
  return {
    type: StockReportEvents.FETCH_STOCK_REPORTS,
    payload: axios_default().get("".concat(config.apiRootSecure, "/stockReport/products"))
  };
};
var clearFetchStockReport = function clearFetchStockReport() {
  return {
    type: StockReportEvents.CLEAR_FETCH_STOCK_REPORTS
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/init/index.ts
var initStockReportTableData = function initStockReportTableData() {
  return {
    rowspan: 0,
    name: '',
    product: '',
    hsm: 0,
    crm2: 0,
    crm3: 0,
    galvashops: 0,
    rebarmill: 0,
    pipemill: 0,
    grandtotal: 0,
    free_todespatch: 0,
    blocked: 0,
    prime: 0,
    nonprime: 0,
    loadonwagon: 0,
    grandincltotal: 0
  };
};
var initStockReportTableDataResponse = function initStockReportTableDataResponse() {
  return {
    wip_products: [],
    semis_products: [],
    fg_products: [],
    fgatcs_products: [],
    fgatport_products: [],
    total_wip: initStockReportTableData(),
    total_semis: initStockReportTableData(),
    total_fg: initStockReportTableData(),
    total_fgatcs: initStockReportTableData(),
    total_fgatport: initStockReportTableData(),
    totalfree: initStockReportTableData(),
    total: initStockReportTableData(),
    total_all: initStockReportTableData()
  };
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/components/stock-report.tsx











;
var StockReportTable = function StockReportTable(props) {
  var _useState = (0,react.useState)(initStockReportTableDataResponse()),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var StockReportReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.StockReportReducer;
  });
  (0,react.useEffect)(function () {
    dispatch(fetchStockReport());
    setLoading(true);
  }, []);
  (0,react.useEffect)(function () {
    if (StockReportReducer.stockReportComplete === ResponseType.FULFILLED) {
      setList(StockReportReducer.stockReportTableData);
      setLoading(false);
      dispatch(clearFetchStockReport());
    }

    if (StockReportReducer.stockReportComplete === ResponseType.REJECTED) {
      setList(initStockReportTableDataResponse());
      setLoading(false);
      dispatch(clearFetchStockReport());
    }
  }, [StockReportReducer.stockReportComplete]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "order_book_table h-100",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "table-responsive common_table_container stock_report_table",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              rowSpan: 2,
              className: "width_150 align-middle dark_bg_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Product"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 6,
              className: "stock_col_th_bg"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              rowSpan: 2,
              className: "no-border-th dark_bg_th border_right_white stock_col_th_bg align-middle",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Grand Total"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              colSpan: 2,
              className: "dark_bg_th stock_col_th_bg",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Grand Total"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "dark_bg_th stock_col_th_bg",
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Grand Total"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              rowSpan: 2,
              className: "no-border-th stock_col_th_bg align-middle",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Loaded On Wagons"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("th", {
              rowSpan: 2,
              className: "no-border-th total_column_bg_th align-middle",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                  tkey: "Grand Total"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "(Incl. loaded on wagons)"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "HSM"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "CRM2"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "CRM3"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Galva Shops"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Rebar Mill"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th stock_col_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Pipe Mill"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th left_before_border_th width_128_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Free For Dispatch"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th stock_col_th width_128_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Blocked"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th left_before_border_th width_90_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Prime"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              className: "no-border-th stock_col_th width_90_th",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Non Prime"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: !loading ? list && (list.wip_products && list.wip_products.length || list.semis_products && list.semis_products.length || list.fg_products && list.fg_products.length || list.fgatcs_products && list.fgatcs_products.length || list.fgatport_products && list.fgatport_products.length) ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [list.wip_products && list.wip_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.wip_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: data['rowspan'] ? 'stock_primary_tr' : '',
                  children: [data['rowspan'] ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "align-middle",
                    rowSpan: data['rowspan'],
                    children: data['name']
                  }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "width_150",
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['hsm'] ? Math.round(data['hsm']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm2'] ? Math.round(data['crm2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm3'] ? Math.round(data['crm3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['galvashops'] ? Math.round(data['galvashops']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['rebarmill'] ? Math.round(data['rebarmill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td stock_box_td",
                    children: data['pipemill'] ? Math.round(data['pipemill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['grandtotal'] ? Math.round(data['grandtotal']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['free_todespatch'] ? Math.round(data['free_todespatch']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['blocked'] ? Math.round(data['blocked']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['prime'] ? Math.round(data['prime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['nonprime'] ? Math.round(data['nonprime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['loadonwagon'] ? Math.round(data['loadonwagon']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center left_before_border_td",
                    children: data['grandincltotal'] ? Math.round(data['grandincltotal']) : '-'
                  })]
                }, "wip-product-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_wip['product'] ? list.total_wip['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_wip['hsm'] ? Math.round(list.total_wip['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_wip['crm2'] ? Math.round(list.total_wip['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_wip['crm3'] ? Math.round(list.total_wip['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_wip['galvashops'] ? Math.round(list.total_wip['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_wip['rebarmill'] ? Math.round(list.total_wip['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td stock_box_td",
                  children: list.total_wip['pipemill'] ? Math.round(list.total_wip['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_wip['grandtotal'] ? Math.round(list.total_wip['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_wip['free_todespatch'] ? Math.round(list.total_wip['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_wip['blocked'] ? Math.round(list.total_wip['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_wip['prime'] ? Math.round(list.total_wip['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_wip['nonprime'] ? Math.round(list.total_wip['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_wip['loadonwagon'] ? Math.round(list.total_wip['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.total_wip['grandincltotal'] ? Math.round(list.total_wip['grandincltotal']) : '-'
                })]
              })]
            }) : '', list.semis_products && list.semis_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.semis_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: data['rowspan'] ? 'stock_primary_tr' : '',
                  children: [data['rowspan'] ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "align-middle",
                    rowSpan: data['rowspan'],
                    children: data['name']
                  }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['hsm'] ? Math.round(data['hsm']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm2'] ? Math.round(data['crm2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm3'] ? Math.round(data['crm3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['galvashops'] ? Math.round(data['galvashops']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['rebarmill'] ? Math.round(data['rebarmill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td stock_box_td",
                    children: data['pipemill'] ? Math.round(data['pipemill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['grandtotal'] ? Math.round(data['grandtotal']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['free_todespatch'] ? Math.round(data['free_todespatch']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['blocked'] ? Math.round(data['blocked']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['prime'] ? Math.round(data['prime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td ",
                    children: data['nonprime'] ? Math.round(data['nonprime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['loadonwagon'] ? Math.round(data['loadonwagon']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center left_before_border_td",
                    children: data['grandincltotal'] ? Math.round(data['grandincltotal']) : '-'
                  })]
                }, "semis-product-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_semis['product'] ? list.total_semis['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_semis['hsm'] ? Math.round(list.total_semis['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_semis['crm2'] ? Math.round(list.total_semis['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_semis['crm3'] ? Math.round(list.total_semis['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_semis['galvashops'] ? Math.round(list.total_semis['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_semis['rebarmill'] ? Math.round(list.total_semis['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_semis['pipemill'] ? Math.round(list.total_semis['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_semis['grandtotal'] ? Math.round(list.total_semis['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_semis['free_todespatch'] ? Math.round(list.total_semis['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_semis['blocked'] ? Math.round(list.total_semis['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_semis['prime'] ? Math.round(list.total_semis['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_semis['nonprime'] ? Math.round(list.total_semis['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_semis['loadonwagon'] ? Math.round(list.total_semis['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.total_semis['grandincltotal'] ? Math.round(list.total_semis['grandincltotal']) : '-'
                })]
              })]
            }) : '', list.fg_products && list.fg_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.fg_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: data['rowspan'] ? 'stock_primary_tr' : '',
                  children: [data['rowspan'] ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "align-middle",
                    rowSpan: data['rowspan'],
                    children: data['name']
                  }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['hsm'] ? Math.round(data['hsm']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm2'] ? Math.round(data['crm2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm3'] ? Math.round(data['crm3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['galvashops'] ? Math.round(data['galvashops']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['rebarmill'] ? Math.round(data['rebarmill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['pipemill'] ? Math.round(data['pipemill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['grandtotal'] ? Math.round(data['grandtotal']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['free_todespatch'] ? Math.round(data['free_todespatch']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['blocked'] ? Math.round(data['blocked']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['prime'] ? Math.round(data['prime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['nonprime'] ? Math.round(data['nonprime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['loadonwagon'] ? Math.round(data['loadonwagon']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center left_before_border_td",
                    children: data['grandincltotal'] ? Math.round(data['grandincltotal']) : '-'
                  })]
                }, "fg-product-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_fg['product'] ? list.total_fg['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fg['hsm'] ? Math.round(list.total_fg['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fg['crm2'] ? Math.round(list.total_fg['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fg['crm3'] ? Math.round(list.total_fg['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fg['galvashops'] ? Math.round(list.total_fg['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fg['rebarmill'] ? Math.round(list.total_fg['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fg['pipemill'] ? Math.round(list.total_fg['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fg['grandtotal'] ? Math.round(list.total_fg['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fg['free_todespatch'] ? Math.round(list.total_fg['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fg['blocked'] ? Math.round(list.total_fg['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fg['prime'] ? Math.round(list.total_fg['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fg['nonprime'] ? Math.round(list.total_fg['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fg['loadonwagon'] ? Math.round(list.total_fg['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.total_fg['grandincltotal'] ? Math.round(list.total_fg['grandincltotal']) : '-'
                })]
              })]
            }) : '', list.fg_products && list.fg_products.length || list.semis_products && list.semis_products.length || list.wip_products && list.wip_products.length || list.fgatcs_products && list.fgatcs_products.length || list.fgatport_products && list.fgatport_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "main_total_row stock_primary_tr",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total['product'] ? list.total['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total['hsm'] ? Math.round(list.total['hsm']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total['crm2'] ? Math.round(list.total['crm2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total['crm3'] ? Math.round(list.total['crm3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total['galvashops'] ? Math.round(list.total['galvashops']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total['rebarmill'] ? Math.round(list.total['rebarmill']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total['pipemill'] ? Math.round(list.total['pipemill']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td left_before_border_td",
                children: list.total['grandtotal'] ? Math.round(list.total['grandtotal']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                children: list.total['free_todespatch'] ? Math.round(list.total['free_todespatch']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total['blocked'] ? Math.round(list.total['blocked']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                children: list.total['prime'] ? Math.round(list.total['prime']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total['nonprime'] ? Math.round(list.total['nonprime']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td left_before_border_td",
                children: list.total['loadonwagon'] ? Math.round(list.total['loadonwagon']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold left_before_border_td",
                children: list.total['grandincltotal'] ? Math.round(list.total['grandincltotal']) : '-'
              })]
            }) : '', list.fgatcs_products && list.fgatcs_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.fgatcs_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: data['rowspan'] ? 'stock_primary_tr' : '',
                  children: [data['rowspan'] ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "align-middle",
                    rowSpan: data['rowspan'],
                    children: data['name']
                  }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['hsm'] ? Math.round(data['hsm']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm2'] ? Math.round(data['crm2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm3'] ? Math.round(data['crm3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['galvashops'] ? Math.round(data['galvashops']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['rebarmill'] ? Math.round(data['rebarmill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['pipemill'] ? Math.round(data['pipemill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['grandtotal'] ? Math.round(data['grandtotal']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['free_todespatch'] ? Math.round(data['free_todespatch']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['blocked'] ? Math.round(data['blocked']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['prime'] ? Math.round(data['prime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['nonprime'] ? Math.round(data['nonprime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['loadonwagon'] ? Math.round(data['loadonwagon']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center left_before_border_td",
                    children: data['grandincltotal'] ? Math.round(data['grandincltotal']) : '-'
                  })]
                }, "fg-product-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_fgatcs['product'] ? list.total_fgatcs['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatcs['hsm'] ? Math.round(list.total_fgatcs['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatcs['crm2'] ? Math.round(list.total_fgatcs['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatcs['crm3'] ? Math.round(list.total_fgatcs['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatcs['galvashops'] ? Math.round(list.total_fgatcs['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatcs['rebarmill'] ? Math.round(list.total_fgatcs['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatcs['pipemill'] ? Math.round(list.total_fgatcs['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fgatcs['grandtotal'] ? Math.round(list.total_fgatcs['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fgatcs['free_todespatch'] ? Math.round(list.total_fgatcs['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatcs['blocked'] ? Math.round(list.total_fgatcs['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fgatcs['prime'] ? Math.round(list.total_fgatcs['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatcs['nonprime'] ? Math.round(list.total_fgatcs['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fgatcs['loadonwagon'] ? Math.round(list.total_fgatcs['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.total_fgatcs['grandincltotal'] ? Math.round(list.total_fgatcs['grandincltotal']) : '-'
                })]
              })]
            }) : '', list.fgatport_products && list.fgatport_products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [list.fgatport_products.map(function (data, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: data['rowspan'] ? 'stock_primary_tr' : '',
                  children: [data['rowspan'] ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "align-middle",
                    rowSpan: data['rowspan'],
                    children: data['name']
                  }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: data['product'] ? data['product'] : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['hsm'] ? Math.round(data['hsm']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm2'] ? Math.round(data['crm2']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['crm3'] ? Math.round(data['crm3']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['galvashops'] ? Math.round(data['galvashops']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td",
                    children: data['rebarmill'] ? Math.round(data['rebarmill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['pipemill'] ? Math.round(data['pipemill']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['grandtotal'] ? Math.round(data['grandtotal']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['free_todespatch'] ? Math.round(data['free_todespatch']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['blocked'] ? Math.round(data['blocked']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center no_right_border_td left_before_border_td",
                    children: data['prime'] ? Math.round(data['prime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td",
                    children: data['nonprime'] ? Math.round(data['nonprime']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center stock_box_td left_before_border_td",
                    children: data['loadonwagon'] ? Math.round(data['loadonwagon']) : '-'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    className: "text_center left_before_border_td",
                    children: data['grandincltotal'] ? Math.round(data['grandincltotal']) : '-'
                  })]
                }, "fg-product-".concat(index));
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.total_fgatport['product'] ? list.total_fgatport['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatport['hsm'] ? Math.round(list.total_fgatport['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatport['crm2'] ? Math.round(list.total_fgatport['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatport['crm3'] ? Math.round(list.total_fgatport['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatport['galvashops'] ? Math.round(list.total_fgatport['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.total_fgatport['rebarmill'] ? Math.round(list.total_fgatport['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatport['pipemill'] ? Math.round(list.total_fgatport['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fgatport['grandtotal'] ? Math.round(list.total_fgatport['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fgatport['free_todespatch'] ? Math.round(list.total_fgatport['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatport['blocked'] ? Math.round(list.total_fgatport['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.total_fgatport['prime'] ? Math.round(list.total_fgatport['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.total_fgatport['nonprime'] ? Math.round(list.total_fgatport['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.total_fgatport['loadonwagon'] ? Math.round(list.total_fgatport['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.total_fgatport['grandincltotal'] ? Math.round(list.total_fgatport['grandincltotal']) : '-'
                })]
              })]
            }) : '', list.totalfree ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                className: "main_total_row stock_primary_tr",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "font_weight_bold",
                  children: list.totalfree['product'] ? list.totalfree['product'] : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.totalfree['hsm'] ? Math.round(list.totalfree['hsm']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.totalfree['crm2'] ? Math.round(list.totalfree['crm2']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.totalfree['crm3'] ? Math.round(list.totalfree['crm3']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.totalfree['galvashops'] ? Math.round(list.totalfree['galvashops']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td",
                  children: list.totalfree['rebarmill'] ? Math.round(list.totalfree['rebarmill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.totalfree['pipemill'] ? Math.round(list.totalfree['pipemill']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.totalfree['grandtotal'] ? Math.round(list.totalfree['grandtotal']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.totalfree['free_todespatch'] ? Math.round(list.totalfree['free_todespatch']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.totalfree['blocked'] ? Math.round(list.totalfree['blocked']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                  children: list.totalfree['prime'] ? Math.round(list.totalfree['prime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td",
                  children: list.totalfree['nonprime'] ? Math.round(list.totalfree['nonprime']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold stock_box_td left_before_border_td",
                  children: list.totalfree['loadonwagon'] ? Math.round(list.totalfree['loadonwagon']) : '-'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text_center font_weight_bold left_before_border_td",
                  children: list.totalfree['grandincltotal'] ? Math.round(list.totalfree['grandincltotal']) : '-'
                })]
              })
            }) : '', list.total_all ? /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: "grand_total_row stock_primary_tr",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "font_weight_bold",
                children: list.total_all['product'] ? list.total_all['product'] : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total_all['hsm'] ? Math.round(list.total_all['hsm']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total_all['crm2'] ? Math.round(list.total_all['crm2']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total_all['crm3'] ? Math.round(list.total_all['crm3']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total_all['galvashops'] ? Math.round(list.total_all['galvashops']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td",
                children: list.total_all['rebarmill'] ? Math.round(list.total_all['rebarmill']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total_all['pipemill'] ? Math.round(list.total_all['pipemill']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td left_before_border_td",
                children: list.total_all['grandtotal'] ? Math.round(list.total_all['grandtotal']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                children: list.total_all['free_todespatch'] ? Math.round(list.total_all['free_todespatch']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total_all['blocked'] ? Math.round(list.total_all['blocked']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold no_right_border_td left_before_border_td",
                children: list.total_all['prime'] ? Math.round(list.total_all['prime']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td",
                children: list.total_all['nonprime'] ? Math.round(list.total_all['nonprime']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold stock_box_td left_before_border_td",
                children: list.total_all['loadonwagon'] ? Math.round(list.total_all['loadonwagon']) : '-'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: "text_center font_weight_bold left_before_border_td",
                children: list.total_all['grandincltotal'] ? Math.round(list.total_all['grandincltotal']) : '-'
              })]
            }) : '']
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            className: "stock_primary_tr",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data stock_box_td",
              colSpan: 6,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data stock_box_td",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data stock_box_td",
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data stock_box_td",
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data stock_box_td",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "no_data",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "No Data"
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            className: "stock_primary_tr",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading stock_box_td",
              colSpan: 6,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading stock_box_td",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading stock_box_td",
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading stock_box_td",
              colSpan: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading stock_box_td",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: "table_loading",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {})
            })]
          })
        })]
      })
    })
  });
};
/* harmony default export */ var stock_report = (StockReportTable);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/overview/reports/stock-report/stock-report.scss
var stock_report_stock_report = __webpack_require__(706);
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/stock-report.scss

      
      
      
      
      
      
      
      
      

var stock_report_options = {};

stock_report_options.styleTagTransform = (styleTagTransform_default());
stock_report_options.setAttributes = (setAttributesWithoutAttributes_default());

      stock_report_options.insert = insertBySelector_default().bind(null, "head");
    
stock_report_options.domAPI = (styleDomAPI_default());
stock_report_options.insertStyleElement = (insertStyleElement_default());

var stock_report_update = injectStylesIntoStyleTag_default()(stock_report_stock_report/* default */.Z, stock_report_options);




       /* harmony default export */ var reports_stock_report_stock_report = (stock_report_stock_report/* default */.Z && stock_report_stock_report/* default.locals */.Z.locals ? stock_report_stock_report/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/components/export.tsx



function components_export_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_export_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_export_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_export_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










;
var components_export_Export = function Export(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var exportExcel = function exportExcel() {
    setLoading(true);
    axios_default()(components_export_objectSpread(components_export_objectSpread({
      url: "".concat(config.apiRootSecure, "/xprt/stockReport/products")
    }, apiHeaders()), {}, {
      method: 'GET',
      responseType: 'blob'
    })).then(function (response) {
      setLoading(false);
      var blob = new Blob([response.data], {
        type: 'application/vnd.ms-excel'
      });
      var windowUrl = window.URL || window.webkitURL;
      var downloadUrl = windowUrl.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "Stock_report_".concat(new Date().getTime(), ".xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (err) {
      setLoading(false);
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "primary_btn height_26_btn",
      onClick: exportExcel,
      children: loading ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Exporting"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "export_icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {
            className: "mr-2"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
          tkey: "Export"
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/index.tsx






;
var StockReport = function StockReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my_overview_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "overview_tab_space_container d-flex justify-content-between",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          className: "nav nav-tabs",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "nav-link nav-link-top active",
              "aria-current": "page",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(i18, {
                tkey: "Stock Report"
              })
            })
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "order_book_subheader d-flex align-items-center justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(components_export_Export, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "order_book_content_container",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(stock_report, {})
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/index.tsx








;
var Reports = function Reports() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: ReportLocations.ORDERBOOK_ANALYSIS,
      component: OrderBookAnalysis
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: ReportLocations.DATA_ENTRY,
      component: DataEntry
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: ReportLocations.COMMERCIAL_CONTROLLING,
      component: CommercialControlling
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: ReportLocations.STOCK_REPORT,
      component: StockReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: ReportLocations.ORDERBOOK_ANALYSIS
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/power-bi-report/stock-report.tsx

;
var stock_report_StockReport = function StockReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
    frameBorder: "0",
    src: "https://app.powerbi.com/reportEmbed?reportId=e3c36f35-96ac-4f4e-bca7-cc7f0eaf4731&autoAuth=true&ctid=37cd273a-1cec-4aae-a297-41480ea54f8d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1lLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
    name: "Stock report",
    title: "Stock report",
    className: "iframe"
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/power-bi-report/order-report.tsx

;
var OrderReport = function OrderReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
    frameBorder: "0",
    src: "https://app.powerbi.com/reportEmbed?reportId=03b7300c-c8ac-4397-935e-8e2726c73772&autoAuth=true&ctid=37cd273a-1cec-4aae-a297-41480ea54f8d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1lLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
    name: "order Report",
    title: "Order book",
    className: "iframe"
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/power-bi-report/profitability-report.tsx

;
var ProfitabilityReport = function ProfitabilityReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
    frameBorder: "0",
    src: "https://app.powerbi.com/reportEmbed?reportId=db76077e-b612-43f4-b92a-1d08de42dbc4&autoAuth=true&ctid=37cd273a-1cec-4aae-a297-41480ea54f8d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1lLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
    name: "Profitability Report",
    title: "Profitability Report",
    className: "iframe"
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/power-bi-report/monthly-report.tsx

;
var MonthlyReport = function MonthlyReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
    width: "1140",
    height: "541.25",
    src: "https://app.powerbi.com/reportEmbed?reportId=6448d744-4628-4193-86e0-c78e84e6dc9e&autoAuth=true&ctid=37cd273a-1cec-4aae-a297-41480ea54f8d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1lLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/power-bi-report/index.tsx








;
var PowerBiReport = function PowerBiReport() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: PowerBiReportLocations.ORDER_REPORT,
      component: OrderReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: PowerBiReportLocations.STOCK_REPORT,
      component: stock_report_StockReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: PowerBiReportLocations.PROFITABILITY_REPORT,
      component: ProfitabilityReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: PowerBiReportLocations.MONTHLY_REPORT,
      component: MonthlyReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: PowerBiReportLocations.ORDER_REPORT
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/main-container/overview/index.tsx






;
var Overview = function Overview() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: Locations.REPORTS,
      component: Reports
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: Locations.POWER_BI_REPORT,
      component: PowerBiReport
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: Locations.REPORTS
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/main-container/main-container.scss
var main_container = __webpack_require__(78202);
;// CONCATENATED MODULE: ./src/components/main-container/main-container.scss

      
      
      
      
      
      
      
      
      

var main_container_options = {};

main_container_options.styleTagTransform = (styleTagTransform_default());
main_container_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_container_options.insert = insertBySelector_default().bind(null, "head");
    
main_container_options.domAPI = (styleDomAPI_default());
main_container_options.insertStyleElement = (insertStyleElement_default());

var main_container_update = injectStylesIntoStyleTag_default()(main_container/* default */.Z, main_container_options);




       /* harmony default export */ var main_container_main_container = (main_container/* default */.Z && main_container/* default.locals */.Z.locals ? main_container/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/main-container/index.tsx








;
var MainContainer = function MainContainer() {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      sidebarToggle = _useState2[0],
      setSidebarToggle = _useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "h-100",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "main_container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "sidebar ".concat(sidebarToggle ? 'sidebar_closed' : '', " "),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SideBar, {
          sidebarToggle: sidebarToggle,
          setSidebarToggle: setSidebarToggle
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "main_content_container ".concat(sidebarToggle ? 'main_content_sidebar_toggled' : '', " "),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Overview, {})
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/router/index.tsx








;
var Router = function Router() {
  var loginReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.login;
  });
  var storedData = '{}';

  if (localStorage.getItem(StoredKeys.USER_DETAILS)) {
    storedData = localStorage.getItem(StoredKeys.USER_DETAILS) ? localStorage.getItem(StoredKeys.USER_DETAILS) : '';
    storedData = typeof storedData === 'string' ? window.atob(storedData) : '{}';
  }

  var userDetails = JSON.parse(storedData);

  if (userDetails && Object.keys(userDetails).length) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: Locations.DASHBOARD,
        component: MainContainer
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
        to: Locations.DASHBOARD
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: Locations.DASHBOARD,
        component: User
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
        to: Locations.DASHBOARD
      })]
    });
  }
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss
var cjs_js_src = __webpack_require__(94800);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var src_options = {};

src_options.styleTagTransform = (styleTagTransform_default());
src_options.setAttributes = (setAttributesWithoutAttributes_default());

      src_options.insert = insertBySelector_default().bind(null, "head");
    
src_options.domAPI = (styleDomAPI_default());
src_options.insertStyleElement = (insertStyleElement_default());

var src_update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, src_options);




       /* harmony default export */ var src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss
var cjs_js_src_style = __webpack_require__(17192);
;// CONCATENATED MODULE: ./src/style.scss

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(cjs_js_src_style/* default */.Z, style_options);




       /* harmony default export */ var src_style = (cjs_js_src_style/* default */.Z && cjs_js_src_style/* default.locals */.Z.locals ? cjs_js_src_style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/color.scss
var color = __webpack_require__(39382);
;// CONCATENATED MODULE: ./src/color.scss

      
      
      
      
      
      
      
      
      

var color_options = {};

color_options.styleTagTransform = (styleTagTransform_default());
color_options.setAttributes = (setAttributesWithoutAttributes_default());

      color_options.insert = insertBySelector_default().bind(null, "head");
    
color_options.domAPI = (styleDomAPI_default());
color_options.insertStyleElement = (insertStyleElement_default());

var color_update = injectStylesIntoStyleTag_default()(color/* default */.Z, color_options);




       /* harmony default export */ var src_color = (color/* default */.Z && color/* default.locals */.Z.locals ? color/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/font.scss
var font = __webpack_require__(17804);
;// CONCATENATED MODULE: ./src/font.scss

      
      
      
      
      
      
      
      
      

var font_options = {};

font_options.styleTagTransform = (styleTagTransform_default());
font_options.setAttributes = (setAttributesWithoutAttributes_default());

      font_options.insert = insertBySelector_default().bind(null, "head");
    
font_options.domAPI = (styleDomAPI_default());
font_options.insertStyleElement = (insertStyleElement_default());

var font_update = injectStylesIntoStyleTag_default()(font/* default */.Z, font_options);




       /* harmony default export */ var src_font = (font/* default */.Z && font/* default.locals */.Z.locals ? font/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-promise-middleware/dist/es/index.js + 1 modules
var dist_es = __webpack_require__(5068);
;// CONCATENATED MODULE: ./src/plugins/action-button/redux/reducer.ts


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  actionTriggered: false
};
/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionButtonEvents.TRIGGER_ACTION_BUTTON:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        actionTriggered: true
      });

    case ActionButtonEvents.CLEAR_TRIGGER_ACTION_BUTTON:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        actionTriggered: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/user/login/redux/reducer.ts


function redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var reducer_initialState = {
  userDetails: {},
  loginCompleted: false
};
/* harmony default export */ var redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LoginEvents.LOGIN_FULLFILED:
      return redux_reducer_objectSpread(redux_reducer_objectSpread({}, state), {}, {
        userDetails: action.payload.data['data'],
        loginCompleted: ResponseType.FULFILLED
      });

    case LoginEvents.LOGIN_REJECTED:
      return redux_reducer_objectSpread(redux_reducer_objectSpread({}, state), {}, {
        loginCompleted: ResponseType.REJECTED
      });

    case LoginEvents.CLEAR_LOGIN:
      return redux_reducer_objectSpread(redux_reducer_objectSpread({}, state), {}, {
        loginCompleted: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/orderbook-analysis/redux/reducer.ts


function orderbook_analysis_redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function orderbook_analysis_redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { orderbook_analysis_redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { orderbook_analysis_redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var redux_reducer_initialState = {
  fetchOrderbookRegionsComplete: false,
  regions: [],
  fetchOrderbookProductsComplete: false,
  products: ProductsResponseInit(),
  fetchWeeksComplete: false,
  weeks: [],
  fetchZayvkasComplete: false,
  zayvkasProduct: ZayvkaProductsResponseInit(),
  fetchOrderBookFilterUserStatusComplete: false,
  FilterUserStatus: [],
  fetchOrderBookFilterPlantsComplete: false,
  FilterPlants: [],
  fetchZayvkasFilterPlantsComplete: false,
  zayvkasFilterPlants: []
};
/* harmony default export */ var orderbook_analysis_redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : redux_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case OrderBookEvents.FETCH_ORDERBOOK_REGIONS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookRegionsComplete: ResponseType.FULFILLED,
        regions: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ORDERBOOK_REGIONS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookRegionsComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ORDERBOOK_REGIONS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookRegionsComplete: false
      });

    case OrderBookEvents.FETCH_ORDERBOOK_PRODUCTS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookProductsComplete: ResponseType.FULFILLED,
        products: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ORDERBOOK_PRODUCTS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookProductsComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ORDERBOOK_PRODUCTS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderbookProductsComplete: false
      });

    case OrderBookEvents.FETCH_WEEKS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchWeeksComplete: ResponseType.FULFILLED,
        weeks: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_WEEKS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchWeeksComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_WEEKS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchWeeksComplete: false
      });

    case OrderBookEvents.FETCH_ZAYVKAS_PRODUCTS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasComplete: ResponseType.FULFILLED,
        zayvkasProduct: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ZAYVKAS_PRODUCTS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ZAYVKAS_PRODUCTS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasComplete: false
      });

    case OrderBookEvents.FETCH_ORDER_BOOK_FILTER_USER_STATUS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterUserStatusComplete: ResponseType.FULFILLED,
        FilterUserStatus: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ORDER_BOOK_FILTER_USER_STATUS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterUserStatusComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ORDER_BOOK_FILTER_USER_STATUS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterUserStatusComplete: false
      });

    case OrderBookEvents.FETCH_ORDER_BOOK_FILTER_PLANTS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterPlantsComplete: ResponseType.FULFILLED,
        FilterPlants: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ORDER_BOOK_FILTER_PLANTS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterPlantsComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ORDER_BOOK_FILTER_PLANTS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchOrderBookFilterPlantsComplete: false
      });

    case OrderBookEvents.FETCH_ZAYVKAS_FILTER_PLANTS_FULFILLED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasFilterPlantsComplete: ResponseType.FULFILLED,
        zayvkasFilterPlants: action.payload.data['data']
      });

    case OrderBookEvents.FETCH_ZAYVKAS_FILTER_PLANTS_REJECTED:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasFilterPlantsComplete: ResponseType.REJECTED
      });

    case OrderBookEvents.CLEAR_FETCH_ZAYVKAS_FILTER_PLANTS:
      return orderbook_analysis_redux_reducer_objectSpread(orderbook_analysis_redux_reducer_objectSpread({}, state), {}, {
        fetchZayvkasFilterPlantsComplete: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/sales/redux/reducer.ts


function sales_redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sales_redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sales_redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sales_redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var sales_redux_reducer_initialState = {
  fetchSalesByProductComplete: false,
  fetchSalesByProductSubProductsComplete: false,
  fetchSalesByProductTotalComplete: false,
  total: initSalesGroupTotalData(),
  products: initSalesGroupResponse(),
  subProducts: initSalesGroupResponse(),
  fetchSalesReportRegionsComplete: false,
  regions: [],
  fetchSalesByCountryComplete: false,
  countries: initSalesGroupResponse(),
  fetchSalesByCountryTotalComplete: false,
  countriesTotal: initSalesGroupTotalData(),
  fetchSalesByCountrySubRowComplete: false,
  subCountries: initSalesGroupResponse(),
  fetchSalesByRegionComplete: false,
  region: initSalesGroupResponse(),
  fetchSalesByRegionTotalComplete: false,
  regionTotal: initSalesGroupTotalData(),
  fetchSalesByRegionSubRowComplete: false,
  subRegion: initSalesGroupResponse(),
  fetchSalesByCustomerComplete: false,
  customers: initSalesGroupResponse(),
  fetchSalesByCustomerTotalComplete: false,
  customersTotal: initSalesGroupTotalData(),
  fetchSalesByCustomerSubRowComplete: false,
  subCustomers: initSalesGroupResponse(),
  fetchSalesByProductPivotComplete: false,
  productsPivot: initSalesGroupPivotResponse(),
  fetchSalesByCountryPivotComplete: false,
  countryPivot: initSalesGroupPivotResponse(),
  fetchSalesByCustomerPivotComplete: false,
  customerPivot: initSalesGroupPivotResponse(),
  fetchSalesByRegionPivotComplete: false,
  regionPivot: initSalesGroupPivotResponse(),
  fetchSalesHeaderComplete: false,
  headers: init_initHeaderResponse(),
  updateSalesHeaderComplete: false,
  fetchSalesTableDataComplete: false,
  salesTableData: {
    count: 0,
    data: []
  },
  fetchSalesTop10CustomersComplete: false,
  top10customers: [],
  fetchSalesTop10CustomersTotalComplete: false,
  top10customersTotal: initTop10CustomersData(),
  fetchSalesFilterCustomerComplete: false,
  filterCustomerData: []
};
/* harmony default export */ var sales_redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sales_redux_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductComplete: ResponseType.FULFILLED,
        products: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductSubProductsComplete: ResponseType.FULFILLED,
        subProducts: sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_PENDING:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductSubProductsComplete: ResponseType.PENDING
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductSubProductsComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_SUB_PRODUCTS:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductSubProductsComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_TOTAL_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductTotalComplete: ResponseType.FULFILLED,
        total: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_TOTAL_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductTotalComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_TOTAL:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductTotalComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_REPORT_REGIONS_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesReportRegionsComplete: ResponseType.FULFILLED,
        regions: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_REPORT_REGIONS_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesReportRegionsComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_REPORT_REGIONS:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesReportRegionsComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryComplete: ResponseType.FULFILLED,
        countries: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_TOTAL_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryTotalComplete: ResponseType.FULFILLED,
        countriesTotal: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_TOTAL_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryTotalComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_TOTAL:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryTotalComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_SUB_ROW_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountrySubRowComplete: ResponseType.FULFILLED,
        subCountries: sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_SUB_ROW_PENDING:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountrySubRowComplete: ResponseType.PENDING
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_SUB_ROW_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountrySubRowComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_SUB_ROW:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountrySubRowComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionComplete: ResponseType.FULFILLED,
        region: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_TOTAL_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionTotalComplete: ResponseType.FULFILLED,
        regionTotal: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_TOTAL_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionTotalComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_TOTAL:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionTotalComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_SUB_ROW_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionSubRowComplete: ResponseType.FULFILLED,
        subRegion: sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_SUB_ROW_PENDING:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionSubRowComplete: ResponseType.PENDING
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_SUB_ROW_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionSubRowComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_SUB_ROW:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionSubRowComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerComplete: ResponseType.FULFILLED,
        customers: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_TOTAL_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerTotalComplete: ResponseType.FULFILLED,
        customersTotal: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_TOTAL_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerTotalComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_TOTAL:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerTotalComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_SUB_ROW_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerSubRowComplete: ResponseType.FULFILLED,
        subCustomers: sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_SUB_ROW_PENDING:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerSubRowComplete: ResponseType.PENDING
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_SUB_ROW_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerSubRowComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_SUB_ROW:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerSubRowComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_PIVOT_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductPivotComplete: ResponseType.FULFILLED,
        productsPivot: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_PRODUCT_PIVOT_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductPivotComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_PRODUCT_PIVOT:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByProductPivotComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_PIVOT_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryPivotComplete: ResponseType.FULFILLED,
        countryPivot: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_COUNTRY_PIVOT_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryPivotComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_COUNTRY_PIVOT:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCountryPivotComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_PIVOT_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerPivotComplete: ResponseType.FULFILLED,
        customerPivot: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_CUSTOMER_PIVOT_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerPivotComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_CUSTOMER_PIVOT:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByCustomerPivotComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_PIVOT_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionPivotComplete: ResponseType.FULFILLED,
        regionPivot: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_BY_REGION_PIVOT_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionPivotComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_BY_REGION_PIVOT:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesByRegionPivotComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_HEADERS_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesHeaderComplete: ResponseType.FULFILLED,
        headers: action.payload.data['data'] && action.payload.data['data'].length ? action.payload.data['data'][0] : init_initHeaderResponse()
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_HEADERS_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesHeaderComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TABLE_HEADERS:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesHeaderComplete: false
      });

    case redux_events_CommercialControllingEvents.UPDATE_SALES_HEADERS_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        updateSalesHeaderComplete: ResponseType.FULFILLED
      });

    case redux_events_CommercialControllingEvents.UPDATE_SALES_HEADERS_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        updateSalesHeaderComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_UPDATE_SALES_HEADERS:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        updateSalesHeaderComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_DATA_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        salesTableData: action.payload.data['data'],
        fetchSalesTableDataComplete: ResponseType.FULFILLED
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TABLE_DATA_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTableDataComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TABLE_DATA:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTableDataComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersComplete: ResponseType.FULFILLED,
        top10customers: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TOP_10_CUSTOMERS:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersTotalComplete: ResponseType.FULFILLED,
        top10customersTotal: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_TOP_10_CUSTOMERS_TOTAL_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_TOP_10_CUSTOMERS_TOTAL:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesTop10CustomersComplete: false
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_FILTER_CUSTOMER_FULFILLED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesFilterCustomerComplete: ResponseType.FULFILLED,
        filterCustomerData: action.payload.data['data']
      });

    case redux_events_CommercialControllingEvents.FETCH_SALES_FILTER_CUSTOMER_REJECTED:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesFilterCustomerComplete: ResponseType.REJECTED
      });

    case redux_events_CommercialControllingEvents.CLEAR_FETCH_SALES_FILTER_CUSTOMER:
      return sales_redux_reducer_objectSpread(sales_redux_reducer_objectSpread({}, state), {}, {
        fetchSalesFilterCustomerComplete: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/data-entry/redux/reducer.ts


function data_entry_redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function data_entry_redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_entry_redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_entry_redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var data_entry_redux_reducer_initialState = {
  createVariableCostComplete: false,
  fetchProductsComplete: false,
  products: initProductsResponse(),
  createProductComplete: false,
  fetchOneProductComplete: false,
  productOne: initProductData(),
  editProductComplete: false,
  deleteProductComplete: false,
  fetchVariableCostComplete: false,
  variableCostList: initVariableCostResponse(),
  fetchOneVariableCostComplete: false,
  variableCostOne: initVariableCostDataApi(),
  editVariableCostComplete: false,
  deleteVariableCostComplete: false,
  fetchProductsInvComplete: false,
  productsInv: initProductsInvResponse(),
  deleteProductInvComplete: false,
  fetchOneProductInvComplete: false,
  productInvOne: initProductInvOneResponse(),
  editProductInvComplete: false,
  createProductInvComplete: false,
  fetchCountryDataEntryComplete: false,
  countryDataEntry: initCountryDataEntryResponse(),
  fetchOneCountryDataEntryComplete: false,
  countryDataEntryOne: initCountryDataEntryOneResponse(),
  createCountryComplete: false,
  editCountryComplete: false,
  deleteCountryComplete: false,
  fetchRegionDataEntryComplete: false,
  region: initRegionResponse(),
  editRegionDataEntryComplete: false,
  createRegionDataEntryComplete: false,
  deleteRegionDataEntryComplete: false,
  fetchOneRegionDataEntryComplete: false,
  regionOne: initRegionOneResponse(),
  fetchProductsGroupComplete: false,
  productsGroup: initProductsGroupResponse(),
  createProductGroupComplete: false,
  fetchOneProductGroupComplete: false,
  productGroupOne: initProductGroupData(),
  editProductGroupComplete: false,
  deleteProductGroupComplete: false,
  fetchCountrySupplyComplete: false,
  countrySupply: initCountrySupply(),
  fetchOneCountrySupplyComplete: false,
  countrySupplyOne: initCountrySupplyOne(),
  createCountrySupplyComplete: false,
  editCountrySupplyComplete: false,
  deleteCountrySupplyComplete: false,
  fetchInvenstionsWipComplete: false,
  invenstionsWip: initInvenstionsWipResponse(),
  deleteInvenstionWipComplete: false,
  fetchOneInvenstionWipComplete: false,
  InvenstionWipOne: initInvenstionWipOneResponse(),
  editInvenstionWipComplete: false,
  createInvenstionWipComplete: false
};
/* harmony default export */ var data_entry_redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data_entry_redux_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case events_DataEntryEvents.CREATE_VARIABLE_COST_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createVariableCostComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_VARIABLE_COST_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createVariableCostComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_VARIABLE_COST:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createVariableCostComplete: false
      });

    case events_DataEntryEvents.FETCH_PRODUCTS_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsComplete: ResponseType.FULFILLED,
        products: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_PRODUCTS_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_PRODUCTS:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsComplete: false
      });

    case events_DataEntryEvents.CREATE_PRODUCT_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_PRODUCT_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_PRODUCT:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductComplete: ResponseType.FULFILLED,
        productOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductComplete: false
      });

    case events_DataEntryEvents.EDIT_PRODUCT_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_PRODUCT_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_PRODUCT:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductComplete: false
      });

    case events_DataEntryEvents.DELETE_PRODUCT_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_PRODUCT_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_PRODUCT:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductComplete: false
      });

    case events_DataEntryEvents.FETCH_VARIABLE_COST_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchVariableCostComplete: ResponseType.FULFILLED,
        variableCostList: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_VARIABLE_COST_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchVariableCostComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_VARIABLE_COST:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchVariableCostComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_VARIABLE_COST_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneVariableCostComplete: ResponseType.FULFILLED,
        variableCostOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_VARIABLE_COST_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneVariableCostComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_VARIABLE_COST:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneVariableCostComplete: false
      });

    case events_DataEntryEvents.EDIT_VARIABLE_COST_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editVariableCostComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_VARIABLE_COST_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editVariableCostComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_VARIABLE_COST:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editVariableCostComplete: false
      });

    case events_DataEntryEvents.DELETE_VARIABLE_COST_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteVariableCostComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_VARIABLE_COST_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteVariableCostComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_VARIABLE_COST:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteVariableCostComplete: false
      });

    case events_DataEntryEvents.FETCH_PRODUCTS_INV_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsInvComplete: ResponseType.FULFILLED,
        productsInv: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_PRODUCTS_INV_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsInvComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_PRODUCTS_INV:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsInvComplete: false
      });

    case events_DataEntryEvents.DELETE_PRODUCT_INV_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductInvComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_PRODUCT_INV_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductInvComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_PRODUCT_INV:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductInvComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_INV_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductInvComplete: ResponseType.FULFILLED,
        productInvOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_INV_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductInvComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT_INV:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductInvComplete: false
      });

    case events_DataEntryEvents.EDIT_PRODUCT_INV_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductInvComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_PRODUCT_INV_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductInvComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_PRODUCT_INV:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductInvComplete: false
      });

    case events_DataEntryEvents.CREATE_PRODUCT_INV_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductInvComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_PRODUCT_INV_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductInvComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_PRODUCT_INV:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductInvComplete: false
      });
    // Wip Only

    case events_DataEntryEvents.FETCH_INVENSTIONS_WIP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchInvenstionsWipComplete: ResponseType.FULFILLED,
        invenstionsWip: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_INVENSTIONS_WIP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchInvenstionsWipComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_INVENSTIONS_WIP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchInvenstionsWipComplete: false
      });

    case events_DataEntryEvents.DELETE_INVENSTION_WIP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteInvenstionWipComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_INVENSTION_WIP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteInvenstionWipComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_INVENSTION_WIP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteInvenstionWipComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_INVENSTION_WIP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneInvenstionWipComplete: ResponseType.FULFILLED,
        InvenstionWipOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_INVENSTION_WIP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneInvenstionWipComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_INVENSTION_WIP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneInvenstionWipComplete: false
      });

    case events_DataEntryEvents.EDIT_INVENSTION_WIP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editInvenstionWipComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_INVENSTION_WIP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editInvenstionWipComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_INVENSTION_WIP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editInvenstionWipComplete: false
      });

    case events_DataEntryEvents.CREATE_INVENSTION_WIP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createInvenstionWipComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_INVENSTION_WIP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createInvenstionWipComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_INVENSTION_WIP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createInvenstionWipComplete: false
      });

    case events_DataEntryEvents.FETCH_COUNTRY_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountryDataEntryComplete: ResponseType.FULFILLED,
        countryDataEntry: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_COUNTRY_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountryDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_COUNTRY_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountryDataEntryComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_COUNTRY_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountryDataEntryComplete: ResponseType.FULFILLED,
        countryDataEntryOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_COUNTRY_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountryDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_COUNTRY_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountryDataEntryComplete: false
      });

    case events_DataEntryEvents.CREATE_COUNTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_COUNTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_COUNTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountryComplete: false
      });

    case events_DataEntryEvents.EDIT_COUNTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_COUNTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_COUNTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountryComplete: false
      });

    case events_DataEntryEvents.DELETE_COUNTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_COUNTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_COUNTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountryComplete: false
      });

    case events_DataEntryEvents.FETCH_REGION_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchRegionDataEntryComplete: ResponseType.FULFILLED,
        region: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_REGION_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchRegionDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_REGION_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchRegionDataEntryComplete: false
      });

    case events_DataEntryEvents.EDIT_REGION_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editRegionDataEntryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_REGION_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editRegionDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_REGION_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editRegionDataEntryComplete: false
      });

    case events_DataEntryEvents.CREATE_REGION_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createRegionDataEntryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_REGION_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createRegionDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_REGION_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createRegionDataEntryComplete: false
      });

    case events_DataEntryEvents.DELETE_REGION_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteRegionDataEntryComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_REGION_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteRegionDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_REGION_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteRegionDataEntryComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_REGION_DATA_ENTRY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneRegionDataEntryComplete: ResponseType.FULFILLED,
        regionOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_REGION_DATA_ENTRY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneRegionDataEntryComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_REGION_DATA_ENTRY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneRegionDataEntryComplete: false
      });
    // ////

    case events_DataEntryEvents.FETCH_PRODUCTS_GROUP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsGroupComplete: ResponseType.FULFILLED,
        productsGroup: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_PRODUCTS_GROUP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsGroupComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_PRODUCTS_GROUP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchProductsGroupComplete: false
      });

    case events_DataEntryEvents.CREATE_PRODUCT_GROUP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductGroupComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_PRODUCT_GROUP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductGroupComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_PRODUCT_GROUP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createProductGroupComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_GROUP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductGroupComplete: ResponseType.FULFILLED,
        productGroupOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_PRODUCT_GROUP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductGroupComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_PRODUCT_GROUP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneProductGroupComplete: false
      });

    case events_DataEntryEvents.EDIT_PRODUCT_GROUP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductGroupComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_PRODUCT_GROUP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductGroupComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_PRODUCT_GROUP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editProductGroupComplete: false
      });

    case events_DataEntryEvents.DELETE_PRODUCT_GROUP_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductGroupComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_PRODUCT_GROUP_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductGroupComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_PRODUCT_GROUP:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteProductGroupComplete: false
      });

    case events_DataEntryEvents.FETCH_COUNTRY_SUPPLY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountrySupplyComplete: ResponseType.FULFILLED,
        countrySupply: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_COUNTRY_SUPPLY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountrySupplyComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_COUNTRY_SUPPLY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchCountrySupplyComplete: false
      });

    case events_DataEntryEvents.FETCH_ONE_COUNTRY_SUPPLY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountrySupplyComplete: ResponseType.FULFILLED,
        countrySupplyOne: action.payload.data['data']
      });

    case events_DataEntryEvents.FETCH_ONE_COUNTRY_SUPPLY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountrySupplyComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_FETCH_ONE_COUNTRY_SUPPLY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        fetchOneCountrySupplyComplete: false
      });

    case events_DataEntryEvents.CREATE_COUNTRY_SUPPLY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountrySupplyComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.CREATE_COUNTRY_SUPPLY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountrySupplyComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_CREATE_COUNTRY_SUPPLY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        createCountrySupplyComplete: false
      });

    case events_DataEntryEvents.EDIT_COUNTRY_SUPPLY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountrySupplyComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.EDIT_COUNTRY_SUPPLY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountrySupplyComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_EDIT_COUNTRY_SUPPLY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        editCountrySupplyComplete: false
      });

    case events_DataEntryEvents.DELETE_COUNTRY_SUPPLY_FULFILLED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountrySupplyComplete: ResponseType.FULFILLED
      });

    case events_DataEntryEvents.DELETE_COUNTRY_SUPPLY_REJECTED:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountrySupplyComplete: ResponseType.REJECTED
      });

    case events_DataEntryEvents.CLEAR_DELETE_COUNTRY_SUPPLY:
      return data_entry_redux_reducer_objectSpread(data_entry_redux_reducer_objectSpread({}, state), {}, {
        deleteCountrySupplyComplete: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/commercial-controlling/profitability/redux/reducer.ts


function profitability_redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profitability_redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profitability_redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profitability_redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var profitability_redux_reducer_initialState = {
  fetchProfitabilityByProductComplete: false,
  fetchProfitabilityByProductSubProductsComplete: false,
  fetchProfitabilityByProductTotalComplete: false,
  total: initProfitabilityGroupTotalData(),
  products: initProfitabilityGroupResponse(),
  subProducts: initProfitabilityGroupResponse(),
  fetchProfitabilityReportRegionsComplete: false,
  regions: [],
  fetchProfitabilityByCountryComplete: false,
  fetchProfitabilityByCountryTotalComplete: false,
  countries: initProfitabilityGroupResponse(),
  countriesTotal: initProfitabilityGroupTotalData(),
  fetchProfitabilityByCountrySubRowComplete: false,
  subCountries: initProfitabilityGroupResponse(),
  fetchProfitabilityByRegionComplete: false,
  region: initProfitabilityGroupResponse(),
  fetchProfitabilityByRegionTotalComplete: false,
  regionTotal: initProfitabilityGroupTotalData(),
  fetchProfitabilityByRegionSubRowComplete: false,
  subRegion: initProfitabilityGroupResponse(),
  fetchProfitabilityByCustomerComplete: false,
  customers: initProfitabilityGroupResponse(),
  fetchProfitabilityByCustomerTotalComplete: false,
  customersTotal: initProfitabilityGroupTotalData(),
  fetchProfitabilityByCustomerSubRowComplete: false,
  subCustomers: initProfitabilityGroupResponse(),
  fetchProfitabilityByProductPivotComplete: false,
  productsPivot: initProfitabilityGroupPivotResponse(),
  fetchProfitabilityByCountryPivotComplete: true,
  countryPivot: initProfitabilityGroupPivotResponse(),
  fetchProfitabilityByCustomerPivotComplete: false,
  customerPivot: initProfitabilityGroupPivotResponse(),
  fetchProfitabilityByRegionPivotComplete: false,
  regionPivot: initProfitabilityGroupPivotResponse(),
  fetchProfitabilityHeaderComplete: false,
  headers: initHeaderResponse(),
  updateProfitabilityHeaderComplete: false,
  fetchProfitabilityTableDataComplete: false,
  profitabilityTableData: {
    count: 0,
    data: []
  },
  fetchProfitabilityTop10CustomersComplete: false,
  top10customers: [],
  fetchProfitabilityTop10CustomersTotalComplete: false,
  top10customersTotal: initTop10Customers(),
  fetchProfitabilityNegativeEbitdaComplete: false,
  NegativeEbitda: initProfitabilityGroupResponse(),
  fetchProfitabilityNegativeEbitdaTotalComplete: false,
  NegativeEbitdaTotal: initProfitabilityGroupTotalData(),
  fetchProfitabilityNegativeEbitdaSubRowComplete: false,
  NegativeEbitdaSubRow: initProfitabilityGroupResponse(),
  fetchProfitabilityNegativeEbitdaPivotComplete: false,
  NegativeEbitdaPivot: initProfitabilityGroupPivotResponse(),
  fetchProfitabilityFilterCustomerComplete: false,
  filterCustomerData: []
};
/* harmony default export */ var profitability_redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : profitability_redux_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductComplete: ResponseType.FULFILLED,
        products: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductSubProductsComplete: ResponseType.FULFILLED,
        subProducts: profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_PENDING:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductSubProductsComplete: ResponseType.PENDING
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductSubProductsComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_SUB_PRODUCTS:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductSubProductsComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductTotalComplete: ResponseType.FULFILLED,
        total: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_REPORT_REGIONS_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityReportRegionsComplete: ResponseType.FULFILLED,
        regions: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_REPORT_REGIONS_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityReportRegionsComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_REPORT_REGIONS:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityReportRegionsComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryComplete: ResponseType.FULFILLED,
        countries: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryTotalComplete: ResponseType.FULFILLED,
        countriesTotal: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountrySubRowComplete: ResponseType.FULFILLED,
        subCountries: profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_PENDING:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountrySubRowComplete: ResponseType.PENDING
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountrySubRowComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_SUB_ROW:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountrySubRowComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionComplete: ResponseType.FULFILLED,
        region: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionTotalComplete: ResponseType.FULFILLED,
        regionTotal: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_SUB_ROW_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionSubRowComplete: ResponseType.FULFILLED,
        subRegion: profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_SUB_ROW_PENDING:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionSubRowComplete: ResponseType.PENDING
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_SUB_ROW_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionSubRowComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_SUB_ROW:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionSubRowComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerComplete: ResponseType.FULFILLED,
        customers: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerTotalComplete: ResponseType.FULFILLED,
        customersTotal: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerSubRowComplete: ResponseType.FULFILLED,
        subCustomers: profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_PENDING:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerSubRowComplete: ResponseType.PENDING
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerSubRowComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_SUB_ROW:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerSubRowComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductPivotComplete: ResponseType.FULFILLED,
        productsPivot: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_PRODUCT_PIVOT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductPivotComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_PRODUCT_PIVOT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByProductPivotComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryPivotComplete: ResponseType.FULFILLED,
        countryPivot: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_COUNTRY_PIVOT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryPivotComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_COUNTRY_PIVOT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCountryPivotComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerPivotComplete: ResponseType.FULFILLED,
        customerPivot: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerPivotComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_CUSTOMER_PIVOT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByCustomerPivotComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_PIVOT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionPivotComplete: ResponseType.FULFILLED,
        regionPivot: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_BY_REGION_PIVOT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionPivotComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_BY_REGION_PIVOT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityByRegionPivotComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_HEADERS_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityHeaderComplete: ResponseType.FULFILLED,
        headers: action.payload.data['data'] && action.payload.data['data'].length ? action.payload.data['data'][0] : initHeaderResponse()
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_HEADERS_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityHeaderComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TABLE_HEADERS:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityHeaderComplete: false
      });

    case events_CommercialControllingEvents.UPDATE_PROFITABILITY_HEADERS_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        updateProfitabilityHeaderComplete: ResponseType.FULFILLED
      });

    case events_CommercialControllingEvents.UPDATE_PROFITABILITY_HEADERS_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        updateProfitabilityHeaderComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_UPDATE_PROFITABILITY_HEADERS:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        updateProfitabilityHeaderComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_DATA_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        profitabilityTableData: action.payload.data['data'],
        fetchProfitabilityTableDataComplete: ResponseType.FULFILLED
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TABLE_DATA_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTableDataComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TABLE_DATA:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTableDataComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersComplete: ResponseType.FULFILLED,
        top10customers: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersTotalComplete: ResponseType.FULFILLED,
        top10customersTotal: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_TOP_10_CUSTOMERS_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityTop10CustomersTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaComplete: ResponseType.FULFILLED,
        NegativeEbitda: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaSubRowComplete: ResponseType.FULFILLED,
        NegativeEbitdaSubRow: profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, action.payload.data['data']), {}, {
          meta: action.meta
        })
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_PENDING:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaSubRowComplete: ResponseType.PENDING
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaSubRowComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_SUB_ROW:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaSubRowComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaTotalComplete: ResponseType.FULFILLED,
        NegativeEbitdaTotal: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaTotalComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_TOTAL:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaTotalComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaPivotComplete: ResponseType.FULFILLED,
        NegativeEbitdaPivot: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaPivotComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_NEGATIVE_EBITDA_PIVOT:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityNegativeEbitdaPivotComplete: false
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_FILTER_CUSTOMER_FULFILLED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityFilterCustomerComplete: ResponseType.FULFILLED,
        filterCustomerData: action.payload.data['data']
      });

    case events_CommercialControllingEvents.FETCH_PROFITABILITY_FILTER_CUSTOMER_REJECTED:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityFilterCustomerComplete: ResponseType.REJECTED
      });

    case events_CommercialControllingEvents.CLEAR_FETCH_PROFITABILITY_FILTER_CUSTOMER:
      return profitability_redux_reducer_objectSpread(profitability_redux_reducer_objectSpread({}, state), {}, {
        fetchProfitabilityFilterCustomerComplete: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/components/main-container/overview/reports/stock-report/redux/reducer.ts


function stock_report_redux_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function stock_report_redux_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stock_report_redux_reducer_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stock_report_redux_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var stock_report_redux_reducer_initialState = {
  stockReportComplete: false,
  stockReportTableData: initStockReportTableDataResponse()
};
/* harmony default export */ var stock_report_redux_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stock_report_redux_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case StockReportEvents.FETCH_STOCK_REPORTS_FULFILLED:
      return stock_report_redux_reducer_objectSpread(stock_report_redux_reducer_objectSpread({}, state), {}, {
        stockReportComplete: ResponseType.FULFILLED,
        stockReportTableData: action.payload.data['data']
      });

    case StockReportEvents.FETCH_STOCK_REPORTS_REJECTED:
      return stock_report_redux_reducer_objectSpread(stock_report_redux_reducer_objectSpread({}, state), {}, {
        stockReportComplete: ResponseType.REJECTED
      });

    case StockReportEvents.CLEAR_FETCH_STOCK_REPORTS:
      return stock_report_redux_reducer_objectSpread(stock_report_redux_reducer_objectSpread({}, state), {}, {
        stockReportComplete: false
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/root-reducer/index.ts








var rootReducer = (0,redux/* combineReducers */.UY)({
  actionBtn: reducer,
  login: redux_reducer,
  orderBook: orderbook_analysis_redux_reducer,
  commercialControlSales: sales_redux_reducer,
  DataEntryReducer: data_entry_redux_reducer,
  commercialControlProfitability: profitability_redux_reducer,
  StockReportReducer: stock_report_redux_reducer
});
/* harmony default export */ var root_reducer = (rootReducer);
;// CONCATENATED MODULE: ./src/store/index.ts



var store = (0,redux/* createStore */.MT)(root_reducer, (0,redux/* applyMiddleware */.md)(dist_es/* default */.ZP));
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
;// CONCATENATED MODULE: ./src/middleware/network.ts




var setupInterceptors = function setupInterceptors() {
  axios_default().interceptors.response.use(function (response) {
    return handleResponse(response);
  }, function (error) {
    return handleResponse(error.response);
  });
  axios_default().interceptors.request.use(function (config) {
    config.headers.get['Content-Type'] = 'application/json';
    var userDetailString = localStorage.getItem(StoredKeys.USER_DETAILS);

    if (userDetailString) {
      var userDetails = JSON.parse(window.atob(userDetailString));
      config.headers.common.Authorization = 'Bearer ' + userDetails.jwt_token;
    }

    return config;
  }, function (error) {
    return Promise.reject(error);
  });
};

var handleResponse = function handleResponse(response) {
  if (response && response.status && (response.status === 403 || response.status === 401)) {
    var userDetails = localStorage.getItem(StoredKeys.USER_DETAILS);

    if (userDetails) {
      showError(response.status === 401 ? i18Get('Session expired', getLanguage()) : i18Get('Unauthorized access', getLanguage()));
      localStorage.removeItem(StoredKeys.USER_DETAILS);
      window.location.href = '/';
    } else {
      window.location.href = '/';
    }

    return response;
  }

  if (!response || !response.data) {
    showError(i18Get('Oops, Something went wrong.', getLanguage()));
    return Promise.reject(response);
  }

  if (!response || !response.data || response.status == 404) {
    showError(i18Get('Oops, Something went wrong.', getLanguage()));
    return Promise.reject(response);
  }

  if (response.data.type === 'application/pdf' || response.data.type === 'text/csv' || response.data.type === 'application/vnd.ms-excel') {
    return response;
  }

  if (!response.data.status && response.config.responseType === 'blob' && response.status === 400 && response.data.type === 'application/json') {
    showError(i18Get('No Data Found', getLanguage()));
    return Promise.reject(response.data);
  }

  if (!response.data.status) {
    if (response.data.data && response.data.data.message) {
      showError(i18Get(response.data.data.message, getLanguage()));
    } else {
      showError(i18Get(response.data.message, getLanguage()));
    }

    return Promise.reject(response.data);
  } else if (response.data.status && (response.data.messageCode === 1 || response.data.messageCode === 6)) {
    if (response.config.method !== 'get' && response.data && response.data.message) {
      showSuccess(i18Get(response.data.message, getLanguage()));
    }

    return response;
  } else if (response.data.messageCode && response.data.messageCode !== 1) {
    var message = response.data ? response.data.message : 'Oops, Something went wrong.';
    showError(i18Get(message, getLanguage()));
    return Promise.reject(response.data);
  } else {
    return response;
  }
};
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(26946);
;// CONCATENATED MODULE: ./src/index.tsx












setupInterceptors();
react_dom.render( /*#__PURE__*/(0,jsx_runtime.jsx)(es/* Provider */.zt, {
  store: store,
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, {
    basename: "/",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Router, {})
  })
}), document.getElementById('root'));

/***/ }),

/***/ 39382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--themeColor:#EE6F25;--lightTheme:#FED68A;--boxShadowColor: #00000029;--primaryBg:#EBF0F4;--white:#ffffff;--whiteInsideTheme:#ffffff;--black:#000000;--primaryBorder:#FACFB6;--normalBorder:#E0E0E0;--textColor:#000000;--inputBg:#F1F1F1;--thirdBg:#2595DE;--thirdBgActive:#125D98;--btnBg:#4DA18C;--footerBg:#F1F1F1;--tabTextColor:#646464;--invalid:rgb(226, 111, 111);--scrollThumb:#aaaaaa;--scrollThumbHover:#7F7F7F;--dashCardheader:#909ea4;--borderColor:#c5c2c2;--edit:rgb(82, 130, 235);--delete:rgb(235, 97, 97);--totalRow: #E4EAEC;--mainTotalRow: #cadce2;--tableHeaderBg: #E8F0F2;--tableHeaderDarkBg: #9fc4d6;--tableHeaderTotalBg: #ffc4c9;--placeHolder: #bfbfbf;--boxBorder:#BDD4EF}html body .text_color{color:var(--textColor)}html body .primary_text{color:var(--themeColor)}html body .edit_icon{color:var(--edit);cursor:pointer}html body .delete_icon{color:var(--delete);cursor:pointer}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 41595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--themeColor:#EE6F25;--lightTheme:#FED68A;--boxShadowColor: #00000029;--primaryBg:#EBF0F4;--white:#ffffff;--whiteInsideTheme:#ffffff;--black:#000000;--primaryBorder:#FACFB6;--normalBorder:#E0E0E0;--textColor:#000000;--inputBg:#F1F1F1;--thirdBg:#2595DE;--thirdBgActive:#125D98;--btnBg:#4DA18C;--footerBg:#F1F1F1;--tabTextColor:#646464;--invalid:rgb(226, 111, 111);--scrollThumb:#aaaaaa;--scrollThumbHover:#7F7F7F;--dashCardheader:#909ea4;--borderColor:#c5c2c2;--edit:rgb(82, 130, 235);--delete:rgb(235, 97, 97);--totalRow: #E4EAEC;--mainTotalRow: #cadce2;--tableHeaderBg: #E8F0F2;--tableHeaderDarkBg: #9fc4d6;--tableHeaderTotalBg: #ffc4c9;--placeHolder: #bfbfbf;--boxBorder:#BDD4EF}html body .text_color{color:var(--textColor)}html body .primary_text{color:var(--themeColor)}html body .edit_icon{color:var(--edit);cursor:pointer}html body .delete_icon{color:var(--delete);cursor:pointer}.custom_navbar{height:65px;background-color:var(--themeColor);position:relative;z-index:999;box-shadow:0px 2px 6px 0px var(--boxShadowColor);padding-right:50px;border-radius:0;margin-bottom:0;padding:.5rem 1rem}.custom_navbar h4{color:#fff;margin:auto}.custom_navbar .language_select .ant-select>div:nth-of-type(1){background-color:transparent;border-color:var(--white) !important;color:var(--white) !important}.custom_navbar .language_select .ant-select .ant-select-arrow{color:var(--white) !important}.custom_navbar .navbar-brand{height:auto}.custom_navbar .nav-item a{color:var(--white);font-size:12px;padding:0px 15px}.custom_navbar .nav-item .user_logo{width:35px;height:35px;display:flex;align-items:center;justify-content:center;font-size:14px;background-color:var(--white);color:var(--black);margin-right:10px;border-radius:50%;box-shadow:inset 0px 0px 4px 1px var(--boxShadowColor);border:3px solid var(--white)}.custom_navbar .logout_drop .dropdown-menu{top:51px;right:0;left:auto;padding:0 0}.custom_navbar .logout_drop .dropdown-menu .dropdown-item{color:var(--black);padding:6px 10px}.text-limit{display:block;width:100px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_container{height:calc(100% - 65px);position:relative;overflow:hidden}.main_content_container{width:100%;padding-left:280px;float:left;display:inline-block;vertical-align:top;overflow:auto;height:100%;position:relative;transition:.3s}.main_content_container .my_overview_container{height:100%;width:100%;padding:0px 15px}.main_content_container .my_overview_container .overview_tab_space_container{padding-top:10px}.main_content_container .my_overview_container .overview_tab_space_container .nav-tabs{border-bottom:none}.main_content_container .my_overview_container .overview_tab_space_container .nav-item .nav-link{margin-right:1px;color:var(--themeColor)}.main_content_container .my_overview_container .overview_tab_space_container .nav-item .nav-link-top{border-color:transparent transparent transparent transparent}.main_content_container .my_overview_container .overview_tab_space_container .nav-item .active{box-shadow:-1px -3px 5px 0px #928e8e29;background-color:var(--white);color:var(--themeColor);font-family:\"semi-bold\"}.main_content_container .my_overview_container .overview_tab_space_container .overview_tab_container{width:100%;display:flex;justify-content:space-between;border-bottom:2px solid var(--lightTheme);align-items:flex-end}.main_content_container .my_overview_container .order_book_subheader{background-color:var(--white);padding:10px 10px 10px 10px;box-shadow:0px 0px 4px 0px var(--boxShadowColor)}.main_content_container .my_overview_container .order_book_subheader .nav li a{color:var(--themeColor);border-bottom:1px solid transparent;box-shadow:none !important}.main_content_container .my_overview_container .order_book_subheader .nav li .active{border-color:var(--themeColor);color:var(--themeColor);font-family:\"semi-bold\"}.main_content_container .my_overview_container .overview_content_container{height:calc(100% - 50px);width:100%;padding-top:15px}.main_content_container .main_details_inf{border-bottom:1px solid var(--normalBorder);display:flex;padding:4px 25px}.main_content_container .main_tools_container{display:flex;align-items:flex-end;padding:4px 20px}.main_content_container .main_tools_container .tools_toggles{flex:2 2 10px;padding:0px 5px}.main_content_container .main_tools_container .tools_toggles .ant-select{width:100%}.main_content_container .main_tools_container .tools_toggles .ant-select .ant-select-selector{border:1px solid var(--normalBorder);border-color:var(--normalBorder) !important;border-radius:4px;outline:none;box-shadow:none !important}.main_content_container .main_tools_container .tools_combo_select{flex:2 2 10px;padding:0px 5px;display:flex;align-items:center}.main_content_container .main_tools_container .tools_combo_select .combo_select{flex:0 0 60px;max-width:60px;padding-right:2px}.main_content_container .main_tools_container .tools_combo_select .combo_select .ant-select-selector{padding:0px 6px}.main_content_container .main_tools_container .tools_combo_select .combo_select .ant-select-arrow{right:6px}.main_content_container .main_tools_container .tools_combo_select .combo_select .ant-select-selection-search{left:4px}.main_content_container .main_tools_container .tools_combo_select .combo_input{flex:1 1 10px;min-width:10px;padding-right:6px}.main_content_container .main_tools_container .tools_combo_select .combo_input input{width:100%;border:1px solid var(--normalBorder);background-color:transparent;padding:0px 5px;height:32px;outline:none;box-shadow:none;border-radius:4px}.main_content_container .main_tools_container .tools_combo_select .combo_input ::placeholder{transition:all .3s;color:#bfbfbf;font-size:14px;cursor:pointer}.main_content_container .main_tools_container .tools_combo_select .combo_text_color_overwrite{color:#000 !important}.main_content_container .main_tools_container .tools_combo_select .combo_check{flex:0 0 20px;max-width:20px}.main_content_container .main_tools_container .tools_combo_select .combo_check input{margin-top:0px}.main_content_container .main_tools_container .tools_search{flex:3 3 10px;padding:0px 5px;text-align:right}.main_content_container .main_tools_container .tools_search input{width:85%;border:1px solid var(--normalBorder);background-color:var(--inputBg);border-radius:15px;padding:0px 15px;height:32px;color:#000;outline:none;box-shadow:none}.main_content_container .main_tools_container .tools_search input::placeholder{color:var(--themeColor)}.main_content_container .main_tools_container .good_reciept_search{flex:2 2 10px}.main_content_container .main_tools_container .good_reciept_search input{width:100%}.main_content_container .good_reciept_filter{padding:12px 10px 6px 10px}.main_content_container .good_reciept_search_container{padding:4px 12px 4px 10px;padding-bottom:10px}.main_content_container .good_reciept_search_container input{border-radius:5px !important}.main_content_container .custom_footer{background-color:var(--footerBg);padding:10px 10px;text-align:right;position:absolute;top:0;left:0;right:0}.main_content_container .custom_footer_padding{padding-top:52px}.flex_0_0_16{flex:0 0 16px}.table_input input{width:100%;border:1px solid var(--normalBorder);background-color:transparent;padding:0px 5px;height:32px;outline:none;box-shadow:none;border-radius:4px;background-color:var(--white)}.main_content_sidebar_toggled{padding-left:0px}.content_container{height:calc(100% - 118px)}.content_container .ReactTable{height:100%;border:none}.content_container .ReactTable .rt-thead .rt-tr{padding:4px 0px;background-color:var(--themeColor)}.content_container .ReactTable .rt-thead .rt-tr .rt-th{padding:7px 10px 0px 10px;color:var(--white);border-right:1px solid var(--white)}.content_container .ReactTable .rt-thead .rt-tr .rt-th:last-child{border-right:none}.content_container .ReactTable .rt-tbody .-odd{background-color:var(--inputBg)}.content_container .ReactTable .rt-tbody .rt-td{padding:7px 12px;border-right:none;text-align:center}.main_content_container_footer{padding-bottom:52px;position:relative}.text-center{text-align:center}.width-100{width:100%}.text-left{text-align:left}.pl-25{padding-left:25px}.pt-50{padding-top:50px}.sort_icon{position:relative;top:-2px;font-size:14px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".time_frame_container{display:flex;align-items:center;justify-content:flex-end}.time_frame_container.time_frame_container_weekly>div{flex:0 0 150px}@media screen and (min-width: 1600px){.time_frame_container.time_frame_container_weekly>div{flex:0 0 200px}}@media screen and (max-width: 1230px){.time_frame_container.time_frame_container_weekly>div{flex:0 0 120px}}.time_frame_container>div{flex:0 0 200px;width:10px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 21748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flex_0_0_630{flex:0 0 630px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 49507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filter_tabs_container{flex:1 1 300px}.order_book_filters{flex:0 0 400px}.order_book_filters.order_book_weekly_filter{flex:1 1 10px;min-width:670px}.order_book_filters.time_frame_container>div{flex:0 0 160px}@media screen and (min-width: 1600px){.order_book_filters.time_frame_container>div{flex:0 0 180px}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 75789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".time_frame_container .ant-select-selector{border-radius:5px !important}.time_frame_container .ant-picker-range,.time_frame_container .ant-picker{border-radius:5px}.time_frame_container .weekly_select .ant-select{min-width:250px}.order_book_content_container{height:calc(100% - 94px)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".width_150{width:150px;min-width:150px}.no-right-border-th{border-right:none !important}.no_top_border_th{border-top:none !important}.no_border_right_td{border-right:none !important}.stock_report_table thead tr th:first-child{position:sticky;left:0px;z-index:101;box-shadow:1px 2px 3px 0px var(--boxShadowColor);border-left:1px solid var(--borderColor)}.stock_report_table thead tr th{border-top:none !important}.stock_report_table thead tr th.stock_col_th_bg{border-right:6px solid #fff;background-color:var(--tableHeaderDarkBg);position:relative;border-left:1px solid var(--borderColor);border-top:1px solid var(--borderColor) !important;box-shadow:0px 4px 4px 0px var(--boxShadowColor)}.stock_report_table thead tr th.stock_col_th_bg::before{content:\"\";width:6px;position:absolute;right:-6px;bottom:-6px;z-index:99;height:65px;background-color:#fff}.stock_report_table thead tr th.stock_col_th_bg::after{content:\"\";position:absolute;right:0;width:1px;background-color:var(--borderColor);top:0;bottom:0}.stock_report_table thead tr th.stock_col_th{border-right:6px solid #fff;border-top:none;position:relative}.stock_report_table thead tr th.stock_col_th::before{content:\"\";width:6px;position:absolute;right:-6px;bottom:-6px;z-index:99;height:65px;background-color:#fff}.stock_report_table thead tr th.stock_col_th::after{content:\"\";position:absolute;right:0;width:1px;background-color:var(--borderColor);top:0;bottom:0}.stock_report_table thead tr th.left_before_border_th{border-left:1px solid var(--borderColor)}.stock_report_table thead tr th.width_128_th{width:128px;min-width:128px}.stock_report_table thead tr th.width_90_th{width:90px;min-width:90px}.stock_report_table thead tr th.total_column_bg_th{border-left:1px solid var(--borderColor);border-top:1px solid var(--borderColor) !important;box-shadow:0px 4px 4px 0px var(--boxShadowColor)}.stock_report_table thead tr:nth-of-type(2) th:first-child{top:29px !important;left:auto;z-index:99;box-shadow:0px 4px 4px 0px var(--boxShadowColor) !important}.stock_report_table tbody tr td:first-child{border-left:none !important;position:sticky;left:45px;background-color:var(--white);z-index:100;box-shadow:1px 2px 3px 0px var(--boxShadowColor)}.stock_report_table tbody tr td{border-top:none !important;border-bottom:none !important;vertical-align:middle}.stock_report_table tbody tr td.no_right_border_td{border-right:1px solid transparent}.stock_report_table tbody tr td.stock_box_td{border-right:6px solid #fff;border-top:none;position:relative}.stock_report_table tbody tr td.stock_box_td::before{content:\"\";position:absolute;right:0;width:1px;background-color:var(--borderColor);top:0;bottom:0}.stock_report_table tbody tr td.stock_box_td_main{border-right:6px solid #fff;border-top:none}.stock_report_table tbody tr td.left_before_border_td{border-left:1px solid var(--borderColor)}.stock_report_table tbody tr.stock_primary_tr td:first-child{position:sticky;left:0px;background-color:var(--white);z-index:100;box-shadow:1px 2px 3px 0px var(--boxShadowColor);border-left:1px solid var(--borderColor) !important;min-width:85px;max-width:85px;word-break:break-all;word-break:break-word}.stock_report_table tbody tr.stock_primary_tr td:nth-of-type(2){left:85px;position:sticky;background-color:var(--white);z-index:100;box-shadow:1px 2px 3px 0px var(--boxShadowColor)}.stock_report_table tbody tr:last-child td{border-bottom:1px solid var(--borderColor) !important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 60825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar{width:280px;position:absolute;left:0;float:left;height:100%;box-shadow:0px 0px 6px 0px var(--boxShadowColor);z-index:200;text-decoration:none;transition:.3s}.sidebar .sidebar_toggler{position:absolute;right:-35px;bottom:0;width:35px;height:35px;display:flex;align-items:center;justify-content:center;background-color:var(--white);color:var(--themeColor);font-size:15px;border-radius:0px 4px 0px 0px;box-shadow:3px -2px 4px 0px var(--boxShadowColor);cursor:pointer}.sidebar .main_sidebar{background-color:var(--white);height:100%;overflow:auto;padding:3px 15px 0px 15px}.sidebar .main_sidebar ul{padding-left:0px}.sidebar .main_sidebar ul ul{padding-left:20px}.sidebar .main_sidebar .sidebar_item{display:flex;align-items:center;cursor:pointer;padding:10px 15px;border-bottom:1px solid var(--primaryBorder);color:var(--themeColor);position:relative}.sidebar .main_sidebar .sidebar_item a{font-size:18px;color:var(--themeColor)}.sidebar .main_sidebar .sidebar_item .anticon{position:absolute;top:11px;right:0px;font-size:21px}.sidebar .main_sidebar .sidebar_item::before{content:\">\";position:absolute;top:14px;right:10px;transform:rotate3d(0, 0, 1, 90deg);font-size:15px}.sidebar .main_sidebar .sidebar_item_active{box-shadow:0px 2px 0px 0px var(--themeColor);background-color:var(--primaryBg);transition:.3s;z-index:9}.sidebar .main_sidebar .sidebar_item_active::before{transform:rotate3d(0, 0, 1, -90deg);right:14px}.sidebar .main_sidebar .sidebar_sub_item{display:flex;align-items:center;cursor:pointer;padding:10px 15px;border-bottom:1px solid var(--primaryBorder);font-size:14px;position:relative}.sidebar .main_sidebar .sidebar_sub_item a{padding:5px}.sidebar .main_sidebar .sidebar_sub_item.sidebar_sub_item_prime::before{content:\">\";position:absolute;top:11px;right:12px;transform:rotate3d(0, 0, 1, 90deg);font-size:14px}.sidebar .main_sidebar .sidebar_sub_item_active{background-color:var(--primaryBg)}.sidebar .main_sidebar .sidebar_sub_item_active a{color:var(--black)}.sidebar .main_sidebar .sidebar_sub_item_active.sidebar_sub_item_prime::before{transform:rotate3d(0, 0, 1, -90deg);right:14px;top:12px !important}.sidebar .sidebar_header{color:var(--themeColor);font-size:16px;font-family:\"semi-bold\";padding:15px 0px;text-align:center;position:absolute;top:0;right:15px;left:15px;border-bottom:1px solid var(--primaryBorder);background-color:var(--white)}.sidebar_closed{left:-280px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(76647), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login_bg{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover;background-position:center;height:100vh;position:relative;z-index:1;display:flex;align-items:center;justify-content:flex-end}.login_bg .login_shade{position:absolute;top:0px;bottom:0px;right:0px;left:0px;background-color:#000;opacity:.1;z-index:2}.login_bg .login_card{display:inline-block;width:425px;padding:3% 1% 8% 1%;background-color:var(--white);position:relative;z-index:3;border-radius:10px;text-align:center;margin-right:6%;margin-left:6%;background-color:#fff}.login_bg .login_card h2{color:#727171;padding-top:5px;font-size:12px;letter-spacing:2px}.login_bg .input_container{width:90%;display:inline-block;padding-top:10%;position:relative}.login_bg .input_container{width:90%;display:inline-block;padding-top:10%;position:relative}.login_bg .login-text-box>input{height:2.5em !important;box-shadow:2px 2px #ddd;border:1px solid #ddd !important;border-radius:3px !important;color:#636363;box-sizing:border-box;margin:0;padding:0;font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\",\"tnum\";position:relative;display:inline-block;width:100%;min-width:0;padding:4px 11px;color:rgba(0,0,0,.85);font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s}.login_bg .login-text-box .ant-input-password{height:2.5em !important;box-shadow:2px 2px #ddd;border:1px solid #ddd !important;border-radius:3px !important;color:#636363;box-sizing:border-box;margin:0;padding:0;font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\",\"tnum\";position:relative;display:inline-block;width:100%;min-width:0;padding:4px 11px;color:rgba(0,0,0,.85);font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s}.login_bg .login-text-box .eye_password{position:absolute;top:44px;right:7px;text-decoration:none}.login_bg .pl-15{padding-left:15px}.login_bg .pr-15{padding-right:15px}.login_bg .login-button{height:2.5em !important;border:1px solid #ee6f25 !important;background:#ee6f25 !important;color:#fff !important;font-size:16px !important;border-radius:5px !important;letter-spacing:2px;padding:5px 25px;width:100%;position:relative}.login_bg .login-button .ant-btn-loading-icon{position:absolute;right:0;top:5px}.login_bg .invalid-text{position:absolute;font-size:12px;top:20px;right:0;color:var(--invalid)}.login_bg .label-text{font-size:14px;letter-spacing:2px;color:#a7a7a7}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(98502), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(73579), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(95123), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(65513), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(59434), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(9570), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(16030), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(1217), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"black\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"bold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"regular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"semi-bold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"light\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"extra-bold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"italic\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\");font-weight:normal;font-style:normal}@font-face{font-family:\"medium\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\");font-weight:normal;font-style:normal}body{font-family:\"regular\";font-size:13px}.font_weight_bold{font-family:\"bold\"}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,body{margin:0px}.h-100{height:100%}.w-100{width:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,html body{height:100%;font-size:12px;color:var(--textColor)}body .ant-checkbox-checked .ant-checkbox-inner{background-color:var(--themeColor);border-color:var(--themeColor)}body .ant-checkbox-wrapper:hover .ant-checkbox-inner,body .ant-checkbox:hover .ant-checkbox-inner,body .ant-checkbox-input:focus+.ant-checkbox-inner{border-color:var(--themeColor)}body .ant-checkbox-indeterminate .ant-checkbox-inner::after{background-color:var(--themeColor)}body .ant-checkbox-checked::after{border:1px solid var(--themeColor)}body .ant-modal-confirm .ant-modal-body{padding:24px}body .ant-switch-checked{background-color:var(--themeColor)}body .ant-select>div:nth-of-type(1){border-color:var(--themeColor) !important;color:var(--themeColor) !important}body .ant-select .ant-select-selection-placeholder{color:var(--placeHolder) !important}body .ant-select .ant-select-arrow{color:var(--themeColor) !important}body .ant-select .ant-select-allow-clear{color:var(--themeColor)}body .ant-select .ant-select-clear{color:var(--themeColor);top:14px}body .ant-select.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{box-shadow:0px 0px 4px 0px var(--themeColor)}body .ant-switch-checked:focus{box-shadow:0px 0px 4px 0px var(--themeColor)}body .ant-select-item-option-selected:not(.ant-select-item-option-disabled){background-color:var(--primaryBg) !important}body .ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state{color:var(--themeColor) !important}body .ant-picker{border-color:var(--themeColor) !important}body .ant-picker .ant-picker-input input{color:var(--themeColor) !important}body .ant-picker .ant-picker-input input::placeholder{color:var(--placeHolder)}body .ant-picker .ant-picker-suffix{color:var(--themeColor)}body .ant-picker .ant-picker-clear{color:var(--themeColor)}body .anticon-loading.anticon-spin{color:var(--themeColor)}.ant-message-custom-content{display:flex;align-items:center}.ant-message-custom-content .anticon{top:auto}.vendor_dropDown{min-width:430px !important}.ant-pagination li .ant-pagination-item-link{border:1px solid var(--borderColor) !important;line-height:9px;border-radius:4px}.ant-pagination li input{border:1px solid var(--borderColor) !important}html body .primary_btn{background-color:var(--white);border:1px solid var(--btnBg);box-shadow:none;padding:5px 15px;height:32px;border-radius:4px;color:var(--btnBg)}html body .primary_btn:hover,html body .primary_btn:focus{background-color:var(--btnBg);border:1px solid var(--btnBg);color:var(--white);outline:none !important}html body .primary_btn .export_icon{position:relative;top:-3px;font-size:14px}html body .primary_btn:disabled{opacity:.5;background-color:var(--boxShadowColor) !important;border:1px solid transparent !important;box-shadow:none;padding:5px 15px;height:32px;border-radius:4px;color:var(--white) !important}html body .border_btn{background-color:var(--white);border:1px solid var(--themeColor);box-shadow:none;padding:5px 15px;height:32px;border-radius:4px;color:var(--themeColor);outline:none !important}html body .border_btn:disabled{opacity:.5;background-color:var(--white) !important;border:1px solid var(--themeColor) !important;box-shadow:none;padding:5px 15px;height:32px;border-radius:4px;color:var(--themeColor) !important}html body .custom_table tbody tr{background-color:var(--white)}html body .custom_table tbody tr td .table_toggle{position:relative;top:-2px;cursor:pointer}html body .custom_table tbody tr td .table_spacer{width:12px}html body .total_row td{font-family:\"bold\";background-color:var(--totalRow) !important}html body .grand_total_row td{font-family:\"bold\";background-color:var(--tableHeaderTotalBg) !important}html body .main_total_row td{font-family:\"bold\";background-color:var(--mainTotalRow) !important}html body .common_input_container .ant-picker{width:100%;border:1px solid var(--borderColor);outline:none !important;box-shadow:none !important;border-radius:4px;height:32px}html body .common_input_container>input{width:100%;border:1px solid var(--themeColor);outline:none !important;box-shadow:none !important;border-radius:4px;height:32px;padding:0px 10px;color:var(--themeColor)}html body .common_input_container>input::placeholder{color:var(--placeHolder)}html body .common_input_container .ant-select{width:100%}html body .common_input_container .ant-select>div:nth-of-type(1){width:100%;border:1px solid var(--themeColor);outline:none !important;box-shadow:none !important;border-radius:4px;height:32px}html body .common_input_container .ant-select .ant-select-clear{top:15px}html body .overlay_loader{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;display:flex;align-items:center;justify-content:center}html body .model_loading{min-height:100px;display:flex;align-items:center;justify-content:center}html body .height_26_btn{height:26px !important;padding:1px 15px !important}html body .ant-select-multiple .ant-select-selection-overflow{flex-wrap:nowrap;width:100%;overflow-x:auto}html body .ant-select-multiple .ant-select-selection-overflow::-webkit-scrollbar{display:none}html body .ant-select-multiple .ant-select-selector{padding-right:20px}html body .ant-select-multiple .ant-select-clear{top:15px;right:5px}html body .ant-select-multiple .ant-select-selection-item-remove{position:relative;top:-2px}html body .iframe{vertical-align:top;border:none;height:100%;width:100%}.flex_0_0_100{flex:0 0 100px}.flex_0_0_165{flex:0 0 165px}.flex_0_0_180{flex:0 0 180px}.flex_0_0_140{flex:0 0 140px}.flex_1_1_10{flex:1 1 10px;width:10px}.flex_0_0_check{flex:0 0 16px}.common_table_container{height:100%}.common_table_container.pagination_table_container{height:calc(100% - 34px)}.common_table_container table{width:100%;border-collapse:separate;border-spacing:0px;overflow:auto}.common_table_container table thead{border-style:inherit}.common_table_container table thead tr{border-style:inherit}.common_table_container table thead tr th{padding:5px 10px;text-align:center;border-top:1px solid var(--borderColor);border-right:1px solid var(--borderColor);white-space:nowrap;position:sticky !important;z-index:99;top:0;border-bottom:none;background-color:var(--tableHeaderBg);font-family:\"semi-bold\"}.common_table_container table thead tr th.table_toggle_width{width:100px;max-width:100px}.common_table_container table thead tr th:first-child{border-left:1px solid var(--borderColor)}.common_table_container table thead tr th.border_right_transparent{border-right:0px}.common_table_container table thead tr th.dark_bg_th{background-color:var(--tableHeaderDarkBg)}.common_table_container table thead tr th.border_right_white{border-right-color:var(--white)}.common_table_container table thead tr th.total_column_bg_th{background-color:var(--tableHeaderTotalBg)}.common_table_container table thead tr:first-child th{top:0}.common_table_container table thead tr:nth-of-type(2) th{top:29px;border-top:1px solid var(--borderColor)}.common_table_container table thead tr:nth-of-type(2) th.disabled_th{border-top:1px solid var(--tableHeaderBg)}.common_table_container table thead tr:last-child th{box-shadow:0px 4px 4px 0px var(--boxShadowColor)}.common_table_container table tbody{border-style:inherit}.common_table_container table tbody tr{border-style:inherit}.common_table_container table tbody tr td{padding:5px 10px;text-align:center;border-right:1px solid var(--borderColor);border-bottom:1px solid var(--borderColor)}.common_table_container table tbody tr td:first-child{border-left:1px solid var(--borderColor)}.common_table_container table tbody tr.gap_row{position:relative}.common_table_container table tbody tr.gap_row td{border-top:6px solid var(--white);border-bottom:6px solid var(--white)}.common_table_container table tbody tr.gap_row td:first-child::after{content:\"\";height:6px;position:absolute;background-color:var(--white);left:0;right:0;bottom:0px}.common_table_container table tbody tr.gap_row td:first-child::before{content:\"\";height:6px;position:absolute;background-color:var(--white);left:0;right:0;top:0px}.common_table_container table tbody tr.gap_row td:last-child::after{content:\"\";height:1px;position:absolute;background-color:var(--borderColor);left:0;right:0;bottom:5px}.common_table_container table tbody tr.gap_row td:last-child::before{content:\"\";height:1px;position:absolute;background-color:var(--borderColor);left:0;right:0;top:5px}.common_table_container.first_row_fixed_table thead tr th:first-child{position:sticky;left:0px;z-index:101;box-shadow:1px 2px 3px 0px var(--boxShadowColor);border-left:1px solid var(--borderColor)}.common_table_container.first_row_fixed_table tbody tr td:first-child{position:sticky;left:0px;background-color:var(--white);z-index:100;box-shadow:1px 2px 3px 0px var(--boxShadowColor)}.custom_react_table_v7 .infinite-scroll-component__outerdiv{height:100%}.custom_react_table_v7 .infinite-scroll-component{height:100% !important}.custom_react_table_v7 .ReactTable{overflow:auto}.custom_react_table_v7 .ReactTable .rt-header{position:sticky;top:0}.custom_react_table_v7 .ReactTable .rt-header .tr{padding:4px 0px;background-color:var(--themeColor)}.custom_react_table_v7 .ReactTable .rt-header .tr .th{padding:3px 20px 3px 20px;color:var(--white);border-right:1px solid var(--white);text-align:center;position:relative;display:flex !important;align-items:center;justify-content:center;flex-wrap:wrap}.custom_react_table_v7 .ReactTable .rt-header .tr .th .sort_table{position:absolute;top:0;right:1px;bottom:0;display:flex;align-items:center}.custom_react_table_v7 .ReactTable .rt-header .tr .th .sort_table svg{font-size:20px}.custom_react_table_v7 .ReactTable .rt-header .tr .th:last-child{border-right:none;padding-right:20px}.custom_react_table_v7 .ReactTable .rt-body{position:relative;height:100%;overflow-y:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:100%;overflow-x:hidden}.custom_react_table_v7 .ReactTable .rt-body .tr .td{padding:7px 12px;border-right:none;text-align:center;text-align:center;min-height:32px;word-break:break-all;word-break:break-word}.custom_react_table_v7 .ReactTable .rt-body .tr .td:last-child{padding-right:20px}.custom_react_table_v7 .ReactTable .rt-body .tr:nth-child(2n+1){background-color:var(--inputBg)}.custom_react_table_v7 .ReactTable .rt-body .no_data_rt{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;color:var(--themeColor)}.custom_react_table_v7 .ReactTable .rt-body .rt_loading{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;color:var(--themeColor)}.custom_react_table_v7 .ReactTable .rt-body .rt_loading .ant-spin-dot-item{background-color:var(--themeColor)}.custom_react_table_v7 .ReactTable .rt-sub-header{border-bottom:1px solid var(--themeColor);box-shadow:0px 2px 4px 0px var(--boxShadowColor);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.custom_react_table_v7 .ReactTable .rt-sub-header .td{padding:7px 12px;border-right:none;text-align:center;text-align:center;min-height:32px}.custom_react_table_v7.user_no_data .no_data_rt{position:relative !important;min-height:100px}input[disabled]{cursor:not-allowed}.ant-popover-inner-content{max-height:250px;overflow:auto}.ant-modal-wrap{display:flex;align-items:center;justify-content:center}.ant-modal-wrap .ant-modal{top:auto;padding-bottom:0px}.ant-modal-wrap .ant-modal .ant-modal-content{border-radius:4px}.ant-modal-wrap .ant-modal .ant-modal-header{background-color:var(--themeColor);padding:12px 15px;border-radius:4px 4px 0px 0px}.ant-modal-wrap .ant-modal .ant-modal-header .ant-modal-title{color:var(--whiteInsideTheme)}.ant-modal-wrap .ant-modal .ant-modal-close-x{width:47px;height:47px;font-size:16px;color:var(--whiteInsideTheme);display:flex;align-items:center;justify-content:center;line-height:0;outline:none;box-shadow:none}.ant-modal-wrap .ant-modal .ant-modal-body{background-color:var(--white);max-height:calc(100vh - 130px);overflow:auto}.ant-modal-wrap .ant-modal .ant-modal-footer{background-color:var(--white);padding:10px 15px}.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn{background-color:var(--white);padding:0px 20px;min-width:125px;height:32px;border-radius:4px;outline:none;box-shadow:none;color:var(--btnBg);border:1px solid var(--btnBg)}.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn:hover,.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn:focus{background-color:var(--white);border:1px solid var(--btnBg);color:var(--btnBg)}.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn.ant-btn-primary{background-color:var(--btnBg);padding:0px 20px;min-width:125px;height:32px;border-radius:4px;outline:none;box-shadow:none;color:var(--whiteInsideTheme);border:1px solid var(--btnBg)}.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn.ant-btn-primary:hover,.ant-modal-wrap .ant-modal .ant-modal-footer .ant-btn.ant-btn-primary:focus{background-color:var(--btnBg);border:1px solid var(--btnBg);color:var(--whiteInsideTheme)}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background:var(--scrollThumb);border-radius:2px}::-webkit-scrollbar-thumb:hover{background:var(--scrollThumbHover)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 95606,
	"./ss.js": 95606,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 98502:
/***/ (function(module) {

"use strict";
module.exports = "data:font/ttf;base64,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eNt5Mnl8ecN6H3pieq57AnsSe2V7t3vDfCV8cXzafOp9Pn2yfhd+h37WfuJ/S3+3gAaAWIDIgVaBtoITgnqC5YM6g6mEKIR9hOKFQIWrhguGcobyh1mHpYf3iFOInIjniUWJvYocin+LB4twi/+MWYyqjRqNcY3ZjjWOnI7wj0KPe4/LkESQzJFHkZqR7pH6klGSsJMTk32T05Q5lL6VF5VwlcOWMpaalwmXbpfHmECYxpkjmayaEZqAmtmbK5uVm+GcP5zAnMydJJ0wnY6d6J5KnrOfFZ+Tn+mf9aBZoL+hAaFtobaiFaJdos+jHaNeo72j/KQ7pJWk5aVOpZWl3qYhppKnBqeLp/+oS6iaqOipVKmfqgyqc6r4q0mrpqvvrDmsoKz+rVmt0K4hrpGu5q9Cr5qwAbBpsMSxPbGfsg6yNLJlsm6yirK6sxqzJrNcs6SzsLPotDC0PLRstKq0trT0tUG1cbWotfC2L7Z1tsq20rbetx63V7emt/24NriLuOK5C7kyuVm5frmjuci57roWuj+6abqVusG67bsau0e7dLuiu9C7/rwsvFq8iLy2vOS9A70XvUe9kL3ZviC+Lb5Kvmi+ir6evqy+tL7Kvtq/AL8QvzW/br+Iv7m/8sAFwE3AhsCSwJ7ArsDCwNPBCcFrwYXBt8HlwgnCH8IzwmHCeMKGwqLCu8LKwubC+8Mnw0fDecOhw93D78QRxCXERMRexHPEicSbxKnEu8TNxNrE6MUYxUfFb8Wfxc7F7sYtxk/GbMaQxqfGtcbpxwrHNcdlx5XHrMfqyAbIJ8g6yFjIcsiIyJzI3cjpySrJVMlUyXLJo8nTyhHKNcpIypnKvssRyz3LVstmy27LtcvCy+rMA8wmzFvMasyLzKjMsczNzNzNCM0hzUzNgc3SzgjOFM4gzizOOM5EzlDOc861zsHOzc7ZzuXO8c79zwnPFc9Bz03PWc9lz3HPfc+Jz6PP5M/wz/zQCNAU0CDQQdCQ0JzQqNC00L/Qy9DX0S3RadF10YHRjdGY0aPRrtG50cTSAtIO0hrSJtIy0j3SSdJ10rHSvdLJ0tXS4dLt0x3TKdM100DTTNNY04fTy9PX0+PT79P71AfUEtQe1F3UZdSe1KrUtdTB1MzU2NTk1RDVVNVg1WzVeNWE1ZDVnNXY1iXWMdY81kjWU9Zf1mrWjNa+1srW2NcA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AwsAMgMUAB4DFAAeAxQAHgMUAB4DFAAeAkUAFAMUABICzwAuAs8ALgLPAC4CzwAuAtoAAAKJADIDLwAsAqgAFAKoABQCqAAUAqgAFAKoABQCqAAUBB4AFAJhABQCaAAUAmgAFAJoABQCaAAUAXQAOAF0ADgBdAAVAXT/9AKDABQCuQAyAnwAFAJ8ABQCfAAUAnwAFAJ8ABQCJwAUAm0AAAK5AC4CuQAuArkALgK5AC4Cpf/2AqgAMgKl//YDBQAAAqgAFAMFAAACqAAUAwUAAAKoABQC8QAeAmEAFALxAB4CYQAUAvEAHgJhABQC5wAyA3IAFALnAAACwAAUAiwAMgJoABQCLAAyAmgAFAIsADICaAAUAiwAMgJoABQCLAAyAmgAFALwAB4CqAAUAvAAHgKoABQC9AAeAqgAFAFC/7gBdP/RAUL/ywF0/+QBQv/mAXT//wFC//4BQv/+AUIAMgF0AEsDHgAyAqQAMgH6ADIBQgAfAf8AMgFCADICQQAyAgQAMgH6ADIBuAAyAgkACgF0AAoDCwAyArkAMgM9ADICuQAyAwsAMgK5ADIDFAAeAnwAFAMUAB4CfAAUAxQAHgJ8ABQEGQAeA/4AFAKeADIB0wAyAr0AMgHTADICngAyAdMAMgJxABwCQwAVAnEAHAJDABUCcQAcAkMAFQJoAAoBtAAPAmgACgG0AA8CzwAuArkALgLPAC4CuQAuAs8ALgK5AC4CzwAuArkALgLPAC4CuQAuAs8ALgK5AC4ETAAeA4f//wLaAAACpf/2AtoAAAJ2ADICBgAUAnYAMgIGABQCdgAyAgYAFAMFAB4BVP+6A9oAAAQeABQCrQAcAkMAFQJoAAoBtAAPAmgAFAF6AEABXwAKAV8ACgHDAAoBiwAKAMAACgEbAAoBLgASAcoAAAIBAAoCxAAKBEwAHgOH//8ETAAeA4f//wRMAB4Dh///AiwAMAJoABQC2gAAAqX/9gLaAAACpf/2AqsANwOoADcBegAyAXoAQAFoACsCiAAyAogAQAJ1AC0CzQAzAswAMgIYAGQDZQAgBQQAFAF1AC0BdQAyAiv/5QMWAA8DMwAKAsUACgFCADIDswAeAxcAIQLkABwCggAeAwIAFALxAAoCSgAoAfoAFAGP/9wBXQAvA/wAEwNMACEBOP/HAscAFAJyABQB7AAUAewAFAI8AAoCyAAK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AG4AdAAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgAGgAdAB0AHAAcwA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAGgAdAB0AHAAcwA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAFAAbwBwAHAAaQBuAHMAQgBsAGEAYwBrCTgJLQlAACAJLgkoCUEJNwlNCS8JSwkCACAJFQlLACAJFwlMCTAJNQAgCRQJMAAgCQUJJwk/CRUJPgkwCUsJAgAgCRUJRwAgCS4JPgkuCTIJRwAgCS4JRwkCACAJHAkoCU0JLgkcCT4JJAAgCTgJTQk1CSQJKAlNCSQJTQkwCSQJPgAgCRQJMAAgCTgJLgk+CSgJJAk+ACAJKglNCTAJPgkqCU0JJAAgCTkJSAlkAFMAcQB1AGEAcgBlACAAZABvAHQAcwAgAGkAbgAgAHAAdQBuAGMAdAB1AGEAdABpAG8AbgAgAG0AYQByAGsAcwBEAG8AdQBiAGwAZQAtAHMAdABvAHIAZQB5ACAAYQBBAGwAdABlAHIAbgBhAHQAaQB2AGUAIABhAG0AcABlAHIAcwBhAG4AZABBAGwAdABlAHIAbgBhAHQAaQB2AGUAIAAyACwAIAAzACwAIAA2ACwAIAA5AAAAAgAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAQjAAABAgEDAAMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgITAhQCFQIWAhcCGAIZAhoCGwIcAh0CHgIfAiACIQIiAiMCJAIlAiYCJwIoAikCKgIrAiwCLQIuAi8CMAIxAjICMwI0AjUCNgI3AjgCOQI6AjsCPAI9Aj4CPwJAAkECQgJDAkQCRQJGAkcCSAJJAkoCSwJMAk0CTgJPAlACUQJSAlMCVAJVAlYCVwJYAlkCWgJbAlwCXQJeAl8CYAJhAmICYwJkAmUCZgJnAmgCaQJqAmsCbAJtAm4CbwJwAnECcgJzAnQCdQJ2AncCeAJ5AnoCewJ8An0CfgJ/AoACgQKCAoMChAKFAoYChwKIAokCigKLAowCjQKOAo8CkAKRApICkwKUApUClgKXApgCmQKaApsCnAKdAp4CnwKgAqECogKjAqQCpQKmAqcCqAKpAqoCqwKsAq0CrgKvArACsQKyArMCtAK1ArYCtwK4ArkCugK7ArwCvQK+Ar8CwALBAsICwwLEAsUCxgLHAsgCyQLKAssCzALNAs4CzwLQAtEC0gLTAtQC1QLWAtcC2ALZAtoC2wLcAt0C3gLfAuAC4QLiAuMC5ALlAuYC5wLoAukC6gLrAuwC7QLuAu8C8ALxAvIC8wL0AvUC9gL3AvgC+QL6AvsC/AL9Av4C/wMAAwEDAgMDAwQDBQMGAwcDCAMJAwoDCwMMAw0DDgMPAxADEQMSAxMDFAMVAxYDFwMYAxkDGgMbAxwDHQMeAx8DIAMhAyIDIwMkAyUDJgMnAygDKQMqAysDLAMtAy4DLwMwAzEDMgMzAzQDNQM2AzcDOAM5AzoDOwM8Az0DPgM/A0ADQQNCA0MDRANFA0YDRwNIA0kDSgNLA0wDTQNOA08DUANRA1IDUwNUA1UDVgNXA1gDWQNaA1sDXANdA14DXwNgA2EDYgNjA2QDZQNmA2cDaANpA2oDawNsA20DbgNvA3ADcQNyA3MDdAN1A3YDdwN4A3kDegN7A3wDfQN+A38DgAOBA4IDgwOEA4UDhgOHA4gDiQOKA4sDjAONA44DjwOQA5EDkgOTAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEDlACjAIQAhQC9AJYA6ACGAI4AiwCdAKkApAOVAIoA2gCDAJMA8gDzAI0DlgCIAMMA3gDxAJ4AqgD1APQA9gCiAK0AyQDHAK4AYgBjAJAAZADLAGUAyADKAM8AzADNAM4A6QBmANMA0ADRAK8AZwDwAJEA1gDUANUAaADrAO0AiQBqAGkAawBtAGwAbgCgAG8AcQBwAHIAcwB1AHQAdgB3AOoAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoDlwOYA5kDmgObA5wA/QD+A50DngD/AQADnwOgA6EBAQOiA6MDpAOlA6YDpwOoA6kDqgOrAPgA+QOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwD6ANcDuAO5A7oDuwO8A70DvgO/A8ADwQDiAOMDwgPDA8QDxQPGA8cDyAPJA8oDywPMA80AsACxA84DzwPQA9ED0gPTA9QD1QPWA9cA5ADlA9gD2QPaA9sD3APdA94D3wPgA+ED4gPjA+QD5QPmA+cD6APpA+oD6wC7A+wD7QPuA+8A5gDnA/AApgPxA/ID8wP0A/UD9gP3A/gA2ADhA/kA2wDcAN0A4ADZAN8AmwP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQCyALMAtgC3AMQAtAC1AMUAggDCAIcAqwDGAL4AvwC8BAYEBwQIBAkAjAQKBAsAmAQMAJoAmQDvBA0EDgClAJIAnACnAI8AlACVALkAwADBBA8EEAQRBBIEEwQUBBUEFgQXBBgEGQQaBBsEHAQdBB4EHwQgBCEEIgQjBCQEJQQmBCcEKAQpBCoEKwQsBE5VTEwCQ1IDZHZBBGR2QUEDZHZJBGR2SUkDZHZVBGR2VVUEZHZ2UgVkdnZSUgRkdnZMBWR2dkxMA2R2RQRkdkFJA2R2TwRkdkFVCWR2RWNhbmRyYQlkdkFjYW5kcmEJZHZPY2FuZHJhBWR2bUFBBGR2bUkFZHZtSUkEZHZtVQVkdm1VVQVkdm12UgZkdm12UlIFZHZtdkwGZHZtdkxMBGR2bUUFZHZtQUkEZHZtTwVkdm1BVQpkdm1FY2FuZHJhCmR2bU9jYW5kcmEEZHZLQQVkdktIQQRkdkdBBWR2R0hBBWR2TkdBBGR2Q0EFZHZDSEEEZHZKQQVkdkpIQQVkdk5ZQQVkdlRUQQZkdlRUSEEFZHZEREEGZHZEREhBBWR2Tk5BBGR2VEEFZHZUSEEEZHZEQQVkdkRIQQRkdk5BBGR2UEEFZHZQSEEEZHZCQQVkdkJIQQRkdk1BBGR2WUEEZHZSQQRkdkxBBGR2VkEFZHZTSEEFZHZTU0EEZHZTQQRkdkhBBWR2TExBB2R2S19TU0EHZHZKX05ZQQVkdkt4QQZkdktIeEEFZHZHeEEFZHZKeEEGZHZERHhBB2R2RERIeEEGZHZQSHhBBWR2UnhBA2R2SwRkdktIA2R2RwRkdkdIBGR2TkcDZHZDBGR2Q0gDZHZKBGR2SkgEZHZOWQRkdlRUBWR2VFRIBGR2REQFZHZEREgEZHZOTgNkdlQEZHZUSANkdkQEZHZESANkdk4DZHZQBGR2UEgDZHZCBGR2QkgDZHZNA2R2WQNkdlIDZHZMA2R2VgRkdlNIBGR2U1MDZHZTA2R2SARkdkxMBmR2S19TUwZkdkpfTlkEZHZLeAVkdktIeARkdkd4BGR2SngFZHZQSHgKZHZBbnVzdmFyYQ1kdkNhbmRyYWJpbmR1CWR2VmlzYXJnYQpkdkF2YWdyYWhhCGR2VmlyYW1hB2R2TnVrdGEGZHZaZXJvBWR2T25lBWR2VHdvB2R2VGhyZWUGZHZGb3VyBmR2Rml2ZQVkdlNpeAdkdlNldmVuB2R2RWlnaHQGZHZOaW5lBGR2T20SZHZBYmJyZXZpYXRpb25zaWduBWRhbmRhC2RvdWJsZWRhbmRhBXJ1cGVlC2luZGlhbnJ1cGVlEnplcm93aWR0aG5vbmpvaW5lcg96ZXJvd2lkdGhqb2luZXIMZG90dGVkY2lyY2xlBmR2UmVwaAlkdkV5ZWxhc2gNZHZSYXNodHJhc2lnbgZkdktfUkEHZHZLSF9SQQZkdkdfUkEHZHZHSF9SQQdkdk5HX1JBBmR2Q19SQQdkdkNIX1JBBmR2Sl9SQQdkdkpIX1JBB2R2TllfUkEHZHZUVF9SQQhkdlRUSF9SQQdkdkREX1JBCGR2RERIX1JBB2R2Tk5fUkEGZHZUX1JBB2R2VEhfUkEGZHZEX1JBB2R2REhfUkEGZHZOX1JBBmR2UF9SQQdkdlBIX1JBBmR2Ql9SQQdkdkJIX1JBBmR2TV9SQQZkdllfUkEGZHZMX1JBBmR2Vl9SQQdkdlNIX1JBB2R2U1NfUkEGZHZTX1JBBmR2SF9SQQdkdkxMX1JBB2R2S3hfUkEIZHZLSHhfUkEHZHZHeF9SQQdkdkp4X1JBCGR2UEh4X1JBBWR2S19SBmR2S0hfUgVkdkdfUgZkdkdIX1IGZHZOR19SBWR2Q19SBmR2Q0hfUgVkdkpfUgZkdkpIX1IGZHZOWV9SBmR2VFRfUgdkdlRUSF9SBmR2RERfUgdkdkRESF9SBmR2Tk5fUgVkdlRfUgZkdlRIX1IFZHZEX1IGZHZESF9SBWR2Tl9SBWR2UF9SBmR2UEhfUgVkdkJfUgZkdkJIX1IFZHZNX1IFZHZZX1IFZHZMX1IFZHZWX1IGZHZTSF9SBmR2U1NfUgVkdlNfUgVkdkhfUgZkdkxMX1IGZHZLeF9SB2R2S0h4X1IGZHZHeF9SBmR2SnhfUgdkdlBIeF9SBmR2S19LQQhkdkt4X0t4QQdkdktfS0hBBmR2S19DQQZkdktfSkEHZHZLX1RUQQdkdktfTk5BBmR2S19UQQdkdkt4X1RBCGR2S19UX1lBCGR2S19UX1JBCGR2S19UX1ZBB2R2S19USEEGZHZLX0RBBmR2S19OQQZkdktfUEEIZHZLX1BfUkEHZHZLX1BIQQhkdkt4X1BIQQlkdkt4X1BIeEEHZHZLeF9CQQZkdktfTUEHZHZLeF9NQQZkdktfWUEGZHZLX0xBBmR2S19WQQhkdktfVl9ZQQdkdktfU0hBCWR2S19TU19NQQtkdktfU1NfTV9ZQQlkdktfU1NfWUEJZHZLX1NTX1ZBBmR2S19TQQlkdktfU19UVEEJZHZLX1NfRERBCGR2S19TX1RBCmR2S19TX1BfUkEKZHZLX1NfUF9MQQhkdktIX0tIQQdkdktIX1RBCGR2S0h4X1RBB2R2S0hfTkEHZHZLSF9NQQhkdktIeF9NQQdkdktIX1lBCGR2S0h4X1lBB2R2S0hfVkEIZHZLSHhfVkEIZHZLSF9TSEEJZHZLSHhfU0hBCGR2S0h4X1NBBmR2R19HQQdkdkdfR0hBBmR2R19KQQdkdkdfTk5BBmR2R19EQQdkdkdfREhBCWR2R19ESF9ZQQlkdkdfREhfVkEGZHZHX05BCGR2R19OX1lBBmR2R19CQQdkdkdfQkhBCWR2R19CSF9ZQQZkdkdfTUEGZHZHX1lBCGR2R19SX1lBBmR2R19MQQZkdkdfVkEGZHZHX1NBB2R2R0hfTkEHZHZHSF9NQQdkdkdIX1lBBmR2Q19DQQdkdkNfQ0hBCWR2Q19DSF9WQQZkdkNfTkEGZHZDX01BBmR2Q19ZQQdkdkNIX1lBCWR2Q0hfUl9ZQQZkdkpfS0EGZHZKX0pBCGR2SnhfSnhBCWR2Sl9KX05ZQQhkdkpfSl9ZQQhkdkpfSl9WQQdkdkpfSkhBCWR2Sl9OWV9ZQQdkdkpfVFRBB2R2Sl9EREEGZHZKX1RBBmR2Sl9EQQZkdkpfTkEGZHZKX0JBBmR2Sl9NQQZkdkpfWUEHZHZKeF9ZQQZkdkpfVkEHZHZKSF9OQQdkdkpIX01BB2R2SkhfWUEHZHZOWV9DQQhkdk5ZX0NIQQdkdk5ZX0pBCGR2TllfU0hBCGR2VFRfVFRBCWR2VFRfVFRIQQdkdlRUX1lBB2R2VFRfVkEKZHZUVEhfVFRIQQhkdlRUSF9ZQQhkdlRUSF9WQQhkdkREX0REQQlkdkREX0RESEEHZHZERF9ZQQdkdkREX1ZBCmR2RERIX0RESEEIZHZEREhfWUEIZHZEREhfVkEIZHZOTl9UVEEJZHZOTl9UVEhBCGR2Tk5fRERBCWR2Tk5fRERIQQhkdk5OX05OQQdkdk5OX01BB2R2Tk5fWUEHZHZOTl9WQQZkdlRfS0EIZHZUX0tfWUEIZHZUX0tfUkEIZHZUX0tfVkEJZHZUX0tfU1NBB2R2VF9LSEEJZHZUX0tIX1JBBmR2VF9UQQhkdlRfVF9ZQQhkdlRfVF9WQQdkdlRfVEhBBmR2VF9OQQhkdlRfTl9ZQQZkdlRfUEEIZHZUX1BfUkEIZHZUX1BfTEEHZHZUX1BIQQZkdlRfTUEIZHZUX01fWUEGZHZUX1lBCGR2VF9SX1lBBmR2VF9MQQZkdlRfVkEGZHZUX1NBCGR2VF9TX05BCGR2VF9TX1lBCGR2VF9TX1ZBB2R2VEhfTkEHZHZUSF9ZQQdkdlRIX1ZBBmR2RF9HQQhkdkRfR19SQQdkdkRfR0hBBmR2RF9EQQdkdkRfREhBBmR2RF9OQQZkdkRfQkEIZHZEX0JfUkEHZHZEX0JIQQZkdkRfTUEGZHZEX1lBBmR2RF9WQQdkdkRIX05BCWR2REhfTl9ZQQdkdkRIX01BB2R2REhfWUEHZHZESF9WQQZkdk5fS0EIZHZOX0tfU0EGZHZOX0NBB2R2Tl9DSEEHZHZOX1RUQQdkdk5fRERBBmR2Tl9UQQhkdk5fVF9ZQQhkdk5fVF9SQQhkdk5fVF9TQQdkdk5fVEhBCWR2Tl9USF9ZQQlkdk5fVEhfVkEGZHZOX0RBCGR2Tl9EX1JBCGR2Tl9EX1ZBB2R2Tl9ESEEJZHZOX0RIX1lBCWR2Tl9ESF9SQQlkdk5fREhfVkEGZHZOX05BCGR2Tl9OX1lBBmR2Tl9QQQhkdk5fUF9SQQdkdk5fUEhBCWR2Tl9QSF9SQQdkdk5fQkhBCWR2Tl9CSF9ZQQlkdk5fQkhfVkEGZHZOX01BCGR2Tl9NX1lBBmR2Tl9ZQQZkdk5fVkEGZHZOX1NBCWR2Tl9TX1RUQQpkdk5fU19NX1lBCGR2Tl9TX1lBBmR2Tl9IQQdkdlBfVFRBCGR2UF9UVEhBBmR2UF9UQQhkdlBfVF9ZQQZkdlBfTkEGZHZQX1BBB2R2UF9QSEEGZHZQX01BBmR2UF9ZQQZkdlBfTEEGZHZQX1ZBBmR2UF9TQQdkdlBIX0pBCWR2UEh4X0p4QQhkdlBIX1RUQQdkdlBIX1RBCGR2UEh4X1RBB2R2UEhfTkEHZHZQSF9QQQhkdlBIX1BIQQpkdlBIeF9QSHhBB2R2UEhfWUEHZHZQSF9MQQhkdlBIX1NIQQhkdlBIeF9TQQZkdkJfSkEHZHZCX0p4QQhkdkJfSl9ZQQdkdkJfSkhBBmR2Ql9UQQZkdkJfREEHZHZCX0RIQQlkdkJfREhfVkEGZHZCX05BBmR2Ql9CQQdkdkJfQkhBCWR2Ql9CSF9SQQZkdkJfWUEGZHZCX0xBCGR2Ql9MX1lBBmR2Ql9WQQdkdkJfU0hBBmR2Ql9TQQdkdkJIX05BB2R2QkhfWUEJZHZCSF9SX1lBB2R2QkhfTEEHZHZCSF9WQQZkdk1fVEEGZHZNX0RBBmR2TV9OQQZkdk1fUEEIZHZNX1BfUkEGZHZNX0JBCGR2TV9CX1lBCGR2TV9CX1JBB2R2TV9CSEEJZHZNX0JIX1lBCWR2TV9CSF9SQQlkdk1fQkhfVkEGZHZNX01BBmR2TV9ZQQZkdk1fTEEGZHZNX1ZBB2R2TV9TSEEGZHZNX1NBBmR2TV9IQQZkdllfTkEGZHZZX1lBDGR2RXllbGFzaF9ZQQxkdkV5ZWxhc2hfSEEGZHZMX0tBCGR2TF9LX1lBB2R2TF9LSEEGZHZMX0dBBmR2TF9KQQdkdkxfSnhBB2R2TF9UVEEIZHZMX1RUSEEHZHZMX0REQQhkdkxfRERIQQZkdkxfVEEHZHZMX1RIQQlkdkxfVEhfWUEGZHZMX0RBCGR2TF9EX1JBBmR2TF9QQQdkdkxfUEhBBmR2TF9CQQdkdkxfQkhBBmR2TF9NQQZkdkxfWUEGZHZMX0xBCGR2TF9MX1lBBmR2TF9WQQlkdkxfVl9EREEGZHZMX1NBBmR2TF9IQQZkdlZfTkEGZHZWX1lBBmR2Vl9MQQZkdlZfVkEGZHZWX0hBB2R2U0hfS0EIZHZTSF9LeEEHZHZTSF9DQQhkdlNIX0NIQQhkdlNIX1RUQQdkdlNIX1RBB2R2U0hfTkEHZHZTSF9NQQdkdlNIX1lBB2R2U0hfTEEHZHZTSF9WQQhkdlNIX1NIQQdkdlNTX0tBCWR2U1NfS19SQQhkdlNTX1RUQQpkdlNTX1RUX1lBCmR2U1NfVFRfUkEKZHZTU19UVF9WQQlkdlNTX1RUSEELZHZTU19UVEhfWUELZHZTU19UVEhfUkEIZHZTU19OTkEKZHZTU19OTl9ZQQdkdlNTX1BBCWR2U1NfUF9SQQhkdlNTX1BIQQdkdlNTX01BCWR2U1NfTV9ZQQdkdlNTX1lBB2R2U1NfVkEIZHZTU19TU0EGZHZTX0tBCGR2U19LX1JBCGR2U19LX1ZBB2R2U19LSEEGZHZTX0pBB2R2U19UVEEGZHZTX1RBCGR2U19UX1lBCGR2U19UX1JBCGR2U19UX1ZBB2R2U19USEEJZHZTX1RIX1lBBmR2U19EQQZkdlNfTkEGZHZTX1BBCGR2U19QX1JBB2R2U19QSEEGZHZTX0JBBmR2U19NQQhkdlNfTV9ZQQZkdlNfWUEGZHZTX0xBBmR2U19WQQZkdlNfU0EHZHZIX05OQQZkdkhfTkEGZHZIX01BBmR2SF9ZQQZkdkhfTEEGZHZIX1ZBB2R2TExfWUELZHZtSUkuYUxvbmcPZHZSZXBoX0FudXN2YXJhDmR2QW51c3ZhcmEuYW1JCmR2UmVwaC5hbUkTZHZSZXBoX0FudXN2YXJhLmFtSQ1kdklJX0FudXN2YXJhDmR2bUlJX0FudXN2YXJhCmR2bUlJX1JlcGgTZHZtSUlfUmVwaF9BbnVzdmFyYRRkdm1JSV9BbnVzdmFyYS5hTG9uZxBkdm1JSV9SZXBoLmFMb25nGWR2bUlJX1JlcGhfQW51c3ZhcmEuYUxvbmcNZHZtRV9BbnVzdmFyYQlkdm1FX1JlcGgSZHZtRV9SZXBoX0FudXN2YXJhDmR2bUFJX0FudXN2YXJhCmR2bUFJX1JlcGgTZHZtQUlfUmVwaF9BbnVzdmFyYQ1kdm1PX0FudXN2YXJhCWR2bU9fUmVwaBJkdm1PX1JlcGhfQW51c3ZhcmEOZHZtQVVfQW51c3ZhcmEKZHZtQVVfUmVwaBNkdm1BVV9SZXBoX0FudXN2YXJhE2R2bUVjYW5kcmFfQW51c3ZhcmETZHZtT2NhbmRyYV9BbnVzdmFyYQdkdlJBX21VCGR2UkFfbVVVB2R2SEFfbVUIZHZIQV9tVVUIZHZEQV9tdlIJZHZTSEFfbXZSCGR2SEFfbXZSCGR2bUkuYTAxCGR2bUkuYTAyCGR2bUkuYTAzCGR2bUkuYTA0CGR2bUkuYTA1CGR2bUkuYTA2CGR2bUkuYTA3CGR2bUkuYTA4CGR2bUkuYTA5CGR2bUkuYTEwCGR2bUkuYTExCGR2bUkuYTEyCGR2bUkuYTEzCGR2bUkuYTE0CGR2bUkuYTE1CGR2bUkuYTE2CGR2bUkuYTE3CGR2bUkuYTE4CGR2bUkuYTE5CGR2bUkuYTIwCGR2bUkuYTIxCGR2bUkuYTIyCGR2bUkuYTIzCGR2bUkuYTI0B3VuaTAwQTAHdW5pMDBBRAd1bmkwMEI1B0FtYWNyb24HYW1hY3JvbgZBYnJldmUGYWJyZXZlB0FvZ29uZWsHYW9nb25lawpDZG90YWNjZW50CmNkb3RhY2NlbnQGRGNhcm9uBmRjYXJvbgZEY3JvYXQHRW1hY3JvbgdlbWFjcm9uBkVicmV2ZQZlYnJldmUKRWRvdGFjY2VudAplZG90YWNjZW50B0VvZ29uZWsHZW9nb25lawZFY2Fyb24GZWNhcm9uCkdkb3RhY2NlbnQKZ2RvdGFjY2VudAd1bmkwMTIyB3VuaTAxMjMGSXRpbGRlBml0aWxkZQdJbWFjcm9uB2ltYWNyb24HdW5pMDEyQwd1bmkwMTJEB0lvZ29uZWsHaW9nb25lawd1bmkwMTM2B3VuaTAxMzcGTGFjdXRlBmxhY3V0ZQd1bmkwMTNCB3VuaTAxM0MGTGNhcm9uBmxjYXJvbgRMZG90BGxkb3QGTmFjdXRlBm5hY3V0ZQd1bmkwMTQ1B3VuaTAxNDYGTmNhcm9uBm5jYXJvbgdPbWFjcm9uB29tYWNyb24HdW5pMDE0RQd1bmkwMTRGDU9odW5nYXJ1bWxhdXQNb2h1bmdhcnVtbGF1dAZSYWN1dGUGcmFjdXRlB3VuaTAxNTYHdW5pMDE1NwZSY2Fyb24GcmNhcm9uBlNhY3V0ZQZzYWN1dGUHdW5pMDE1RQd1bmkwMTVGB3VuaTAxNjIHdW5pMDE2MwZUY2Fyb24GdGNhcm9uBlV0aWxkZQZ1dGlsZGUHVW1hY3Jvbgd1bWFjcm9uBlVicmV2ZQZ1YnJldmUFVXJpbmcFdXJpbmcNVWh1bmdhcnVtbGF1dA11aHVuZ2FydW1sYXV0B1VvZ29uZWsHdW9nb25lawtXY2lyY3VtZmxleAt3Y2lyY3VtZmxleAtZY2lyY3VtZmxleAt5Y2lyY3VtZmxleAZaYWN1dGUGemFjdXRlClpkb3RhY2NlbnQKemRvdGFjY2VudAd1bmkwMThGB3VuaTAxRkMHdW5pMDFGRAd1bmkwMjE4B3VuaTAyMTkHdW5pMDIxQQd1bmkwMjFCB3VuaTAyNTkHdW5pMDJCQwd1bmkwMkM5BldncmF2ZQZ3Z3JhdmUGV2FjdXRlBndhY3V0ZQlXZGllcmVzaXMJd2RpZXJlc2lzB3VuaTFFQkMHdW5pMUVCRAZZZ3JhdmUGeWdyYXZlB3VuaTFFRjgHdW5pMUVGOQRFdXJvB3VuaTIwQkEHdW5pMjBCRAd1bmkyMTEzB3VuaTIxMjYJZXN0aW1hdGVkB3VuaTIyMDYHdW5pMjIxNQd1bmkyMjE5C2V4Y2xhbS5zczAxCmNvbW1hLnNzMDELcGVyaW9kLnNzMDEKY29sb24uc3MwMQ5zZW1pY29sb24uc3MwMQ1xdWVzdGlvbi5zczAxD2V4Y2xhbWRvd24uc3MwMRNwZXJpb2RjZW50ZXJlZC5zczAxEXF1ZXN0aW9uZG93bi5zczAxC2RpdmlkZS5zczAxDnF1b3RlbGVmdC5zczAxD3F1b3RlcmlnaHQuc3MwMRFxdW90ZWRibGxlZnQuc3MwMRJxdW90ZWRibHJpZ2h0LnNzMDENZWxsaXBzaXMuc3MwMQZhLnNzMDILYWFjdXRlLnNzMDILYWJyZXZlLnNzMDIQYWNpcmN1bWZsZXguc3MwMg5hZGllcmVzaXMuc3MwMgthZ3JhdmUuc3MwMgxhbWFjcm9uLnNzMDIMYW9nb25lay5zczAyCmFyaW5nLnNzMDILYXRpbGRlLnNzMDIOYW1wZXJzYW5kLnNzMDMIdHdvLnNzMDQKdGhyZWUuc3MwNAhzaXguc3MwNAluaW5lLnNzMDQAAAAAAQAAAAwAAAAAAAAAAgAIABgAHwADACIAIgADAHkAegADAH0AfQADAJIAkgADAlwCXwADAmcCbAADAnMCcwADAAEAAAAKAEgAfgADREZMVAAUZGV2MgAiZGV2YQAwAAQAAAAA//8AAgAAAAMABAAAAAD//wACAAEABAAEAAAAAP//AAIAAgAFAAZhYnZtACZhYnZtACZhYnZtACZibHdtAC5ibHdtAC5ibHdtAC4AAAACAAAAAQAAAAIAAgADAAQACgXyCmwN8gAEAAAAAQAIAAEADAAsAAEBlAHaAAEADgAeAB8AIgB5AHoAkgJcAmcCaAJpAmoCawJsAnMAAQCyAAYACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAkACgAKgAuAC8AMAAxADUAOQA+AD8ARABFAEgATABNAE4ATwBUAFoAWwBcAF0AYQBqAHAAlQCZAJsAnwCgAKEAogCmAKoArwC0ALUAtgC6AL8AxQDGAMcAyADMANUA2gDhAOIA5gDoAO4A8gDzAPQA+QECAQMBBgEYASQBKwEsATIBOgE7AT0BSAFL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A/YEDgQOA6ID/APqA/wD/APYA8YDxgPeA8YD9gO6A8wDzAP8A8YD9gPkA9gD3gQCA/YDzAQaBBoEFAOWBBQEIAOcA5wD0gQUBAgDnAP2A7oEAgP8A+oDzAOuA/wD9gPqA+oD9gPYA/wD5AQCA+QD2APMA8wD6gP2A7oD9gPeBA4D5AP8A/wD/AP8BCAD8AO6BCAD8AQCA/wEDgOoA+QDxgQUA8ADxgPSA/wD6gPGA/wDzAP8A8YD/APeA94D9gQgBCAD3gQOBAIEAgQgA94D3gPSA/wD/APYBA4D6gO0A+oD0gP2A+oD9gQCA8wD/AO6A8YD9gP8BA4EAgQCBA4D/AP2A8wEDgP2A/YD9gO6A/YEIAPwA9ID5AQgBAIEDgP8BCAEDgPqA/YD/APGA6ID9gOuA6gD0gPSA9ID/APMA8wD/AQCBCADrgP8A/wD9gP2BAID0gPSBA4D0gOuBAID5APSA8wD/APMA/wDxgPAA/wD/APABAIDzAP2BA4EIAQCBA4DwAQgA8YDxgO0A7oDtAO0A8ADugPAA/YD2APqA+oDxgP2A9gDzAPGA+oDzAPMA/AD0gQOA+oD/APYA/wD3gQCA+QD6gQOA/wD/AP8A/wEDgPwA/YEDgP8BAIECAQOBA4EFAQaBBoEIAABAdwCuAABAhcCtgABAscCsQABBfkCmQABBx4CkQABA3YCrAABBm4ClgABAwECrwABA7ACqgABBCUCpgABBYUCnQABBjQCmAABBb8CmwABBqkClAABA+oCqAABBuQCkgABBJsCowABBGACpQABBNUCoQABAowCswABBRACoAABAzsCrQABAlICtAABBUsCnwAEAAAAAQAIAAEADAOYAAEAFgAwAAIAAQAYAB0AAAAGAAAEqgAABKoAAASqAAAEqgAABKoAAASqAI8F+AEgASYBLAEyATgBPgYiBigBRAFKAVABVgFcAWIBaAFuAXQBegGAAYYBjAGSAZgGKAGeAaQBqgZABkYGXgGwAbYGUgZYBl4GXgG8AcIByAHOAdQGggHaAeAGlAaaAeYB7AasAfIB+AH+BsQCBAbQAgoCCgbiAhAG7gIWAhwCIgIoBwwCLgI0BxgCOgckAkAHMAcqBzAHNgJGBzwHQgdIAkwCUgJYB2ACXgdmB2wHbAJkAmoCcAJ2B4oCfAKCB5wCiAKOB6gClAKaB7oCoAKmAqwH0gKyArgCvgLEB/ACygf2AtAC1gLcAuIC6AgaAu4DBgL0AvoDAAMGCDgDDAMSAxgISgMeAyQIXAhiAyoDMAhuCHQDNgM8CIYDQgNIAAEBmf+FAAECA/+rAAEBxf+iAAEBvf+vAAEBnv+EAAEB4/+JAAEDBf+nAAEBpv8uAAEDCv+9AAECRP8jAAEBnv6QAAEB4/6WAAECYv+gAAECRP+9AAEBmf8sAAECA/9VAAEBxf9XAAEBvf9RAAEBnv8tAAEB4/8xAAECLv+tAAEDBf7aAAEBpv8LAAEDCv9lAAEE0v8jAAEEU/+iAAEE0/+gAAEFk/+nAAEGTP+iAAEGLP+EAAEI1/+nAAEFGv+nAAEDpv+rAAED8f+iAAEDtv+EAAEECv+rAAEBxf5qAAEBxv5rAAEBvf5rAAEBnv5hAAEB0f5kAAEEB/+iAAEEBv+vAAED5v+EAAEEJ/+JAAEDvf+9AAEFvf+nAAEEgf+nAAECgv6NAAECOP6VAAEEIf+rAAEDyv+iAAEDnf+EAAEENf+tAAEF0f+iAAEDnP8uAAEDKv+iAAEDJ/+vAAEEYP+nAAEEfP+iAAEE+f+qAAEFu/+nAAEEbf+nAAEFMv+nAAEFLv+nAAEDuv8uAAECr/8uAAEEOv+iAAEEM/+vAAED9f+EAAEEWP+JAAEEo/+tAAEFe/+nAAEGXv+EAAED4/8uAAEEaf+nAAEC0P8uAAEEcv8jAAEET/+rAAEEAP+iAAEFKv+nAAEDJf+UAAEDu/+9AAEDOP+iAAEDOP9XAAEDM/+vAAEDM/9QAAEER/+9AAEDxv+iAAEFB/+nAAECAv6jAAEB+/6jAAEB2f6iAAQAAAABAAgAAQAMABIAAQE0AUAAAQABAH0AAQCPACQAKAAqAC4ALwAwADEANQA5AD8ARABFAEgATABNAE4AlQCZAJsAnwCgAKEAogCmAKoArwC0ALUAtgC6AOEA4gDmAOgA7gDyAPMA9AD5AQIBAwEGARgBJAErASwBMgE6ATsBPQFIAUsBTAFOAU8BUQFSAVMBVQFWAVgBWQFaAVsBXAFhAWMBcAFxAXYBfwGAAYEBggGDAYUBhgGIAYoBkAGTAZQBlQGdAZ4BnwGoAakBsgG1AbYBtwG8Ab8BxAHJAcoBzAHUAdwB5AHnAfQB+AH8Af0CAwIEAgUCBgIKAgsCDQISAhUCFwIaAhwCHQIeAh8CIAIhAiYCJwIpAioCKwItAi4CLwIxAjYCPAI9AkECSAJMAlECVAJXAlgCWQABAAAABgAB/74AAACPAWIBIAEmASwBMgE4AT4BjAGSAUQBSgFQAWIBVgFcAZIBYgFoAW4BdAF6AYABhgGMAZIBmAGeAaQBqgGwAcgByAG2AbwBwgHIAcgBzgHUAdoB4AHmAewB8gH4Af4CBAIKAhACFgIcAiICKAIuAjQCOgJAAkYCTAJSAlgCXgJkAmoCcAJ2AnYCfAKCAogCjgKOApoClAKaAqACoAKmAqwCsgK4Ar4CxALKAsoC0ALWAtYC3ALiAugC7gL0AvoDAAMGAwYDDAMSAxgDHgMkAyoDMAM2AzwDQgNIA04DVANaA1oDYANmA2wDcgN4A34DhAOEA5wDigOQA5YDnAOiA6IDqAOuA7QDugPAA8YDzAPMA9ID2APeA+QD6gPwA/YD/AABAYr/6QABAfUADwABAbcABQABAa8AEwABAZD/6AABAdX/7QABAvQABQABAZX/iwABAvgAGgABAZD+8wABAdX++QABAkQAAAABAYr/kAABAfX/uQABAbf/uwABAa//tAABAZD/kQABAdX/lQABAi7/1AABAmIAAAABAvT/OAABAZX/aQABAvj/wwABAqQAAAABAsQAAAABBEQABQABAs0AAAABBL3/1AABBNIAAAABBNMAAAABBYIABQABBj4ABQABBh7/6AABCMYABQABBEP/1AABBQgABQABA5gADwABBDj+rQABBHMAAAABA+IABQABA6j/6AABBFn/1AABA/wADwABAbf+zQABAbf+zgABAkn+tAABAa/+zgABAlP+wgABAZD+xQABAZD+xAABAgX+pAABAcP+xwABAkr+pAABA/kABQABA/gAEwABA9j/6AABBBn/7QABA70AAAABBawABQABA8AAAAABBHAABQABAoL+2QABAiH/lAABA2X/1AABAjj+xQABAzr+eAABAiv+2QABBE0AAAABBBIADwABA7sABQABA47/6AABBDX/1AABBCf+2QABBFoAAAABBcMABQABA4r/iwABAxwABQABAxgAEwABA88AAAABBE4ABQABBG4ABQABBPkAAAABBaoABQABA7L/1AABBFwABQABBSEABQABBFv/1AABBR0ABQABA6n/iwABAp3/iwABBLkAAAABBCwABQABBCQAEwABA+f/6AABBEr/7QABBKP/1AABBLIAAAABBWkABQABBk//6AABA9L/iwABBFgABQABAr//iwABBHIAAAABBEAADwABA/EABQABBRkABQABAyX/9AABA7sAAAABAyoABQABAyr/uwABA7r+tAABAyUAEwABAyX/tAABA9cAAAABBEcAAAABA7gABQABBDD/1AABBF0AAAABBPUABQABAfH/AQABA0P/XgABAer/AQABAcj/AAAAAAEAAAAKAJYCMgADREZMVAAUZGV2MgA8ZGV2YQBkAAQAAAAA//8ADwAAAAMABgAJAAwADwASABUAGAAbAB0AIAAjACYAKQAEAAAAAP//AA8AAQAEAAcACgANABAAEwAWABkAHAAeACEAJAAnACoABAAAAAD//wAPAAIABQAIAAsADgARABQAFwAaAB8AIgAlACgAKwAsAC1hYnZzARBhYnZzARBhYnZzARBha2huARpha2huARpha2huASJibHdmAShibHdmAShibHdmAS5ibHdzATRibHdzATRibHdzATRoYWxmATpoYWxmATpoYWxmAUJoYWxuAUhoYWxuAUhoYWxuAUhudWt0AU5udWt0AU5udWt0AU5wcmVzAVRwcmVzAVRwcmVzAVRwc3RzAVxwc3RzAVxwc3RzAVxya3JmAWJya3JmAWJycGhmAWhycGhmAWhycGhmAWhzczAxAW5zczAxAW5zczAxAW5zczAyAXhzczAyAXhzczAyAXhzczAzAYJzczAzAYJzczAzAYJzczA0AYxzczA0AYxzczA0AYx2YXR1AZYAAAADAA4ADwAQAAAAAgABAAIAAAABAAEAAAABAAUAAAABAAYAAAABABEAAAACAAcACAAAAAEABwAAAAEAEwAAAAEAAAAAAAIACgALAAAAAQASAAAAAQAEAAAAAQADAAYAAQAUAAABAAAGAAEAFQAAAQEABgABABYAAAECAAYAAQAXAAABAwAAAAEACQA0AGoA7AEeAUABWgOYA7gD0gWOBygK9BhOHigelh6sHtQfviAEIGYg1CG4IgYiQCJUInYikCKeIqwiuiLIItYi5CLyIwAjDiMcIyojOCNGI1QjYiNwI34jjCOaI6gjtiPEI9gj8iQAJBQABAAAAAEACAABAGYACAAWACAAKgA0AD4ASABSAFwAAQAEAEgAAgB+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ApICnAKmArACugLEAs4C2ALiAuwC9gMAAwoDFAMeAygDMgM8A0YDUANaA2QDbgN4A4IDjAABAAQAlQACAJQAAQAEAJYAAgCUAAEABACXAAIAlAABAAQAmAACAJQAAQAEAJkAAgCUAAEABACaAAIAlAABAAQAmwACAJQAAQAEAJwAAgCUAAEABACdAAIAlAABAAQAngACAJQAAQAEAJ8AAgCUAAEABACgAAIAlAABAAQAoQACAJQAAQAEAKIAAgCUAAEABACjAAIAlAABAAQApAACAJQAAQAEAKUAAgCUAAEABACmAAIAlAABAAQApwACAJQAAQAEAKgAAgCUAAEABACpAAIAlAABAAQAqgACAJQAAQAEAKsAAgCUAAEABACsAAIAlAABAAQArQACAJQAAQAEAK4AAgCUAAEABACvAAIAlAABAAQAsAACAJQAAQAEALEAAgCUAAEABACyAAIAlAABAAQAswACAJQAAQAEALQAAgCUAAEABAC1AAIAlAABAAQAtgACAJQAAQAEALcAAgCUAAEABAC4AAIAlAABAAQAuQACAJQAAQAEALoAAgCUAAEABAC7AAIAlAABAAQAvAACAJQAAQAEAL0AAgCUAAEABAC+AAIAlAABAAQAvwACAJQAAQAEAMAAAgCUAAEABADBAAIAlAABAAQAwgACAJQAAQAEAMMAAgCUAAEABADEAAIAlAABAAQAxQACAJQAAQAEAMYAAgCUAAEABADHAAIAlAABAAQAyAACAJQAAQAEAMkAAgCUAAEABADKAAIAlAABAAQAywACAJQAAQAEAMwAAgCUAAEABADNAAIAlAABAAQAzgACAJQAAQAEAM8AAgCUAAEABADQAAIAlAABAAQA0QACAJQAAQAEANIAAgCUAAEABADTAAIAlAABAAQA1AACAJQAAQAEANUAAgCUAAEABADWAAIAlAABAAQA1wACAJQAAQAEANgAAgCUAAEABADZAAIAlAABAAQA2gACAJQAAQAEANsAAgCUAAEABADcAAIAlAABAAQA3QACAJQAAQAEAN4AAgCUAAEABADfAAIAlAABAAQA4AACAJQAAgAHACQAPQAAAD8ARQAaAEgASwAhAE4ATgAlAFAAaQAmAGsAcQBAAHQAeABHAAQAAAABAAgAAQ0YACsAXAFQAYoCJAI+AnICfAL6AxQDNgNYA3IDlAOuA/AE1gTwBVIFfgbQBzQHfggWCDgI2AjqCcwJ9gpYCvwLyAv6DAQMKAwyDGQMlgyoDMoM8Az6DQQNDgAcADoARABMAFQAXABkAGwAdAB8AIIAiACOAJQAmgCgAKYArACyALgAvgDEAMoA0ADWANwA4gDoAO4BBgAEAG8AZAA/AOoAAwBfAD0A7AADAF8AQAD7AAMAbAA9AQIAAwBvAC4BAwADAG8AMAEEAAMAbwAzAQUAAwBvAKkA4QACACQA4wACACUA5AACACkA5QACACsA5gACAC4A5wACADIA6AACADMA7QACADQA7gACADUA7wACADcA8AACADgA8gACADkA9gACADwA+AACAD0A+QACAD8A+gACAEAA/AACAEEBAQACAEMA6wACAKQA8QACAKkABwAQABYAHAAiACgALgA0AQcAAgAlAQgAAgAzAQoAAgA3AQsAAgA8AQ0AAgA9AQ8AAgBAAREAAgBBABIAJgAuADYAPgBGAEwAUgBYAF4AZABqAHAAdgB8AIIAiACOAJQBGgADAGIAPQEbAAMAYgBAAR0AAwBjAD0BIAADAGcAPQEUAAIAJgEVAAIAJwEWAAIAKwEXAAIAMgEYAAIANQEZAAIANgEcAAIANwEeAAIAOgEfAAIAOwEhAAIAPAEiAAIAPQEkAAIAPwElAAIAQAEmAAIAQwADAAgADgAUAScAAgA3ASgAAgA8ASkAAgA9AAYADgAWABwAIgAoAC4BLAADAFYAQAEqAAIAKQErAAIAKgEtAAIANwEuAAIAPAEvAAIAPQABAAQBMAACAD0ADwAgACgAMAA2ADwAQgBIAE4AVABaAGAAZgBsAHIAeAE2AAMAVwA9ATcAAwBXAEABMgACACQBMwACACsBOAACACwBOgACAC4BOwACADABPAACADMBPQACADUBPgACADcBPwACADoBQAACADwBQQACAD0BQwACAEABNQACAEcAAwAIAA4AFAFEAAIANwFFAAIAPAFGAAIAPQAEAAoAEAAWABwBRwACACkBSAACACoBSQACACsBSgACAEEABAAKABAAFgAcAUsAAgAuAUwAAgAvAU0AAgA9AU4AAgBAAAMACAAOABQBTwACAC8BUAACAD0BUQACAEAABAAKABAAFgAcAVIAAgAwAVMAAgAxAVQAAgA9AVUAAgBAAAMACAAOABQBVgACADEBVwACAD0BWAACAEAACAASABgAHgAkACoAMAA2ADwBWQACAC4BWgACAC8BWwACADABXAACADEBXQACADIBXgACADwBXwACAD0BYAACAEAAGgA2AD4ARgBOAFYAXgBmAG4AdgB+AIYAjACSAJgAngCkAKoAsAC2ALwAwgDIAM4A1ADaAOABYgADAFAAPQFkAAMAUABAAWkAAwBfAD0BagADAF8AQAFtAAMAYwA9AXAAAwBkAD8BcwADAGgAPQF5AAMAbwA3AXoAAwBvAD0BewADAG8AQAFhAAIAJAFmAAIAJQFoAAIAMwFrAAIANAFsAAIANwFuAAIAOAFxAAIAOQFyAAIAPAF0AAIAPQF2AAIAPwF3AAIAQAF4AAIAQwFlAAIARgFjAAIAlQFnAAIAlgFvAAIAqQADAAgADgAUAXwAAgA3AX0AAgA9AX4AAgBAAAwAGgAgACYALAAyADgAPgBEAEoAUABWAFwBfwACACYBgQACACcBggACADUBgwACADYBhAACADcBhQACADoBhwACADsBiAACADwBiQACAD0BigACAEABgAACAJcBhgACAKsABQAMABQAGgAgACYBjAADAGMAPQGLAAIANwGNAAIAPAGOAAIAPQGPAAIAQAAmAE4AWABgAGgAcAB4AIAAiACQAJgAoACoALAAuADAAMgAzgDUANoA4ADmAOwA8gD4AP4BBAEKARABFgEcASIBKAEuATQBOgFAAUYBTAGzAAQAbwBoAD0BkQADAFAAQwGXAAMAXwA9AZkAAwBfAEMBmwADAGAAPQGcAAMAYABAAZ8AAwBhAEABoQADAGIAPQGjAAMAYgBAAaUAAwBjAD0BqwADAGcAPQGsAAMAZwBAAa4AAwBoAD0BsgADAG8ALgG0AAMAbwA9AZAAAgAkAZIAAgApAZMAAgAqAZQAAgAuAZUAAgAwAZYAAgAzAZoAAgA0AZ0AAgA1AaAAAgA2AaQAAgA3AaYAAgA4AagAAgA5AaoAAgA7Aa0AAgA8Aa8AAgA9AbAAAgBAAbEAAgBDAbUAAgBEAZgAAgCkAZ4AAgCmAaIAAgCnAacAAgCpAakAAgCqAAwAGgAiACgALgA0ADoAQABGAEwAUgBYAF4BuQADAF8APQG2AAIALgG3AAIALwG4AAIAMwG6AAIANwG7AAIAOAG8AAIAOQG9AAIAPAG+AAIAPQG/AAIAPwHAAAIAQAHBAAIAQwAJABQAGgAgACYALAAyADgAPgBEAcIAAgArAcQAAgAuAcUAAgAzAccAAgA3AcgAAgA4AckAAgA5AcsAAgA9AcwAAgA/Ac0AAgBBABIAJgAuADYAPgBEAEoAUABWAFwAYgBoAG4AdAB6AIAAhgCMAJIB0QADAFcAPQHWAAMAYgBAAd0AAwBrAD0BzwACACsB0gACACwB0wACADMB1AACADUB1QACADYB1wACADcB2AACADoB2QACADsB2wACAD0B3AACAD8B3gACAEAB3wACAEEB4AACAEMB0AACAEsB2gACAKwABAAKABAAFgAcAeEAAgA3AeIAAgA9AeQAAgA/AeUAAgBAABMAKAAwADgAQABGAEwAUgBYAF4AZABqAHAAdgB8AIIAiACOAJQAmgHsAAMAZgA9Ae8AAwBnAD0B8QADAGcAQAHmAAIAMwHnAAIANQHoAAIANwHpAAIAOAHrAAIAOgHuAAIAOwHyAAIAPAHzAAIAPQH0AAIAPwH1AAIAQAH2AAIAQQH3AAIAQwH4AAIARAHqAAIAqQHtAAIAqwHwAAIArAACAAYADAH5AAIANwH6AAIAPQAbADgAQABIAFAAWABeAGQAagBwAHYAfACCAIgAjgCUAJoAoACmAKwAsgC4AL4AxADKANAA1gDcAf4AAwBQAD0CCQADAGAAPQITAAMAawA9AhUAAwBsADAB/QACACQB/wACACUCAAACACYCAQACACsCAwACAC4CBAACAC8CBQACADACBgACADECBwACADMCCAACADQCCgACADUCDAACADgCDQACADkCDgACADoCDwACADsCEAACADwCEQACAD0CEgACAD8CFAACAEACFgACAEMCFwACAEQCAgACAEsCCwACAKYABQAMABIAGAAeACQCGAACADcCGQACAD0CGgACAD8CGwACAEACHAACAEQADAAaACAAJgAsADIAOAA+AEQASgBQAFYAXAIdAAIAJAIfAAIAKQIgAAIAKgIhAAIALgIiAAIAMwIjAAIANwIkAAIAPAIlAAIAPQImAAIAPwInAAIAQAIoAAIAQQIeAAIASAATACgAMAA4AEAASABQAFYAXABiAGgAbgB0AHoAgACGAIwAkgCYAJ4CLAADAFoAPQIuAAMAWgBAAjAAAwBbAD0CMwADAF4APQI4AAMAaAA9AikAAgAkAisAAgAuAi8AAgAvAjIAAgAyAjQAAgA4AjYAAgA5AjcAAgA8AjkAAgA9AjoAAgBAAjsAAgBCAioAAgCVAi0AAgCfAjEAAgCgAjUAAgCpABgAMgA6AEIASgBSAFoAYABmAGwAcgB4AH4AhACKAJAAlgCcAKIAqACuALQAugDAAMYCPgADAFAAQAJDAAMAXwA9AkUAAwBfAEACRwADAGAAPQJPAAMAaAA9AjwAAgAkAj8AAgAlAkAAAgArAkEAAgAuAkIAAgAzAkYAAgA0AkgAAgA1AkkAAgA3AkoAAgA4AkwAAgA5Ak0AAgA6Ak4AAgA8AlAAAgA9AlEAAgA/AlIAAgBAAlMAAgBDAj0AAgCVAkQAAgCkAksAAgCpAAYADgAUABoAIAAmACwCVAACADICVQACADcCVgACADwCVwACAD0CWAACAD8CWQACAEAAAQAEAloAAgA9AAQACgASABgAHgD+AAMAaAA9AP0AAgA8AP8AAgA9AQAAAgBAAAEABAE5AAIAPQAGAA4AFAAaACAAJgAsAOkAAgAzAPMAAgA5APUAAgA6APcAAgA8AOIAAgBIAPQAAgBOAAYADgAUABoAIAAmACwBCQACADMBDAACADwBDgACAD0BEAACAEABEgACAEEBEwACAEMAAgAGAAwBQgACAD0BNAACAEsABAAKABAAFgAcAcYAAgAzAc4AAgBDAcMAAgBLAcoAAgBOAAQACgASABoAIAH7AAMAkAA9AfwAAwCQAEQB+wACAD0B/AACAEQAAQAEASMAAgA9AAEABAExAAIAPQABAAQBdQACAD0AAQAEAeMAAgA9AAIACQBQAFMAAABVAGkABABrAHUAGQB3AHgAJACTAJMAJgC9AL0AJwDBAMEAKADKAMoAKQDSANIAKgAGAAAAGAA2AHwAogDcAQgBMgF2AawB1gIOAkgCkgMEA2IDzgQgBHQEsgTsBQoFNgViBZAFtgADAAAAAQtOAAEAEgABAAAAGQABABgAKAAuAC8AMAA+AEQATABPAJkAnwCgAKEAtAFLAUwBTgFPAVEBUgFTAVUBVgFYAYIAAwAAAAELCAABABIAAQAAABoAAQAIADEANQBNAKIApgGFAYYBigADAAAAAQriAAEAEgABAAAAGwABABIAJAAnADgAOQA6AEAASABOAJUAmACpAKoAqwCwAX8BgAJYAlkAAwAAAAEKqAABABIAAQAAABwAAQALACoAMwA2AEIAmwCkAKcAsgC2AYkCVAADAAAAAQp8AAEAEgABAAAAHQABAAoAKQA0AD0AmgClAK4AugDoAWgB/AADAAAAAQpSAAEAEgABAAAAHgABABcAJgArAC0ANwA/AEMARQBHAEoASwCXAJwAngCvALUAuAC5AbcCHAIfAicCLwIxAAMAAAABCg4AAQASAAEAAAAfAAEAEAAsADIAOwA8AEEARgCjAKgArACtALEBgQGDAYgBtgJXAAMAAAABCdgAAQASAAEAAAAgAAEACgAlAEkAlgCdALMAtwHUAisCLQIuAAMAAAABCa4AAQASAAEAAAAhAAEAEQFhAWMBbgFvAXEBdwG1AbgBvAHAAd4B+wIbAikCKgI2AjoAAwAAAAEJdgABABIAAQAAACIAAQASASoBOwFaAWoBjwGUAZUBnwG7AdMB1QHYAfgCNAI1AjsCQQJIAAMAAAABCTwAAQASAAEAAAAjAAEAGgEYASkBKwEsAToBPQFZAVsBXAF0AXUBfgGQAZ0BngG+AdsB5wIEAgUCFwIZAiECOQI8Aj0AAwAAAAEI8gABABIAAQAAACQAAQAuAOYBFQEeASUBJwEvATIBQwFpAWsBbAF2AY4BkgGYAaYBpwGoAakBsAG6Ab0BvwHBAc8B0AHcAeAB5QH1AfoCAwIGAgoCCwIYAhoCHQIeAkICRAJKAksCTAJNAlIAAwAAAAEIgAABABIAAQAAACUAAQAkAO4BAAEZASgBPAE/AUcBSAFUAWABZQFyAXgBfQGLAZMBlgGgAaIBxAHXAdkB3wHmAekB6gHrAe0B+QH9AgwCDQIiAjICNwJQAAMAAAABCCIAAQASAAEAAAAmAAEAKwDhAOIA5ADwAPEA8gDzAPQA9QD6AP8BDwEQASIBIwEtAS4BMAExATkBQQFCAUYBTQFQAV8BfAGNAZoBrwHJAcoB2gHiAeMB8wIHAg4CFAIgAiUCRgJTAAMAAAABB7YAAQASAAEAAAAnAAEAHgDpAOsBCAEJARQBHAEkASYBRAFXAWYBZwGkAbEByAHSAeEB5AHoAfQB9wIRAiMCJgJAAkkCTgJRAlUCVgADAAAAAQdkAAEAEgABAAAAKAABAB8A7QD4AQ0BDgEWARcBHwEhATMBNAE1ATgBPgFAAUUBSQFKAV4BhAGqAa0BxQHGAcsB7gHyAfYCCAIkAigCWgADAAAAAQcQAAEAEgABAAAAKQABABQA7wD5AP0BAQEKARMBXQGHAbkBzgHWAfACAAIBAgICDwIQAhICFgI/AAMAAAABBtIAAQASAAEAAAAqAAEAEgDlAOcA9gD3APwBCwEMAREBEgFwAXsBowHCAcMBxwHMAc0CRQADAAAAAQaYAAEAEgABAAAAKwABAAQA4wEbAbIB/wADAAAAAQZ6AAEAEgABAAAALAABAAsA7AEHAWQBbQF6AZcBnAHRAjMCOAJDAAMAAAABBk4AAQASAAEAAAAtAAEACwECAQMBGgFzAYwBoQGsAd0B7AIsAjAAAwAAAAEGIgABABIAAQAAAC4AAQAMAOoA+wE3AWIBeQGZAZsBpQG0AfECFQJHAAMAAAABBfQAAQASAAEAAAAvAAEACAEFAR0BIAGrAa4B7wI+Ak8AAwAAAAEFzgABABIAAQAAADAAAQAHAP4BBAE2AZEB/gIJAhMABgAAAAQADgAmAD4AVgADAAAAAQXYAAEAEgABAAAAMAABAAEAGgADAAAAAQXAAAEAEgABAAAAMQABAAEAGwADAAAAAQWoAAEAEgABAAAAMgABAAEAHAADAAAAAQWQAAEAEgABAAAAMwABAAEAHQABAAAAAQAIAAIALAAEAJIAkgCSAJIABgAAAAEACAADAAAAAgVaABYAAAACAAAADAABAA0AAgABABoAHQAAAAQAAAABAAgAAQDMAAkAGAAiAD4AWgB2AJIArgC4AMIAAQAEAmAAAgB5AAMACAAQABYCYwADAJIAeQJhAAIAeQJiAAIAkgADAAgAEAAWAmkAAwCSAHkCZwACAHkCaAACAJIAAwAIABAAFgJsAAMAkgB5AmoAAgB5AmsAAgCSAAMACAAQABYCbwADAJIAeQJtAAIAeQJuAAIAkgADAAgAEAAWAnIAAwCSAHkCcAACAHkCcQACAJIAAQAEAnMAAgB5AAEABAJ0AAIAeQABAAQCXAACAHkAAQAJAAcAFwAeAB8AIAAhACIAIwCSAAYAAAABAAgAAwACABQAKgABADQAAAABAAAAMwACAAMAJABPAAAAlQC6ACwA4QJaAFIAAgABAnwCkwAAAAEAAwB5AJICXAAEAAAAAQAIAAEATgAEAA4AGAAqADQAAQAEAnkAAgAaAAIABgAMAnUAAgAYAnYAAgAZAAEABAJ6AAIAGgADAAgADgAUAncAAgAYAngAAgAZAnsAAgAaAAEABAA1AD4AQQBEAAYAAAABAAgAAwABABIAAQBaAAAAAQAAADMAAQAiACQAOQBIAE4AlQCqALYAugDhAOIA6ADyAPMA9AEyAWEBYwFxAZABqAGpAbwByQHKAf0CDQIdAh4CKQIqAjYCPAI9AkwAAQAEABcCYQJiAmMABAAAAAEACAABALoADwAkAC4AOABCAEwAVgBgAGoAdAB+AIgAkgCcAKYAsAABAAQAVAACAH0AAQAEAFoAAgB9AAEABABbAAIAfQABAAQAXAACAH0AAQAEAF0AAgB9AAEABABhAAIAfQABAAQAagACAH0AAQAEAHAAAgB9AAEABAC/AAIAfQABAAQAxQACAH0AAQAEAMYAAgB9AAEABADHAAIAfQABAAQAyAACAH0AAQAEAMwAAgB9AAEABADaAAIAfQABAA8AKAAuAC8AMAAxADUAPgBEAJkAnwCgAKEAogCmALQAAQAAAAEACAACACQADwQFBAYEBwQIBAkECgQLBAwEDQQOBA8EEAQRBBIEEwABAA8ClAKfAqECrQKuArIC8wMJAxEDSQPfA+AD4gPjA+gAAQAAAAEACAACABoACgQUBBkEFQQXBB0EGAQcBBoEFgQbAAEACgLUAzIDMwM0AzUDNgM3A1MDVQNXAAEAAAABAAgAAQAGAYUAAQABApkAAQAAAAEACAACAA4ABAQfBCAEIQQiAAEABAKlAqYCqQKsAAQAAAABAAgAAQGQAAEACAABAAQAkwACAH0AAQAAAAEACAABAToCZgABAAAAAQAIAAEBLAJnAAEAAAABAAgAAQEeAmgAAQAAAAEACAABARACaQABAAAAAQAIAAEBAgJqAAEAAAABAAgAAQD0AmsAAQAAAAEACAABAOYCbAABAAAAAQAIAAEA2AJtAAEAAAABAAgAAQDKAm4AAQAAAAEACAABALwCbwABAAAAAQAIAAEArgJwAAEAAAABAAgAAQCgAnEAAQAAAAEACAABAJICcgABAAAAAQAIAAEAhAJzAAEAAAABAAgAAQB2AnQAAQAAAAEACAABAGgCdQABAAAAAQAIAAEAWgJ2AAEAAAABAAgAAQBMAncAAQAAAAEACAABAD4CeAABAAAAAQAIAAEAMAJ5AAEAAAABAAgAAQAiAnoAAQAAAAEACAABABQCewABAAAAAQAIAAEABgJ8AAEAAQAWAAEAAAABAAgAAgAKAAICkwAKAAEAAgAWAD4AAQAAAAEACAABABT/zQABAAAAAQAIAAEABv/OAAEAAQA+AAEAAAABAAgAAgAWAAgCWwANAl0CXgJfAmQCZQJmAAEACAAXAD4AeQCSAlwCYQJiAmM=";

/***/ }),

/***/ 73579:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 9570:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 16030:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 59434:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 1217:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 95123:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 65513:
/***/ (function(module) {

"use strict";

/***/ }),

/***/ 52445:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ }),

/***/ 76647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "412ca2524205c6e5a772.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(48829); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);