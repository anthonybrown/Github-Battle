'use strict';

var getProfilePic = function (username) {
  return `https://photo.fb.com/${username}.`
}

let getProfileLink = function (username) {
  return `https://www.fb.com/${username}`
}

let getProfileData = function (username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username),
  }
}

getProfileData('tylermcginnis');
