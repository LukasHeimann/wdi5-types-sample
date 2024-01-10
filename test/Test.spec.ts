import Button from "sap/m/Button";

describe("ambient type test", () => {
  it("should have ambient types available", async () => {
    const control = await browser.asControl<Button>({
      selector: {
        controlType: "sap.m.Button",
        viewName: 123, // selector isn't type checked anymore, seems to allow any
      },
    });
    // control is now of type `any` for some reason!
    control.press();
  });
});
