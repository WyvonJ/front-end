<template>
  <div class="http-request">
    <FeButton @click="handlerXHRHttpRequest">
      XHR
    </FeButton>
    <FeButton @click="handlerPromiseXHR">
      Promise XHR
    </FeButton>
    <FeButton @click="handlerFetch">
      fetch
    </FeButton>
  </div>
</template>

<script>
// HTTP请求
// XHRHttpRequest, Fetch API, axios库
export default {
  name: 'HttpRequest',
  data() {
    return {

    };
  },
  methods: {
    // 基本xhr请求
    handlerXHRHttpRequest() {
      const xhr = new XMLHttpRequest();
      xhr.open('get', 'http://192.168.3.4:5001/static/hello.js', true);
      xhr.onreadystatechange = () => {
        // 状态为4表示准备好了
        if (xhr.readyState === 4) {
          // http状态码
          if (xhr.status === 200) {
            console.log(xhr.response);
          } else if (xhr.status === 404) {
            throw new Error('404');
          }
        }
      };
      xhr.send();
    },
    // 基于Promise封装xhr
    handlerPromiseXHR() {
      function ajax(url, method = 'get') {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url, true);
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                resolve(xhr.response);
              } else if (xhr.status === 404) {
                reject(new Error('404'));
              }
            }
          };
          xhr.send();
        });
      }

      ajax('http://192.168.3.4:5001/static/hello.js', 'get')
        .then((res) => {
          console.log(res);
        });
    },
    handlerFetch() {
      fetch('http://192.168.3.4:5001/static/hello.js')
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss">
.http-request {
}
</style>
