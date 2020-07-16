import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { ShoesService } from './services/shoes.service';
import { ShoeComponent } from './shoe/shoe.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { EditShoeComponent } from './edit-shoe/edit-shoe.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AdminComponent,
    ShoeComponent,
    SpinnerComponent,
    AddShoeComponent,
    EditShoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
