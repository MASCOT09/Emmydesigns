import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "case-studies");
mkdirSync(outDir, { recursive: true });

const url = "https://similar-championship-089222.framer.app/";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
await page.waitForTimeout(3000);

const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= scrollHeight; y += 500) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(400);
}

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1500);
await page.screenshot({ path: join(outDir, "bosak-card.png"), fullPage: false });

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await page.screenshot({
  path: join(outDir, "bosak-detail.png"),
  fullPage: false,
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});

await page.evaluate(() => window.scrollTo(0, 920));
await page.waitForTimeout(1200);
await page.screenshot({
  path: join(outDir, "bosak-detail-scroll.png"),
  fullPage: false,
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});

await browser.close();
console.log("Saved bosak-card.png, bosak-detail.png, bosak-detail-scroll.png");
