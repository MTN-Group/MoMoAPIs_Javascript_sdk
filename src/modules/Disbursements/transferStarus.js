import { checkRequiredProps, requestMaker } from '../../utils';
export default function transferStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        let {referenceId} = props
        return requestMaker(
            `disbursement/v1_0/transfer/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
