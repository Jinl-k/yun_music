import service from '..'
// 获取歌单详情页数据
export function getMusicListDetail(id) {
  return service.get(`/playlist/detail?id=${id}`)
}

export function getMusicItemList(id) {
  return service.get(`/playlist/track/all?id=${id}&limit=20&offset=0`)
}

export function getMusicLyric(data){
  return service.get(`/lyric?id=${data}`)
}

