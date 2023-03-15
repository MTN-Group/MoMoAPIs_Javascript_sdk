# Validate AccountHolder Status

`Here, validateAccountHolderStatus sends a GET request to /disbursement/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active`

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
  "clientCorrelationId": "a09d3245-c4d0-4c46-8eae-af99e57b75e6",
  "content-length": "15",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:26:18 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
{
  "result": true
}
```