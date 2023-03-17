import { checkRequiredProps, requestMaker } from "../../utils";
export default function oath2Token(props, onError) {
  if (checkRequiredProps(props, ['auth_req_id','username','pass'], onError)) {
    const {callbackUrl, username,pass,auth_req_id } = props;
    const base64Data = window.btoa(`${username}:${pass}`);

    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
      "Authorization":`Basic ${base64Data}`
    };
    let data = `grant_type=urn:openid:params:grant-type:ciba&auth_req_id=${auth_req_id}`
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      "remittance/oauth2/token/", //url
      header //  headers
    ).post(

        data,
        false,
        true
    );
  }
}
