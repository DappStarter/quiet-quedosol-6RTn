require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strike rival night mistake inflict kiwi army genuine'; 
let testAccounts = [
"0x645a0a4a0d8158f04576f4560e6f772ed1218daa70997d25cd0f9055fadd62fb",
"0x384ad751ba87c86392f7bd82cb289e7486dbad45ee842b07bacd0537bb4fab63",
"0x76cf8ad8e960c3899b4e7a721a94c8c8c935d9b4f201cafc39e2351fd269944d",
"0xbd833911f884aecdadc83bfe7b9fb6034efdb2566d766a4c58c3820965bb1c3b",
"0xeefa9775acc66cb926fdb748f26fe1dd03fd0f6aca7d7b8b8ca857cc6e22b76f",
"0xe688b8944b7609f98fd766606e8b3ca6b06756b9e9bc0ad4463f4fa10c3ac652",
"0xfc1b8330aac8fc9ba391392ee34f939b7f56bc84d99b9cb82e548bb5e8171d10",
"0x2b7813c055afee84c2b1aff8c697bccb117d1674ebe7069e60552a77dfe43b5d",
"0xf3daa6c37db4ebe5791dfcce644a9f631504898474c69739a73a6ce28246f4b5",
"0x7353b82244733ff85e75eddc8c59f778f0a4347e292ad376cd2f218edd575ef9"
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


