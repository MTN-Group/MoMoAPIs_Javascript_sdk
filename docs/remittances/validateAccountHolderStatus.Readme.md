# Validate AccountHolder Status

`Here, validateAccountHolderStatus(AccountHolder accountHolder) sends a GET request to /remittance/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active`

> `Operation is used to check if an account holder is registered and active in the system.`

### Usage/Examples

```javascript
{
  "accountHolderIdType": "msisdn",
  "accountHolderId": "0243656543",
  "type": "validateAccountHolderStatus"
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "07e0c706-ecf7-4858-9ce9-b03541b03319",
  "content-length": "15",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:37:44 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
{
  "result": true
}
```