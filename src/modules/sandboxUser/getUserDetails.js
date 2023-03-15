import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { checkRequiredProps } from "../../utils";
export default function createUser(props, onError) {
  if (checkRequiredProps(props, ["subscriptionKey","referenceId"], onError)) {
    const {subscriptionKey,referenceId, onSuccess } = props;
    let correlationId = uuidv4();
    let header = {
      "X-Reference-Id": correlationId,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-Target-Environment": process.env.TARGETENVIRONMENT,
    };

    axios
      .get(
        `https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/${referenceId}`,
        { headers: header }
      )
      .then((data) => {
        onSuccess(data);
      });
  }
}
