import { initLifecycle, callHook } from './lifecycle'
import { initState } from './state'

export function initSet(KyLin){
    // 初始化
    KyLin.prototype._init = function(options){ // options KyLin实例化参数
        console.log('_init')
        const _this = this;

        // 
        _this.$options = options
        // 初始化生命周期组件
        initLifecycle(_this)
        
        // 初始化render方法组件
        // initRender() 

        // 初始化内存监控组件
        // initMemoryWatch()

        callHook(_this, 'beforeCreate')


        // 挂state和props
        initState(_this)

        callHook(_this, 'created')
        console.log(this, options)
    }
}

