import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import './index.css'

class Users extends React.Component {
  render () {
    let friends = this.props.list.filter((user) => {
      return user.friend === true
    })
    let nonFriends = this.props.list.filter((user) => {
      return user.friend !== true
    })
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>

      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

ReactDOM.render(
  <Users list={[
    { id: 1, name: 'Tyler', friend: true },
    { id: 2, name: 'Ryan', friend: true },
    { id: 3, name: 'Michael', friend: false },
    { id: 4, name: 'Mikenzi', friend: false },
    { id: 5, name: 'Jessica', friend: true },
    { id: 6, name: 'Dan', friend: false } ]}
  />,
    document.getElementById('root')
)
