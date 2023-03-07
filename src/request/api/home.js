import service from '..'

// 获取首页轮播数据
export function getBanner() {
  return service.get('/banner?type=2')
}

export function getMusicList() {
  return service.get('/personalized?limit=10')
}

export function getSearchMusic(data) {
  return service.get(`/search?keywords=${data}`)
}

export function getPhoneLogin(data) {
  return service.get(`/login/cellphone?phone=${data.phone}&password=${data.password}`)
}

export function getLoginUser(data) {
  return service.get(`/user/detail?uid=${data}`)
}
