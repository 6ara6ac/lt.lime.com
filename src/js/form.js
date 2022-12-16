var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-AUTH-TOKEN", "baa0045b-fd5d-4e62-a0b7-7337ff7d3d55");

const submit =  document.querySelector ('.modal__button');

submit.addEventListener ('click', onClickForm);

function onClickForm () {
  

    console.log (document.getElementById("user-tel").value);
    console.log (document.getElementById("userEmail").value);
	
var raw = JSON.stringify({
"hash":"103669A9-C10B-4103-9079-77A2D074D161",
"interest":{
  "account_type":1,
  "campaign_type":2},
"identification":{
  "email": document.getElementById("userEmail").value,
  "phone": document.getElementById("user-tel").value,
  "external_id":0},
"utm":{
  "utm_medium":"utm_medium",
  "utm_source":"mt5.lime.co",
  "utm_campaign":"MT5 Lime",
  "utm_content":"utm_content",
  "utm_term":"utm_term",
  "xtm_medium":"xtm_medium",
  "xtm_source":"xtm_source",
  "xtm_campaign":"xtm_campaign",
  "xtm_content":"xtm_content",
  "xtm_term":"xtm_term"},
"url": "https://mt5.lime.co/",
"date":Math.floor(Date.now()/1000),
"ip":"",
"user-agent":window.navigator.userAgent,
"agent_id":"",
"personal":{
  "name":"",
  "lastname":"",
  "middlename":"",
  "is_male":true,
  "language":"en"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://crm.just2trade.online/_/api/interest/new", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));

event.preventDefault();
  window.location = "https://open.lime.co/register?package=3";
  gtag('event', 'open_account');
}