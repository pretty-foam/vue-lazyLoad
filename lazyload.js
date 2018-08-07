module.exports = {
  install(Vue) {
    Vue.directive('src', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted(el, binding) {
        const top = el.getBoundingClientRect().top //滚动距离
        const wh = window.innerHeight //内容视口高度（ ie8以上兼容）

        //判读滚动距离是否小于内容视口高度
        if (top < wh) {
          const img = new Image()
          const url = binding.value //图片路径
          img.src = url
          img.onload = () => {
            el.src = url
          }
        } else {

          window.addEventListener('scroll', scroll)

          function scroll() {
            const range = el.getBoundingClientRect().top - wh //距离
            if (range < 0) {
              const img = new Image()
              const url = binding.value //图片路径
              img.src = url
              img.onload = () => {
                el.src = url
                window.removeEventListener('scroll', scroll)
              }
            }

          }
        }
      }
    })
  }
}