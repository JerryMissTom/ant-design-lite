import login from './en-US/login';
import menu from './en-US/menu';
import error from './en-US/error';

export default {
    'loading': 'Loading',
    'profile': 'My Profile',
    'logout': 'Logout',
    'back': 'back',
    ...login,
    ...menu,
    ...error
}