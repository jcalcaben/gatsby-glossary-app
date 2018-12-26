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
  return (
    <div>
      <Text Element="h3">{title}</Text>
      <Text Element="p">{definition}</Text>
      <List label="synonyms" LabelElement={Text} labelProps={{ Element: 'h4' }}>
        <CommaSeparated items={synonyms} />
      </List>
      <Text Element="h4">Form Types</Text>
      <FormTypes formTypes={formTypes} wordClasses={[]} />
    </div>
  )
}

GlossaryTerm.propTypes = {
  title: PropTypes.string,
  shortDefinition: PropTypes.string,
}

export default GlossaryTerm
