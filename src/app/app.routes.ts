import { Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [
    {
        path: "works",
        component: WorksComponent 
    },
    {
        path: "",
        component: MainComponent 
    }
];
