const checkRequiredKeys = (allObjs = null, keys = [], onError = null) => {
    if (keys.length > 0) {
        let errors = [];
        keys.forEach((k) => {
            if (!allObjs.hasOwnProperty(k) || allObjs[k]==='') {
                errors.push({ key: k, value: '' });
            }
        });
        if (errors.length > 0) {
            if (onError) {
                onError(
                    {
                        errorCategory: 'validation',
                        errorCode: 'MandatoryValueNotSupplied',
                        errorDescription:
                            'A mandatory value has not been provided in the header and/or JSON body.',
                        errorParameters: errors,
                    },
                    400
                );
            }
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
};
export default checkRequiredKeys;
