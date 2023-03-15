window.momo.auth.Remittances({
    type: 'validateAccountHolderStatus',
    accountHolderIdType: 'msisdn',
    accountHolderId: '0243656543',
    callbackUrl: 'http://webhook.site/522f2078-f629-4e94-a8b4-bc8b4319c950',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})