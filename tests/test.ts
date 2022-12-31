import { expect, test } from "@playwright/test";

test("main page", async ({ page }) => {
	await page.goto("/");
	expect(
		await page.isVisible(
			"body > div > div.navbar.duration-150.max-w-4xl.m-auto > div:nth-child(1)",
		),
	).toBe(true);
	expect(await page.isVisible("svg")).toBe(true);
	expect(await page.isVisible("a")).toBe(true);
	expect(await page.isVisible(".navbar")).toBe(true);
	expect(await page.textContent("#about-us > div > h1")).toBe("About us");
});
