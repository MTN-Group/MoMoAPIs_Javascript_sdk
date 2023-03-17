import chooseAuthType from './chooseAuthType';

test('Check basic auth without passing any config values', () => {
    const basicAuthCallbackMock = jest.fn((e) => { });
    chooseAuthType(null, null, null, basicAuthCallbackMock);

    expect(basicAuthCallbackMock).toHaveBeenCalledTimes(1);
    expect(basicAuthCallbackMock.mock.calls[0][0]).toEqual({});
});
