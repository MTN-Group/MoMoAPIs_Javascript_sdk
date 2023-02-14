
import initCollection from './utils/initCollection'
import initDisbursement from './utils/initDisbursement'
import { initUser } from './modules';
window.momo = {
    initCollectionAuth: initCollection,
    initDisbursementAuth: initDisbursement,
    initUser: initUser,
};