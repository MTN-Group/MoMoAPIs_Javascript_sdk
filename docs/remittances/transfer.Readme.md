# Transfer

`Here, transfer sends a POST request to /remittance/v1_0/transfer`

> `Transfer operation is used to transfer an amount from the own account to a payee account.
Status of the transaction can be validated by using the GET /transfer/{referenceId}`

### Usage/Examples

```javascript
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "transfer",
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
  "clientCorrelationId": "010081b7-3f06-4f49-8f8b-335e0d73405e",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:31:55 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status
202
```