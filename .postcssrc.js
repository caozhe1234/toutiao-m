// postcss.config.js
// postcss配置文件
module.exports = {
  // 配只要使用的postcss插件
  plugins: {
    // 配置使用autoprefixer插件
    // 作用：生成浏览器css样式规则前缀
    // vuecli内部已经配置了autoprefixer插件
    // 所以有配置了一次，所以产生冲突了
    // 'autoprefixer': {//autoprefixer插件的配置
    //   //配置要兼容的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用postcss-pxtorem插件
    // 作用：把px转为rem
    'postcss-pxtorem': {
      // lib-flexible的rem适配方案：把一行分为10分，没分就是十分之一
      // rootValue应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿是750，所以应该设置为750/10 =75
      // 但是vant建议设置为37.5，因为vant是基于375写的
      // 所以必须设置为37.5，唯一的缺点是使用我们设计稿的尺寸都必须/2
      // 有没有更好的方法？
      // 如果是vant的样式，就按照37.5来转换
      // 如果是我们自己的样式，就按照75来转换
      // 通过查阅文档，我们发现rootvalue支持两种类型
      // 数字：固定的数值
      // 函数：可以动态参数返回
      // postcss-pxtorem处理每个css文件的时候都会来调用这个函数
      // 他会把被处理的css文件相关的信息通过参数传递给改函数
      // rootValue: 37.5,
      rootValue ({ file }) {
        // console.log('处理的css文件是', file);
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换的css属性
      //* 表示所有
      propList: ['*']
    }
  }
}
