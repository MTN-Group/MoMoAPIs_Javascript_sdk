const Collections = [
    {
        id: 'Oauth2Token-Collections',
        title: 'Oauth2Token',
        type: 'item',
        requestType: 'oath2Token',
        requestCategory: 'Collections',
        target: true,
        polling: false,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'auth_req_id',
                required: false,
                caption: 'auth_req_id',
                type: 'string',
                defaultValue: '01000135-fd21-4dd1-b652-a75665cf2719',
            },
            {
                id: 'username',
                required: true,
                caption: 'username',
                type: 'string',
                defaultValue: 'ee0128a6-9625-4049-819b-dd34f50bfec0',
            },{
                id: 'pass',
                required: true,
                caption: 'password',
                type: 'string',
                defaultValue: '0ef6184cb0a740b48896245eeb43898c',
            },
        ],
        params: [
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'bc-authorize-Collections',
        title: 'bc-authorize',
        type: 'item',
        requestType: 'bc-authorize',
        requestCategory: 'Collections',
        target: true,
        polling: false,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'msisdn',
                required: false,
                caption: 'auth_req_id',
                type: 'string',
                defaultValue: '23423423450',
            },
            {
                id: 'scope',
                required: true,
                caption: 'scope',
                type: 'string',
                defaultValue: 'profile',
            },{
                id: 'access_type',
                required: true,
                caption: 'access_type',
                type: 'string',
                defaultValue: 'offline',
            },
        ],
        params: [
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
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

    {
        id: 'RequesttoPayTransactionStatus',
        title: 'Request to Pay Transaction Status',
        type: 'item',
        requestType: 'requestToPayTransactionStatus',
        requestCategory: 'Collections',
        target: true,
        polling: true,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'RequestToPayDeliveryNotification-collection',
        title: 'Request To Pay Delivery Notification',
        type: 'item',
        requestType: 'RequestToPayDeliveryNotification',
        requestCategory: 'Collections',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: '15284da8-9169-448b-b1aa-d73080b9e6eb',
            },
        ],
        params: [
            {
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                        {
                            "notificationMessage": "string"
                        },
                    null,
                    2
                ),
            }
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'RequestingPaymentWithdrawFromACustomer-v1',
        title: '	Request To Withdraw-V1',
        type: 'item',
        requestType: 'requestToWithdrawV1',
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
                        "payeeNote": "payee note",
                        "externalId": "6353636",
                        "amount": "120",
                        "currency": "EUR",
                        "payer": {
                          "partyIdType": "MSISDN",
                          "partyId": "0248888736"
                        },
                        "payerMessage": "pay for product b"
                      },
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },

    {
        id: 'RequestingPaymentWithdrawFromACustomer-v2',
        title: 'Request To Withdraw-V2',
        type: 'item',
        requestType: 'requestToWithdrawV2',
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
                        "payeeNote": "payee note",
                        "externalId": "6353636",
                        "amount": "120",
                        "currency": "EUR",
                        "payer": {
                          "partyIdType": "MSISDN",
                          "partyId": "0248888736"
                        },
                        "payerMessage": "pay for product b"
                      },
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'RequesttoWithdrawTransactionStatus',
        title: 'Request to Withdraw Transaction Status',
        type: 'item',
        requestType: 'requestToWithdrawTransactionStatus',
        requestCategory: 'Collections',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getbasicuserinfowithconsent-collection',
        title: 'Get UserInfo With Consent ',
        type: 'item',
        requestType: 'getUserInfoWithConsent',
        requestCategory: 'Collections',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'oath2Token',
                required: true,
                caption: 'oath2Token',
                type: 'string',
                defaultValue: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJzdWIiOiIwIiwiYXVkIjoiMTMzNTI5MjczIiwiY2lkIjoiZWUwMTI4YTYtOTYyNS00MDQ5LTgxOWItZGQzNGY1MGJmZWMwIiwiZXhwIjoxNjc4Nzc2ODAyLCJpYXQiOjE2Nzg3NzY1MDIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiY29uIjowLCJzY3AiOlsicHJvZmlsZSJdfQ.iyspzL_rYUCw6prgsgK195Zcd23J2KsJzlnJzwPzy2mub31luNSF-sGaLSxfSPUv8ayGd7zEwpvOvhjOa7ACUqeT3kFjQD1M7iTy3OE53F-jsHs0L89jEJoKCtxIMkP_RPr_A4FMv7HbYxD9UeHNsmMSgGkLC-lNHEZyuCFZQBvJhyu3iOTABJL2aFuNh_O9mJLcY1qk7BHd607cIFzTNYzQ4UocWJTwpzT3rBSmXd837VKXAxiCJlIDMSkZW54fyJurCt2mH5Ov0eM8n5ihoYOTtKYtfDoaeSg-2puZ4z2mel5cJazmM247ZUp2cDOJX7n1eTuGFVvH7lGzz5jXSg',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getbasicuserinfo-collection',
        title: 'Get Basic Userinfo',
        type: 'item',
        requestType: 'getBasicUserInfo',
        requestCategory: 'Collections',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountHolderMSISDN',
                required: true,
                caption: 'AccountHolder-MSISDN',
                type: 'string',
                defaultValue: '0243656543',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'validateaccountholderStatus-collection',
        title: 'Validate Account Holder Status',
        type: 'item',
        requestType: 'validateAccountHolderStatus',
        requestCategory: 'Collections',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountHolderId',
                required: true,
                caption: 'AccountHolder-Id',
                type: 'string',
                defaultValue: '0243656543',
            },
            {
                id: 'accountHolderIdType',
                required: true,
                caption: 'accountHolder-Id-Type',
                type: 'string',
                defaultValue: 'msisdn',
            },
        ],
        params: [],
        testSuccessParams: [
            'result'
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getaccountBalance-collection',
        title: 'Get Account Balance',
        type: 'item',
        requestType: 'getAccountBalance',
        requestCategory: 'Collections',
        target: true,
        returnClientCorrelation: true,
        headers: [],
        params: [],
        testSuccessParams: ['availableBalance','currency'],
        testErrorParams: ['message', 'code'],
    },
    {
        id: 'GetAccountBalanceInSpecificCurrency-collection',
        title: 'Get Account Balance In Specific Currency',
        type: 'item',
        requestType: 'GetAccountBalance',
        requestCategory: 'customer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'currency',
                required: true,
                caption: 'Currecy',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
];

export default Collections;