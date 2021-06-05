const crypto = require('crypto');
const {prettyLog, green, red} = require('./logger.js');
const {PUBLIC_KEY_PAVEL, PRIVATE_KEY_PAVEL} = require("./keys.js");

const topSecretPlaylist = "dancingqueen, whatsdoesthefoxsay, ymca";
prettyLog("to be signed: ",topSecretPlaylist,green);

const signature = sign(PRIVATE_KEY_PAVEL,topSecretPlaylist);
prettyLog("signature: ",signature,red);

const decryptedMessage = verify(PUBLIC_KEY_PAVEL, signature, topSecretPlaylist);
prettyLog("is same message: ",decryptedMessage,green);

export function sign(key, message) {
    return crypto.sign('sha256', Buffer.from(message), key).toString('base64');
}

export function verify(key, signature, toBeVerfiedData) {
    const signature_buffer = Buffer.from(signature, 'base64');
    const content_buffer = Buffer.from(toBeVerfiedData);
    return crypto.verify('sha256', content_buffer, key, signature_buffer);
}

module.exports = {
    sign,
    verify
}