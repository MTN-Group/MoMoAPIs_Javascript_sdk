// Get Basic User Info
momo.auth.Remittances({
    type: 'getBasicUserInfo',
    accountHolderMSISDN:'0243656543',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})


// Get Account Balance
momo.auth.Remittances({
    type: 'getAccountBalance',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})


// Request To Pay Delivery Notification
momo.auth.Remittances({
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


// Transfer
momo.auth.Remittances({
    type: 'transfer',
    callbackUrl: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
    data: {
  "amount": "5.0",
  "currency": "EUR",
  "externalId": "6353636",
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "0248888736"
  },
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note"
},
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
})


// Transfer Status
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


// Validate Account Holder Status
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