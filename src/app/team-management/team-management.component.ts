import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeamManagamentService } from '../team-managament.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html'
})
export class TeamManagementComponent implements OnInit {
  ngOnInit(){

  }
  constructor(
    private formBuilder:FormBuilder,
    private TeamMngServices:TeamManagamentService)
    {}
  teamForm=this.formBuilder.group({
    teamName:['',Validators.required],
    employees: this.formBuilder.array([])
    });
    get teamName(){
      return this.teamForm.get('teamName') as FormControl;
    }
    get employees(){
      return this.teamForm.get('employees') as FormArray;

    }
    addEmployeeControl(){

      const  empGroup= this.formBuilder.group({
        empName:['',Validators.required],
        age:['',Validators.required],
        city:['',Validators.required]
      })
      this.employees.push(empGroup);
    }
    deleteEmployeeControl(index:number){
      this.employees.removeAt(index);
    }
    resetEmployees(){
      this.employees.reset();
    }
    clearEmployeeControl(){
      this.employees.clear();
    }



    onFormSubmit(){
   console.log(this.teamForm.value);
    }


}
