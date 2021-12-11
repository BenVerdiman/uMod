const Discord = require("discord.js");
const client = new Discord.Client();
const ifmsg = "No";
const msg = "No";
const { token } = require('./config.json');



client.once("ready", () => {
	console.log('Hello');
});

client.on("message", message => {
  function sendif(ifmsg, msg){
  if(message.content == ifmsg){
    message.channel.send(msg);
  }
};
  console.log(message.content);
  if(message.content == "uban"){
    message.channel.send("You sus!");
  }
  if(message.content == "ukick"){
    message.channel.send("Kick ya!");
  }
  sendif("umod", "U the mod!");
  
  if(message.author.tag == 'LencherOfficial#0001'){
    sendif("uhecker", "no u");
  }
  
});
client.login(token);
