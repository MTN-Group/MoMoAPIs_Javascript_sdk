import { checkRequiredProps, requestMaker } from '../../utils';
export default function getbasicuserinfo(props, onError) {
    if (checkRequiredProps(props,['accountHolderMSISDN'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-Reference-Id': correlationId,
            'X-Target-Environment':'sandbox' //should be removed on production
        };
        let { accountHolderIdType, accountHolderId} = props
        return requestMaker(
            `remittance/v1_0/accountholder/msisdn/${accountHolderMSISDN}/basicuserinfo`, //url
            header //  headers
        ).get();
    }
}
