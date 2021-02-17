# Jellyfish Typeform Plugin

Provides a sync integration and a channel for working with user feedback from Typeform.

# Usage

Below is an example how to use this library:

```js
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins')
const TypeformPlugin = require('@balena/jellyfish-plugin-typeform')

const plugin = new TypeformPlugin()

// Load cards from this plugin, can use custom mixins
const cards = plugin.getCards(context, coreMixins)
console.dir(cards)
```

# Documentation

A plugin that provides cards and an integration relating to user feedback from Typeform.

<a name="exp_module_TypeformPlugin--module.exports"></a>

### module.exports ⏏
The Typeform Jellyfish plugin.

**Kind**: Exported class  
