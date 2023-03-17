# Get User Details

`Here, getUserDetails(String referenceId) sends a GET request to /v1_0/apiuser/{X-Reference-Id}`

> `Used to get the information of API user that we created using createUser()`

### Usage/Examples

```javascript
{
  "content-length": "114",
  "content-type": "application/json;charset=utf-8",
  "date": "Tue, 14 Mar 2023 12:23:48 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "providerCallbackHost": "https://webhook.site/37b4b85e-8c15-4fe5-9076-b7de3071b85d",
  "targetEnvironment": "sandbox"
}
```