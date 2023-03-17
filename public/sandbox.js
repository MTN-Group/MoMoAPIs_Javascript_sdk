// createApiKey
window.momo.initUser.createApiKey({
    type: 'createApiKey',
    correlationId:'ee0128a6-9625-4049-819b-dd34f50bfec0',
    subscriptionKey:'98dded9b14af4ad68a778d93949284fc',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})


//createUser
window.momo.initUser.createUser({
    type: 'apiUser', subscriptionKey:'98dded9b14af4ad68a778d93949284fc',
    data: {
  "providerCallbackHost": "https://webhook.site/37b4b85e-8c15-4fe5-9076-b7de3071b85d"
},
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
})


// getUserDetails
window.momo.initUser.getUserDetails({
    type: 'getUserDetails',
    subscriptionKey:'98dded9b14af4ad68a778d93949284fc',
    referenceId:'ee0128a6-9625-4049-819a-dd34f50bfec0',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
})