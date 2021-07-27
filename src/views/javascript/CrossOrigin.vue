<template>
  <div class="cross-origin">
    <FeButton @click="getHelloJsCORS"> CORS </FeButton>
    <FeButton @click="getHelloJsJSONP"> JSONP </FeButton>
  </div>
</template>

<script>
// 跨域
export default {
  name: 'CrossOrigin',
  data() {
    return {

    };
  },
  mounted() {
    window.jsonpCallback = (res) => {
      console.log('jsonp结果', res);
    };
  },
  methods: {
    // Nginx设置跨域请求头, 可以直接获取
    // *表示接受任意域名
    //  add_header 'Access-Control-Allow-Origin' *;
    // 是否允许发送Cookie
    //  add_header 'Access-Control-Allow-Credentials' 'true';
    // 表示服务器支持的所有跨域方法
    //  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    getHelloJsCORS() {
      // 简单请求指的是get post options
      // 浏览器发现请求为简单的ajax跨源请求, 就自动在请求头加上Origin字段, 用来说明此次请求来自哪个源
      // 如果Origin指定的源不在许可范围之内, 则回应的头中不包含Access-Control-Allow-Origin字段, 因此浏览器知道出错了, 从而抛出一个错误
      fetch('http://192.168.3.4:5001/static/hello.js')
        .then((res) => {
          console.log('CORS', res);
        });
    },
    // JSONP获取
    // node代码
    //   app.use(async ctx => {
    //   if (ctx.path === '/api/jsonp') {
    //     const { cb, id } = ctx.query;
    //     const item = items.find((n) => n.id === id);
    //     ctx.body = `${cb}(${JSON.stringify({
    //       type: 'jsonp',
    //       value: item.value
    //     })})`;
    //   }
    // })
    // 注意返回的是 `${cb}(data)` 也就是返回之后会执行cb方法
    getHelloJsJSONP() {
      const script = document.createElement('script');
      script.src = 'http://192.168.3.4:3000/api/jsonp?cb=jsonpCallback&id=1';
      script.type = 'text/javascript';
      document.body.append(script);
    },
  },
};
</script>
