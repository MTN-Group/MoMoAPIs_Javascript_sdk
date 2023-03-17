import { checkRequiredProps, requestMaker } from '../../utils';
export default function refundStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const {referenceId} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `disbursement/v1_0/refund/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
