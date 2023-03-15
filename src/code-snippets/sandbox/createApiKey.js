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