import React from 'react'
import Text from './data/text'
import PropTypes from 'prop-types'
import List from './data/list'
import { commaSeparated as CommaSeparated } from './data/list'
import FormTypes from './data/formTypes'

const GlossaryTerm = ({
  anchorId,
  styles,
  title,
  shortDefinition,
  longDefinition,
  types,
  synonyms,
  primarySource,
  contentTags,
  formTypes,
  userTags,
  referenceLinks,
}) => {
  const definition = longDefinition ? longDefinition : shortDefinition
  const synonymLabel = synonyms && synonyms.length > 0 ? 'Synonyms' : null
  return (
    <div className={styles.glossaryTerm}>
      <Text className={styles.title} id={anchorId} Element="h3">
        {title}
      </Text>
      <FormTypes formTypes={formTypes} className={styles.formType} />
      <Text className={styles.definition} Element="p">
        {definition}
      </Text>
      <List
        className={styles.synonyms}
        label={synonymLabel}
        LabelElement={Text}
        labelProps={{ className: styles.synonymsTitle, Element: 'h4' }}
      >
        <CommaSeparated className={styles.synonymsTitle} items={synonyms} />
      </List>
    </div>
  )
}

GlossaryTerm.propTypes = {
  title: PropTypes.string,
  shortDefinition: PropTypes.string,
}

export default GlossaryTerm
