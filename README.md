# Cypress Automation

This project uses **Cypress** to automate end-to-end tests for the **Login**, **Menu**, and **My Info** features.  
Random test data is generated using **Chance.js**.

Cypress is a JavaScript-based end-to-end testing framework that allows developers and QA engineers to write and run tests in a real browser environment.

---

## Technologies
- Cypress
- JavaScript
- Node.js
- Chance.js

---

## Installation
> **NOTE:**
>
> it is necessary to have **node** installed

```bash
# Install project dependencies
npm install

# Install Cypress
npm install cypress --save-dev

# Install the random data generator
npm install chance
```

## Running
```bash
# Open the Cypress Test Runner (UI)
npx cypress open

# Run the tests via command line
npx cypress run
```
