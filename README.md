<h1 align="center">
  Testing React Apps - Workshop trial
</h1>

<hr />

Learn how to test a react applications from the fundamentals of testing to advanced concepts and best practices using [@testing-library](https://github.com/testing-library/)

## Fundamentals

In this workshop we'll learn how testing frameworks like `jest` was built and how to use them

### Topics

* What is automated testing
* How to create your own
  * Testing library
  * Testing abstractions
* Testing mocks
* Monkey patching
* Local Development and mocking with `MSW`

### Exercises

1. [Custom Jest Matcher](https://codesandbox.io/s/test-wpcustom-matcher-gfb09?file=/src/__tests__/index.js) - Create a custom matcher and make the breaking test pass

2. [Integration refactor](https://codesandbox.io/s/test-wptesting-library-integration-gc9zy?file=/src/__tests__/index.test.js) - Refactor this integration test fixing every common mistake using [@testing-library](https://github.com/testing-library/) libs

3. [Pocket eCommerce integration](https://github.com/luistak/test-workshop/blob/main/src/integration/__tests__/app.test.js) - Create an integration test that fulfills every comment in this test

**Useful links**

* [Isolate your tests](https://kentcdodds.com/blog/test-isolation-with-react)
* [Write fewer but longer tests](https://kentcdodds.com/blog/write-fewer-longer-tests)
* [Avoid nesting](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)
* [Avoid hasty test abstractions](https://kentcdodds.com/blog/aha-testing)
* [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
* [Common mistakes using @testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

**Inspirations**

This Workshop inspired in:
- [A previous Test Webinar](https://github.com/luistak/test-webinar)

And [Kent C. Dodds](https://kentcdodds.com/) testing material:
- [React Testing library course](https://github.com/kentcdodds/react-testing-library-course)
- [Testing Workshop](https://github.com/kentcdodds/testing-workshop)
- [Testing React Apps](https://github.com/kentcdodds/testing-react-apps/tree/main/src/__tests__/exercise)