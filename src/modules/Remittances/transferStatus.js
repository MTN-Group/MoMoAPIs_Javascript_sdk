import { checkRequiredProps, requestMaker } from '../../utils';
export default function transferStatus(props, onError) {
    if (checkRequiredProps(props,['referenceId'], onError)) {
        const {referenceId} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `remittance/v1_0/transfer/${referenceId}`, //url
            header //  headers
        ).get();
    }
}
