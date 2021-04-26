const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const jano = new Discord.Client();
const prefix = "C!";


jano.login("ODIwNDA0MDExODYwNzU0NDMy.YE0qxg.J8IkBgt6qk0uDrK23V54cUdVML0");
jano.on("ready", async () => {
  console.log(`Logged in as ${jano.user.username}!`);
  jano.user.setStatus("ONLINE");
  jano.user.setActivity(`${prefix}help Davos Up`, { type: "WATCHING" });
  jano.guilds.cache.forEach(g => {
    if (g.member(jano.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

jano.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setThumbnail("https://media.tenor.com/images/85500641e177bccfc805cac8a2805e3f/tenor.gif")
.setAuthor("Prefix [ C! ]","https://i.imgur.com/Y9N3OCy.gif?noredirect")
.setDescription(` 
**
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 [change channel]
𝐋𝐞𝐟𝐭 [change channel]
**
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=820404011860754432&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/583jtcdb5b)**
 `)
    
    .setFooter(` System bot ✨ | Coded by , Davos`, jano.user.avatarURL)
    .setURL("https://discord.gg/583jtcdb5b")
      
    message.channel.send(embed);
      message.react("");
  }
});
//////////////

/////////// code welcome
jano.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・welcome"
  );
  let jano = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `**A new member just arrived**`
    )
    .setColor("RANDOM")
    .setThumbnail(jano)
    .addField(
      "| **name** : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| **Welcome**",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| **User** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "| **Your are the member**",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://cdn.discordapp.com/attachments/834862110877155328/835302133355118602/image0.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
jano.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "𝐋𝐞𝐟𝐭"
  );
  let jano = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `left`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/834862110877155328/835302133355118602/image0.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(jano)
    .addField("👥|𝐍𝐀𝐌𝐄:", `${member}`)
    .addField("├baxerche mle shkaw┤", `!`)
    .addField("✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶;(",   "naya aw servera<a:")
    .addField(
      "⳺☟مــیــمــبەرەکــان ماوە⳻",
      `${member.guild.memberCount}` + " ڪــەس"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
jano.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      "| name : ",
      `${member}
    _ _ _ _ _ _ _ _ _`
    )
    .addField(
      "| Welcome",
      `Welcome to the server, ${member}
    _ _ _ _ _ _ _ _ _`
    )
    .addField(
      " | User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "| Your are the member",
      `${member.guild.memberCount}
      _ _ _ _ _ _ _ _ _`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://cdn.discordapp.com/attachments/834862110877155328/835302133355118602/image0.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////
