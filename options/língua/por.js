exports.wait = () => {
return '⌛ sendo processado ⌛'
}

exports.timeEnd = () => {
return 'O tempo acabou'
}

exports.succsess = () => {
return '✔️ ✔️ succsess'
}

exports.levelon = () => {
return '❬ ✔ ❭ *habilitar nivel*'
}

exports.levelnoton = () => {
return '❬ X ❭ *desabilitar nivel*'
}

exports.levelnol = () => {
return '*SEU NÍVEL AINDA* 0 °°'
}

exports.stick = () => {
return'[❗] Falhou, ocorreu um erro ao converter a imagem em um adesivo ❌'
}

exports. Iv = () => {
return '❌ de link inválido ❌'
}

exports.group = () => {
return'[❗] Este comando só pode ser usado em grupos! ❌'
}

exports.ownerG = () => {
return '[❗] Este comando só pode ser usado pelo grupo proprietário! ❌'
}

exports.ownerB = () => {
return '[❗] Este comando só pode ser usado pelo bot proprietário! ❌'
}

exports.admin = () => {
return '[❗] Este comando só pode ser usado por administradores de grupo! ❌'
}

exports. Badmin = () => {
return '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌'
}

exports.daftarB = (prefixo) => {
return '➤「 AINDA NÃO REGISTRADO 」➤➤nHello Sis !nApós ainda não se registrou, vamos registrar primeiro... nnCommand : ${prefix}register nama|umurnExample : ${prefix}register Nazwa|16'
}

exports.daftarD = () => {
return '*「 JÁ REGISTO 」*nn*você se registrou no banco de dados do bot*'
}

exports.wrongf = () => {
return '*Formato incorreto / texto em branco*'
}

exports.clears = () => {
return '*claro todo o sucesso*'
}

exports.pc = () => {
return '* 「 REGISTRO 」*nnif você não tem a mensagem. significa que você não salvou o seu número de bot *'
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
return'*「 REGISTER DATA 」*nnyou se cadastraram nos dados nn◪ *DATA* n │ n ➤➤ Nome : ${namaUser} n ➤➤ Número : wa.me/${sender.split("@@")[0]} n ➤➤ Idade: ${umurUser} n➤➤ ◗ Tempo de registro : ${time} n │ n └ ➤ NS : ${serialUser} nn ◗ NOTA : NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE :v'
}

exports.cmdnf = (Prefix, command) => {
return'commando *${prefix}${command}* não encontrado tente escrever *${prefix}menu*'
}

exports.owneresce = (pushname) => {
return'*desculpe, mas ${pushname} não o script proprietário*'
}

exports.limitend = (pushname) => {
return'*desculpe ${pushname} O limite de hoje é de até 10:00 horas*'
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : para chegar ao limite. pode passar nível para cima ou comprar o limites`
}

exports.satukos = () => {
return'*Adicionar parâmetros 1 (habilitar) ou 0 (desativar)'
}

exports.uangkau = (pushname, sender, uangkau) => {
return '◪ *SALDO*n ◗ *Nome* : ${pushname}n ◗ *Número* : ${sender.split("@")[0]}n ◗ *DINHEIRO* : ${uangkau}'
}
