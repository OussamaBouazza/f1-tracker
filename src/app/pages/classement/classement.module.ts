import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassementPageRoutingModule } from './classement-routing.module';

import { ClassementPage } from './classement.page';
import {NavbarModule} from "../../navbar/navbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassementPageRoutingModule,
    NavbarModule
  ],
  declarations: [ClassementPage]
})
export class ClassementPageModule {}
