module.exports = {
  install(Vue) {
    Vue.directive('src', {
      // 当被绑定的元素插入到 DOM 中时
      inserted(el, binding) {
        const top = el.getBoundingClientRect().top //滚动距离
        const wh = window.innerHeight //内容视口高度（ ie8以上兼容）
        const host = window.location.origin || 'http://' + window.location.host //baseUrl
        //图片加载
        function picture(el, binding, callback) {
          setTimeout(() => {
            const img = new Image()
            const url = binding.value //图片路径
            img.src = host + '/' + url
            img.onload = () => {
              el.src = host + '/' + url
              if (callback) {
                callback()
              }
            }
          }, 1000)
        }
        //判读滚动距离是否小于内容视口高
        if (top < wh) {
          picture(el, binding)
        } else {
          window.addEventListener('scroll', scroll)

          function scroll() { 
            const range = el.getBoundingClientRect().top - wh //距离
            if (range < 0) {
              picture(el, binding, () => {
                window.removeEventListener('scroll', scroll)
              })
            }

          }
        }
      }
    })
  }
}
