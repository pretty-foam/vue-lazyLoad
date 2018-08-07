module.exports = {
  install(Vue) {
    Vue.directive('src', {
      // �����󶨵�Ԫ�ز��뵽 DOM ��ʱ����
      inserted(el, binding) {
        const top = el.getBoundingClientRect().top //��������
        const wh = window.innerHeight //�����ӿڸ߶ȣ� ie8���ϼ��ݣ�

        //�ж����������Ƿ�С�������ӿڸ߶�
        if (top < wh) {
          const img = new Image()
          const url = binding.value //ͼƬ·��
          img.src = url
          img.onload = () => {
            el.src = url
          }
        } else {

          window.addEventListener('scroll', scroll)

          function scroll() {
            const range = el.getBoundingClientRect().top - wh //����
            if (range < 0) {
              const img = new Image()
              const url = binding.value //ͼƬ·��
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