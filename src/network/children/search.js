import {
  request
} from '../request'
//获取歌手分类
export function getSingersList(letter, type, area) {
  return request({
    url: 'artist/list',
    params: {
      // limit: 30,
      initial: letter,
      type: type,
      area: area
    },
  });

}
/* export function getSingersList(con) {
  return request({
    url: 'search',
    params: {
      keywords: con
    }
  })
} */