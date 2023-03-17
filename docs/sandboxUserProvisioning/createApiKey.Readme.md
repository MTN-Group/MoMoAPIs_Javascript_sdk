# Create ApiKey

`Here, createApiKey(String referenceId) sends a POST request to /v1_0/apiuser/{X-Reference-Id}/apikey`

> `Used to create an API key for an API user in the sandbox environment.`

### Usage/Examples

```javascript
{
  "correlationId": "ee0128a6-9625-4049-819b-dd34f50bfec0",
  "subscriptionKey": "98dded9b14af4ad68a778d93949284fc",
  "type": "createApiKey"
}
```

### Response Example

```javascript
{
  "apiKey": "d51f489189cf4adc8b12dcb6c10b3eb8"
}
```