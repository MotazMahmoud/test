const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);  
});

client.on('ready', async() => {
var server = "596050841463423005"; // ايدي السررفر
var channel = "596050841463423008";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(',Hi Btl And Meto Spam Anta men ??? ihihihihihihihidjfaagshfasfgasfhgjasgfhgasfgshagfhgasdfafsfghasghfhihihihihihihihihihihihihihihihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiasdghgasfgasgfvbnasvbfasvgfhgashgfhgashfgasghasjgskanfjnaskgnjhasgfhhaskfjjkasgshajfhnklsamlcvnjhasvbfgasgfhjaskkflsjakghsjkahoithuiashjfnasklnfgjkashgjasg,mas,gnjkasbhfghaskgjklasjhghauisghjakshgjhdsajkghakgjkljdklasghjkahsgkaskghsiohgioahgjklhasjhgjkasghghghghghghghghghghghghghghghghghghghi  ,
, Hi Btl And Meto Spam Anta men ??? ihihihihihihihid')
    },305);
})

client.login(process.env.TOKEN);



 
