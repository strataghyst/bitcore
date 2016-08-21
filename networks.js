var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fcfef7e0'),
  addressVersion: 0x26,
  privKeyVersion: 0xA6,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('922f5851a2c6b8aa1a2de53c10c5deb87839e55b2eb62b74f6bfb561a4715d6c'),
    merkle_root: hex('f8dcd6e372bf9002b89d6da07b0e6fb65b623751458de65a4497603ecb0bed4b'),
    height: 0,
    nonce: 2200095,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1009843200,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed-000.gulden.com',
    'seed-001.gulden.blue',
    'seed-002-gulden.network',
    'seed-003.gulden.com',
    'seed-004.gulden.blue'
  ],
  defaultClientPort: 9231
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fcfef700'),
  addressVersion: 0x62,
  privKeyVersion: 226,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('29f32761a420cd7652bb7f9f56c6085649ef671d4e41006e4d4d9da8f9fcf0bf'),
    merkle_root: hex('f8dcd6e372bf9002b89d6da07b0e6fb65b623751458de65a4497603ecb0bed4b'),
    height: 0,
    nonce: 397616,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399759200,
    bits: 524287999,
  },
  dnsSeeds: [
    'testseed-00.gulden.blue',
    'testseed-01.gulden.network'
  ],
  defaultClientPort: 9923
};
