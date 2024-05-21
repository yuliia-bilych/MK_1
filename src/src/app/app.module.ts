import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Додано цей імпорт
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { MatrixInputComponent } from './matrix-input/matrix-input.component'; // Додано цей імпорт
import { MatrixService } from './services/matrix.service'; // Додано цей імпорт

@NgModule({
  declarations: [AppComponent, 
    // MatrixInputComponent // Додано цей імпорт
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    ReactiveFormsModule // Додано цей імпорт
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MatrixService],
  bootstrap: [AppComponent],
})
export class AppModule {}
