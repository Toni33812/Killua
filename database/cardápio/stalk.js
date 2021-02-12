const stalk = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 STALK 〉*
   ╽
   ┠≽ *${prefix}tiktokstalk* <username>
   ┃ *Desc* : Get TikTok Information User
   ┠≽ *${prefix}igstalk* <username>
   ┃ *Desc* : Get Instagram Information User
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stalk = stalk
