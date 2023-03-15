import { UPDATE_PRODUCT } from "store/actions";

//Basic Authentication
export const GSMA_AUTHENTICATED = {};
export const basicAuthentication = (
  username,
  password,
  subscriptionKey,
  product,
  dispatch,
  setOpen,
  setAuthorised
) => {
  if (window) {
    if (product === "collection") {
      GSMA_AUTHENTICATED.COLLECTION = window.momo.initCollectionAuth({
        username: username,
        pass: password,
        SUBSCRIPTION_KEY: subscriptionKey,

        onFailure: (errorObj) => {
          setOpen(true)
          alert('Authentication failed')
          console.log("init failed stdAuth", errorObj);
        },
        onSuccess: (sucess) => {
          setOpen(false)
          setAuthorised(true);
          dispatch({ type: UPDATE_PRODUCT,body:'collection' });
          console.log("init success stdAuth", sucess);
        },
      });
    }
    if (product === "disbursement") {
      GSMA_AUTHENTICATED.DISBURSEMENT = window.momo.initDisbursementAuth({
        username: username,
        pass: password,
        SUBSCRIPTION_KEY: subscriptionKey,

        onFailure: (errorObj) => {
          setOpen(true)
          alert('Authentication failed')
          console.log("init failed stdAuth", errorObj);
        },
        onSuccess: (sucess) => {
          setOpen(false)
          setAuthorised(true);
          dispatch({ type: UPDATE_PRODUCT,body:'disbursement' });
          console.log("init success stdAuth", sucess);
        },
      });
    }
    if (product === "remittance") {
      GSMA_AUTHENTICATED.REMITTANCES = window.momo.initRemittancesAuth({
        username: username,
        pass: password,
        SUBSCRIPTION_KEY: subscriptionKey,

        onFailure: (errorObj) => {
          setOpen(true)
          alert('Authentication failed')
          console.log("init failed stdAuth", errorObj);
        },
        onSuccess: (sucess) => {
          setOpen(false)
          setAuthorised(true);
          dispatch({ type: UPDATE_PRODUCT,body:'remittances' });
          console.log("init success stdAuth", sucess);
        },
      });
    }
  }
};

//Standard Authentication
export const standardAuthentication = (
  username,
  password,
  callbackUrl,
  apiKey,
  onSuccess,
  onFailure
) => {
  window.gsma.initStandardAuth({
    username: username,
    pass: password,
    callbackUrl: callbackUrl,
    apiKey: apiKey,
    onSuccess: (gsmaFunctions) => {
      GSMA_AUTHENTICATED.STANDARD = gsmaFunctions;
      onSuccess();
    },
    onFailure: (res) => {
      console.log("ONFAILURE");
      return onFailure(res);
    },
  });
};
