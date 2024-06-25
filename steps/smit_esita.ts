import { Given, Then } from "cucumber";
import { t, RequestLogger, Selector } from "testcafe";
import ChartPage from "../pages/chartPageElements";
import { config } from '../config';

Given("I am on Smit career page", async () => {
  await t.navigateTo('http://www.smit.ee/et/karjaar').wait(3000);
});


Then('Esita button exists', async function() {
    const EsitaButton = ChartPage.EsitaButton.exists;
    await t.expect(EsitaButton).ok();
    
});
