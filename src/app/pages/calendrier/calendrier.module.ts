import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierPageRoutingModule } from './calendrier-routing.module';

import { CalendrierPage } from './calendrier.page';
import {NavbarModule} from "../../navbar/navbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierPageRoutingModule,
    NavbarModule
  ],
  declarations: [CalendrierPage]
})
export class CalendrierPageModule {}
