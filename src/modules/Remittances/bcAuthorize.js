import { checkRequiredProps, requestMaker } from "../../utils";
import qs from "qs";
export default function bcAuthorize(props, onError) {
  if (checkRequiredProps(props,['msisdn','scope','access_type'], onError)) {
    const {callbackUrl,msisdn, scope,access_type} = props;
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT, //should be removed on production
    };
    let data = {'login_hint': `ID:${msisdn}/MSISDN`, 'scope': scope,'access_type':access_type}
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      "remittance/v1_0/bc-authorize", //url
      header //  headers
    ).post(
        qs.stringify(data),
        false,
        true
    );
  }
}
