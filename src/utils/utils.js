import Exception404 from '@/pages/Exception/404';
import tabs from '@/router/tabs';

const getTab = (path, tablist) => {
    for (const item of tablist) {
        if (path.startsWith(item.path) && !item.children) {
            return item;
        } else if (path.startsWith(item.path) && item.children) {
            return getTab(path, item.children)
        }
    }
}

export function getTabFromDefinedTabList(key) {

    let tab = {};
    let temp = getTab(key, tabs);
    // 假如不存在，则返回404页面
    if (!temp) {
        tab['name'] = '404';
        tab['isAuthorized'] = true;
        tab['component'] = Exception404;
    } else {
        tab = {
            ...temp
        };
    }
    tab['path'] = key;

    return tab;
}

