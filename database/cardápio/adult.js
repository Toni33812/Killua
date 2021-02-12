const adult = (prefix, botName, ownerName) => {
        return `
┏ ✹〈 ${botName} 〉✹
╿
┷┯ ✹〈 𝓑𝓞𝓣 𝓘𝓝𝓕𝓞 〉✹
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠──────────────╼
   ┷┯ ✹〈 18+ 〉✹
    ╽
    ┠≽ *${prefix}randomhentai*
    ┃ *Desc* : Enviando Imagem Aleatória de Hentai
    ┠──────────────╼
    ┠≽ *${prefix}nsfwtrap*
    ┃ *Desc* : Enviando imagem aleatória de armadilha NSFW (nsfw necessário)
    ┠──────────────╼
    ┠≽ *${prefix}nsfwneko*
    ┃ *Desc* : Enviando Imagem Aleatória NSFW Neko (nsfw necessário)
    ╿ *${ownerName}*,
    ╰╼≽ *Desenvolvedor ©  ${botName} `
}
exports.adult = adult
