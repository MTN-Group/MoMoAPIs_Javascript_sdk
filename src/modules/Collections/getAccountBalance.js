import { checkRequiredProps, requestMaker } from "../../utils";
export default function getAccountBalance(props, onError) {
  if (checkRequiredProps(props, [], onError)) {
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    return requestMaker(
      "collection/v1_0/account/balance", //url
      header //  headers
    ).get();
  }
}
