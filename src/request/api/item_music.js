import service from '..'
// 获取歌单详情页数据
export function getMusicListDetail(id) {
  return service.get(`/playlist/detail?id=${id}`)
}
