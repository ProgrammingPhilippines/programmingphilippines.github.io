import test, { expect } from "@playwright/test";

test("The page displays the title Events!", async ({ page }) => {
	await page.goto("/events");

	const h1 = page.getByText("Events!");
	expect(h1).toBeTruthy();

	const events = await page.$$eval(".steps > .step", (events) =>
		events.map((event) => event.textContent),
	);
	expect(events.length).toBeGreaterThan(0);
	expect(events.length).toBe(6);
});
