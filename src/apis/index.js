import gsmaAuth from './momoAuth';

export default function fetchHandler(
    reqConfig = null,
    successHandler = null,
    errorHandler = null,
) {
    if (reqConfig) {
        // choose auth type
        let apiInstance = gsmaAuth;
        try {
            
            apiInstance(reqConfig)
                .then((res) => {
                    return successHandler
                        ? successHandler(res?.data, res?.headers, res?.status)
                        : null;
                })
                .catch((error) => {
                    return errorHandler && error.response
                        ? errorHandler(
                              error?.response?.data,
                              error?.response?.status
                          )
                        : null;
                });
        } catch (error) {
            return errorHandler && error.response
                ? errorHandler(error?.response?.data, error?.response?.status)
                : null;
        }
    }
}
