import { checkRequiredProps, requestMaker } from "../../utils";
export default function validateAccountHolder(props, onError) {
  if (
    checkRequiredProps(
      props,
      ["accountHolderIdType", "accountHolderId"],
      onError
    )
  ) {
    const { correlationId } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": "sandbox", //should be removed on production
    };
    let { accountHolderIdType, accountHolderId } = props;
    return requestMaker(
      `collection/v1_0/accountholder/${accountHolderIdType}/${accountHolderId}/active`, //url
      header //  headers
    ).get();
  }
}
