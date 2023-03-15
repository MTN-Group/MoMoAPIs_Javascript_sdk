momo.auth.Collections({
    type: 'bc-authorize',
    msisdn:'23423423450',
    scope:'profile',
    access_type:'offline',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})