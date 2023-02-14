import {
    TRANSFER,
    TRANSFER_STATUS,
    DEPOSIT_V1,
    DEPOSIT_V2,
    REFUND_V1,
    REFUND_V2,
    REFUND_STATUS
} from '../../const/paymentTypes'
import depositV1 from './deposit-v1'
import depositV2 from './deposit-v2'
import getAccountBalance from './getAccountBalance'
import refundV1 from './refund-v1'
import refundV2 from './refund-v2'
import refundStatus from './refundStatus'
import transfer from './Transfer'
import transferStatus from './transferStarus'
import validateAccountHolder from './validateAccountHolder'
export default {
    [TRANSFER]: transfer,
    'transferStatus': transferStatus,
    'validateAccountHolder':validateAccountHolder,
    'getbalance': getAccountBalance,
    'deposit-v1' : depositV1,
    'deposit-v2' : depositV2,
    'refund-v1' : refundV1,
    'refund-v2' : refundV2,
    'refundStatus' : refundStatus,
}