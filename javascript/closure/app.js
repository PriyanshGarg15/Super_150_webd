// function outer(){
//     let a = 100;
//     let b = 200;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let out = outer();
// out();

function counter(){
    let count = 0;
    return{
        getCount : function(){
                      console.log(count);
                   },
        increment : function(){
                      count ++;
                    },
        decrement : function(){
                        count--;
                    },
        reset:function(){
                        count=0;
                    }
    }
}
let count1=counter();
count1.increment();
count1.increment();
count1.getCount();