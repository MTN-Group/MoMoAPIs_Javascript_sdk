# Refund V1

`Here, refundV1 sends a POST request to /disbursement/v1_0/refund`

> `This operation is used to refund an amount from the owner’s account to a payee account.
Status of the transaction can be validated by using the GET /refund/{referenceId}`

### Usage/Examples

```javascript
{
  "type": "refund-V1",
  "data": {
    "amount": "5.0",
    "currency": "EUR",
    "externalId": "6353636",
    "payerMessage": "Pay for product a",
    "payeeNote": "payer note",
    "referenceIdToRefund": "15284da8-9169-446b-b1aa-d71080b9e6eb"
  }
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "ce3769c7-258b-4c68-a36e-a49e6fc460e6",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:16:22 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status
202
```