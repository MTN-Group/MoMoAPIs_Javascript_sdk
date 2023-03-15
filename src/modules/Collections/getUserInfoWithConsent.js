import { checkRequiredProps, requestMaker } from "../../utils";
export default function getUserInfoWithConsent(props, onError) {
  if (checkRequiredProps(props, ["oath2Token"], onError)) {
    const { oath2Token } = props;
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
      "Authorization":`Bearer ${oath2Token}`
    };
    return requestMaker(
      `collection/oauth2/v1_0/userinfo`, //url
      header //  headers
    ).get();
  }
}