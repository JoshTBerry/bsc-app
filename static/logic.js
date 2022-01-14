
const serverUrl="https://cmlolzb99jso.usemoralis.com:2053/server"
const appId="rhwFLCK8AY1PwxO0ksZ9iPqYjK96pCCNwDShSpY7";
const serverUser = "5YjfUL48T9";
const cliApiKey = "HfzZpztmrI1Z9il";

Moralis.start({ serverUrl, appId });

const chainToQuery = 'bsc testnet'

async function login(){

    Moralis.Web3.authenticate().then(function (user) {
        user.set("name", document.getElementById("username").value);
        user.set("email", document.getElementById("email").value);
        user.save();
        deactivateControls();
    });
}

function deactivateControls(){
    document.getElementById('login').style.display = 'none';
    document.getElementById('username').style.display = 'none';
    document.getElementById('email').style.display = 'none';

    document.getElementById("welcome").style.display = 'block';
}

async function retrieveBalance() {
    Moralis.Web3API.token.getNFTTrades("bsc testnet").then(function (trader) {
        document.getElementById("nftTrades").value = trader;
    });
}