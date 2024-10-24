module.exports = {
  config: {
  name: "inbox",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  prefix: 'awto',
  description: "Inbox",
  category: "without prefix",
  cooldowns: 5
},

start: async function({ nayan, events, Users, NAYAN }) {
  let uid;
  if (events.type === "message_reply") {
    uid = events.messageReply.senderID;
  } else if (Object.keys(events.mentions).length > 0) {
    uid = Object.keys(events.mentions)[0];
  } else {
    uid = events.senderID;
  }

  let name = await Users.getNameUser(uid);
const msg = `[🤍] 𝘗𝘳𝘰𝘧𝘪𝘭𝘦     👇   || 	👇  	  𝘐𝘯𝘣𝘰𝘹`
await NAYAN.sendContact(msg, uid, events.threadID, events.messageID);
}
}
