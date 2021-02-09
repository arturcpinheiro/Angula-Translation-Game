import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { topComponent } from './Top/Top.component';
import { PanelComponent } from './panel/panel.component';
import { TriesComponent } from './tries/tries.component';
import { ProgressComponent } from './progress/progress.component'

@NgModule({
  declarations: [
    AppComponent,
    topComponent,
    PanelComponent,
    TriesComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
