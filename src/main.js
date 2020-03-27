
import { initSet } from './mixin'

// Kylin 构造函数
function KyLin(options){

    if(!(this instanceof KyLin)) {
        warn(' is a constructor and should be called with the `new` keyword')
    }
    // 验证options是否合法
    // 初始化  调用原型链上的_init方法
    this._init(options)
}
// 初始化一些配置，主要是原型链上挂一些方法
initSet(KyLin)

export default KyLin
