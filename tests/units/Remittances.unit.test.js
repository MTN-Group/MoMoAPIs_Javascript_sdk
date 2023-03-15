import choosePayment from '../../src/utils/choosePayment';
import Remittances from '../../src/modules/Remittances';

const authHeaderProps = {
    SUBSCRIPTION_KEY: 'f4f2da18c0db4033b897644dc8ef1fec',
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZC…smpEKzEmTAPxWFqpHLplpKPWOxSEOJwZGx2fLVShhLzsMaHAw',
    callbackUrl: null
}
test('Get Account Balance', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'getAccountBalance',

        onSuccess: (data, headers, status) => {
            try {
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }

        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('ValidateConsumerIdentity', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'getbasicuserinfo',
        accountHolderMSISDN: 'https://end13wxm5t7fgd6.m.pipedream.net/',

        onSuccess: (data, headers, status) => {
            try {
                expect(accountHolderMSISDN).tobe(!null);
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }

        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('Remittance request to pay transaction', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'requesttoPayDeliveryNotification',
        referenceId: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        data: {
            amount: "5.0",
            currency: "EUR",
            externalId: "6353636",
            payer: {
                partyIdType: "MSISDN",
                partyId: "0248888736"
            },
        },

        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        referenceId: expect.any(String),
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'callback',
                    })
                );
                expect(status).toBe(202);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('Transfer', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'Transfer',
        onSuccess: (data, headers, status) => {
            try {
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }

        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('transferStatus', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'Transfer',
        referenceId: 'bba3b721-e27f-4771-a5da-d538e32d4af0',

        onSuccess: (data, headers, status) => {
            try {
                expect(referenceId).toBe(!null)
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }

        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('ValidateAccountHolderStatus', (done) => {
    choosePayment(authHeaderProps,Remittances)({
        type: 'validateAccountHolder',
        data: {
            accountHolderIdType: "MSISDN",
            accountHolderId: "0248888736",
        },
        onSuccess: (data, headers, status) => {
            try {
                expect(data.accountHolderIdType).toBe(!null)
                expect(data.accountHolderId).toBe(!null)
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }

        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});