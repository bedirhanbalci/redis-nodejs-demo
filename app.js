const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

// SET
client.set("user_name", "bedirhan", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// DEL
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete", message);
});

// EXISTS
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists", message);
});

// APPEND
client.append("last_name", "balci", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
  client.get("last_name", (e, m) => {
    console.log("Read", m);
  });
});

client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi...`);
});

client.subscribe("xenny");
