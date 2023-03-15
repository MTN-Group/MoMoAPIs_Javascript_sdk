momo.auth.Collections({
    type: 'requestToPayTransactionStatus', 
    referenceId: '15284da8-9269-448b-b1aa-d73080b9e6eb',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})