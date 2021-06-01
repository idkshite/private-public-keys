const crypto = require('crypto');

const encryptedMessage = encrypt(PUBLIC_KEY_PAVEL, "hello");
const decryptedMessage = decrypt(PRIVATE_KEY_PAVEL, encryptedMessage);
console.log(decryptedMessage.toString("utf8"));
res.send(decryptedMessage.toString("utf8"));

function encrypt(key, message) {
    const buffer = Buffer.from(message, 'utf8');
    const encrypted = crypto.publicEncrypt(key, buffer);
    return encrypted.toString('base64');
}

function decrypt(key, cypher) {
    const buffer = Buffer.from(cypher, 'base64');
    const message = crypto.privateDecrypt(key, buffer);
    return message;
}