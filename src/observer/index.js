import {
    def
} from '../../util/index'
import Dep from './dep'
import Watcher from './watcher'

/*     
    Dep中有一个subs数组，数组中存放了很多个watcher订阅者

    watcher也对应着data中的一个个数据， data中的数据进行修改的时候setter只会触发Dep的subs的函数。
*/


export function observe(value){
    console.log('new Observer')
    return new Observer(value)
}

export class Observer{
    constructor(value){ // 传过来的value 是_this.$options.data 也就是this.data
        // 把Observer实例放在this.data.__ob__下
        // 第四个参数未传，所以生成是不可遍历的
        def(value, '__ob__', this)  

        this.walk(value)
    }

    walk(obj){
        const keys = Object.keys(obj)  // 首次参数实际为this.data的所有可遍历key

        for (let i = 0; i < keys.length; i++) {
            // 传入的是 this.data 属性名 属性值
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }
}

// 双向数据绑定核心
export function defineReactive(obj, key, val ){
    // Object.getOwnPropertyDescriptor是判断对象自身是否有一个属性，而不是原型链上的。  另外一个用法是用.value 返回属性具体的值
    const property = Object.getOwnPropertyDescriptor(obj, key)

    // 不可编辑则停止
    if (property && property.configurable === false) {
        return
    }
    const getter = property && property.get

    // 在闭包中定义一个dep对象，以保证dep唯一
    const dep = new Dep()
    Object.defineProperty(obj, key, {  // 首次参数为 this.data 属性名
        enumerable: true,
        configurable: true,
        set: function(value){
            console.log(value, obj[key])
            // if(val == obj[key]){
            //     return;
            // }
            val = value;
            dep.notify();
        },
        get: function(){
            console.log(obj, key, val)
            Dep.target = new Watcher(this);
            if(Dep.target){
                /*Watcher的对象存在全局的Dep.target中*/
                // 依赖收集
                dep.depend()
            }
            return val;
        }
    })
    // 递归处理子级数据
    // observe(val)
}