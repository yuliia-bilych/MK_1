import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatrixInputComponent } from '../matrix-input/matrix-input.component';
import { MatrixOutputComponent } from '../matrix-output/matrix-output.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, MatrixInputComponent, MatrixOutputComponent]
})
export class HomePageModule {}
