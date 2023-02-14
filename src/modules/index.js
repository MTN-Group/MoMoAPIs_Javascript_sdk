import choosePayment from "../utils/choosePayment";
import Collections from "./Collections";
import apiKey from "./sandboxUser/apiKey";
import apiUser from "./sandboxUser/apiUser";

//collections
export const moduleWrapperWithCollection = (authHeaders) => {
  window.momo.auth = {
    Collections: choosePayment(Collections, authHeaders),
  };
};

//sandbox user provisioning
export const initUser = {
  ApiUser: apiUser,
  ApiKey: apiKey,
};
