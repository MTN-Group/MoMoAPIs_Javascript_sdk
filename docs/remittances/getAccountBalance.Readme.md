# Get Account Balance

`Here, getAccountBalance() sends a GET request to /remittance/v1_0/account/balance`

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
  "clientCorrelationId": "87b987e3-fac8-493d-92f5-8a76bcd9b4f1",
  "content-length": "44",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:39:16 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}

{
  "availableBalance": "1000",
  "currency": "EUR"
}
```