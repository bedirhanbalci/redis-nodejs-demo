const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

client.publish("xenny", "app uzerinden gonderilen", (e, number) => {
  console.log(`Mesaj ${number} kisiye gonderildi`);
});
