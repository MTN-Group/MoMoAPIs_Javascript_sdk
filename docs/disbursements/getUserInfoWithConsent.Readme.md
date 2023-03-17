# Get User Information with Consent using Oauth2

`Here, getUserInfoWithConsent(AccountHolder accountHolder, String scope, AccessType accesType) sends a GET request to /disbursement/oauth2/v1_0/userinfo. Prior to that a POST call will happen to /disbursement/v1_0/bc-authorize and then to /disbursement/oauth2/token/ for fetching the Oauth2 token in the background.`

> `This operation returns personal information of the user. The operation needs consent by the user.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "2fcbfdef-0728-46e1-9760-cbbf04bf2570",
  "content-length": "151",
  "content-type": "application/json;charset=utf-8",
  "date": "Tue, 14 Mar 2023 12:06:57 GMT",
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
  "updated_at": 1678792018
}
```
