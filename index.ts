const { createClient } = require("ioredis");

const redis = createClient({
  host: "localhost",
  port: 6379,
});
const timeToLeave = 3;
const accessAttemptsNumber = 2000;

const limitTime = 200;
const sleepAsync = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

const main = async () => {
  // Done for different maxmemory-policy

  // for (let i = 1; i <= accessAttemptsNumber; i++) {
  //   await redis.set(`key${i}_test`, `${i * 1000000}`, "EX", timeToLeave);
  // }

  await redis.set(`key_test`, "WIN", "EX", timeToLeave);
  const sleep = await sleepAsync(1.5 * 1000);

  for (let i = 1; i <= accessAttemptsNumber; i++) {
    const randomNum = Math.floor(Math.random() * limitTime);

    const key_test_value = await redis.get(`key_test`);

    const leftTTL = await redis.pttl(`key_test`);

    if (leftTTL <= limitTime && randomNum <= limitTime + 1 - leftTTL) {
      await redis.set(`key_test`, "WIN", "EX", timeToLeave);
      console.log(leftTTL, `leftTTL`);
      console.log(key_test_value, `randomRedisValue`);
      process.exit();
    }
  }
  console.log(`-----------------end-----------------`);
};

main().catch((err) => console.error(err));
