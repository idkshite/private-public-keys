const crypto = require('crypto');
const {prettyLog, green, red} = require('./logger.js');

const {PUBLIC_KEY_PAVEL, PRIVATE_KEY_PAVEL} = require("./keys.js");
const topSecretPlaylist = "dancingqueen, whatsdoesthefoxsay, ymca";

prettyLog("to be encrypted: ",topSecretPlaylist,green);
const encryptedMessage = encrypt(PUBLIC_KEY_PAVEL,topSecretPlaylist);
prettyLog("encrypted: ",encryptedMessage,red);
const decryptedMessage = decrypt(PRIVATE_KEY_PAVEL, encryptedMessage);
prettyLog("decrypted message: ",decryptedMessage,green);


function encrypt(key, message) {
    const buffer = Buffer.from(message, 'utf8');
    const encrypted = crypto.publicEncrypt(key, buffer);
    return encrypted.toString('base64');
}

function decrypt(key, cypher) {
    const buffer = Buffer.from(cypher, 'base64');
    const message = crypto.privateDecrypt(key, buffer).toString("utf8");
    return message;
}