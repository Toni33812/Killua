const search = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Send Name Anime & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Search YouTube Video
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Search Trending Twitter Video
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.search = search
