import { test } from '@playwright/test';


const nbVideo = 100
// for( let i = 0; i < nbVideo; i++ ) {
//   test(`View Youtube Non Repertoriee ${i}`, async ({ page }) => {
//     test.setTimeout(120000)
//     await page.goto('https://www.youtube.com/watch?v=pY2mmCWXc-E');
  
//     await page.locator('button:has-text("Accept All")').click();
  
//     await page.waitForTimeout(40000);
//   });
// }

for( let i = 0; i < nbVideo; i++ ) {
  test(`View Youtube Publique ${i}`, async ({ page }) => {
    await page.goto('https://www.youtube.com/watch?v=G5KZoBZA1-I');
  
    await page.locator('button:has-text("Accept All")').click();
  
    //random number between 50000 and 120000
    await page.waitForTimeout(Math.floor(Math.random() * 80000) + 50000);
  });
}
