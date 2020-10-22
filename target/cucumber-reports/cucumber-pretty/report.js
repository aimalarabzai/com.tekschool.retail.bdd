$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailTestScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Retail Test Scenarios",
  "description": "",
  "id": "retail-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6894862900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2577389200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Register Account for new Retail user",
  "description": "",
  "id": "retail-test-scenarios;register-account-for-new-retail-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@RegisterForm"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User fill out Register form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password"
      ],
      "line": 12
    },
    {
      "cells": [
        "James",
        "Madison",
        "jmadison@test.com",
        "1112223344",
        "james123"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select \u0027yes\u0027 for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on privacy and policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Should see message \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 67252700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Register()"
});
formatter.result({
  "duration": 3180300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_fill_out_Register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 2108000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_select_yes_for_Subscribe()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_privacy_and_policy_check_box()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 25
    }
  ],
  "location": "RegisterFormStepDefinition.user_Should_see_message_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 2918900,
  "status": "passed"
});
formatter.after({
  "duration": 663880300,
  "status": "passed"
});
});