momo.auth.Remittances({
    type: 'transferStatus', 
    referenceId: 'a77490fa-ae6c-43d3-b885-522f3160e326',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})