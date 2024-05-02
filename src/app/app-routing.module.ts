import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialougeComponent } from './dialouge/dialouge.component';
import { PerioditableComponent } from './perioditable/perioditable.component';
import { SelectComponent } from './select/select.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
{
  path:'dialouge',
  component:DialougeComponent
},
{
  path:'peridictable',
  component:PerioditableComponent
},
{
  path:'select',
  component:SelectComponent
},
{
  path:'',
  component:EmployeeTableComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
