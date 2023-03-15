#Get Request to pay transaction status

`Here, requestToPayTransactionStatus() creates a GET request to collection/v1_0/requesttopay/{referenceId}`

> `This operation is used to used for validating the status of the transaction `

## Usage/Examples

Passing the reference id obtained of transaction into requestToPayTransactionStatus() to get the status of the transaction

```javascript
{
  "clientCorrelationId": "267a2635-f9d0-45fc-82ee-63fe69b0d372",
  "content-length": "230",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 07:33:17 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Example Output

```javascript
{
  "financialTransactionId": "1232581108",
  "externalId": "6353636",
  "amount": "5",
  "currency": "EUR",
  "payer": {
    "partyIdType": "MSISDN",
    "partyId": "0248888736"
  },
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note",
  "status": "SUCCESSFUL"
}
```