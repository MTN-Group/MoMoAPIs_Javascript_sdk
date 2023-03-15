
import initDisbursement from './utils/initDisbursement'
import initCollection from './utils/initCollection'
import initRemittance  from './utils/initRemittance'
import { initUser } from './modules';
window.momo = {
    initCollectionAuth: initCollection,
    initDisbursementAuth: initDisbursement,
    initRemittancesAuth: initRemittance,
    initUser: initUser,
};