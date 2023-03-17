import { checkRequiredProps, requestMaker } from '../../utils';
export default function GetRequestToPayTransactionStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const {referenceId} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `collection/v1_0/requesttopay/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
