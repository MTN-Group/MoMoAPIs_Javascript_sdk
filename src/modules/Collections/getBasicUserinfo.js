import { checkRequiredProps, requestMaker } from "../../utils";
export default function getBasicUserinfo(props, onError) {
  if (checkRequiredProps(props, ["accountHolderMSISDN"], onError)) {
    const { correlationId } = props;
    let header = {
      "X-Reference-Id": correlationId,
      "X-Target-Environment": "sandbox", //should be removed on production
    };
    let { accountHolderMSISDN } = props;
    return requestMaker(
      `collection/v1_0/accountholder/msisdn/${accountHolderMSISDN}/basicuserinfo`, //url
      header //  headers
    ).get();
  }
}
