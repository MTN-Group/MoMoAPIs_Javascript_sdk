# Request To Pay Delivery Notification

`Here, requestToPayDeliveryNotification(String referenceId, DeliveryNotification deliveryNotification) sends a POST request to /collection/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This operation is used to send additional Notification to an End User.`

### Usage/Examples

```javascript
{
  "clientCorrelationId": "476f0ca5-f8fa-49a3-80fd-463a9e993ef1",
  "content-length": "0",
  "date": "Tue, 14 Mar 2023 10:44:02 GMT",
  "request-context": "appId=cid-v1:e996501c-e721-4ac1-97ff-dc6887b85e8c",
  "x-xss-protection": "1; mode=block"
}
```

### Response Example

```javascript
{
  "status": 200
}
```

### NOTE

There is another method for requestToPayDeliveryNotification which accepts extra parameters "deliveryNotificationHeader" and "language" where we can attach the message and language in the header if required. It is achieved using following method: requestToPayDeliveryNotification(String referenceId, DeliveryNotification deliveryNotification, String deliveryNotificationHeader, String language)