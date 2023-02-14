import { checkRequiredProps, requestMaker } from '../../utils';
export default function refundStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        let {referenceId} = props
        return requestMaker(
            `disbursement/v1_0/refund/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
