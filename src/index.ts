import { randomBytes } from "crypto";
import bananojs from "@bananocoin/bananojs";

const run = async () => {
  bananojs.setBananodeApiUrl("https://kaliumapi.appditto.com/api");

  const seed = randomBytes(32).toString("hex");
  const privateKey = bananojs.getPrivateKey(seed, 0);
  const publicKey = await bananojs.getPublicKey(privateKey);
  const account = bananojs.getBananoAccount(publicKey);

  bananojs.getAccountInfo(account).then((res: any) => console.log(res));
};
run();
