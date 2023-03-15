import {
    TRANSFER,
    TRANSFER_STATUS,
    DEPOSIT_V1,
    DEPOSIT_V2,
    REFUND_V1,
    REFUND_V2,
    REFUND_STATUS,
    VALIDATE_ACCOUNT_HOLDER_STATUS,
    GET_ACCOUNT_BALANCE,
    GET_BASIC_USER_INFO,
    REQUEST_TO_PAYDELIVERY_NOTIFICATION,
    OATH2TOKEN,
    BC_AUTHORIZE,
    DEPOSIT_STATUS,
    GET_USERINFO_WITH_CONSENT
} from '../../const/paymentTypes'
import bcAuthorize from './bcAuthorize'
import depositV1 from './deposit-v1'
import depositV2 from './deposit-v2'
import depositStatus from './depositStatus'
import getAccountBalance from './getAccountBalance'
import getBasicUserInfo from './getbasicuserinfo'
import getUserInfoWithConsent from './getUserInfoWithConsent'
import oath2Token from './oath2Token'
import refundV1 from './refund-v1'
import refundV2 from './refund-v2'
import refundStatus from './refundStatus'
import RequesttoPayDeliveryNotification from './requesttoPayDeliveryNotification'
import transfer from './Transfer'
import transferStatus from './transferStatus'
import validateAccountHolder from './validateAccountHolder'
export default {
    [BC_AUTHORIZE]: bcAuthorize,
    [OATH2TOKEN]: oath2Token,
    [DEPOSIT_V1] : depositV1,
    [DEPOSIT_V2] : depositV2,
    [DEPOSIT_STATUS] : depositStatus,
    [GET_ACCOUNT_BALANCE]: getAccountBalance,
    [GET_BASIC_USER_INFO]: getBasicUserInfo,
    [GET_USERINFO_WITH_CONSENT]: getUserInfoWithConsent,
    [TRANSFER]: transfer,
    [TRANSFER_STATUS]: transferStatus,
    [REFUND_V1] : refundV1,
    [REFUND_V2] : refundV2,
    [REFUND_STATUS] : refundStatus,
    [REQUEST_TO_PAYDELIVERY_NOTIFICATION]: RequesttoPayDeliveryNotification,
    [VALIDATE_ACCOUNT_HOLDER_STATUS]:validateAccountHolder,
}