window.momo.auth.Remittances({
    type: 'validateAccountHolderStatus',
    accountHolderIdType: 'msisdn',
    accountHolderId: '0243656543',
    callbackUrl: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})