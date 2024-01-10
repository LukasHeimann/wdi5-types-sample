# wdi5-types-sample

A minimum example of types being broken in wdi5 v2.

- Run `npm ci` to install WebdriverIO, wdi5, TypeScript and eslint
- Look at `test/Test.spec.ts`
- Observe that:
  - `browser.asControl()` doesn't typecheck the selector anymore (`viewName` must be string as per types, but is number without problem)
    - This can also be seen via `npm run typecheck`, which raises no error
  - `browser.asControl()` returns any (seems like the `WDI5Control` inside `Promise<WDI5Control & T>` resolves to `any`, overriding the result)
    - This can also be seen via `npm run lint`, which raises the `any` issues
