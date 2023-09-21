![](https://www.seven.io/wp-content/uploads/Logo.svg "seven Logo")

# Official seven.io Voice GitHub Action

Send a Voice message from GitHub Actions.

## Prerequisites

- An account at seven.io. [Sign up for free](https://app.seven.io/signup)!
- Account balance and an [API Key](https://help.seven.io/en/api-key-access).

## Usage

1. Set up your credentials secrets in your repository settings by
   specifying `SEVEN_API_KEY`.

2. Add the following to your workflow

```yaml
- name: 'Send Voice'
  uses: seven-io/github-action-voice@master
  with:
    from: 'Tommy Tester'
    text: 'seven.io wishes you a nice day!'
    to: '+4901234567890'
  env:
     SEVEN_API_KEY: ${{ secrets.SEVEN_API_KEY }}
```

## Inputs

`apiKey` **Required**

An API Key from seven.io. Alternatively use environment variable SEVEN_API_KEY

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

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
