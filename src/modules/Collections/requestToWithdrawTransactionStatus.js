import { checkRequiredProps, requestMaker } from "../../utils";
export default function RequestToWithdrawTransactionStatus(props, onError) {
  if (checkRequiredProps(props, ["referenceId"], onError)) {
    const { correlationId, referenceId } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": "sandbox", //should be removed on production
    };
    return requestMaker(
      `collection/v1_0/requesttowithdraw/${referenceId}`, //url
      header //  headers
    ).get();
  }
}
