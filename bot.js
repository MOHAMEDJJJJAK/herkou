const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`مرنا كيوت`,"http://twitch.tv/مرنا كيوت")
client.user.setStatus("dnd")
});

client.login('NTk3MTUxNDI2MTc4ODQyNjM1.XSEZPw.U1AhhFpP1WC-1dMj67AqUdDuVBw');// لا تغير فيها شيء
