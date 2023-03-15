momo.auth.Collections({
    type: 'oath2Token', 
    username: 'ee0128a6-9625-4049-819b-dd34f50bfec0', 
    pass:'0ef6184cb0a740b48896245eeb43898c',
    auth_req_id:'01000135-fd21-4dd1-b652-a75665cf2719',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})