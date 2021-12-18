# Set Cypress.io Test Enviroment

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

* open 

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