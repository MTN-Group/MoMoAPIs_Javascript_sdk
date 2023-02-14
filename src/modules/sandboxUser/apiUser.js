import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { checkRequiredProps } from "../../utils";
export default function apiUser(props, onError) {
  if (checkRequiredProps(props, ["subscriptionKey"], onError)) {
    const { data, subscriptionKey, onSuccess } = props;
    let correlationId = uuidv4();
    let header = {
      "X-Reference-Id": correlationId,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-Target-Environment": "sandbox", //should be removed on production
    };

    axios
      .post(
        "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/ee0128a6-9625-4049-819b-dd34f50bfec0/apikey",
        data,
        { headers: header }
      )
      .then((data) => {
        onSuccess(correlationId);
      });
  }
}
