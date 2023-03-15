import choosePayment from "../utils/choosePayment";
import Collections from "./Collections";
import Disbursements from "./Disbursements";
import Remittances from './Remittances'
import apiKey from "./sandboxUser/apiKey";
import apiUser from "./sandboxUser/apiUser";

//collections
export const moduleWrapperWithCollection = (authHeaders) => {
  window.momo.auth = {
    Collections: choosePayment(Collections, authHeaders),
  };
};

//disbursement
export const moduleWrapperWithDisbursement = (authHeaders) => {
  window.momo.auth = {
    Disbursement: choosePayment(Disbursements, authHeaders),
  };
};

//remittances
export const moduleWrapperWithRemittances = (authHeaders) => {
  window.momo.auth = {
    Remittances: choosePayment(Remittances, authHeaders),
  };
};

//sandbox user provisioning
export const initUser = {
  ApiUser: apiUser,
  ApiKey: apiKey,
};
