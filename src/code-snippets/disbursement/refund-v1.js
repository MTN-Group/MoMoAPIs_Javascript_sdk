momo.auth.Disbursement({
    type: 'refund-V1',
    callbackUrl: 'http://webhook.site/522f2078-f629-4e94-a8b4-bc8b4319c950',
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