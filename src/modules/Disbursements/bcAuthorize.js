import { checkRequiredProps, requestMaker } from "../../utils";
import qs from "qs";
export default function bcAuthorize(props, onError) {
  if (checkRequiredProps(props,['msisdn','scope','access_type'], onError)) {
    const {callbackUrl,msisdn, scope,access_type} = props;
    let header = {
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      "disbursement/v1_0/bc-authorize", //url
      header //  headers
    ).post(
        qs.stringify({'login_hint': `ID:${msisdn}/MSISDN`, 'scope': scope,'access_type':access_type}),
        false,
        true
    );
  }
}
