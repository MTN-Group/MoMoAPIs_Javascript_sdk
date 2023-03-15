# MTN MoMo API-SDK for JavaScript

The SDK provides separate use cases to handle necessary [MTN MoMo API](https://momodeveloper.mtn.com/api-documentation)  functionality including Collections,Disbursements,Remittances. Each use case exposes use case scenarios
to customize your application integrations as needed. The SDK also includes a Samples, so you can test interactions before integration.

-   [API Documentation](https://momodeveloper.mtn.com/api-documentation)
-   [How to use the test Application](/docs/momo-test-app/README.MD)
## Index

This document contains the following sections:

-   [Requirements](#requirements)
-   [Getting Started](#gettingStarted)
-   [Setting Up](#setting-up)
    -   [Integrating SDK to your Application](#setting-up)
-   [Use Cases](#use-cases)
    -   [Collections](#collections)
    -   [Disbursements](#disbursements)
    -   [Remittances](#remittances)
-   [Tests](#tests)
    -   [Unit tests](#unit-tests)
    -   [Integration tests](#integration-tests)
-   [Samples](#samples)

    <a name="requirements"></a>

## Requirements

-   Any Browser

<a name="gettingStarted"></a>

## Getting Started

-   Clone this repository:

```
Using HTTPS

git clone https://github.com/gsmainclusivetechlab/momoapi-javascript-sdk.git
cd momoapi-javascript-sdk
```
```
Using SSH

git@github.com:gsmainclusivetechlab/momoapi-javascript-sdk.git
cd momoapi-javascript-sdk
```

-   Install all dependencies defined in `package.json` to configure project setup:

```
npm install
```

-   Create .env file for Setting Api BaseUrl:

e.g.

```
MOMO_COLLECTION_TOKEN_URL='https://sandbox.momodeveloper.mtn.com/collection/token/'
MOMO_DISBURSEMENT_TOKEN_URL='https://sandbox.momodeveloper.mtn.com/disbursement/token/'
MOMO_REMITTANCE_TOKEN_URL='https://sandbox.momodeveloper.mtn.com/remittance/token/'
SUBSCRIPTION_KEY = 'f4f2da18c0db4033b897644dc8ef1fec'
MOMO_BASE_URL_AUTH = 'https://sandbox.momodeveloper.mtn.com/'
TARGETENVIRONMENT = 'sandbox'
```

-   Run sample code by staring the server and results can be view in browser console:

```
npm start
```

-   Generate a build of sdk:

```
npm run build
```

The build will be present in `dist/mmsdk.min.js`. This build file is provided to the client app as CDN.

-   Resolve CORS issue on browser

```
  - window=>run
  - execute command : chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```

Run chrome without security checks due to CORS issue.

<a name="setting-up"></a>

## Setting Up

## Integrating SDK to your Application

Import the SDK script in the head of the client application.

```html
<script src="http://{cdn-url}/mmsdk.min.js"></script>
```

Once Imported, The SDK Modules will be available in the Browser Object Model - window as window.momo
You can use:

```javascript
console.log(window.momo);
```

To list all the available modules within the SDK.

<a name="initMethods"></a>

## Use Cases
-   [Sandbox User Provisioning](#sandbox)
-   [Collections](#collections)
-   [Disbursements](#disbursements)
-   [Remittances](#remittances)

<a name="sandbox"></a>

### Sandbox User Provisioning

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Sandbox User Provisioning</td>
    <td><a href="/docs/sandboxUserProvisioning/createUser.Readme.md">Creating an API user</a></td>
    <td>createUser</td>
    <td>CallbackHost callbackHost</td>
  </tr>
  <tr>
    <td><a href="/docs/sandboxUserProvisioning/getUserDetails.Readme.md">Get user details with referenceId</a></td>
    <td>getUserDetails</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td><a href="/docs/sandboxUserProvisioning/createApiKey.Readme.md">Create ApiKey for a user</a></td>
    <td>createApiKey</td>
    <td>String referenceId</td>
  </tr>
</tbody>
</table>

<a name="collections"></a>
### Collections

Contains functions for all the use case scenarios within Collections.

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Request To Pay</td>
    <td><a href="/docs/collections/requestToPay.Readme.md">Request To Pay</a></td>
    <td>requestToPay</td>
    <td>RequestPay requestPay</td>
  </tr>
  <tr>
    <td><a href="/docs\collections\requestToPay.Readme.md">Request To Pay Transaction Status</a></td>
    <td>requestToPayTransactionStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td><a href="/docs/collection/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td rowspan="3">Request To Withdraw</td>
    <td><a href="/docs/collection/requestToWithdrawV1.Readme.md">Request To Withdraw-V1</a></td>
    <td>requestToWithdrawV1</td>
    <td>Withdraw withdraw</td>
  </tr>
  <tr>
    <td><a href="/docs/collection/requestToWithdrawV2.Readme.md">Request To Withdraw-V2</a></td>
    <td>requestToWithdrawV2</td>
    <td>Withdraw withdraw</td>
  </tr>
  <tr>
    <td><a href="/docs/collection/requestToWithdrawTransactionStatus.Readme.md">Request To Withdraw Transaction Status</a></td>
    <td>requestToWithdrawTransactionStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="/docs/collection/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="/docs/collection/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="/docs/collection/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="/docs/collection/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Get Account Balance In Specific Currency</td>
    <td><a href="/docs/collection/getAccountBalanceInSpecificCurrency.Readme.md">Get Account Balance In Specific Currency</a></td>
    <td>getAccountBalanceInSpecificCurrency</td>
    <td>String currency</td>
  </tr>
</tbody>
</table>

<a name="disbursements"></a>

### Disbursements

Contains functions for all the use case scenarios within Disbursements.

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Transfer</td>
    <td><a href="/docs/disbursement/transfer.Readme.md">Transfer</a></td>
    <td>transfer</td>
    <td>Transfer transfer</td>
  </tr>
  <tr>
    <td><a href="/docs/disbursement/getTransferStatus.Readme.md">Get Transfer Status</a></td>
    <td>getTransferStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Request To Pay Delivery Notification</td>
    <td><a href="/docs/disbursement/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td rowspan="3">Deposit</td>
    <td><a href="/docs/disbursement/depositV1.Readme.md">Deposit-V1</a></td>
    <td>depositV1</td>
    <td>Deposit deposit</td>
  </tr>
  <tr>
    <td><a href="/docs/disbursement/depositV2.Readme.md">Deposit-V2</a></td>
    <td>depositV2</td>
    <td>Deposit deposit</td>
  </tr>
  <tr>
    <td><a href="/docs/disbursement/getDepositStatus.Readme.md">Get Deposit Status</a></td>
    <td>getDepositStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td rowspan="3">Refund</td>
    <td><a href="/docs/disbursement/refundV1.Readme.md">Refund-V1</a></td>
    <td>refundV1</td>
    <td>Refund refund</td>
  </tr>
  <tr>
    <td><a href="/docs/disbursement/refundV2.Readme.md">Refund-V2</a></td>
    <td>refundV2</td>
    <td>Refund refund</td>
  </tr>
  <tr>
    <td><a href="/docs/disbursement/getRefundStatus.Readme.md">Get Refund Status</a></td>
    <td>getRefundStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="/docs/disbursement/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="/docs/disbursement/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="/docs/disbursement/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="/docs/disbursement/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Get Account Balance In Specific Currency</td>
    <td><a href="/docs/disbursement/getAccountBalanceInSpecificCurrency.Readme.md">Get Account Balance In Specific Currency</a></td>
    <td>getAccountBalanceInSpecificCurrency</td>
    <td>String currency</td>
  </tr>
</tbody>
</table>

<a name="remittances"></a>

### Remittances

Contains functions for all the use case scenarios within Remittances.

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Transfer</td>
    <td><a href="/docs/remittance/transfer.Readme.md">Transfer</a></td>
    <td>transfer</td>
    <td>Transfer transfer</td>
  </tr>
  <tr>
    <td><a href="/docs/remittance/getTransferStatus.Readme.md">Get Transfer Status</a></td>
    <td>getTransferStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Request To Pay Delivery Notification</td>
    <td><a href="/docs/remittance/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="/docs/remittance/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="/docs/remittance/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="/docs/remittance/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="/docs/remittance/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
</tbody>
</table>

<a name="tests"></a>

## Tests

The `tests` folder contains the test cases. Two type of testing implemented are,

1. Unit
2. Integration

### Unit tests

These tests are located in `tests/unit` and are responsible for ensuring each functional unit is behaving as expected, without considering the rest of the system. Unit tests heavily leverage mocking and are an essential part of the testing harness.

To run unit tests,

```shell
npm run test:unit
```

To run tests individually (be sure not to be pointing to an integration test file):

```shell
npm run test <test_file>
```

### Integration tests

Integration test is done using the `Test Application`. Test App is available on branch `test-app`.

## Samples

The sample code snippets are all completely independent and self-contained. You can analyze them to get an understanding of how a particular method can be implemented in your application. Sample code snippets can be found [here](/public). Steps to run the sample code snippets are as follows:

-   Clone this repository :

```
Using HTTPS

https://github.com/gsmainclusivetechlab/momoapi-javascript-sdk.git
cd momoapi-javascript-sdk
```
```
Using SSH

git@github.com:gsmainclusivetechlab/momoapi-javascript-sdk.git
cd momoapi-javascript-sdk
```

-   Install all dependencys:

```
npm install
```

-   Create .env file for Setting Api BaseUrl:

e.g.

```
COLLECTION_SUBSCRIPTION_KEY=<your_collection_subscription_key_here>
DISBURSEMENT_SUBSCRIPTION_KEY=<your_disbursement_subscription_key_here>
REMITTANCE_SUBSCRIPTION_KEY=<your_remittance_subscription_key_here>
CONSUMER_SECRET=<your_consumer_secret_here>
REFERENCE_ID=<your_api_user/referenceId_value _here>
API_KEY=<your_api_key_here>
CALLBACK_URL=<your_callback_url_here>
```
-   Run sample code by staring the server and results can be view in browser console:

```
npm start
```
