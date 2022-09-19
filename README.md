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

You can run integration tests locally against Postgres and Redis instances running in `docker-compose`:
```bash
npm run compose
REDIS_HOST=localhost POSTGRES_HOST=localhost npm run test:integration
```

You can also access these Postgres and Redis instances:
```bash
PGPASSWORD=docker psql -hlocalhost -Udocker
redis-cli -h localhost
```
