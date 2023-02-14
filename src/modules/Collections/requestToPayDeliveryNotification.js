import { checkRequiredProps, requestMaker } from '../../utils';
export default function RequesttoPayDeliveryNotification(props, onError) {
    if (checkRequiredProps(props,['data','referenceId'], onError)) {
        const { correlationId, data, referenceId } = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        return requestMaker(
            `collection/v1_0/requesttopay/${referenceId}/deliverynotification`, //url
            header //  headers
        ).post(
            data //data
        );
    }
}
