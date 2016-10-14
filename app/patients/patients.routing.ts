import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const patientsRoutes: Routes = [
    {
    path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  },
    {
        path: 'patients',
        children: [
            {
                path: '',
                component: PatientComponent,

            },
            {
                path: ':id',
                component: DetailComponent

            }
        ]
    }
];

export const patientsRouting: ModuleWithProviders = RouterModule.forChild(patientsRoutes);