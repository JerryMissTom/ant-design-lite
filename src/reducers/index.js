import { loginReducer } from '@/reducers/login';
import { operateTabReducer } from '@/reducers/operateTab';
const rootReducer = {
    login: loginReducer,
    operateTab: operateTabReducer
}

export default rootReducer;