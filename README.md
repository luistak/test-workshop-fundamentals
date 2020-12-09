# Fundamentals

In this workshop we'll learn how testing frameworks like `jest` was built and how to use them

## Topics

* What is automated testing
* How to create your own
  * Testing library
  * Testing abstractions
* Testing mocks
* Monkey patching
* Local Development and mocking with `MSW`

### Fundamentals

To run these tests run each following command

- [`simple.js`](src/fundamentals/tests/1-simple.js) - Simple automated test

> `yarn fundamentals:01`

- [`assertion.js`](src/fundamentals/tests/2-assertion.js) - Added a custom assertion

> `yarn fundamentals:02`

- [`utilities.js`](src/fundamentals/tests/3-utilities.js) - Created test utilities

> `yarn fundamentals:03`

- [`describe.js`](src/fundamentals/tests/4-describe.js) - Custom describe method

> `yarn fundamentals:04`

- [`jest.js`](src/fundamentals/tests/5-async.js) - Async usage

> `yarn fundamentals:05`

- [`jest.js`](src/fundamentals/tests/6-jest.test.js) - Simple jest usage

> `yarn fundamentals:06`

The files are intended to test the `math` module.


### Mocks

To run these tests run each following command

> `yarn test:mock`

- [`monkey-patching`](src/mock/__tests__/01-monkey-patching.test.js)
- [`jest.fn`](src/mock/__tests__/02-jest-fn.test.js)
- [`jest.spyOn`](src/mock/__tests__/03-spyon.test.js)
- [`jest.mock - inline`](src/mock/__tests__/04-inline-module.test.js)
- [`jest.mock - external`](src/mock/__tests__/05-external-module.test.js)


### MSW

Use [`MSW`](https://mswjs.io/) to mock your api in your development and also in your tests

To run these tests run each following command

> `yarn test:msw`

- [`index.js`](src/index.js) - Local development start
- [`handlers.js`](src/msw/mocks/handlers.js) - Mock handlers
- [`browser.js`](src/msw/mocks/browser.js) - Worker used in local development
- [`server.js`](src/msw/mocks/server.js) - Server used in testing
- [`setupTests.js`](src/setupTests.js) - To check msw testing setup

## Inspirations

This Workshop inspired in:
- [A previous Test Webinar](https://github.com/luistak/test-webinar)

And especially into [Kent C. Dodds](https://kentcdodds.com/) testing material:
- [React Testing library course](https://github.com/kentcdodds/react-testing-library-course)
- [Testing Workshop](https://github.com/kentcdodds/testing-workshop)
- [Testing React Apps](https://github.com/kentcdodds/testing-react-apps/tree/main/src/__tests__/exercise)