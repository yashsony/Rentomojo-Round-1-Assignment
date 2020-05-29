import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { ContactdetailComponent } from '../contactdetail/contactdetail.component';

export const routes: Routes = [
    { path: 'menu',     component: MenuComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'contact/:id',     component: ContactdetailComponent },
  ];