import { checkRequiredProps, requestMaker } from "../../utils";
export default function requestToWithdrawV1(props, onError) {
  if (checkRequiredProps(props, ["data"], onError)) {
    const { correlationId, callbackUrl, data } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      "collection/v1_0/requesttowithdraw", //url
      header //  headers
    ).post(
      data //data
    );
  }
}
