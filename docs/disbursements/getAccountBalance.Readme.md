# Get Account Balance

`Here, getAccountBalance() sends a GET request to /disbursement/v1_0/account/balance`

> `This operation is used to get the balance of the account.`

### Usage/Examples

```javascript
{
  "type": "getAccountBalance"
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "b3c88e3b-1800-4743-a256-f7a696cba954",
  "content-length": "41",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:28:24 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
{
  "availableBalance": "200",
  "currency": "EUR"
}
```