//Get Account Balance 

momo.auth.Collections({
    type: 'getAccountBalance',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})
// Get Basic User Info
momo.auth.Collections({
    type: 'getBasicUserInfo',
    accountHolderMSISDN:'0243656543',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})


// Request To Pay Delivery Notification
momo.auth.Collections({
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


// Request To Pay Transaction pass getClientCorrelationId
momo.auth.Collections({
    type: 'requestToPayTransactionStatus',
    callbackUrl: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
    data: {
  "amount": "5.0",
  "currency": "EUR",
  "externalId": "6353636",
  "payer": {
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


// Request To Pay Transaction 
momo.auth.Collections({
    type: 'requestToPayTransaction',
    callbackUrl: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
    data: {
  "amount": "5.0",
  "currency": "EUR",
  "externalId": "6353636",
  "payer": {
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
  })


// Request To Pay Transaction Status
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


// Request To Withdraw
momo.auth.Collections({
    type: 'requestToWithdrawV1',
    data: {
    "payeeNote": "payee note",
    "externalId": "6353636",
    "amount": "120",
    "currency": "EUR",
    "payer": {
      "partyIdType": "MSISDN",
      "partyId": "0248888736"
    },
    "payerMessage": "pay for product b"
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


// Validate Account Holder Status
window.momo.auth.Collections({
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