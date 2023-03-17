import choosePayment from "../utils/choosePayment";
import Collections from "./Collections";
import Disbursements from "./Disbursements";
import Remittances from "./Remittances"
import createApiKey from "./sandboxUser/createApiKey";
import createUser from "./sandboxUser/createUser";
import getUserDetails from "./sandboxUser/getUserDetails"

export const moduleWrapperWithCollection = (authHeaders) => {
  window.momo.auth = {
    Collections: choosePayment(Collections, authHeaders),
  };
};

export const moduleWrapperWithDisbursement = (authHeaders) => {
  window.momo.auth = {
    Disbursement: choosePayment(Disbursements, authHeaders),
  };
};

export const moduleWrapperWithRemittances = (authHeaders) => {
  window.momo.auth = {
    Remittances: choosePayment(Remittances, authHeaders),
  };
};

export const initUser = {
  createUser: createUser,
  createApiKey:  createApiKey,
  getUserDetails: getUserDetails,
};
