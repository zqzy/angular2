import { RouterModule, Routes } from '@angular/router'
export const myroute: Routes = [
    {
        path:'test',
        loadChildren:'./myform/myform.module#MyformModule'
    },{
        path:'',
        redirectTo:'test',
        pathMatch:'full'
    }
]