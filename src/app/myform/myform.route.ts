import { RouterModule, Routes } from '@angular/router'
import { MyformComponent } from './myform.component'
import { MychildComponent } from './mychild/mychild.component'
export const myroute: Routes = [
    {
        path: '',
        component: MyformComponent,
        children: [
            {
                path: 'testchild',
                component: MychildComponent
            }, {
                path: '',
                redirectTo: 'testchild',
                pathMatch: 'full'
            }
        ]
    }
]
export const routcomponent=[MyformComponent,MychildComponent]