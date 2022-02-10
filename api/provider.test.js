const { Verifier } = require("@pact-foundation/pact");
const path = require("path");
const { app } = require("./app.js");
const port = 3002;

const appServer = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

describe("Pact Verification", () => {
  it("validates the expectations of DogsClient", () => {
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: `http://localhost:${port}`,
      provider: "DogsAPI",
      providerVersion: "1.0.0",
      pactUrls: [
        path.resolve(
          __dirname,
          "../client/src/tests/pact/pacts/dogsclient_example-dogsapi_example.json"
        ),
      ],
    };

    return new Verifier(opts)
      .verifyProvider()
      .then((output) => {
        console.log(output);
      })
      .finally(() => {
        appServer.close();
      });
  });
});
