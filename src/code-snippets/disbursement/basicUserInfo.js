momo.auth.Disbursement({
    type: 'getBasicUserInfo',
    accountHolderMSISDN:'0243656543',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})