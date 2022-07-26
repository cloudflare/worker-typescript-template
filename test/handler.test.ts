import { someHandler } from "../src/some-handler";

describe("handle", () => {
	test("some handlers' return", async () => {
		const value = await someHandler({
			cf: { continent: "Europe" },
		} as unknown as Request);
		expect(value).toEqual("Europe");
	});
});
