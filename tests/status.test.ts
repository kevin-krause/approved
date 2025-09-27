import { describe, it } from "vitest";
import { status } from "../src/app/api/v1/status/route";
import { expect } from "vitest";
describe("status", () => {
  it("should return 200", async () => {
    const response = await status(new Request("http://localhost:3000/api/v1/status"));
    const data = await response.json();  
    expect(data.status).toBe("ok");
    expect(data.data[0].sum).toBe(2);
  });
});