//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517";
global.owner = process.env.OWNER_NUMBER || "2347086220601";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0h6Y0pOU1EvRFV3aU1xVW42OTVZYjZuYzlkSFBheStUWWpVNS9HQ0pHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFBtazN2cFl4VUFsOTFWNHBjbmJCZkU4c1plNFVXelJVcDRiNUlCeHdVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSVo4bmZvdmFCdlRmdGh6SUhZaTZnWGZRbk1LcjB2V0d4RGVLbkRGY1VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMFZYbVNhUWdibkN3S0lHYWcvTzFHT2NDU1VPV2t3UnYwYmRWZks2RFNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHbjZRYjRvc2F6MUV6K0JvRytac3dQZ1lDR0N4N1BzMS9SK2UvOWtUVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVhbm0wd0NpU3ZHNWw5WkNKcVhFWlpnZlhVdFJkRWxDZ3NLVzF0RkhPU2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtickVrUlVhU083Mk9EdzBZVk5mMjlNRHhUam1pdk9JMC9VNmM3SzhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05yb0VTZ2VpdHZqaWhoS1B4dzNDeUpXTkd1ZmpIanBOTFY2dWtza1QxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhnVXVqaGRTSkhpcXdKRGZMUGVhWjlzcUFGZ3pzeWttQXpuRlZ5MTZvUWpvUjdlSFBnNm01WVpSVUkrbWpJbXNZNE9RRXB1Q0FoQ2NpbTV2aS94Smp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJmL0VBTEl1TTBDd3o1R0tJRE9GN3p5NldvSVZlbHJPM0N2ZGN3U3ZMVWRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwODYyMjA2MDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4Q0VGNjQzNzhBNTI2NEUzNDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzg2MzQwOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA4NjIyMDYwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTU3QjNCOEM1MzZBQTkxQkI2MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3ODYzNDExfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDg2MjIwNjAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRDYyQUNCQTVCMzQxQ0U0NDA5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzc4NjM0MTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhvcUI1T1FpUlBPOF90c0hxZjZmWnciLCJwaG9uZUlkIjoiNTE3N2I5ZWYtYTMxZS00MzI5LTk2MGUtZDU2MWJjZGQyZDFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0weXhzZTR4TjNWUnN5MnlOUlN0My9wY1F2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwU2h5cUh2VEZLbUhwNzcwb0p0UlloTTF3ODQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0JMMzdNNjEiLCJtZSI6eyJpZCI6IjIzNDcwODYyMjA2MDE6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdkRwK3NHRU9UaDFyd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOekhDVDJIUGJWMW9WWFMrOFRqeFZIQUpUNkVHV1hJalJPeDNnUnV1UFF3PSIsImFjY291bnRTaWduYXR1cmUiOiJtc1pvYlpLWkdGN3NFRU00QTFvVzR4QlVmenozQjI4UWFjTVpiQ09HQlBwYzZML2dGM1NtMENqcy8vVy8vbHZsWWFtUGtlSjNXbUQyOTU4aDlub25pZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZU8xNFo4MDBaUmVjYUQ5RU9qRlFvZ2x6aEk1ckE0cmwzSWp3LzJGNzByL1dKUVArdGVuT092RHh1MmErMjZwcWlBT1JTbVFaaXEwV25tTXorb2JQaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg2MjIwNjAxOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGN4d2s5aHoyMWRhRlYwdnZFNDhWUndDVStoQmxseUkwVHNkNEVicmowTSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3ODYzNDA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlJNCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "☯︎shi ne✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎shi ne✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎shi ne✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
