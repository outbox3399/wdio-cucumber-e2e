import { Given, When, Then} from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^user is on Google page$/, async function (){
    console.log ("Before opening browser---");
    browser.url("https://www.google.com")
    browser.pause(1000)
    console.log ("After opening browser---");
})

When (/^user searches with (.*)$/, async function (SearchItems) {
    console.log(">> Search Items :  ${SearchItems}");
    let ele = await $("[name=q]")
    await ele.setValue(SearchItems)
    await browser.keys("Enter")
    
})

Then (/^click on the first search result$/, async function () {
    let ele = await $("<h3>")
    ele.click()
})

Then (/^URL should match (.*)$/, async function (ExpectedURL){
    console.log(">>>-- expected URL: ${ExpectedURL}");
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})


