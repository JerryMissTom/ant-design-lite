/*
 * 功能权限检查
 * @param { 权限判定 Boolean } isAuthorized
*/

export default function FunctionAuthorized(props) {
    if (props.isAuthorized) {
        return null;
    } else {
        return props.children;
    }
}

// 用法
/**
 *     每个功能有一个functionKey，比如'user.submit'这样的，与后台登录获取的Function字段进行比对，返回true 或者 false
 *
 *    let isAuthorized=this.checkFunctionAuthority(functionKey, authorizedFunctions);
 *
 *    <FunctionAuthorized  isAuthorized={isAuthorized} >
 *      <Button>提交</Button>
 *    </FunctionAuthorized>
 */