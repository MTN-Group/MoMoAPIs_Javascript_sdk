
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
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
})



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