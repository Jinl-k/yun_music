import service from '..'

// 获取首页轮播数据
export function getBanner(){
  return service.get('/banner?type=2')
}

export function getMusicList(){
  return service.get('personalized?limit=10')
}
