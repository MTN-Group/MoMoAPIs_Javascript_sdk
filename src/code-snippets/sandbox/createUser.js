window.momo.initUser.createUser({
    type: 'createUser', 
    subscriptionKey:'98dded9b14af4ad68a778d93949284fc',
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