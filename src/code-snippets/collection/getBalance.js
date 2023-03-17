momo.auth.Collections({
    type: 'getAccountBalance',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})