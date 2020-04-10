import {typeJudge, handleError} from '../util/index'
import Dep from './observer/dep'
import {observe} from './observer/index'


export function initState(_this){
    _this._watchers = [] // 观察者对象

    const data = _this.$options.data
    if(data){
        if(typeJudge(data,'Function') ){
            _this.$data = data()
            // _this.$data
            var keys = Object.keys(_this.$data)
            var dataLength = keys.length;
            while(dataLength--){
                // 目的是把this._data的数据同步到this上
                proxy(_this, '$data', keys[dataLength])
            }
            
            // 双向数据绑定,设置观察者
            observe(_this.$data)
        } else {
            handleError('data应该是一个函数')
        }
    }
}

// 代理
function proxy(target, keyName, key){
    Object.defineProperty(
        target,
        key,
        {
            enumerable: true, // 可枚举
            configurable: true, // 可配置
            set: function(val){
                console.log('set')
                this[keyName][key]=val
            },
            get: function() {
                console.log('get')
                return this[keyName][key]
            }
        }
    )
}

