# Request To Pay

`Here, requestToPay sends a POST request to /collection/v1_0/requesttopay`

> `This operation is used to request a payment from a consumer (Payer). The payer will be asked to authorize the payment. The transaction will be executed once the payer has authorized the payment. The requesttopay will be in status PENDING until the transaction is authorized or declined by the payer or it is timed out by the system. Status of the transaction can be validated by using the GET /requesttopay/<resourceId>.`

## Usage/Examples

```javascript
{
  "callbackUrl": "http://71d44092-ffdf-48fc-a51d-6d50da2c1012.mock.pstmn.io/rpay",
  "type": "requesttoPayTransaction",
  "data": {
    "amount": "5.0",
    "currency": "EUR",
    "externalId": "6353636",
    "payer": {
      "partyIdType": "MSISDN",
      "partyId": "0248888736"
    },
    "payerMessage": "Pay for product a",
    "payeeNote": "payer note"
  }
}
```

### Example Output

```
{
  "clientCorrelationId": "f56e564f-ada7-4980-97b1-9ab9335d4b91",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 07:27:02 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```  
### Response Example

```javascript
{
  "status": true,
  "referenceId": "f56e564f-ada7-4980-97b1-9ab9335d4b91"
}
```