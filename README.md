# gauge-taiko-demo

Practicing automated tests with Gauge and Taiko. To run this project just run "npm install" after cloning this repo.

## How to Start gauge project

1. After installing Gauge (via NPM), run: gauge init js

## Problems to Fix

| CT  | Step                                   | Error/Problem    |
| --- | -------------------------------------- | ---------------- |
| 002 | Step: Click at the link "Sign Up Here" | Error: Timed out |

---

## Errors and Fixes

Error Message: Error: Navigation took more than 30000ms. Please increase the navigationTimeout.
Fix: Use TAIKO's setConfig() to set the property waitForNavigation to false.
