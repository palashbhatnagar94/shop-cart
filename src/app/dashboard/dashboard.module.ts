import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { ProductComponent } from './product/product.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    CategoryNavigationComponent,
    ProductComponent,
    WordWrapPipe,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
