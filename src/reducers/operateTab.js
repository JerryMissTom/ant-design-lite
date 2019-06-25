import { ADD_TAB, REMOVEW_TAB, CLEAR_TAB, CHANGE_TAB } from '@/actionTypes/index';

const initState = {
    tabList: [],
    activeTabKey: '/home/dashboard'
}

function operateTabReducer(state = initState, action) {

    let exsit = false;
    let list = [];
    let activeTabKey = '/home/dashboard';

    switch (action.type) {
        case ADD_TAB:
            list = state.tabList.filter(item => item);
            // 判断Tab列表中是否有此界面，假如有，则跳转到此界面，假如没有，则在列表中新增
            for (const item of state.tabList) {
                if (item.path === action.payload.path) {
                    exsit = true;
                    break;
                }
            }
            if (!exsit) {
                list.push(action.payload);
            }
            window.location.hash = `#${action.payload.path}`;
            return {
                ...state,
                tabList: list,
                activeTabKey: action.payload.path
            }
        case REMOVEW_TAB:
            // 关闭Tab，两种情况，假如是关闭当前Tab，则显示前一个Tab，否则直接关闭
            if (state.activeTabKey === action.payload) {
                state.tabList.forEach((item, i) => {
                    if (item.path === action.payload && state.tabList.length > 1) {
                        activeTabKey = state.tabList[i - 1].path;
                    }
                });
                list = state.tabList.filter(item => item.path !== action.payload);
            } else {
                list = state.tabList.filter(item => item.path !== action.payload)
                activeTabKey = state.activeTabKey;
            }
            // TODO 删除一个Tab，需要调整URL
            window.location.hash = `#${activeTabKey}`;
            return {
                ...state,
                tabList: list,
                activeTabKey: activeTabKey
            }
        case CLEAR_TAB:
            window.location.hash = `#/home/dashboard`;
            return {
                ...state,
                tabList: [state.tabList[0]],
                activeTabKey: '/home/dashboard'
            }
        case CHANGE_TAB:
            window.location.hash = `#${action.payload}`;
            return {
                ...state,
                activeTabKey: action.payload
            }
        default:
            return state
    }
}

export { operateTabReducer }