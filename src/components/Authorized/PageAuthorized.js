
/*
 * 页面权限检查
 * @param { 权限判定 Boolean } isAuthorized
*/
export default function PageAuthorized(props) {
    if (props.isAuthorized) {
        return props.children;
    } else {
        return props.noMatch;
    }
}
// 用法
/**
 *     通过this.props.location.pathname（类似/home/dashboard）这样的字段，
 *     与后台登录获取的界面字段进行比对，返回true 或者 false
 *
 *    let isAuthorized=this.checkPageAuthority(pathname, authorizedPages);
 *
 *    <PageAuthorized  isAuthorized={isAuthorized}  noMatch={<403/>} >
 *      {children}
 *    </PageAuthorized>
 */