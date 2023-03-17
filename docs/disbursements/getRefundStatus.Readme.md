# Get Refund Status

`Here, getRefundStatus(String referenceId) sends a GET request to /disbursement/v1_0/refund/{referenceId}`

> `This operation is used to get the status of a refund (of versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to this request.`

### Usage/Examples

```javascript

{
  "clientCorrelationId": "8ef956c0-cdb2-450e-a134-5dc41fd7dcba",
  "content-length": "229",
  "content-type": "application/json;charset=utf-8",
  "date": "Tue, 14 Mar 2023 12:03:36 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "financialTransactionId": "981569077",
  "externalId": "6353636",
  "amount": "5",
  "currency": "EUR",
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "0248888736"
  },
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note",
  "status": "SUCCESSFUL"
}
status 
200
```