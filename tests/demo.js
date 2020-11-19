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
    button
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

step("Go to URL <URL>", async(URL) => {
  await goto(URL);
});
step("Write <text> into text input <field>", async(text, field) => {
  await write(text, into(field));
});

step("Click at the button <btn>", async(btn) => {
  await click(button(btn));
  await waitFor(30000);
});

step("Click at <element>", async(element) => {
  await click(element);
});