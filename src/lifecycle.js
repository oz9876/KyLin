
import {typeJudge, handleError} from '../util/index'

export function initLifecycle(kyLinContext){
    console.log(kyLinContext.$option)
}

export function callHook(kyLinContext, hook){
    const hookFun = kyLinContext.$options[hook]
    if(hookFun){
        if( typeJudge(hookFun,'Function')){
            try{
                hookFun.call(kyLinContext)
            }catch(e){
                handleError(e)
            }
        } else {
            handleError(`${hook}应该是个方法，而且唯一`)
        }
    }
}