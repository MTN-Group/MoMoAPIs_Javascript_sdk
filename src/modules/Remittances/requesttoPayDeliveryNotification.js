import { checkRequiredProps, requestMaker } from '../../utils';
export default function RequesttoPayDeliveryNotification(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        // if (callbackUrl) {
        //     header['X-Callback-URL'] = callbackUrl;
        // }

        return requestMaker(
            `remittance/v1_0/requesttopay/${referenceId}/deliverynotification`, //url
            header //  headers
        ).post(
            data //data
        );
    }
}
