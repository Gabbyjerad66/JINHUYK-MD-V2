/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
   ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＪＩＮＨＵＹＫ-Ｖ２ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＫＡＮＧ ＪＩＮＨＵＹＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＳＡＳＡＫＩ ＣＯＭＰＡＧＮＩＥ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/KangJinhuyk/JINHUYK-MD-V2

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/




const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: 'JINHUYK-MD-V2 DOWNLOAD📂 DOG PICS\n\n\n> *KANG JINHUYK*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Dog Image🤕: ${e.message}`);
    }
});
