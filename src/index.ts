require("dotenv-safe").config();

import Koa from "koa";
import Router from "koa-router";
import { Database } from "./database";
import { getMerchantsByTransactions, getRankingByUser } from "./utils";

const PORT = process.env.PORT;

const server = async () => {
  const app = new Koa();
  const router = new Router();

  await Database.connect();

  router.get("/users/:id", async (ctx) => {
    const id = parseInt(ctx.params.id);
    const user = await Database.getUser(id);

    if (user) {
      ctx.body = user;
    } else {
      ctx.response.status = 404;
    }
  });

  router.get("/merchants/:id", async (ctx) => {
    const id = parseInt(ctx.params.id);
    const merchant = await Database.getMerchant(id);

    if (merchant) {
      ctx.body = merchant;
    } else {
      ctx.response.status = 404;
    }
  });

  router.get("/transactions", async (ctx, next) => {
    const { start, end, user } = ctx.query;
    const transactions = await Database.getTransactions(start, end);

    if (!transactions) return (ctx.response.status = 404);

    const merchantIds = getMerchantsByTransactions(transactions);
    const merchants = await Database.getMerchantsByIds(merchantIds);
    const results = getRankingByUser(parseInt(user), transactions, merchants);
    ctx.body = results;
  });

  app.use(router.routes());

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
