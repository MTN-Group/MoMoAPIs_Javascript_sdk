
import initCollection from './utils/initCollection'
import initDisbursement from './utils/initDisbursement'
import initRemittances from './utils/initRemittances'
import { initUser } from './modules';
window.momo = {
    initCollectionAuth: initCollection,
    initDisbursementAuth: initDisbursement,
    initRemittances: initRemittances,
    initUser: initUser,
};