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