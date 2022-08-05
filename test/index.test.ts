import * as mockServiceWorker from "service-worker-mock";
import { worker } from "../src/index";

Object.assign(globalThis, mockServiceWorker());
test("GET /", async () => {
	const request = new Request("/", { method: "GET" });
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = await worker.fetch(request, {}, {} as any);
	expect(result.status).toBe(200);

	const text = await result.text();
	expect(text).toBe("Hello World from GET!");
});
