import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectLanguage extends Component {
  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Java', 'PHP']

    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.props.selectedLanguage
                ? {color: '#d0021b'}
                //: null we can pass null or use another color
                : {color: '#3d5165'}
              }
              onClick={this.props.onSelect.bind(null, lang)}
              key={lang}
            >
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular;
