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