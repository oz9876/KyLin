import { warn } from './dev'
/**
 * 判断类型
 * @param {*} data 
 * @param {string} type 
 */
function typeJudge(data,type){
    return Object.prototype.toString.call(data)==`[object ${type}]`
}
function handleError(err){
    if(process.env.NODE_ENV !== 'production'){
        warn(err)
    } else {
        console.error(err)
    }
}
export {
    typeJudge,
    handleError
};
