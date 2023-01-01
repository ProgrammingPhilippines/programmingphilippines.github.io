import { expect, test } from "@playwright/test";

test("the main page should be visible", async ({ page }) => {
	await page.goto("/");
	expect(await page.isVisible(".hero")).toBe(true);
});

test("the navbar is visible", async ({ page }) => {
	await page.goto("/");
	expect(await page.isVisible("svg")).toBe(true);
	expect(await page.isVisible("a")).toBe(true);
	expect(await page.isVisible(".navbar")).toBe(true);
	expect(await page.textContent("#about-us > div > h1")).toBe("About us");
});

test("should display all the admins in About us section", async ({ page }) => {
	await page.goto("/#about-us");
	const admins = await page.$$eval(
		"#about-us > .wrap > .admins > .container-md > .card",
		(admins) => admins.map((member) => member.textContent),
	);
	expect(admins.length).toBe(4);
});

test("should display all the members in the Others section of About us", async ({
	page,
}) => {
	await page.goto("/#about-us");
	const members = await page.$$eval(
		"#about-us > .wrap > .container-md > div.grid > .tooltip",
		(members) => members.map((member) => member.textContent),
	);
	expect(members.length).toBeGreaterThan(0);
});
