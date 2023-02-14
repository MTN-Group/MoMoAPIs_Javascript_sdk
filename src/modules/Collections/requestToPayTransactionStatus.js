import { checkRequiredProps, requestMaker } from '../../utils';
export default function GetRequestToPayTransactionStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const { correlationId, referenceId} = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        return requestMaker(
            `collection/v1_0/requesttopay/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
