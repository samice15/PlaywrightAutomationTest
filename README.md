# Playwright Test for Checkout Process

This project automates the checkout process on the Demo website using Playwright and the Page Object Model (POM) in JavaScript.

## Prerequisites

- Node.js (version 14 or later)
- Visual Studio Code (VS Code)

# Setup

1. Install Node.js

#### Windows

1. **Download the Installer**: 
   - Visit the [Node.js download page](https://nodejs.org/).
   - Download the LTS (Long Term Support) version for Windows.

2. Run the Installer:
   - Run the downloaded `.msi` installer.
   - Follow the prompts in the installer (accept the license agreement, click next, and install).

3. Verify Installation:
   - Open Command Prompt and run:
     ```bash
     node -v
     npm -v
     ```
   - You should see the versions of Node.js and npm printed.



### 2. Install Visual Studio Code (VS Code)

1. Download VS Code:
   - Visit the [Visual Studio Code download page](https://code.visualstudio.com/Download).
   - Download the version for your operating system.

2. Install VS Code:
   - Run the downloaded installer and follow the prompts.

3. Verify Installation:
   - Open VS Code.

### 3. Install Playwright in VS Code

1. Open Terminal in VS Code:
   - Open VS Code.
   - Go to `View > Terminal` 

2. Install Playwright:
   - Run the following command in the terminal:
     npm install playwright
     

3. Install Playwright Browsers:
   - Run the following command in the terminal:
     npx playwright install
   


## To run the test :

1. Open your terminal and write
   npx playwright test Swaglab.spec.js

   
## To see the result :

1. Open your terminal and write
   npx playwright show-report (For Playwright Report)
   
   allure generate allure-results allure-report --clean (For Allure Report)
   allure open allure-report (For Allure Report)
