# Jellyfish Typeform Plugin

Provides a sync integration and a channel for working with user feedback from Typeform.

# Usage

Below is an example how to use this library:

```js
import { cardMixins } from '@balena/jellyfish-core';
import TypeformPlugin from '@balena/jellyfish-plugin-typeform';

const plugin = new TypeformPlugin();

// Load cards from this plugin, can use custom mixins
const cards = plugin.getCards(context, cardMixins);
console.dir(cards);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-typeform

# Testing

Unit tests can be easily run with the command `npm test`.

The integration tests require Postgres and Redis instances. The simplest way to run the tests locally is with `docker-compose`.
You may need to export an `NPM_TOKEN` and values for the environment variables defined in `test.env` before running the command below.

```
npm run test:compose
```
