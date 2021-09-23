const crypto = require('crypto');
console.log(crypto.getCurves());
const alice= crypto.createECDH('secp256k1');
alice.generateKeys();
const Bob= crypto.createECDH('secp256k1');
Bob.generateKeys();
const alicepublicKeyBase64 = alice.getPublicKey().toString('base64')
const BobpublicKeyBase64 = alice.getPublicKey().toString('base64')

const alicesharedKey = alice.computeSecret(BobpublicKeyBase64,'base64','hex')
const BobsharedKey = Bob.computeSecret(BobpublicKeyBase64,'base64','hex')
console.log(alicesharedKey);
console.log(BobsharedKey);
