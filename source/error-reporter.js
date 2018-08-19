const get = require("lodash/get");
function defaultErrorReporter(language) {
    language = language || 'en';

    var errorMessages = languages[language];

    return function (error, data, schema) {

        var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
        if (typeof messageTemplate !== 'string') {
            return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
        }
        const messageParams = Object.assign({}, error.params, {
            data,
            schema,
            form: schema.form || {}
        });
        let prefix;
        if (schema.title) {
            prefix = schema.title + ': ';
        } else {
            prefix = '';
        }
        return prefix + messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
            var subValue = get(messageParams, varName);
            if (typeof subValue === 'string' || typeof subValue === 'number') {
                return subValue;
            } else {
                return whole;
            }
        });
    };
}
