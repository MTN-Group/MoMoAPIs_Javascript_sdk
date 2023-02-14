import getAccountBalance from "./getAccountBalance";
import getBasicUserinfo from "./getBasicUserinfo";
import requestToPayTransactionStatus from "./requestToPayTransactionStatus";
import requestToPay from "./requestToPay";
import requestToPayDeliveryNotification from "./requestToPayDeliveryNotification";
import requestToWithdrawV1 from "./requestToWithdrawV1";
import requestToWithdrawTransactionStatus from "./requestToWithdrawTransactionStatus";
import requestToWithdrawV2 from "./requestToWithdrawV2";
import validateAccountHolder from "./validateAccountHolder";
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
} from "../../const/paymentTypes";
export default {
  [REQUEST_TO_PAY_TRANSACTION]: requestToPay,
  [REQUEST_TO_PAY_TRANSACTION_STATUS]: requestToPayTransactionStatus,
  [VALIDATE_ACCOUNT_HOLDER_STATUS]: validateAccountHolder,
  [GET_ACCOUNT_BALANCE]: getAccountBalance,
  [REQUEST_TO_WITHDRAW_V1]: requestToWithdrawV1,
  [REQUEST_TO_WITHDRAW_V2]: requestToWithdrawV2,
  [GET_BASIC_USER_INFO]: getBasicUserinfo,
  [REQUEST_TO_WITHDRAW_TRANSACTIONSTATUS]: requestToWithdrawTransactionStatus,
  [REQUEST_TO_PAYDELIVERY_NOTIFICATION]: requestToPayDeliveryNotification,
};
