class Employee
{
    private readonly empno:number;
    private ename:string;
    private sal:number;
    private attendance:any;


// constructor(){
// this.empno=101;
// this.ename="abc";
// this.sal=20000;
// this.attendance=18;
// }


public getEmpno():number{
    return this.empno;
}
public getEname():String{
    return this.ename;
}public getSal():number{
    return this.sal;
}
public getAttendance():String{
    return this.attendance;
}

constructor(empno:number,
    ename:string,
    sal:number,attendance:any){
        this.empno=empno;
        this.ename=ename;
        this.sal=sal;
        this.attendance=attendance

    }
print():void{
    console.log(this.empno,this.ename,this.sal,this.attendance);
}
}
var emp=new Employee(101,'abc',20000,18);
var emp1=new Employee(102,'bcd',30000,19);
//emp1.empno=102;
var emp2=new Employee(103,'gcf',40000,15);
//emp2.empno=103;
emp.print();
emp1.print();
emp2.print();


var emparray:Employee[]=[emp,emp1,emp2];


     emparray.forEach(element => {
        console.log(element);
     });