const fun = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Send a Random Slave of Love
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Send a Random Truth
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Send a Random Dare
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* : Saying:v
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
