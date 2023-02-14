export default function chooseAuthType(
  restParentProps,
  authHeaderProps,
  requestConfig = {},
  basicAuthCallBack,
  standarsAuthCallBack,
  onFailure
) {
  if (restParentProps && restParentProps.hasOwnProperty("auth")) {
    let {
      auth: { SUBSCRIPTION_KEY = null, accessToken = null, username = null, pass = null },
    } = rest;
    generateAuthHeaderFormGivenParams(
      {
        SUBSCRIPTION_KEY,
        accessToken,
        username,
        pass,
      },
      requestConfig,
      basicAuthCallBack,
      standarsAuthCallBack,
      onFailure
    );
  } else if (authHeaderProps) {
    let {
      SUBSCRIPTION_KEY = null,
      accessToken = null,
      username = null,
      pass = null,
    } = authHeaderProps;

    generateAuthHeaderFormGivenParams(
      {
        SUBSCRIPTION_KEY,
        accessToken,
        username,
        pass,
      },
      requestConfig,
      basicAuthCallBack,
      standarsAuthCallBack,
      onFailure
    );
  } else {
    // no auth can throw error
    basicAuthCallBack &&
      basicAuthCallBack({
        ...requestConfig?.headers,
      });
  }
}

/**
 * Function generates added Auth related headers and call curresponding callback fun.
 * @param  {} {SUBSCRIPTION_KEY
 * @param  {} accessToken
 * @param  {} username
 * @param  {} pass} auth params
 * @param  {} requestConfig existing request params
 * @param  {} basicAuth basic auth call back function
 * @param  {} stdAuth standard auth call back function
 * @param  {} onFailure call back to throw error in b/w
 */
function generateAuthHeaderFormGivenParams(
  { SUBSCRIPTION_KEY, accessToken, username, pass },
  requestConfig,
  basicAuth,
  stdAuth,
  onFailure
) {
  if (SUBSCRIPTION_KEY && accessToken) {
    stdAuth &&
      stdAuth({
        ...requestConfig.headers,
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
        Authorization: `Bearer ${accessToken}`,
      });
  } else if (username && pass) {
    const base64Data = window.btoa(`${username}:${pass}`);
    basicAuth &&
      basicAuth({
        ...requestConfig.headers,
        Authorization: `Bearer ${base64Data}`,
      });
  } else {
    // onFailure('Missing auth params', '400');
    basicAuth &&
      basicAuth({
        ...requestConfig.headers,
      });
  }
}
