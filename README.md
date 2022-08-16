# Jellyfish Typeform Plugin

Provides a sync integration and a channel for working with user feedback from Typeform.

# Usage

Below is an example how to use this library:

```typescript
import { typeformPlugin } from '@balena/jellyfish-plugin-typeform';
import { PluginManager } from '@balena/jellyfish-worker';

// Load contracts from this plugin
const pluginManager = new PluginManager([
	typeformPlugin(),
]);
const contracts = pluginManager.getCards();
console.dir(contracts);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-typeform/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-typeform

# Testing

Unit tests can be easily run with the command `npm test`.

The integration tests require Postgres and Redis instances. The simplest way to run the tests locally is with `docker-compose`:
```
npm run test:compose
```

You can also run tests locally against Postgres and Redis instances running in `docker-compose`:
```
npm run compose
REDIS_HOST=localhost POSTGRES_HOST=localhost npx jest test/integration/typeform-translate.spec.ts
```

You can also access these Postgres and Redis instances:
```
PGPASSWORD=docker psql -hlocalhost -Udocker
redis-cli -h localhost
```
