import Watcher from './watcher'

export default class Dep {
    constructor(){
        this.subs=[]
        console.log('初始化Dep')
    }
    notify(val){
        // 数组对象转为数组
        const subsList = this.subs.slice()
        //for循环性能优于map，数组长度提前计算性能更好
        for(let i=0, len =subsList.length; i<len; i++){
            subsList[i].update(); // update方法是通过Watch挂载在原型下的
        }
    }
    addSub(val){
        this.subs.push(val)
        console.log('添加属相到Dep', val)
    }
    depend () {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }
}

Dep.target = null

// const targetStack = []

// /*将watcher观察者实例设置给Dep.target，用以依赖收集。同时将该实例存入target栈中*/
// export function pushTarget (_target) {
//     if (Dep.target) targetStack.push(Dep.target)
//     Dep.target = _target
//   }


// Dep.target = new Watcher(this);
