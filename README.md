<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven Voice - GitHub Action</h1>

<p align="center">
  Place text-to-speech voice calls from any GitHub Actions workflow via the seven gateway. Useful for noisy on-call alerts that should bypass silenced phones.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <a href="https://github.com/marketplace/actions/seven-voice"><img src="https://img.shields.io/badge/GitHub-Marketplace-181717" alt="GitHub Marketplace" /></a>
  <img src="https://img.shields.io/badge/Node.js-runtime-brightgreen" alt="Node.js runtime" />
</p>

---

## Features

- **Drop-in Workflow Step** - Trigger a phone call from any job with a single `uses:` line
- **Custom Caller ID** - Override the displayed sender via the `from` input
- **No External Voice Provider Needed** - All TTS rendering happens on the seven side

## Prerequisites

- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))
- The `SEVEN_API_KEY` secret configured under **Settings > Secrets and variables > Actions**

## Usage

```yaml
- name: Send Voice
  uses: seven-io/github-action-voice@master
  with:
    from: 'Tommy Tester'
    text: 'seven.io wishes you a nice day!'
    to:   '+4901234567890'
  env:
    SEVEN_API_KEY: ${{ secrets.SEVEN_API_KEY }}
```

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `apiKey` | yes* | seven API key. *Optional if `SEVEN_API_KEY` env var is set. |
| `to` | yes | Phone number to call |
| `text` | yes | Text that will be read out loud |
| `from` | no | Caller ID. Up to 11 alphanumeric or 16 numeric characters |

## Outputs

| Output | Description |
|--------|-------------|
| `response` | Raw API response payload |

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/github-action-voice/issues).

## License

[MIT](LICENSE)
