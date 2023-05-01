const preMovie = async()=>{

    const promiseWifebringingTicket= new Promise((resolve,reject)=>{
  
      setTimeout(()=>{
  
        resolve('ticket')
  
      },3000)
  
    })
  
  
  
    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'))
  
  
  
    const getButter = new Promise((resolve,reject)=>resolve('butter'))
  
  
  
    const getColdDrinks = new Promise((resolve,reject)=>resolve('cold-drink'))
  
     
  
  //  let ticket = await promiseWifebringingTicket
  
  //  let popcorn = await getPopcorn
  
  //  let butter= await getButter
  
  // return ticket
  
   
  
  let [ticket,popcorn,butter,colddrink] = await Promise.all([promiseWifebringingTicket,getPopcorn,getButter,getColdDrinks])
  
  return(`take ${popcorn}, ${butter} and ${colddrink}\nshow ${ticket} and\nlet's go.....`)
  
  }
  
  preMovie().then(m=>console.log(m))
  
  