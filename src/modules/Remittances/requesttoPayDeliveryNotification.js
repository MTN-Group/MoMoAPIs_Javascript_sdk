import { checkRequiredProps, requestMaker } from '../../utils';
export default function RequesttoPayDeliveryNotification(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { Language, referenceId, data } = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        if (Language) {
            header['Language'] = Language;
        }
        return requestMaker(
            `remittance/v1_0/requesttopay/${referenceId}/deliverynotification`, //url
            header //  headers
        ).post(
            data //data
        );
    }
}
