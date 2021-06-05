const crypto = require('crypto');
const {prettyLog, green, red} = require('./logger.js');
const {PUBLIC_KEY_MATHILDA, PRIVATE_KEY_MATHILDA} = require("./keys.js");

const topSecretPlaylist = "dancingqueen, whatsdoesthefoxsay, ymca";
prettyLog("You encrypt with Mathildas public key: ",topSecretPlaylist,green);

const encryptedMessage = encrypt(PUBLIC_KEY_MATHILDA,topSecretPlaylist);
prettyLog("encrypted: ",encryptedMessage,red);

const decryptedMessage = decrypt(PRIVATE_KEY_MATHILDA, encryptedMessage);
prettyLog("Mathila decrypts with her private key: ",decryptedMessage,green);


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