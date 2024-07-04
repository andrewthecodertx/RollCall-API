const crypto = require('crypto');

exports.generateVerificationCode = () => {
    let code = crypto.randomBytes(4).toString('hex');
    return `${code}`;
}