import axios from 'axios'

const API_URL = process.env.VUE_APP_SERVER_API_PREFIX

function devLogin(id) {
  return axios.post("http://localhost:8080/dev/login",
    {
      id: id
    })
}

function getMyProfile(accessToken) {
  return axios.get(
    `${API_URL}/v1/member/profile`,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
    })
}

function createFamily(accessToken, data) {
  return axios.post(
    `${API_URL}/v1/family`,
    data,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
}

function joinFamily(accessToken, data) {
  return axios.post(
    `${API_URL}/v1/family/join`,
    data,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }
  )
}

function getMembers(accessToken, familyId) {
  return axios.get(
    `${API_URL}/v1/family/${familyId}/members`,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
}

function getFamily(accessToken, code) {
  return axios.get(`${API_URL}/v1/family/${code}`,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
}

function getFamilyRestaurant() {
  return axios.get(`${API_URL}/v1/family/restaurant`)
}

function getSearchRestaurant() {
  return axios.get(`${API_URL}/v1/search/fakeRestaurant`) // 가짜 검색 데이터
}

export default {
  devLogin,
  getMyProfile,           // 내가 가입한 정보 가져오기
  createFamily,           // 점심팸 생성
  joinFamily,             // 점심팸 가입
  getMembers,             // 내가 속한 패밀리 팸원 가져오기

  getSearchRestaurant,    // 검색한 식당 결과 가져오기
  getFamilyRestaurant,    // 내가 속한 패밀리 식당 정보 가져오기
  getFamily               // 패밀리 정보 가져오기 (패밀리 이름으로)
}
