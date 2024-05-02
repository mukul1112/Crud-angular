import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DialougeComponent } from './dialouge/dialouge.component';
import { DialougeoverviewComponent } from './dialougeoverview/dialougeoverview.component';


import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from '../material.module';
import { PerioditableComponent } from './perioditable/perioditable.component';
import { SelectComponent } from './select/select.component';

import { AddeditformComponent } from './addeditform/addeditform.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { DeleteDialogeComponent } from './delete-dialoge/delete-dialoge.component';


@NgModule({
  declarations: [
    AppComponent,
    DialougeComponent,
    DialougeoverviewComponent,
    PerioditableComponent,
    SelectComponent,
    
    AddeditformComponent,
    EmployeeTableComponent,
    DeleteDialogeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
