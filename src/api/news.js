import request from '../utils/request.js';
// 获取新闻列表
export const getNewsPage = params => {
    return request({
        url: '/news/getPage',
        method: 'post',
        params,
    });
};
// 获取详情
export const getNewsDetails = params => {
    return request({
        url: '/news/get',
        method: 'post',
        params,
    });
};
// 获取成功案例
export const getCasePage = params => {
    return request({
        url: '/caseInfo/getPage',
        method: 'post',
        params,
    });
};
// 咨询提交
export const addConsulting = params => {
    return request({
        url: '/contactRecords/saveOrUpdate',
        method: 'post',
        params,
    });
};
// 新闻点击量
export const newsCount = params => {
    return request({
        url: '/news/hitNews',
        method: 'post',
        params,
    });
};