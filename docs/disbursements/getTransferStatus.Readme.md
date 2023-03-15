# Get Transfer Status

`Here, getTransferStatus(String referenceId) sends a GET request to /disbursement/v1_0/transfer/{referenceId}`

> `This operation is used to get the status of a transfer. X-Reference-Id that was passed in the POST is used as reference to the request`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "cd14cd5b-9d6e-4ab3-91bf-1928191c7db5",
  "content-length": "229",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:04:30 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "amount": "5",
  "currency": "EUR",
  "financialTransactionId": "981569077",
  "externalId": "6353636",
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "0248888736"
  },
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note",
  "status": "SUCCESSFUL"
}
```