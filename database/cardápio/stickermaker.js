const stickermaker = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Make Sticker Image
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Make Sticker Gif/Video
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Text To Sticker
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stickermaker = stickermaker
