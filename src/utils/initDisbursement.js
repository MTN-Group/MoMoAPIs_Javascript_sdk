import generateToken from "../apis/generateToken";
import { moduleWrapperWithCollection, moduleWrapperWithDisbursement } from "../modules";
import { callbackUrlValidateWrapperWithMandatoryCheck } from "./validator";

// function handling token generation
function tokenGenerator({
  username = null,
  pass = null,
  SUBSCRIPTION_KEY = null,
  callbackUrl = null,
  onSuccess = null,
  onFailure = null,
}) {
  // if user has token in cache
  if (sessionStorage.getItem("disbursementSdkToken")) {
    const tokenData = JSON.parse(sessionStorage.getItem("disbursementSdkToken"));
    const { access_token: accessToken, expires_at } = tokenData;
    // if token not expired
    if (
      accessToken &&
      checkForTokenExpire(expires_at) &&
      accessToken.length > 0
    ) {
      // All moduled are initated with new accessToken and api key
      moduleWrapperWithDisbursement({ SUBSCRIPTION_KEY, accessToken, callbackUrl });
      onSuccess &&
        onSuccess("You can access disbursement functions using : window.gsma.auth");
    } else {
      getToken({
        username,
        pass,
        SUBSCRIPTION_KEY,
        callbackUrl,
        onSuccess,
        onFailure,
      });
    }
  } else {
    getToken({
      username,
      pass,
      SUBSCRIPTION_KEY,
      callbackUrl,
      onSuccess,
      onFailure,
    });
  }
}

function getToken({
    username,
    pass,
    SUBSCRIPTION_KEY,
    callbackUrl = null,
    onSuccess: onSuccessCallback = null,
    onFailure = null,
}) {
    generateToken({
        username,
        pass,
        SUBSCRIPTION_KEY,
        url:process.env.MOMO_DISBURSEMENT_TOKEN_URL,
        onSuccess: (data = null) => {
            if (data) {
                setExpireTokenInStorage(data);
                const { access_token: accessToken } = data;
                // All moduled are initated with new accessToken and api key

                moduleWrapperWithDisbursement({
                    SUBSCRIPTION_KEY,
                    accessToken,
                    callbackUrl,
                });

                onSuccessCallback &&
                    onSuccessCallback(
                        'You can access Disbursement functions using : window.gsma.auth'
                    );
            } else {
                onFailure &&
                    onFailure(
                        {
                            errorCategory: 'Internal',
                            errorCode: 'GenericError',
                            errorDescription:
                                'The request could not be completed as access token is missing',
                            errorParameters: [
                                { key: 'accessToken', value: '' },
                            ],
                        },
                        400
                    );
            }
        },
        onFailure,
    });
}

const checkForTokenExpire = (expiresAt) => {
    return new Date().getTime() / 1000 < expiresAt;
};

const setExpireTokenInStorage = ({ access_token = '', expires_in = 3600 }) => {
    let tokenSaveData = {
        access_token,
        expires_in,
        expires_at: new Date().getTime() / 1000 + expires_in,
        created_at: new Date().getTime() / 1000,
    };

    sessionStorage.setItem('disbursementSdkToken', JSON.stringify(tokenSaveData));
};

export { checkForTokenExpire, setExpireTokenInStorage };
export default callbackUrlValidateWrapperWithMandatoryCheck(tokenGenerator);
