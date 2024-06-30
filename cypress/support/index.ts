import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    console.log("===>>>>" + screenshot);
    addContext({ test } as Mocha.Context, { title: 'Screenshot', value: encodeURIComponent(screenshot) });
  }
});