import {test} from '@playwright/test'

test('fill login - Using ID',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('#login-username').fill('Prashanth');
await page.locator('#login-password').fill('Prashanth');
await page.locator('#js-login-btn').click();
});

test('fill login - Using Name',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('[name="username"]').nth(0).fill('Prashanth');
await page.locator('[name="password"]').fill('Prashanth');
await page.locator('#js-login-btn').click();
});

test('fill login - Using Class',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('.text-input').nth(0).fill('Prashanth');
await page.locator('.text-input').nth(1).fill('Prashanth');
await page.locator('#js-login-btn').click();
});

test('fill login - Using TagName',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('input').nth(0).fill('Prashanth');
await page.locator('input').nth(1).fill('Prashanth');
await page.locator('button').nth(7).click();
});

test('fill login - Using CSS Selector',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('input.text-input#login-username').fill('Prashanth');
await page.locator('input[name="password"]').fill('Prashanth');
await page.locator('#js-login-btn').click();
});

test('fill login - Using Relative Xpath',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('//input[@id="login-username"]').fill('Prashanth');
await page.locator('//input[@data-qa="jobodapuxe"]').fill('Prashanth');
await page.locator('//button[@id="js-login-btn"]').click();
});

test('fill login - Using Xapth Axes',async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
await page.locator('//input[@id="login-username"]').fill('Prashanth');
await page.locator("//input[@id='login-username']/following::input[1]").fill('Prashanth');
await page.locator("//input[@id='login-username']/following::button[3]").click();
});
