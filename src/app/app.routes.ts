import { Routes } from '@angular/router';
import { AddNewCityComponent } from './Pages/add-new-city/add-new-city.component';
import { GetAllCitiesComponent } from './Pages/get-all-cities/get-all-cities.component';

export const routes: Routes = [
    {path:'add-new-city',component:AddNewCityComponent},
    {path:'get-all-cities',component:GetAllCitiesComponent},
    // {path:'search',com}
];
