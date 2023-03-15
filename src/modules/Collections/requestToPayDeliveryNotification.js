import { checkRequiredProps, requestMaker } from '../../utils';
export default function RequesttoPayDeliveryNotification(props, onError) {
    if (checkRequiredProps(props,['data','referenceId'], onError)) {
        const {data, referenceId } = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `collection/v1_0/requesttopay/${referenceId}/deliverynotification`, //url
            header //  headers
        ).post(
            data //data
        );
    }
}
