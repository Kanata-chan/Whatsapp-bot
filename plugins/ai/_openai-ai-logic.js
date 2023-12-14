import fetch from 'node-fetch'
import util from 'util'
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah LPBotz-Md Bot Whatsapp Yang Dikembangkan Oleh Deff,Saya Bernama LPbotz-Md,Saya Dibuat Oleh Deff Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit wa.me/6283825144098'
await m.reply(wait)
  var js = await fetch(API('lann', '/api/search/openai-logic', { text: `${text}`, logic: `${logic}`, apikey: lann }))
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(util.format(json))
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2'];
handler.tags = ['info'];
handler.premium = false

export default handler