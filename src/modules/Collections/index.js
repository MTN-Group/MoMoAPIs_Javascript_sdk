import {
  REQUEST_TO_PAY_TRANSACTION,
  REQUEST_TO_WITHDRAW_V1,
  REQUEST_TO_WITHDRAW_V2,
  GET_BASIC_USER_INFO,
  REQUEST_TO_WITHDRAW_TRANSACTIONSTATUS,
  REQUEST_TO_PAYDELIVERY_NOTIFICATION,
  REQUEST_TO_PAY_TRANSACTION_STATUS,
  VALIDATE_ACCOUNT_HOLDER_STATUS,
  GET_ACCOUNT_BALANCE,
  BC_AUTHORIZE,
  OATH2TOKEN,
  GET_USERINFO_WITH_CONSENT,
} from "../../const/paymentTypes";
import bcAuthorize from "./bcAuthorize";
import oath2Token from "./oath2Token";
import getAccountBalance from "./getAccountBalance";
import getBasicUserinfo from "./getBasicUserinfo";
import requestToPay from "./requestToPay";
import requestToPayTransactionStatus from "./requestToPayTransactionStatus";
import requestToPayDeliveryNotification from "./requestToPayDeliveryNotification";
import requestToWithdrawV1 from "./requestToWithdrawV1";
import requestToWithdrawV2 from "./requestToWithdrawV2";
import requestToWithdrawTransactionStatus from "./requestToWithdrawTransactionStatus";
import validateAccountHolder from "./validateAccountHolder";
import getUserInfoWithConsent from "./getUserInfoWithConsent";
export default {
  [BC_AUTHORIZE]: bcAuthorize,
  [OATH2TOKEN]: oath2Token,
  [GET_ACCOUNT_BALANCE]: getAccountBalance,
  [GET_BASIC_USER_INFO]: getBasicUserinfo,
  [GET_USERINFO_WITH_CONSENT]: getUserInfoWithConsent,
  [REQUEST_TO_PAY_TRANSACTION]: requestToPay,
  [REQUEST_TO_PAY_TRANSACTION_STATUS]: requestToPayTransactionStatus,
  [REQUEST_TO_PAYDELIVERY_NOTIFICATION]: requestToPayDeliveryNotification,
  [REQUEST_TO_WITHDRAW_TRANSACTIONSTATUS]: requestToWithdrawTransactionStatus,
  [REQUEST_TO_WITHDRAW_V1]: requestToWithdrawV1,
  [REQUEST_TO_WITHDRAW_V2]: requestToWithdrawV2,
  [VALIDATE_ACCOUNT_HOLDER_STATUS]: validateAccountHolder,
};
