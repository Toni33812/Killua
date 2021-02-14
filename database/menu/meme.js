const meme = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝓑𝓞𝓣 𝓘𝓝𝓕𝓞 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
	 ┠──────────────╼
   ┷┯ *〈 MEME 〉*
   ╽
   ┠≽ *${prefix}meme*
   ┃ *Desc* : Send Random Meme[eng]
   ┠≽ *${prefix}memeindo*
   ┃ *Desc* : Send Random Meme [indo]
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.meme = meme
