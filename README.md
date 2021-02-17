![Sms77.io Logo](https://www.sms77.io/wp-content/uploads/2019/07/sms77-Logo-400x79.png "Sms77.io Logo")

# Official Sms77.io Voice GitHub Action

Send a Voice message from GitHub Actions.

## Prerequisites

- An account at Sms77.io. [Sign up for free](https://app.sms77.io/anmelden)!
- Account balance and an API
  key [which you can get here](hhttps://app.sms77.io/settings#httpapi).

## Usage

1. Set up your credentials secrets in your repository settings by
   specifying `SMS77_API_KEY`.

2. Add the following to your workflow

```yaml
- name: 'Send Voice'
  uses: sms77io/github-action-voice@master
  with:
    from: 'Tommy Tester'
    text: 'Sms77.io wishes you a nice day!'
    to: '+4901234567890'
  env:
    SMS77_API_KEY: ${{ secrets.SMS77_API_KEY }}
```

## Inputs

`apiKey` **Required**

An API Key from Sms77.io. Alternatively use environment variable SMS77_API_KEY

`to` **Required**

Phone number to send the voice message to

`text` **Required**

The actual message content you want to send to the recipient(s)

`from`

Sender ID; max 16 numeric or 11 alphanumeric characters

## Outputs

`response`

Returns the response from the API.

## License

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](./LICENSE)