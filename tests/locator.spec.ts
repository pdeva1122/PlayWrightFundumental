import {test} from '@playwright/test'

test ('fill username - ID',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('#txt-username').fill('Prashanth');
await page.locator('#txt-password').fill('Prashanth');
await page.locator('#btn-login').click();
});

test ('fill username - Name',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('[name="username"]').fill('Prashanth');
await page.locator('[name="password"]').fill('Prashanth');
await page.locator('#btn-login').click();
});

test ('fill username - ClassName',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('.form-control').nth(2).fill('Prashanth');
await page.locator('.form-control').nth(3).fill('Prashanth');
await page.locator('#btn-login').click();
});

test ('fill username - Tag Locator',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('input').nth(2).fill('Prashanth');
await page.locator('input').nth(3).fill('Prashanth');
await page.locator('#btn-login').click();
});

test ('fill username - CSS Selector',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('input.form-control[name="username"]').fill('Prashanth');
await page.locator('input.form-control[name="password"]').fill('Prashanth');
await page.locator('#btn-login').click();
});

test ('fill username - Xpath Relative',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('//input[@name="username"]').fill('Prashanth');
await page.locator('//input[@id="txt-password"]').fill('Prashanth');
await page.locator('//button[@type="submit"]').click();
});

test ('fill username - Xpath Absolute',async({page})=>{
await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
await page.locator('xpath=/html/body/section/div/div/div[2]/form/div[2]/div/input').fill('Prashanth');
await page.locator('xpath=/html/body/section/div/div/div[2]/form/div[3]/div/input').fill('Prashanth');
await page.locator('xpath=/html/body/section/div/div/div[2]/form/div[4]/div/button').click();
});