import React from 'react'
import Text from './Text'
import PropTypes from 'prop-types'
import List from './data/list'
import { commaSeparated as CommaSeparated } from './data/list'
import FormTypes from './data/form-types'

/*
class GlossaryTerm extends React.Component {
  state = {
    enabled: true,
    loaded: false,
    termData: {},
  }
  componentDidMount() {
    let { publicURL } = this.props.file

    fetch(publicURL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          loaded: true,
          termData: data,
        })
      })
  }
  render() {
    let { loaded, termData } = this.state

    return loaded ? (
      <div>
        <Text Element="h3">{termData.title}</Text>
        <Text Element="p">{termData.shortDefinition}</Text>
      </div>
    ) : (
      <div>Loading Term: {this.props.file.name}</div>
    )
  }
}
*/
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
