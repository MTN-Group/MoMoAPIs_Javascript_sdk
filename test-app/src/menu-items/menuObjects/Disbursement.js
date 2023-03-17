const Disbursement = [
    {
        id: 'Oauth2Token-Disbursement',
        title: 'Oauth2Token',
        type: 'item',
        requestType: 'oath2Token',
        requestCategory: 'Disbursement',
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
                defaultValue: '43eff5076a0a4858adb7b95d8c69b3f4',
            },
        ],
        params: [
        ],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'bc-authorize-Disbursement',
        title: 'bc-authorize',
        type: 'item',
        requestType: 'bc-authorize',
        requestCategory: 'Disbursement',
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
        id: 'transfer-disbursemnt',
        title: 'Transfer',
        type: 'item',
        requestType: 'transfer',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/transfer',
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
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payee": {
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
        id: ' gettransferStatus-disbursement',
        title: ' Get Transfer Status',
        type: 'item',
        requestType: 'transferStatus',
        requestCategory: 'Disbursement',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: 'a77490fa-ae6c-43d3-b885-522f3160e326',
            },
        ],
        params: [],
        testSuccessParams: [
            'financialTransactionId',
            'status',
            'externalId',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'RequestToPayDeliveryNotification-disbursement',
        title: 'Request To Pay Delivery Notification',
        type: 'item',
        requestType: 'RequestToPayDeliveryNotification',
        requestCategory: 'Disbursement',
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
        id: 'deposit-V1',
        title: 'Deposit-V1',
        type: 'item',
        requestType: 'deposit-V1',
        requestCategory: 'Disbursement',
        target: true,
        polling: true,
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
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                      {
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payee": {
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
        id: 'deposit-V2',
        title: 'Deposit-V2',
        type: 'item',
        requestType: 'deposit-V2',
        requestCategory: 'Disbursement',
        target: true,
        polling: true,
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
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                      {
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payee": {
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
        id: 'getdepositstatus',
        title: 'Get Deposit Status',
        type: 'item',
        requestType: 'depositStatus',
        requestCategory: 'Disbursement',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: 'a77490fa-ae6c-43d3-b885-522f3160e326',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'RefundV1',
        title: 'Refund V1',
        type: 'item',
        requestType: 'refund-V1',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
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
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payerMessage": "Pay for product a",
                        "payeeNote": "payer note",
                        "referenceIdToRefund": "15284da8-9169-446b-b1aa-d71080b9e6eb",
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
        id: 'RefundV2',
        title: 'Refund V2',
        type: 'item',
        requestType: 'refund-V2',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
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
                        "amount": "5.0",
                        "currency": "EUR",
                        "externalId": "6353636",
                        "payerMessage": "Pay for product a",
                        "payeeNote": "payer note",
                        "referenceIdToRefund": "15284da8-9169-446b-b1aa-d71080b9e6eb",
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
        id: 'getrefundStatus',
        title: 'Get Refund Status',
        type: 'item',
        requestType: 'refundStatus',
        requestCategory: 'Disbursement',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'Reference-Id',
                type: 'string',
                defaultValue: 'a77490fa-ae6c-43d3-b885-522f3160e326',
            },
        ],
        params: [],
        testSuccessParams: [
            'financialTransactionId',
            'status',
            'externalId',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getbasicuserinfowithconsent-disbursement',
        title: 'Get UserInfo With Consent ',
        type: 'item',
        requestType: 'getUserInfoWithConsent',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'oath2Token',
                required: true,
                caption: 'oath2Token',
                type: 'string',
                defaultValue: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJzdWIiOiIwIiwiYXVkIjoiMTMzNTI5MjczIiwiY2lkIjoiZWUwMTI4YTYtOTYyNS00MDQ5LTgxOWItZGQzNGY1MGJmZWMwIiwiZXhwIjoxNjc4Nzg2NDQyLCJpYXQiOjE2Nzg3ODYxNDIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiY29uIjowLCJzY3AiOlsicHJvZmlsZSJdfQ.kBGZxLAJ3HwXix_qbnmxGqMotytRj-gPvnb8E8XcXuUtYJoBc_70iCu8LXHVQBnYsa1NAd9UF3yFF1QA3BVTmV6DAWEVgWAL-SuPtKzO8abw2cgUsHScSUJylQI4zT4yKj8TqM24wbN8mmoUaf3yy6P6_1O9l-VZM3B1tMVTlrbOlHLjq3pLI0jDu2Lcu55W4MaNGYyU2RMMG8qHhXQHxW90cT-K01gBrEGb_NZNe_XnuO9rWundoAfmey1MgcYxjXkaAP9-L3GyVwZdih0jmUvZjLkYTk2_ttPTHSfNRtMoVW4_XxLMCO59g0dl2bk9aKQCWphUHM95qSnGCmeDoA',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getbasicuserinfo-disbursement',
        title: 'Get Basic Userinfo',
        type: 'item',
        requestType: 'getBasicUserInfo',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountHolderMSISDN',
                required: true,
                caption: 'accountHolderMSISDN',
                type: 'string',
                defaultValue: '0243656543',
            },
        ],
        params: [],
        testSuccessParams: ['name','gender'],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'validateaccountholderstatus-disbursement',
        title: 'Validate Account Holder Status',
        type: 'item',
        requestType: 'validateAccountHolderStatus',
        requestCategory: 'Disbursement',
        target: true,
        polling: false,

        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountHolderIdType',
                required: true,
                caption: 'accountHolderIdType',
                type: 'string',
                defaultValue: 'msisdn',
            },
            {
                id: 'accountHolderId',
                required: true,
                caption: 'accountHolderId',
                type: 'string',
                defaultValue: '0243656543',
            },
        ],
        params: [],
        testSuccessParams: [
            'result',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'getaccountBalance-disbursement',
        title: 'get Account Balance',
        type: 'item',
        requestType: 'getAccountBalance',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [],
        params: [],
        testSuccessParams: ['availableBalance','currency'],
        testErrorParams: ['errorCategory', 'errorCode'],
    },

    {
        id: 'GetAccountBalanceInSpecificCurrency-disbursement',
        title: 'Get Account Balance In Specific Currency',
        type: 'item',
        requestType: 'GetAccountBalanceInSpecificCurrency',
        requestCategory: 'Disbursement',
        target: true,
        returnClientCorrelation: true,
        headers: [],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },

   
   
   
    
    
    
];

export default Disbursement;
