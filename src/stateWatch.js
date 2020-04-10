
// 创建数据代理模块
export function initDataWatch(KyLin){
    
    // 把data挂在到实例上

    const dataDef = {}
    dataDef.get = function () { return this._data }


    // // data部分
    // Object.defineProperty(
    //     KyLin.prototype,
    //     '$data',
    //     dataDef
    // )
}

