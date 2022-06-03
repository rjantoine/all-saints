// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import news from './news'
import author from './author'
import event from './event'
import page from './page'
import mainMenu from './mainMenu'
import footerMenu from './footerMenu'
import section from './section'
import columnsSection from './columnsSection'
import hero from './hero'
import column from './column'
import imageTextSection from './imageTextSection'
import mission from './mission'
import button from './button'
import linkButton from './linkButton'
import quote from './quote'
import ministry from './ministry'
import documentsDisplay from './documentsDisplay'
import gallery from './gallery'
import link from './link'
import youtube from './youtube'
import contactForm from './contactForm'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    event,
    news,
    ministry,
    mainMenu,
    footerMenu,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    section,
    columnsSection,
    hero,
    column,
    imageTextSection,
    mission,
    button,
    linkButton,
    quote,
    documentsDisplay,
    gallery,
    link,
    youtube,
    contactForm
  ]),
})
