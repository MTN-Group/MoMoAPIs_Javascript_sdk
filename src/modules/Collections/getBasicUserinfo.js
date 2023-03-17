import { checkRequiredProps, requestMaker } from "../../utils";
export default function getBasicUserinfo(props, onError) {
  if (checkRequiredProps(props, ["accountHolderMSISDN"], onError)) {
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    let { accountHolderMSISDN } = props;
    return requestMaker(
      `collection/v1_0/accountholder/msisdn/${accountHolderMSISDN}/basicuserinfo`, //url
      header //  headers
    ).get();
  }
}