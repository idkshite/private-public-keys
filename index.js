const crypto = require('crypto');
const {prettyLog, green, red} = require('./logger.js');
const {PRIVATE_KEY_YOU, PUBLIC_KEY_YOU} = require("./keys.js");

const topSecretPlaylist = "dancingqueen, whatsdoesthefoxsay, ymca";
prettyLog("You sign with your private key: ",topSecretPlaylist,green);

const signature = sign(PRIVATE_KEY_YOU,topSecretPlaylist);
prettyLog("creates signature: ",signature,red);

const decryptedMessage = verify(PUBLIC_KEY_YOU, signature, topSecretPlaylist);
prettyLog("Mathilda verifies message with your public key: ",decryptedMessage,green);

function sign(key, message) {
    return crypto.sign('sha256', Buffer.from(message), key).toString('base64');
}

function verify(key, signature, toBeVerfiedData) {
    const signature_buffer = Buffer.from(signature, 'base64');
    const content_buffer = Buffer.from(toBeVerfiedData);
    return crypto.verify('sha256', content_buffer, key, signature_buffer);
}