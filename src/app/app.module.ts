import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/details/details.component';
import { DetailControlComponent } from './components/detail-control/detail-control.component';
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { UserSelectionsComponent } from './components/user-selections/user-selections.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from './modules/material.module';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailControlComponent,
    TopBarComponent,
    UserSelectionsComponent,
    SideBarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
