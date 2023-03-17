import { checkRequiredProps, requestMaker } from '../../utils';
export default function getBasicUserInfo(props, onError) {
    if (checkRequiredProps(props,['accountHolderMSISDN'], onError)) {
        const {accountHolderMSISDN} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `disbursement/v1_0/accountholder/msisdn/${accountHolderMSISDN}/basicuserinfo`, //url
            header //  headers
        ).get();
    }
}
