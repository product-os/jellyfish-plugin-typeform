# Jellyfish Typeform Plugin

Provides a sync integration and a channel for working with user feedback from Typeform.

# Usage

Below is an example how to use this library:

```typescript
import { channelsPlugin } from '@balena/jellyfish-plugin-channels';
import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { typeformPlugin } from '@balena/jellyfish-plugin-typeform';
import { PluginManager } from '@balena/jellyfish-worker';

// Load cards from this plugin
const pluginManager = new PluginManager([
	defaultPlugin(),
	channelsPlugin(),
	typeformPlugin(),
]);
const cards = pluginManager.getCards();
console.dir(cards);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-typeform

# Testing

Unit tests can be easily run with the command `npm test`.

The integration tests require Postgres and Redis instances. The simplest way to run the tests locally is with `docker-compose`:
```
$ git secret reveal
$ npm run test:compose
```

You can also run tests locally against Postgres and Redis instances running in `docker-compose`:
```
$ git secret reveal
$ npm run compose
$ export INTEGRATION_TYPEFORM_SIGNATURE_KEY=$(cat .balena/secrets/integration_typeform_signature_key)
$ REDIS_HOST=localhost POSTGRES_HOST=localhost npx jest test/integration/sync/typeform-translate.spec.ts
```

You can also access these Postgres and Redis instances:
```
$ PGPASSWORD=docker psql -hlocalhost -Udocker
$ redis-cli -h localhost
```
