# Get Deposit Status

`Here, getDepositStatus(String referenceId) sends a GET request to /disbursement/v1_0/deposit/{referenceId}`

> `This operation is used to get the status of a deposit (of versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to this request.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "b2069bdc-0c99-4bdf-94fc-d4590cc065c4",
  "content-length": "192",
  "content-type": "application/json;charset=utf-8",
  "date": "Tue, 14 Mar 2023 12:02:05 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
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
```