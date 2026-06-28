import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LayoutComponent } from "@shared/components/layout/layout.component";

export const MOVIES_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
]