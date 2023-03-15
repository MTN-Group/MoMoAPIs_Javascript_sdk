import { checkRequiredProps, requestMaker } from '../../utils';
export default function refundV2(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-Reference-Id': correlationId,
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        return requestMaker(
            'disbursement/v2_0/refund', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
