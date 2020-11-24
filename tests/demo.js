/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    waitFor,
    button,
    below,
    dropDown,
    setConfig
} = require('taiko');
const assert = require("assert");



step("Open Chromium browser in fullscreen", async() => {
  await openBrowser({headless: false,args: ["--start-fullscreen"]});
  await setConfig({
    retryInterval: 15000,
    observe: true,
    waitForNavigation: false,
    highlightOnAction: 'true',
    navigationTimeout: 60000
  });
});
step("Go to URL <URL>", async(URL) => {
  await goto(URL);
});
step("Write <text> into text input <field>", async(text, field) => {
  await waitFor(field);
  await write(text, into(field));
});
step("Write <txt> in the input with label <label>", async(txt, label) => {
  await click(text(label, {selectHiddenElements: true}));
  await write(txt, into(field));
});

step("Click at the button <btn>", async(btn) => {
  await click(button(btn));
});

step("Click at the link <element>", async(element) => {
  await click(link(element));
});
step("Click with evaluate at the link <element>", async(element) => {
  await evaluate(link(element), (el) => {
    el.click();
  })
});

step("Write <txt> in the input below <field>", async(txt, field) => {
  await waitFor(field);
  await write(txt, into(textBox(below(field))));
});

step("Select option <opt> in the dropdown <field>", async(opt, field) => {
  await dropDown(field).select(opt);
});

step("Close the browser", async() => {
  await closeBrowser();
});

