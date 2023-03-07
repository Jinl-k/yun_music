import { createStore } from 'vuex';
import { getMusicLyric } from '../request/api/item_music';
import { getPhoneLogin } from '../request/api/home';
export default createStore({
  state: {
    playList: [
      {
        //播放列表
        al: {
          id: 89039055,
          name: '雨爱抖音版',
          pic: 109951164966568500,
          picUrl:
            'https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg',
          pic_str: '109951164966568495',
        },
        id: 1446137141,
        name: '雨爱（抖音版）',
        ar: [{ name: '灏灏灏仔' }],
        currentTime: 0, // 当前播放时间
        duration: 0, // 歌曲总时长
        isLogin: false, // 是否登录
        isFooterMusci: true, // 是否显示底部播放器
      },
    ],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //是否显示暂停按钮
    detailShow: false, //是否显示歌曲详情
    isFooterMusic: false, //是否显示底部播放器
    isLogin: false, //是否登录
    token: '', //登录token
    user: {},//用户信息
  },
  getters: {},
  mutations: {
    updateIsbtnShow: (state, value) => (state.isbtnShow = value),
    updatePlayList: (state, value) => (state.playList = value),
    pushPlayList: (state, value) => state.playList.push(value),
    updatePlayListIndex: (state, value) => (state.playListIndex = value),
    updateDetailShow: (state) => (state.detailShow = !state.detailShow),
    updateLyricList: (state, value) => (state.lyricList = value),
    updateCurrentTime: (state, value) => (state.currentTime = value),
    updateDuration: (state, value) => (state.duration = value),
    updateIsLogin: (state, value) => (state.isLogin = value),
    updateToken: (state, value) => {
      state.token = value
      localStorage.setItem('token', value)
    },
    updateUser: (state, value) => {
      state.user = value
    },
  },
  actions: {
    getLyric: async (context, value) => {
      let res = await getMusicLyric(value)
      // 触发修改歌词
      context.commit('updateLyricList', res.data.lrc)
    },
    getLogin: async (context, value) => {
      return await getPhoneLogin(value)
    },
  },
  modules: {},
});
