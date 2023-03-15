import axios from "axios";
import { checkRequiredProps } from "../../utils";
export default function createApiKey(props, onError) {
  if (
    checkRequiredProps(props, ["subscriptionKey", "correlationId"], onError)
  ) {
    const { correlationId, subscriptionKey, onSuccess } = props;
    let header = {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-Target-Environment": process.env.TARGETENVIRONMENT, //should be removed on production
    };
    axios
      .post(
        `https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/${correlationId}/apikey`,
        "",
        { headers: header }
      )
      .then((res) => {
        onSuccess(res.data.apiKey);
      });
  }
}
