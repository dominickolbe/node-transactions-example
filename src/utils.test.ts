import { expect } from "chai";
import { getMerchantsByTransactions, getRankingByUser } from "./utils";
import merchants from "./__mock__/merchants.json";
import transactions from "./__mock__/transactions.json";

describe("Utils function", () => {
  it("should return array of merchants ids", () => {
    const result = getMerchantsByTransactions(transactions);
    expect(result).to.eql([1, 2, 3]);
  });

  it("should return ranking of merchants", () => {
    const userId = 1;
    const result = getRankingByUser(userId, transactions, merchants);
    expect(result).to.eql([
      {
        display_name: "Merchant 1",
        funny_gif_url: "",
        icon_url: "",
        id: 1,
        totalAmount: 0.2727272727272727,
      },
      {
        display_name: "Merchant 2",
        funny_gif_url: "",
        icon_url: "",
        id: 2,
        totalAmount: 0.3333333333333333,
      },
      {
        display_name: "Merchant 3",
        funny_gif_url: "",
        icon_url: "",
        id: 3,
        totalAmount: 0,
      },
    ]);
  });
});
