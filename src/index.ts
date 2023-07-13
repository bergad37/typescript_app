let employee:{
  readonly id: number,
  name:string,
  retire:(date:Date)=>void   //use arrow function notation
   
}={ 
  id: 1,
  name:'Gad',
  retire: (date:Date)=>{
    console.log(date);
  }
};