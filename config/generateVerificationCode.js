const crypto = require('crypto');

exports.generateVerificationCode = () => {
    let code = crypto.randomBytes(3).toString('hex');
    return `${code}`.toUpperCase();
}