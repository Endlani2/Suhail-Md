const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_01_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqeDV2eW9TODBnak04L2xDTUFrTDROVHVMZFlQMUp4b3hteEtDUDc1RWNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NDU0MzIxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkU0QzAxMDlBQjlENzE3NTlERDFDNjRDRjAyMEM1RkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDU0MTEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg0NTQzMjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Mjk2Qjg1OTU1MEE0MDg4RjMyRkI2NEMxN0Y1MjBEMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwNTQxMTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWTcxZndEZmdUZ2lITVZxTjhDU0NnUVwiLFxuICBcInBob25lSWRcIjogXCJhNTZmNTRkZC04MWM5LTQ3NjItYmY4Ny1jMGI2Zjg1YWY0ZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxNDksXG4gICAgICAxODMsXG4gICAgICAxMjksXG4gICAgICAzMixcbiAgICAgIDE3MixcbiAgICAgIDE5OCxcbiAgICAgIDE2LFxuICAgICAgMTcwLFxuICAgICAgNjAsXG4gICAgICA0NyxcbiAgICAgIDEzLFxuICAgICAgMjA2LFxuICAgICAgMTM4LFxuICAgICAgMTkxLFxuICAgICAgMTc5LFxuICAgICAgMjQ4LFxuICAgICAgMjEsXG4gICAgICAxNzMsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICA5OCxcbiAgICAgIDI5LFxuICAgICAgMTQ2LFxuICAgICAgMTkxLFxuICAgICAgNTcsXG4gICAgICA2MixcbiAgICAgIDE2MSxcbiAgICAgIDU5LFxuICAgICAgMTE0LFxuICAgICAgMjEsXG4gICAgICA0NCxcbiAgICAgIDE4MyxcbiAgICAgIDYzLFxuICAgICAgMjE3LFxuICAgICAgMjA2LFxuICAgICAgMjUxLFxuICAgICAgMTc4LFxuICAgICAgMCxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSUk5WUkJKSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg0NTQzMjEzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYXJkXCIsXG4gICAgXCJsaWRcIjogXCIxOTA4ODU5NjI3MzE2NzE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdUd6UEFERUpiZTJyTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImY3MW5Dd2VkaUhWdnZuZXYxdFdQVXVwVml4ckNzeXhCQktqdmo0L0pzakU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ2dKQjVJVEladzFwMWhRU3hqQ3NoZDRlZE82MFc1djV6eUJIWnhxM3ozell3ZktrVlNMSDA4bjE0a3lidU1IYUxjVTkxL0k0ZWNrWXVoYUJBM29wQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZG1qRnZBck1XSVNzZENqN200R0VBRElDS2dNTDFWNFZjOWdwZWtYZFNPUnFVeE5pdG51ZGNreWdLK1NjYUxKVG1pM1FWRWdQNkxNUCtqdllFbElVanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg0NTQzMjEzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MDU0MTA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlNrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKU2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2THpRMVlrYnlISnJZUHZ4Q3hOSGk3UXcvcUx6cTdCaER0VEMrc0RwVnlRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDE0MzMzODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODk2NTYwODI4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
