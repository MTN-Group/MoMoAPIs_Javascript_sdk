# Get Basic User Information

`Here, getBasicUserinfo(String msisdn) sends a GET request to /collection/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo`

> `This operation returns personal information of the account holder. The operation does not need any consent by the account holder.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "650faba8-451f-4ccf-8311-f07262183e59",
  "content-length": "151",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 10:45:26 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "sub": "0",
  "name": "Sand Box",
  "given_name": "Sand",
  "family_name": "Box",
  "birthdate": "1976-08-13",
  "locale": "sv_SE",
  "gender": "MALE",
  "updated_at": 1678355127
}
```