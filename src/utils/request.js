import axios from 'axios';
// import store from '../store.js';
// import { Message, MessageBox } from 'element-ui';

let instance = axios.create({
    // baseURL: process.env.VUE_APP_API_URL,
    baseURL: 'http://47.114.135.205:8900/',
    timeout: 10000
});
instance.interceptors.request.use(config => {
    const questStatus = config.method;
    switch (questStatus) {
        case 'post': {
            config.params = config.params ? config.params : {};
            if (config.params.loginType) {
                delete config.params.loginType;
            } else if (config.params.uploadType) {
                config.headers['Content-Type'] = 'multipart/form-data; boundary=----WebKitFormBoundaryJ0BstsRQ55xWJzBB';
                delete config.params.uploadType;
                config.data = config.params;
                delete config.params;
            } else if (config.params.arrtype) {
                config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                config.data = config.params.arr;
                delete config.params;
            } else {
                config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            break;
        }
        default: {
            return config;
        }
    }
    return config;
})

instance.interceptors.response.use(response => {
    if (response.data === "") return;
    const res = response.data;
    if (response.status === 200 && res.code === 200) {
        return res;
    } else {
        // if (res.code === 401) {
        //     MessageBox.confirm('认证失效请重新登录', {
        //         confirmButtonText: '重新登录',
        //         type: 'warning',
        //     }).then(() => {
        //         Cookies.remove('Access-Token');
        //         location.reload();
        //     })

        // } else {
        //     Message({
        //         message: res.message,
        //         type: 'error',
        //         duration: 1000
        //     });
        // }
    }
}, error => {
    // Message({
    //     message: error.response.data.message,
    //     type: 'error',
    //     duration: 1000
    // });
    return Promise.reject(error);
})

export default instance;