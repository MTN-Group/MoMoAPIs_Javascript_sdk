import { checkRequiredProps, requestMaker } from "../../utils";
export default function RequestToWithdrawTransactionStatus(props, onError) {
  if (checkRequiredProps(props, ["referenceId"], onError)) {
    const {referenceId } = props;
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    return requestMaker(
      `collection/v1_0/requesttowithdraw/${referenceId}`, //url
      header //  headers
    ).get();
  }
}
