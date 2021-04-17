const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';
const imagebdd = require('./contours.json');
const effetbdd = require('./effets.json');
const fonbdd = require('./fonds.json');
const speedbdd = require('./speedlines.json');
const cerclebdd = require('./cercles.json');

client.on('ready', () => {
client.channels.cache.get('820928848580575252').send('Bot opérationnel !');
client.user.setStatus('online');
client.user.setActivity('+help');
});
client.on('guildMemberAdd', member =>{
    client.channels.cache.get('820920549022629889').send('Un nouveau membre est arrivé !, Bienvenue ' + member.user.username + ' Sur le serveur :wave: ');
    member.send('Bienvenue sur Graph\'Art, N\'oublie pas de lire le règelement !');
 
} )
client.on('guildMemberRemove', member=>{
    client.channels.cache.get('820920549022629889').send('Un membre nous a quittés ! Au revoir ' + member.user.username + ' :sob: ');
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.content == prefix + 'contour'){
      var counter = 0;
      imagebdd.forEach(file => {
          counter++
          
      })
      random = Math.floor(Math.random() * counter);
      msg.channel.send({files: [`./contours/${imagebdd[random]}`]});
      
  }
 
      
  if(msg.content == prefix + 'help'){
    "abdoullah's Bot - Commande d'aide"
    ":wave: Bonjour, je suis @abdoullah's Bot"
    "• je dispose de 22 commandes."
    ":frame_photo:  Images (6)"
   " dog, koala, nasa, oiseau, panda, renard"
    ":tada:  | Fun (3)"
    "captcha, clyde, joke"
    ":tools: | Utilitaires (4)"
    "avatar, configuration, credits, qrcode"
    ":crossed_swords: | Modération (4)"
    "clear, kick, mp, say , ban , unban , mute , unmute "
    ":earth_asia: | Autres (1)"
    "sondage"
    ":crown: | Owner (3)"
    "eval, reload, restart"
  }
  if(msg.content == prefix + 'effets'){
    var counter = 0;
    effetbdd.forEach(file => {
        counter++
        
    })
    random = Math.floor(Math.random() * counter);
    msg.channel.send({files: [`./effets/${effetbdd[random]}`]});
    msg.channel.send('Voici un effet');
    
}
if(msg.content == prefix + 'fond'){
    var counter = 0;
    fonbdd.forEach(file => {
        counter++
        
    })
    random = Math.floor(Math.random() * counter);
    msg.channel.send({files: [`./fonds/${fonbdd[random]}`]});
    
}
if(msg.content == prefix + 'speedline'){
    var counter = 0;
    speedbdd.forEach(file => {
        counter++
        
    })
    random = Math.floor(Math.random() * counter);
    msg.channel.send({files: [`./speedlines/${speedbdd[random]}`]});
    
}
if(msg.content == prefix + 'cercle'){
    var counter = 0;
    cerclebdd.forEach(file => {
        counter++
        
    })
    random = Math.floor(Math.random() * counter);
    msg.channel.send({files: [`./cercles/${cerclebdd[random]}`]});
    
}
});

client.login('ODIwOTMzODgzOTUxNTc5MTc3.YE8YQg.UpXZzbjVLQ49okIZIRReLtI3jC4');