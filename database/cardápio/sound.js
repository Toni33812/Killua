const sound = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 TEXT TO SPEACH 〉*
   ╽
   ┠≽ *${prefix}tts* <language code|text>
   ┃ *Desc* : Google Text To Speach
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.sound = sound
