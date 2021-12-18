# Set Cypress.io Test Enviroment

### Installation

Prerequisites for any OS:
Install [Node.js](https://nodejs.org/) to run.

Clone the repository:
`& git clone git@bitbucket.org:taskeasy/taskeasy-2.0-testing-cy.git`

Install the dependencies and devDependencies and start the server.

```sh
$ cd taskeasy-2.0-testing-cy
$ npm install
$ npm run open
```

### Packages

- [cypress](https://github.com/cypress-io/cypress#readme)
- [cypress-tags](https://github.com/annaet/cypress-tags)
- [cypress-multi-reporterr](https://github.com/you54f/cypress-multi-reporters#readme)
- [cypress-slack-reporter](https://github.com/you54f/cypress-slack-reporter#readme)
- [aws-sdk](https://github.com/aws/aws-sdk-js#readme)
- [mocha](https://github.com/mochajs/mocha#readme)
- [mocha-multi-reporters](https://github.com/stanleyhlng/mocha-multi-reporters#readme)
- [mocha-simple-html-reporter](https://github.com/blond/mocha-simple-html-reporter#readme)
- [mochawesome](https://github.com/adamgruber/mochawesome#readme)
- [mochawesome-merge](https://github.com/Antontelesh/mochawesome-merge#readme)
- [mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator#readme)

### Run Tests

There are 2 ways to run the tests.

- Headless Mode
- With UI

To Run the the tests in 'Headless Mode' You need to run this command:

```sh
$ npx cypress run
```

More info about [Headless Mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

To Run tests with UI, run the following command

```sh
$ npm run open
```

This command will generate a mochawesome.json and report.html in reports directory

More info about [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

### Scripts

* open 

Opens the Cypress Test Runner in interactive mode.

* upload-aws

Upload report.html to aws bucket

* generate-slack-message [option]

Sends a message to a slack channel, options can be: endpoint,ui,happy,negative

* happy-tests

Run all the tests that have the tag : HP

* negative-tests

Run all the tests that have the tag : NT

### How to deploy it?
It is deployed using `config`. Just clone the repository and from the `bin` folder run the following command:

```./deploy.sh automation node-1.at.te```

When you run the deploy.sh script you will be able to select the image that you want to deploy.

In the automation stack you will find that the following variables can be customized:

- CRON_SCHEDULE: A standard cron expression to indicate at what time the tests should run.
- AWS_ACCESS_KEY_ID: The AWS access key.
- AWS_DEFAULT_REGION: The AWS region.
- SLACK_WEBHOOK_PATH: Slack webhook used to send the notifications. Modify it if you don't want to spam #development.
- BASE_URL: URL that will be used to perform the test suite.
- DB_HOST_NAME: Name of the db clone to use.
- RUN_IMMEDIATELY: Use it if you want to run the tests immediately after deploying. Useful for testing hotfixes or running on demand.
- SCHEDULE_TESTS: Use it if you want to schedule the tests.

For local development you can still define the base url and the db host name in the cypress config files.

### How to restart the docker service?
To restart the service you can set it to scale down to zero replicas and then to scale up to 1 replica.

`docker service scale automation_test-suite-te2=0`

`docker service scale automation_test-suite-te2=1`


### Where does it run?
It runs in the docker swarm `at.te`. Run the following commands from `node-1.at.te` to see the status of the service in the swarm:

```docker service ls automation_test-suite-te2```

```docker service inspect automation_test-suite-te2```

### How to see the logs?
The logs are sent to SumoLogic and you can use the filter `_collector="sys.te" "test-suite-te2"`


### How to update the version of Cypress/Chrome/Node?
A base image is used in order to improve the speed of the deployments, it includes Node.js, Chrome, and Cypress. The base image is defined in `Dockerfile_base`. 
Update to the versions that you need and then upload the image with the following commands:



```docker build -t base/cypress:master-node12.6-chrome91-cypress8.0 -f Dockerfile_base .```

```docker image tag base/cypress:master-node12.6-chrome91-cypress8.0 registry.taskeasy.com/base/cypress:master-node12.6-chrome91-cypress8.0```

```docker push registry.taskeasy.com/base/cypress:master-node12.6-chrome91-cypress8.0```


Make sure the tag starts with `master` so the image is not deleted by the registry sanitizer.



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

* How do I automatically report the results on a slack channel?

First make a [Slack App to the channel and set up a Webhook url](https://api.slack.com/messaging/webhooks)
 Open the config.json file on cypress/notifications directory
 Set the url on slackWebHook Key

```sh
{
    "slackWebHook": "WebhookURL",
    .
    .
    .
}
```

## DO NOT CHANGE the other values, those values are unique to the assigned aws bucket to upload the results
