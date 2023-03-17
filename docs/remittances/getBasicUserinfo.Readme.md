# Get Basic User info

`Here, getBasicUserinfo(String msisdn) sends a GET request to /remittance/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo`

> `This operation returns personal information of the account holder. The operation does not need any consent by the account holder.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "07084dd4-a554-4a98-b464-f61a829315f3",
  "content-length": "151",
  "content-type": "application/json;charset=utf-8",
  "date": "Tue, 14 Mar 2023 12:08:57 GMT",
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
  "updated_at": 1678792138
}
```
