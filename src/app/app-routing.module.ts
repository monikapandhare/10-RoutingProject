import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';

const routes: Routes = [
  {
    path : '', component : DashBoardComponent,
  },
  {
    path : 'home', component : DashBoardComponent,
  },
  {
    path : 'users', component : UsersComponent,
  },
  {
    path : 'users/:userId', component : UserComponent,
  },
  {
    path : 'users/:userId/editUser', component : EditUserComponent,
  },
 
  {
    path : 'products', component : ProductsComponent,
  },
  {
    path : 'products/:pId', component : ProductComponent,
  },
  {
    path : 'products/:pId/edit', component : EditProductComponent,
  },
  {
    path : 'page-not-found', component : PageNotFoundComponent
  },
  {
    path : "**",
    redirectTo : 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
