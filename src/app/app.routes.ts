import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
        title:'Home'
    },
    {
        path:'category',
        loadComponent: () => import('./pages/category/category.component').then(c => c.CategoryComponent),
        title:'Category'
    },
    {
        path:'questions',
        loadComponent: () => import('./pages/questions/questions.component').then((c) => c.QuestionsComponent),
        title:'Questions'
    },
    {
        path:'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
        title:'Contact'
    },
    {
        // path:'admin',
        // children:[
            // {
                path:'admin',
                loadComponent: ()=> import('./pages/admin/admin.component').then(c => c.AdminComponent),
            // }
        // ]
    }
];
