import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerbillingComponent } from './pages/customerbilling/customerbilling.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
    { path: '', 
     component : DashboardComponent,
     children : [
        {
            path : "",
            loadChildren : ()=> import("./pages/dashboard/dashboard.routes").then(r=>r.routes)
        }
     ]
   },
   {
    path : "customer",
     component : CustomerbillingComponent
   }
];  
