# Set Cypress.io Test Enviroment

### NOTE

As a note, this project was set in the Windows operating system, therefore, the commands, which have paths, vary and this can affect.

For Example:

WINDOWS:

```sh
{
    "open": ".\\node_modules\\.bin\\cypress open",
}
```

MAC:

```sh
{
    "open": "./node_modules/.bin/cypress open",
}
```

### Installation

Prerequisites for any OS:
Install [Node.js](https://nodejs.org/) to run.

Clone the repository:
`& git clone https://github.com/JoxGarcia/tecBeatsTest.git`

Install the dependencies and devDependencies and start the server.

```sh
$ cd tecBeatsTest
$ npm install
$ npm run open
```

### Packages

- [cypress](https://github.com/cypress-io/cypress#readme)
- [cypress-multi-reporterr](https://github.com/you54f/cypress-multi-reporters#readme)
- [mocha](https://github.com/mochajs/mocha#readme)
- [mocha-multi-reporters](https://github.com/stanleyhlng/mocha-multi-reporters#readme)
- [mocha-simple-html-reporter](https://github.com/blond/mocha-simple-html-reporter#readme)
- [mochawesome](https://github.com/adamgruber/mochawesome#readme)
- [mochawesome-merge](https://github.com/Antontelesh/mochawesome-merge#readme)
- [mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator#readme)

### Run Tests

There are 2 ways to run the tests.

- Headless Mode
- With CYPRESS UI

To Run the the tests in 'Headless Mode' You need to run this command:

```sh
$ npx cypress run
```

More info about [Headless Mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

To Run tests with CYPRESS UI, run the following command

```sh
$ npm run open
```

This command will generate a mochawesome.json and report.html in reports directory

More info about [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

### Scripts

- open

Opens the Cypress Test Runner in interactive mode.

### FAQ.

- How do I set up my base url?

  In the cypress.json file, there will be a key that says "baseURL:" assign the base url in that place

```sh
{
    "baseUrl": "URL HERE",
    "viewportWidth": 1280,
    .
    .
    .
}
```

- How I run test in another browser ?

  In Packagge.json, there are commands to take as a reference if you want to run the tests in other browsers, take into account that these must be installed in the environment. Take into account that there is a limit of browsers to be used, which can be found at the following link: [Browsers Support](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)

```sh
{
    "test-chrome": "npx cypress run --headed --browser chrome",
    "test-chrome-headless": "npx cypress run --browser chrome",
    .
    .
    .
}
```

### Report

To watch the report, run the tests or run the command `npm run generate-report`, then open the file tecBeatsTest\cypress\results\html\report.html.
It should look like this: 

![report](https://user-images.githubusercontent.com/74571206/146660093-ab869c98-b402-4fd2-a294-9e07c14b3946.PNG)



