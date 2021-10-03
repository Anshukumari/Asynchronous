function func1()
{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{ const error= true;
        if(!error)
        {
            console.log('Promise resolved');
            resolve();
        }
        else
        {
            console.log('Promise rejected');
            reject();
        }
       })
    });
}

func1().then(()=>{
    console.log('Thanks for resolving');
}).catch(()=>{
    console.log('very bad');
});