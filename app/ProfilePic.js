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
  list: PropTypes.array.isRequired
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

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//
// class ProfilePic extends Component {
//   render() {
//     return(
//       <img
//         src={'https://photo.fb.com/'+this.props.username}
//         alt='this.props.username'
//       />
//     )
//   }
// }
//
// class ProfileLink extends Component {
//   render() {
//     return (
//       <a href={'https://www.fb.com/' + this.props.username}>
//         {this.props.username}
//       </a>
//     )
//   }
// }
//
// class Avatar extends Component {
//   render() {
//     return (
//       <div>
//         <ProfilePic username={this.props.username} />
//         <ProfileLink username={this.props.username} />
//       </div>
//     )
//   }
// }
//
// <Avatar username='tylermcginnis' />
//
// export default ProfilePic;
