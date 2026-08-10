import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.BASE44_CLONE_URL ?? "http://127.0.0.1:3000";

async function getHomeHtml() {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  return response.text();
}

test("renders the Base44 homepage regions in source order", async () => {
  const html = await getHomeHtml();
  const markers = [
    "Every builder needs a base",
    "The whole stack.",
    "What will",
    "Beautiful by default.",
    "Built-in marketing tools to grow after you ship",
    "Yoav Hornung",
    "Choose",
    "Frequently asked questions",
    "Go ahead.",
    "Base44 lets you build fully-functional apps",
  ];

  let cursor = -1;
  for (const marker of markers) {
    const next = html.indexOf(marker);
    assert.ok(next > cursor, `expected ${marker} after the previous region`);
    cursor = next;
  }
});

test("uses the inspected title and description", async () => {
  const html = await getHomeHtml();
  assert.match(
    html,
    /<title>Vibe Coding Platform for Building Apps and Websites \| Base44<\/title>/,
  );
  assert.match(
    html,
    /Base44 is a no-code AI development platform that turns builders’ ideas into fully functional apps and websites/,
  );
});

test("serves marketing assets locally", async () => {
  const html = await getHomeHtml();
  assert.doesNotMatch(html, /media\.base44\.com/);
  assert.match(html, /\/sites\/base44-com-cf167063\/root-8a5edab2\//);
});
