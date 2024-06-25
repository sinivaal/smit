import { Given, When, Then } from "cucumber";
import { t, RequestLogger } from "testcafe";
import ChartPage from "../pages/chartPageElements";
import { config } from '../config';

Given("I am on Bing\'s search page", async () => {
  await t.navigateTo('http://www.duckduckgo.com').wait(3000);
});

When('I am typing my search request on Bing', async function() {
    await t.typeText(ChartPage.GoogleSearchBox, "Bing top rated 250").wait(3000);
    await t.pressKey("enter");
});

Then('I should see that the first Bing result includes imdb url', async function() {
    await t.expect(ChartPage.GoogleFirstResult.innerText).contains("www.imdb");
    
});
