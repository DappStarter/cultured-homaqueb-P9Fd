require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember assume hope argue front ski'; 
let testAccounts = [
"0x91f44f674c6505cd4c60b194992a3982975dafeb38e2c41a44d961cca1450720",
"0x97a0a2e3613a3193276328d342b8271667f7b10dd160c0a107a3c5e1e280601c",
"0xaddf2e2a98658f9a339bb539e3a15f0a1d8780c5486fe6fd8b1f85d3e6c82ef5",
"0x33e0acb0e34f2d0a267b0e14d16163ea0d029ab29d89999e69f446c122bd9a07",
"0x28bc6780145c122384987f3ef58e8d24ed88af50bdeb2fdd27cb2657b2acffb6",
"0x7bca2d928d547bc6335c715b02e0ac721720a61773107a2b38ec4072921d656f",
"0xba99d20240010fe1226612dda414e9fba39b427b3f470265ec1d3459cdc551ec",
"0xe2a8f389e55db03539252a2a76da7ea853f122a4a131a36489716514c67a41d5",
"0x9c6ebeaa961c4ffbaaa8facf6dae854a27d67ddb705680729a92c81fe797a446",
"0xf728a147b6936d9a7c2882272657fa90873305a0875d35fc57a6d1c3a66acfb1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


