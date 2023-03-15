# Validate AccountHolder Status

`Here, validateAccountHolderStatus(AccountHolder accountHolder) sends a GET request to /collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active`

> `Operation is used to check if an account holder is registered and active in the system.`

### Usage/Examples

```javascript
{
  "accountHolderId": "0243656543",
  "accountHolderIdType": "msisdn",
  "type": "validateAccountHolderStatus"
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "2509bc38-058d-4ae0-944d-e4f056de9149",
  "content-length": "15",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 10:48:49 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
{
  "result": true
}
```