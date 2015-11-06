### Running Everything

Run this command immediately after cloning the project:

```
npm run all-tests
```

It will download all dependencies, launch the server, start mongo and run all
unit, rest, and e2e tests. After all the tests are run, it will stop mongo
and node.

Mongo is configured to place the database in the /data/db directory. This directory
may need to be created beforehand.

### Run the Application

To launch the web server with mongo, run the following command:

```
npm start
```

Now browse to the app at `http://localhost:8000/`. This will keep mongo and node
running in the background. Use the following command to stop mongo and node:

```
npm stop
```

### Running Unit Tests

The following command will start karma and run all the unit tests:

```
npm test
```

This will leave the karma runner open and watch files for changes, automatically
running the tests repeatedly.

If you only want a single run of the tests and have karma close afterwards, run
the following command:

```
npm run test-single-run
```

### Running Rest Tests

To run only the tests for the REST API, run the following command:

```
npm run rest-tests
```

This command requires node and mongo to be running beforehand.

### Running e2e Tests

To run the e2e tests, run the following command:

```
npm run protractor
```

This command requires node and mongo to be running beforehand.
