import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import {MatButtonModule} from '@angular/material/button';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuperAdminComponent } from './shared/components/super-admin/super-admin.component';
import { PreventcopypasteDirective } from './shared/derivatives/preventcopypaste.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UsersComponent,
    UserComponent,
    ProductsComponent,
    ProductComponent,
    EditProductComponent,
    EditUserComponent,
    AuthComponent,
    AdminsComponent,
    SuperAdminComponent,
    PreventcopypasteDirective,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
