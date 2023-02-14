import { checkRequiredProps, requestMaker } from "../../utils";
export default function requestToPay(props, onError) {
  if (checkRequiredProps(props, ["data", "correlationId"], onError)) {
    const { correlationId, callbackUrl, data } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": "sandbox", //should be removed on production
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      "collection/v1_0/requesttopay", //url
      header //  headers
    ).post(
      data //data
    );
  }
}
