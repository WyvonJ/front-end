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
  components: {

  },
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
    //  add_header 'Access-Control-Allow-Origin' *;
    //  add_header 'Access-Control-Allow-Credentials' 'true';
    //  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    getHelloJsCORS() {
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
