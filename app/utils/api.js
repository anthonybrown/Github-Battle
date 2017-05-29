import axios from 'axios'

// if you experience any rate limiting from hitting the Github api
// USE THIS CODE & APPEND params TO THE END OF YOUR CALLS
const id = 'SECRET_ID' /* SECRET ID */
const secret = 'SECRET_SECRET' /* SECRET */
let params = `?client_id${id}&client_secrete=${secret}`

const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then((user) => {
      return user.data
    })
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  let followers = profile.followers
  let totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

const handleError = (error) => {
  console.warn(error)
  return null
}

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    let profile = data[0]
    let repos = data[1]

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

const sortPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

module.exports = {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },
  fetchPopularRepos: (language) => {
    var encodedURI =
      window.encodeURI(
        'https://api.github.com/search/repositories?q=stars:>1+language:' +
        language + '&sort=stars&order=desc&type=Repositories'
      )

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items
      })
  }
}
