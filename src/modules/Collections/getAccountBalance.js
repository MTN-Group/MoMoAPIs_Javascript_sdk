import { checkRequiredProps, requestMaker } from "../../utils";
export default function getAccountBalance(props, onError) {
  if (checkRequiredProps(props, [], onError)) {
    const { correlationId } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": "sandbox", //should be removed on production
    };
    return requestMaker(
      "collection/v1_0/account/balance", //url
      header //  headers
    ).get();
  }
}
