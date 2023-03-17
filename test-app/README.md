# MoMo-API SDK - Test App Installation:

Step 1: Clone the repository<br />
Step 2: pull the latest build from test-app branch<br />
Step 3: npm install<br />
Step 7: Add `SKIP_PREFLIGHT_CHECK=true` in .env<br />
Step 8 (OPTIONAL): If SDK is added locally into the application, Add the following Environment variables as well in .env<br />

```
SKIP_PREFLIGHT_CHECK=true
```

Step 9: npm start<br />
Step 10: Type `chrome.exe --user-data-dir="C:/Chrome" --disable-web-security` in Windows Run command window to open an instance of Google Chrome with CORS disable.<br/>
Step 11: Go to `http://localhost:3000/`<br/>

# Test App - SDK Integration:

### Method 1:

Step 1: Run `npm run build` in SDK.<br/>
Step 2: Go to [/dist](/dist), Copy `mmsdk.min.js`, and Paste it to [/public](./public) folder of Test App.<br/>
Step 3: Go to [/public/index.html](./public/index.html) of Test App.<br />
Step 4: Import SDK by appending `<script src="/mmsdk.min.js"></script>` in the header of the html page.<br/>

### Method 2:

Step 1: Run `npm start` in SDK.<br/>
Step 2: Go to [/public/index.html](./public/index.html) of Test App.<br />
Step 3: Import SDK by appending `<script src="http://localhost:8080/mmsdk.min.js"></script>` in the header of the html page.<br/>

# Add more APIs to test:

Step 1: Go to [/src/menu-items/pages.js](./src/menu-items/pages.js)<br />
Step 2: Modify the page based on the requirements using the methods mentioned below<br />

## To Create a new Use Case:

Step 1 Create a Child Object under the children array of the first child with id - Pages<br/>
Step 2. Set the type of the child as - "collapse", and icon as - icons.IconKey<br/>

The Resulting Object will be of the following structure:<br/>

```json
           {
      id: "Collections",
      title: "Collections",
      type: "collapse",
      icon: icons.IconKey,
      children: Collections,
    },
```

## To Create a new Test API:

Step 1. Create a children array under the use case if it doesn't exist.<br/>
Step 2. Create a new child object under the children array of the use case.<br/>
Step 3: Set an id for the child (Camel-Case form of the Use case scenario).<br/>
Step 4: Set type as "item".<br/>
Step 5: Set requestType as the SDK child function for Use Case Scenario. (eg: requesttoPayTransaction).<br/>
Step 6: Set requestCategory as the use case object's key from SDK. (eg: Collections).<br/>
<!-- Step 7: Set target as true, and polling as true, if the scenario is a polling method.<br/>
Step 8: Create a header and body array for any header or body values that has to be passed to SDK.<br/> -->

The Resulting Object will be of the following structure:<br/>

```json
        {
        id: 'requesttopay',
        title: 'Request To Pay',
        type: 'item',
        requestType: 'requesttoPayTransaction',
        requestCategory: 'Collections',
        target: true,
        polling: false,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
            },
        ],
        params: [
            {
                id: 'body',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payer": {
                          "partyIdType": "MSISDN",
                          "partyId": "0248888736"
                        },
                        "payerMessage": "Pay for product a",
                        "payeeNote": "payer note"
                      },
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
```

## To add fields to pass Headers and Body:

Step 1: Create a new Child under the use case scenario's header/body array.<br/>
Step 2: Set the id of the child as the key value of the parameter to be passed to the SDK. This is Case Sensitive.<br/>
Step 3: Set Caption to display a caption to be displayed in the UI.<br/>
Step 4: Set Type as the data type of the parameter. (string / number / object / json )<br/>
Step 5: Set a default value to automatically load the value when the form is loaded.<br/>

# Authenticating Test application

Step 1: Click on the Gear icon on the Bottom right corner.<br/>
Step 2: Select an product  there will be no authentication.<br/>
Step 3: select an product from dropdown list & the coresponding credentials in the input field and Authenticate<br/>

# Testing a Use case Scenario

Step 1: Open the Use Case Scenatio.<br/>
Step 2: if default values are loaded, click on the fields that needs to be added to the request. Clear the field in order to remove from request.<br/>
Step 3: Click Generate Request to display request in JSON form of the request to be sent to the SDK.<br/>
Step 4: Click Send Request to send the request to the SDK and Generate Response. Response will be generated in the Response Container, and Status code, if any, will be displayed above the Response Container.<br/>
