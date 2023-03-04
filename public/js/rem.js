function remSize() {
  //获取设备宽度
  const deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  // 750是设计稿的宽度，100是为了方便计算，1rem=100px
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  // 设置字体大小
  document.querySelector('body').style.fontSize = 0.3 + 'rem';
}
remSize();
// 窗口发生变化时调用
window.onresize = function() {
  remSize();
};
