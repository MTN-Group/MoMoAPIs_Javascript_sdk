import { checkRequiredProps, requestMaker } from "../../utils";
export default function validateAccountHolder(props, onError) {
  if (
    checkRequiredProps(
      props,
      ["accountHolderIdType", "accountHolderId"],
      onError
    )
  ) {
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    let { accountHolderIdType, accountHolderId } = props;
    return requestMaker(
      `collection/v1_0/accountholder/${accountHolderIdType}/${accountHolderId}/active`, //url
      header //  headers
    ).get();
  }
}
