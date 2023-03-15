const Sandbox = [
    
    {
        id: 'createApiKey',
        title: 'CreateApiKey',
        type: 'item',
        requestType: 'createApiKey',
        requestCategory: 'initUser',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'correlationId',
                required: true,
                caption: 'correlationId',
                type: 'string',
                defaultValue: 'ee0128a6-9625-4049-819b-dd34f50bfec0',
            },
            {
                id: 'subscriptionKey',
                required: true,
                caption: 'subscriptionKey',
                type: 'string',
                defaultValue: '98dded9b14af4ad68a778d93949284fc',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },

    {
        id: 'CreateUser',
        title: 'CreateUser',
        type: 'item',
        requestType: 'createUser',
        requestCategory: 'initUser',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'correlationId',
                required: true,
                caption: 'correlationId',
                type: 'string',
                defaultValue: 'ee0128a6-9625-4049-819b-dd34f50bfec0',
            },
            {
                id: 'subscriptionKey',
                required: true,
                caption: 'subscriptionKey',
                type: 'string',
                defaultValue: '98dded9b14af4ad68a778d93949284fc',
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
                            "providerCallbackHost": "https://webhook.site/37b4b85e-8c15-4fe5-9076-b7de3071b85d"
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
        id: 'getUserDetails',
        title: 'getUserDetails',
        type: 'item',
        requestType: 'getUserDetails',
        requestCategory: 'initUser',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'referenceId',
                required: true,
                caption: 'referenceId',
                type: 'string',
                defaultValue: 'ee0128a6-9625-4049-819a-dd34f50bfec0',
            },
            {
                id: 'subscriptionKey',
                required: true,
                caption: 'subscriptionKey',
                type: 'string',
                defaultValue: '98dded9b14af4ad68a778d93949284fc',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },

];

export default Sandbox;
