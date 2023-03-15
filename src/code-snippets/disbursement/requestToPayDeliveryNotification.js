momo.auth.Disbursement({
    type: 'RequestToPayDeliveryNotification', 
    referenceId: '15284da8-9169-448b-b1aa-d73080b9e6eb',
    data: {
            "notificationMessage": "string"
    },
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})