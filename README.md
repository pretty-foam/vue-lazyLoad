#### Vue 图片懒加载


#### 使用说明
   1.在js中注入  
      const lazylaod = require("相应地址")</br>
      Vue.use(lazylaod)</br>
   2.在vue使用</br>
       例如：  img src="压缩图片地址" alt="" v-src="'高清地址'"</br>
              注意：  1. v-src必须为一个单引号与双引号</br>
                     2. 压缩地址没要求，v-src的图片必须放在static目录下</br>
                      例如static目录下有test.png图片， img src="压缩图片地址" alt="" v-src="'./test.png'"</br>


