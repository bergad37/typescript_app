type Employee={
  readonly id: number,
    name:string,
    retire:(date:Date)=>void   //use arrow function notation 
}

let employee: Employee={    // We defined and used our own type
  id: 1,
  name:'Gad',
  retire: (date:Date)=>{
    console.log(date);
  }
};