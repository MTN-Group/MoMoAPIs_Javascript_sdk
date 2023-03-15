# Request To Withdraw-V2

`Here, requestToWithdrawV2 sends a POST request to /collection/v2_0/requesttowithdraw`

> `This operation is used to request a withdrawal (cash-out) from a consumer (Payer). The payer will be asked to authorize the withdrawal. The transaction will be executed once the payer has authorized the withdrawal`

### Usage/Examples

```javascript
{
  "callbackUrl": "http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay",
  "type": "requestToWithdrawV2",
  "data": {
    "payeeNote": "payee note",
    "externalId": "6353636",
    "amount": "120",
    "currency": "EUR",
    "payer": {
      "partyIdType": "MSISDN",
      "partyId": "0248888736"
    },
    "payerMessage": "pay for product b"
  }
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "0444546f-8d05-4f20-8959-a8a28b29bd35",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 10:41:19 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status:
    202
```