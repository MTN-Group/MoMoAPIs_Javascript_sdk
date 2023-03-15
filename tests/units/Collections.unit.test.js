import Collections from '../../src/modules/Collections';
import choosePayment from '../../src/utils/choosePayment';
const authHeaderProps = {
    SUBSCRIPTION_KEY: 'f4f2da18c0db4033b897644dc8ef1fec',
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZC…smpEKzEmTAPxWFqpHLplpKPWOxSEOJwZGx2fLVShhLzsMaHAw',
    callbackUrl: null
}
test('Collection request to pay transaction', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'GetRequestToPayTransactionStatus',
        referenceId: 'bba3b721-e27f-4771-a5da-d538e32d4af0',
        onSuccess: (headers, status) => {
            try {
                expect.toEqual(
                    expect.objectContaining({
                        status: 'SUCCESSFUL',
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
test('Get Account Balance', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'getAccountBalance',
        accountId: [
            {
                availableBalance: "5",
                currency: "EUR"
            }
        ],
        onSuccess: (data, headers, status) => {
            try {
                expect(accountId.availableBalance).toBe(!null)
                expect(accountId.currency).toBe(!null)
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
    choosePayment(authHeaderProps, Collections)({
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
test('CreateRequestWithdrawalTransaction-V1', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'RequestToWithdraw-V1',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        data: {
            payeeNote: "qwerty",
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
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'callbackUrl'
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
})
test('CreateRequestWithdrawalTransaction-V2', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'requestToWithdrawv2',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        data: {
            payeeNote: "qwerty",
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
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'callbackUrl',
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
})
test('ValidateConsumerIdentity', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'getbasicuserinfo',
        accountHolderMSISDN: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        onSuccess: (headers, status) => {
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
test('Collection request to pay', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'requestToPay',
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
test('Collection request to pay transaction', (done) => {
    choosePayment(authHeaderProps, Collections)({
        type: 'requesttoPayDeliveryNotification',
        referenceId: 'bba3b721-e27f-4771-a5da-d538e32d4af0',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        data: {
            "notificationMessage": "string"
        },

        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        referenceId: expect.any(String),
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'polling',
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