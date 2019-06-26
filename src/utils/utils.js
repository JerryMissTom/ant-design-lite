import Exception404 from '@/pages/Exception/404';

export function getTabFromDefinedTabList(key, tabs) {
    let tab = getTab(key, tabs);
    if (!tab) {
        tab['path'] = key;
        tab['name'] = '404';
        tab['component'] = Exception404;
    }
    return tab;
}

function getTab(path, tabList) {
    for (const item of tabList) {
        if (path.startsWith(item.path) && !item.children) {
            return item;
        } else if (item.children) {
            return getTab(path, item.children)
        }
    }
}