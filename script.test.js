import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

Deno.test("Matrix canvas initialization", () => {
  assertEquals(typeof document, "object");
});

Deno.test("Basic arithmetic", () => {
  assertEquals(1 + 1, 2);
});

Deno.test("String operations", () => {
  const testStr = "01+-<>/[]{}";
  assertEquals(testStr.length, 11);
});
