export function initSet(KyLin){
    
    // 初始化
    KyLin.prototype._init = function(options){ // options KyLin实例化参数
        console.log(1212)

        // 初始化生命周期组件
        // initLifecycle()
        
        // 初始化render方法组件
        // initRender()

        // 初始化内存监控组件
        // initMemoryWatch()

        // 初始化数据监听组件
        // initDataWatch()
        console.log(this, options)
    }
}
