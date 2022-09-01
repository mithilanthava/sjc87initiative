// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import the defined Schema
import news from './news'
import contact from './contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    news,
    contact,
  ]),
})
