# Deposit V2

`Here, depositV2 sends a POST request to /disbursement/v2_0/deposit`

> `This operation is used to deposit an amount from the owner’s account to a payee account.
Status of the transaction can be validated by using the GET /deposit/{referenceId}`

### Usage/Examples

```javascript
{
  "type": "deposit-V2",
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
  "clientCorrelationId": "09785c5d-b8d7-40e0-8d66-d2ad34dcff72",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:12:37 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status 
202
```