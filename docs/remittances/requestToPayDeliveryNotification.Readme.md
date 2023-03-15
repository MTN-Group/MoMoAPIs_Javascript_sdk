# Request To Pay Delivery Notification

`Here, requestToPayDeliveryNotification(String referenceId, DeliveryNotification deliveryNotification) sends a POST request to /remittance/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This operation is used to send additional Notification to an End User.`

### Usage/Examples

```javascript
{
  "referenceId": "5da8ac72-4878-41c5-88a3-ff07d4b9d08c",
  "type": "RequestToPayDeliveryNotification",
  "data": {
    "notificationMessage": "string"
  }
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "ab6dca08-955f-4a98-8c20-46afb9e09ed9",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:36:22 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
status 
202
```