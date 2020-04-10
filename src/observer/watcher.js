import Dep, {pushTarget} from './dep'

export default class Watcher {
    constructor(){
        // Dep.target = this;
        this.deps=[]; // 订阅者集合
        this.depIds=new Set(); // 订阅者Id表
    }
    update(){
        console.log('触发更新', this)
    }
    get(){
        console.log('触发Watcher的get')
        // pushTarget(this)
    }
    addDep(dep){
        const id = dep.id

        if(!this.depIds.has(id)){
            this.depIds.add(id)
            this.deps.push(this)
            dep.addSub(this)
        }
        
    }

  /**
   * Depend on all deps collected by this watcher.
   */
   /*收集该watcher的所有deps依赖*/
   depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }
}