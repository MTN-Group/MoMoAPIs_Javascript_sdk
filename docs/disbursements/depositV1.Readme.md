# Deposit V1

`Here, depositV1 sends a POST request to /disbursement/v1_0/deposit`

> `This operation is used to deposit an amount from the owner’s account to a payee account.
Status of the transaction can be validated by using the GET /deposit/{referenceId}`

### Usage/Examples

```javascript
{
  "type": "deposit-V1",
  "data": {
    "amount": "5.0",
    "currency": "EUR",
    "externalId": "6353636",
    "payee": {
      "partyIdType": "MSISDN",
      "partyId": "0248888736"
    },
    "payerMessage": "Pay for product a",
    "payeeNote": "payer note"
  }
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "0f9989e1-b431-4b33-a1da-b0c402252a1c",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:11:30 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status 
202
```