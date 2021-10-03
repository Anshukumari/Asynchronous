/*console.log("This is tutorial for callback");
const students=[
    {name:"Anshu",subject:".Net"},
    {name:"Shashi",subject:"React"}
];
function enrollStrudent(student,callback)
{
    setTimeout(()=>{
        students.push(student);
        console.log('Student enrolled');
        callback();
    },6000);
}
function getStrudents()
{
    setTimeout(()=>{
        str='';
        students.forEach((stu)=>{
            str+=`<li>${stu.name} ${stu.subject}</li>`
        });
        let ele= document.getElementById('students');
        ele.innerHTML=str;
        console.log('Student Displayed');
    },2000);
}
let obj = {name:"Ankit",subject:"AWS"};
enrollStrudent(obj,getStrudents);
//getStrudents();*/
const students=[
    {name:"Anshu",subject:".Net"},
    {name:"Shashi",subject:"React"}
];
function enrollStrudent(student)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(students)
            {
            students.push(student);
            console.log('Student enrolled');
            resolve();
            }
            else
            {
                reject();
                console.log('Student not enrolled');
            }
        },2000);
    });
}
function getStrudents()
{
    setTimeout(()=>{
        str='';
        students.forEach((stu)=>{
            str+=`<li>${stu.name} ${stu.subject}</li>`
        });
        let ele= document.getElementById('students');
        ele.innerHTML=str;
        console.log('Student Displayed');
    },2000);
}
let obj = {name:"Ankit",subject:"AWS"};
enrollStrudent(obj).then(()=>{
    getStrudents();
}).catch(()=>{
    console.log('Student wont Displayed');
});
