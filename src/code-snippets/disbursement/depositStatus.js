momo.auth.Disbursement({
    type: 'depositStatus', 
    referenceId: '040ebfad-f135-427d-9c86-c62db275cf14',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})