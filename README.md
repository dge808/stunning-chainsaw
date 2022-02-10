# a dog app that is being tested in a variety of ways
## Available Scripts

If you want to run `client` and `api` applications in parallel you should use different terminals.

### API Scripts

First, you need to install dependencies:

```
cd api
npm install
```

Then, in the same terminal run

```
node app.js
```

For future usages:

```
cd api
node app.js
```

To run api tests that will verify `pact` with the client:

```
npm run test
```

### Client Scripts

First, you need to install dependencies:

```
cd client
npm install
```

Then, in the same terminal run

```
npm start
```

For future usages:

```
cd client
npm start
```

This command will run consumer pact tests and update existing `pact` if needed:

```
npm run test
```

To run cypress client tests:

```
npm run test:e2e
```
