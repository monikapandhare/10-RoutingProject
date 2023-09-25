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
import { AuthGaurd } from './shared/services/auth.gaurd';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
import { UserRoleGaurd } from './shared/services/user-role.gaurd';
import { SuperAdminComponent } from './shared/components/super-admin/super-admin.component';
import { ProductResolverService } from './shared/services/product-resolver.service';

const routes: Routes = [
  {
    path : '', 
    component : AuthComponent,
  },
  {
    path : 'home', 
    component : DashBoardComponent,
    canActivate : [AuthGaurd],
    title : "Dashboard"
    
  },
  {
    path : 'users', 
    title : "Users",
    component : UsersComponent,
    canActivate : [AuthGaurd],
    canActivateChild : [AuthGaurd],
  
   
    children : [
      {
        path : 'addUsers' , 
        component : EditUserComponent,
       
      },
      {
        path : ':userId', 
        component : UserComponent,
       
      },
      {
        path:':userId/editUser', 
        component : EditUserComponent,
       
      }
    ]
  },
  
 
  {
    path : 'products', component : ProductsComponent,
    title : "Products",
    canActivate : [AuthGaurd],
    canActivateChild : [AuthGaurd],
    
    children : [
      {
        path : 'addProducts', component : EditProductComponent,
    
      },
      {
        path : ':pId', component : ProductComponent,
        resolve : {product :ProductResolverService}
      
      },
      {
        path : ':pId/edit', component : EditProductComponent,
        
      }
    ]
  },
  {
    path : "admins", component : AdminsComponent,
    canActivate : [AuthGaurd,UserRoleGaurd],
    data : {
      userRole : ["admin","SuperAdmins"]
    },
    title : "admin"
  },
  {
    path : "superAdmins", component : SuperAdminComponent,
    canActivate : [AuthGaurd,UserRoleGaurd],
    data : {
      userRole :["SuperAdmins"]
    },
    title:"superAdmins"
  },
  
  {
    path : 'page-not-found', component : PageNotFoundComponent,
    data : {
      msg : "page not found !!!"
    }
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
