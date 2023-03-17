momo.auth.Disbursement({
    type: 'refund-V1',
    callbackUrl: 'http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay',
    data: {
  "amount": "5.0",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note",
  "referenceIdToRefund": "15284da8-9169-446b-b1aa-d71080b9e6eb",
  },
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
  })