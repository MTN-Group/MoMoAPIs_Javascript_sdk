import { checkRequiredProps, requestMaker } from '../../utils';
export default function depositStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const {referenceId} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `disbursement/v1_0/deposit/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
