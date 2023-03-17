# Request To Pay Delivery Notification

`Here, requestToPayDeliveryNotification(String referenceId, DeliveryNotification deliveryNotification) sends a POST request to /disbursement/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This operation is used to send additional Notification to an End User.`

### Usage/Examples

```javascript
{
  "referenceId": "21b29670-86e6-4a7b-b281-d84db366fbb7",
  "type": "RequestToPayDeliveryNotification",
  "data": {
    "notificationMessage": "string"
  }
}
```

### Response Example

```javascript
{
  "clientCorrelationId": "98cde2e1-93a2-4525-b5da-b2d2a805d8b9",
  "content-length": "0",
  "date": "Thu, 09 Mar 2023 12:07:49 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
  status
  202
```