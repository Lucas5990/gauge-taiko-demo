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
    dropDown
} = require('taiko');
const assert = require("assert");



step("Open Chromium browser in fullscreen", async() => {
  await openBrowser({headless: false,args: ["--start-fullscreen"]});
});
step("Go to URL <URL>", async(URL) => {
  await goto(URL);
});
step("Write <text> into text input <field>", async(text, field) => {
  await write(text, into(field));
});

step("Click at the button <btn>", async(btn) => {
  await click(button(btn));
});

step("Click at <element>", async(element) => {
  await click(element);
});

step("Write <txt> in the input bellow <field>", async(txt, field) => {
  await waitFor(field);
  await write(txt, into(textBox(below(field))));
});

step("Select option <opt> in the dropdown <field>", async(opt, field) => {
  await dropDown(field).select(opt)
});

