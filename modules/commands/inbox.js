module.exports.config = {
  name: "inbox",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Yan Maglinte",
  description: "Share a contact of a certain userID",
  usePrefix: false,
  commandCategory: "message",
  cooldowns: 5,
};

module.exports.run = async function ({ api, args, event }) {
  try {
    api.shareContact(
      args ? args.join(" ") : "[🤍] 𝘗𝘳𝘰𝘧𝘪𝘭𝘦     👇   || 	👇  	  𝘐𝘯𝘣𝘰𝘹",
      event.messageReply?.senderID || event.senderID,
      event.threadID,
      event.messageID
    );
  } catch (error) {
    api.sendMessage("error", event.threadID, event.messageID);
  }
};
