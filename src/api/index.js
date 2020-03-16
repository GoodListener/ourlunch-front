import axios from 'axios'

const api = {
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/dev/api/v1/' : '/api/v1/'
}

function devLogin () {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/admin/login'
  })
}

function getMyProfile (accessToken) {
  return axios({
    method: 'GET',
    url: `${api.baseUrl}member/profile`,
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
  })
}

function postFamily (accessToken, data) {
  return axios({
    method: 'POST',
    url: `${api.baseUrl}initialization`,
    data: data,
    header: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
}

function getMembers () {
  return axios.get(`${api.baseUrl}member`)
}

function getFamily () {
  return axios.get(`${api.baseUrl}family`)
}

function getMyFamily () {
  return axios.get(`${api.baseUrl}family`)
}

function getFamilyRestaurant () {
  return axios.get(`${api.baseUrl}family/restaurant`)
}

function getSearchRestaurant () {
  return axios.get(`${api.baseUrl}search/fakeRestaurant`) // 가짜 검색 데이터
}

export {
  devLogin,
  getMyProfile, // 내가 가입한 정보 가져오기
  postFamily, // 팸 등록하기

  getSearchRestaurant, // 검색한 식당 결과 가져오기
  getFamilyRestaurant, // 내가 속한 패밀리 식당 정보 가져오기
  getMyFamily, // 내가 가입한 패밀리정보 가져오기
  getMembers, // 내가 속한 패밀리 팸원 가져오기
  getFamily // 패밀리 정보 가져오기 (패밀리 이름으로)
}
