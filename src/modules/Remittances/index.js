import {
    TRANSFER,
    TRANSFER_STATUS,
    VALIDATE_ACCOUNT_HOLDER_STATUS,
    GET_ACCOUNT_BALANCE,
    GET_BASIC_USER_INFO,
    REQUEST_TO_PAYDELIVERY_NOTIFICATION,
    OATH2TOKEN,
    BC_AUTHORIZE,
    GET_USERINFO_WITH_CONSENT
} from '../../const/paymentTypes'
import oath2Token from './oath2Token'
import bcAuthorize from './bcAuthorize'
import getAccountBalance from './getAccountBalance'
import getBasicUserInfo from './getBasicUserInfo'
import requesttoPayDeliveryNotification from './requesttoPayDeliveryNotification'
import transfer from './transfer'
import transferStatus from './transferStatus'
import validateAccountHolder from './validateAccountHolder'
import getUserInfoWithConsent from './getUserInfoWithConsent'
export default {
    [GET_ACCOUNT_BALANCE]: getAccountBalance,
    [GET_BASIC_USER_INFO] : getBasicUserInfo,
    [GET_USERINFO_WITH_CONSENT] : getUserInfoWithConsent,
    [BC_AUTHORIZE]: bcAuthorize,
    [OATH2TOKEN]:oath2Token,
    [TRANSFER]: transfer,
    [TRANSFER_STATUS]: transferStatus,
    [REQUEST_TO_PAYDELIVERY_NOTIFICATION] : requesttoPayDeliveryNotification,
    [VALIDATE_ACCOUNT_HOLDER_STATUS]:validateAccountHolder,
}