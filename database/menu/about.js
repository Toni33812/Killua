const about = (prefix, botName, ownerName) => {
        return `
┏ ✹〈 ${botName} 〉✹
╿
┷┯ ✹〈 𝓑𝓞𝓣 𝓘𝓝𝓕𝓞 〉✹
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠──────────────╼
   ┷┯ ✹〈 𝓢𝓞𝓑𝓡𝓔 〉✹
   ╽
   ┠≽ *${prefix}info* (erro)
   ┃ *Desc* : Mostrar detalhes do bot
   ┠──────────────╼
   ┠≽ *${prefix}blocklist*
   ┃ *Desc* : Mostrar Usuário Bloqueado
   ┠──────────────╼
   ┠≽ *${prefix}chatlist* (erro)
   ┃ *Desc* : Mostrar todos os usuários de bate-papo
   ┠──────────────╼
   ┠≽ *${prefix}ping*
   ┃ *Desc* : Mostrar conexão velocidade do bot
   ┠──────────────╼
   ┠≽ *${prefix}relatório de bugs* <text>
   ┃ *Desc* : Reportar bug ao proprietário bot `
}
exports.about = about
