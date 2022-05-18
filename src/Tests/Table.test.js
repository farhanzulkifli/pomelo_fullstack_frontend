import axios from "axios";
import { url, fetchData } from "../Table";

jest.mock("axios");

// console.log(fetchData)

describe("fetchData", () => {
  describe("when API call is successful", () => {
    it("should return data", async () => {
      // given
      const data = [
        {
          transactionId: 0,
          date: 0,
          to: 0,
          from: 0,
          currency: "mock",
          value: 0,
          description: "mock"
        }
      ];
      axios.get.mockResolvedValueOnce(data);

      // when
      const result = await fetchData();

      // then
      expect(axios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(data);
    });
  });
});