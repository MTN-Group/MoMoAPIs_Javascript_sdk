import { checkRequiredProps, requestMaker } from '../../utils';
export default function validateAccountHolder(props, onError) {
    if (checkRequiredProps(props,['accountHolderIdType', 'accountHolderId'], onError)) {
        const {accountHolderIdType, accountHolderId} = props;
        let header = {
            "X-Target-Environment": process.env.TARGETENVIRONMENT,
        };
        return requestMaker(
            `remittance/v1_0/accountholder/${accountHolderIdType}/${accountHolderId}/active`, //url
            header //  headers
        ).get();
    }
}
