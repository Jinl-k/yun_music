import { createStore } from 'vuex';

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
      },
    ],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //是否显示暂停按钮
  },
  getters: {},
  mutations: {
    updateIsbtnShow: (state, value) => (state.isbtnShow = value),
  },
  actions: {},
  modules: {},
});
