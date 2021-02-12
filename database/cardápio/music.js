const music = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝓑𝓞𝓣 𝓘𝓝𝓕𝓞 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
   ┠──────────────╼
   ┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Play Music Audio
   ┠──────────────╼
   ┠≽ *${prefix}joox* <music_name>
   ┃ *Desc* : Play Music Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Search Music Lyrics
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Search Chord Music Lyrics
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.music = music
