import { worker } from "../src/index";

test("GET /", async () => {
	const result = await worker.fetch(
		new Request("http://falcon", { method: "GET" }),
		{},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		{} as any
	);
	expect(result.status).toBe(200);

	const text = await result.text();
	expect(text).toBe("Hello World from GET!");
});
