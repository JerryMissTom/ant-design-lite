import request from '@/utils/request';

export async function login(params) {
    console.log('loginservice----');
    
    console.log(params);

    return request('api/login', {
        method: 'POST',
        body: params,
    });
}