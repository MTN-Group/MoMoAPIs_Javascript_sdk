# Get Basic User info

`Here, getBasicUserinfo(String msisdn) sends a GET request to /disbursement/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo`

> `This operation returns personal information of the account holder. The operation does not need any consent by the account holder.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "d05a9cb7-e7b3-4c10-af6d-adad25efe2bf",
  "content-length": "151",
  "content-type": "application/json;charset=utf-8",
  "date": "Thu, 09 Mar 2023 12:25:02 GMT",
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
  "updated_at": 1678361103
}
```
