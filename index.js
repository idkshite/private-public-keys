const crypto = require('crypto');

const {PUBLIC_KEY_PAVEL, PRIVATE_KEY_PAVEL} = require("./keys.js");
const topSecretPlaylist = "dancingqueen, whatsdoesthefoxsay, ymca";
console.log("-------------")
console.log("to be encrypted: ", topSecretPlaylist);
console.log("-------------")
console.log("\n");
console.log("-------------")
const encryptedMessage = encrypt(PUBLIC_KEY_PAVEL,topSecretPlaylist);
console.log("encrypted: ",encryptedMessage);
console.log("-------------")
console.log("\n");
const decryptedMessage = decrypt(PRIVATE_KEY_PAVEL, encryptedMessage);
console.log("-------------")
console.log("decrypted: ", decryptedMessage.toString("utf8"));
console.log("-------------")

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