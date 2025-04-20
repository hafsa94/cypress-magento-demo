# Cypress UI Automation Project

This repository contains automated test cases for the Magento e-commerce demo site:  
[https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com)

## Tech Stack

- [Cypress](https://www.cypress.io/) for UI Automation
- [Page Object Model](https://dev.to/raaynaldo/page-object-model-with-cypress-39gi) structure
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) for reporting
- External data from JSON fixtures

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/hafsa94/cypress-magento-demo.git
   cd cypress-magento-demo

2. Install dependencies

   ```bash
   npm install

### Running Tests

1. Run All Tests in Headless Mode

   ```bash
   npx cypress run

2. Run Specific Test

   ```bash
   npx cypress run --spec "cypress/e2e/tests/placeOrder.cy.js"

3. Run in Cypress UI (Interactive Mode)

   ```bash
   npx cypress open

### Test Report 
After executing the test cases from the terminal, you will find the test reports under the cypress/reports folder.



