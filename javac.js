
/*  why promises is invented?

asynchronus task basically uses callback function which lead to callback hell so to manage asynchronus task and avoid callback hell promises is developed  
*/

/* Why are async await better than promise.then design pattern? 

promises.then pattern makes code to read very difficult and it create promise hell(then hell) which can be avoided by using await function which can make our code readable and clean for understand

*/


//let's take an example where first sonpromise is executed then dadpromise is get called

const asyncFunction = async() =>{
let result = 95;
try{
    const SonPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },2000)
    }) 

    await SonPromise

    
// first son will complete his promise then dad will decide to give bike or not

const dadPromise = new Promise((resolve,reject)=>{
    if(result>90){
           resolve(`I'll give you bike because you scored more then 90% marks`)
       }
       else {
           reject('you have to try hard')
       }
      
   }
)
await dadPromise
return dadPromise
  
    }

catch(err) {
return err
    }

}
asyncFunction().then(m=>console.log(m))
