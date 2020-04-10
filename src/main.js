
import { initSet } from './mixin'
import { initDataWatch } from './stateWatch'
import { handleError } from '../util/index'


// Kylin 构造函数
function KyLin(options){

    if(!(this instanceof KyLin)) {
        handleError('请保证KyLin是一个构造函数，且通过new创建')
    }
    // 验证options是否合法
    // 初始化  调用原型链上的_init方法
    this._init(options)
}
// 初始化一些配置，主要是原型链上挂一些方法
initSet(KyLin)

// 初始化数据监听组件
initDataWatch(KyLin)

export default KyLin
