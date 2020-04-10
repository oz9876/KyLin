import KyLin from 'KyLin'

var vm = new KyLin({
    el: 'app',
    data(){
        return{
            name:'hahahaha',
            age: 10,
            list:[1,,4,5,6],
            obj:{
                a:{
                    b:1
                }
            }
        }
    }
})


setTimeout(()=>{
    window.kyLin = vm

    // // kyLin.$data.name
    // console.log(kyLin.$data.name)
    // kyLin.$data.name=11
    // console.log('修改后', kyLin.$data.name)
    
    // kyLin.$data.list
    // console.log(kyLin.$data.list)
    // kyLin.$data.list=[2,4,6]
    // console.log('修改后', kyLin.$data.list)
},1000)
