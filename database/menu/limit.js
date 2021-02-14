const limit = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈𝓑𝓞𝓣 𝓘𝓝𝓕𝓞 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ┠──────────────╼
   ┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Check Your Limit
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Your Money
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Buy Limit
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Kamu bisa membeli limit dengan cara mengumpulkan uang terlebih dahulu. Cek uang kamu dengan cara mengetikan perintah *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Kamu bisa mengumpulkan uang dengan cara chat dengan teman segroup atau bisa dengan naik level.`
}
exports.limit = limit
