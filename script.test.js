import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

Deno.test("String contains expected characters", () => {
  const letters = "01+-<>/[]{}abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
  assertEquals(letters.includes("0"), true);
  assertEquals(letters.includes("a"), true);
});

Deno.test("Basic arithmetic", () => {
  assertEquals(1 + 1, 2);
});

Deno.test("String operations", () => {
  const testStr = "01+-<>/[]{}";
  assertEquals(testStr.length, 11);
});
