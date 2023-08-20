'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://xxxx.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'https://xxxx.com';",
      output: "var test = 'https://xxxx.com';",
      errors: [
        {
          message: 'Recommended "https://xxxx.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='https://xxxx.com' />",
      output: "<img src='https://xxxx.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "https://xxxx.com" switch to HTTPS',
        },
      ],
    },
  ],
});
