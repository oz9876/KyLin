import { initLifecycle, callHook } from './lifecycle'

export function initSet(KyLin){
    // 初始化
    KyLin.prototype._init = function(options){ // options KyLin实例化参数
        console.log(1212)
        const _this = this;

        // 
        _this.$options = options

        // 初始化生命周期组件
        initLifecycle(_this)
        
        // 初始化render方法组件
        // initRender()

        // 初始化内存监控组件
        // initMemoryWatch()

        // 初始化数据监听组件
        // initDataWatch()
        callHook(_this, 'beforeCreate')

        // 挂state和props

        callHook(_this, 'created')
        console.log(this, options)
    }
}
