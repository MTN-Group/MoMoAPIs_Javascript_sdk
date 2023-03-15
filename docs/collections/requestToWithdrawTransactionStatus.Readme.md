# Request To Withdraw Transaction Status

`Here, requestToWithdrawTransactionStatus(String referenceId) sends a GET request to /collection/v1_0/requesttowithdraw/{referenceId}`

> `This operation is used to get the status of a request to withdraw (of both versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to the request.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "1ce9bd7a-70bb-464a-99c8-19e604a9efeb",
  "content-length": "231",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 10:43:57 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "financialTransactionId": "642379695",
  "externalId": "6353636",
  "amount": "120",
  "currency": "EUR",
  "payer": {
    "partyIdType": "MSISDN",
    "partyId": "0248888736"
  },
  "payerMessage": "pay for product b",
  "payeeNote": "payee note",
  "status": "SUCCESSFUL"
}
```