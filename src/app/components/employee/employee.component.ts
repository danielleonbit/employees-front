import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/providers/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  listaEmpleados:any;
  listaRickandMorty:any;
  constructor(private _EmployeeService:EmployeeServiceService) { }

  ngOnInit(): void {
     
    this._EmployeeService.getEmployees().subscribe((data:any)=>{
      console.log(data);
      this.listaEmpleados = data;
    })

    this._EmployeeService.getRickandMOrty().subscribe((data:any)=>{
      console.log(data);
      this.listaRickandMorty = data.results
    })


  }

}
