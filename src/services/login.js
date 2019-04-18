import request from '@/utils/request';

export async function login(params) {
    console.log('loginservice----');
    return request('/antdesignlite/user/v1/login', {
        method: 'POST',
        body: params,
    });
}