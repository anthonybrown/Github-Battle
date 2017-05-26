import axios from 'axios'

module.exports = {
  fetchPopularRepos: function (language) {
    let encodedURI =
      window.encodeURI(
        'https://api.github.com/search/repositories?q=stars:>1+language:' +
        language + '&sort=starts&order=desc&type=repositories'
      )

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items
      })
  }
}
