const education = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 EDUCATION 〉*
   ╽
   ┠≽ *${prefix}wiki* <query>
   ┃ *Desc* : Search According to Wikipedia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <query>
   ┃ *Desc* : Search According to Wikipedia [english]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Write a Text on Book
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Send a Random Quotes
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Send a Random Quotes2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <dream>
   ┃ *Desc* : Send a Dream Interpretation
   ┠──────────────╼
   ┠≽ *${prefix}translate* <language_code>|<text>
   ┃ *Desc* : Translating a word
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpret Names
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.education = education
