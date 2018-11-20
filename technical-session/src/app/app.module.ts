import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DevelopersComponent} from './developers/developers.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DeveloperComponent} from "./developers/developer/developer.component";

const routes: Routes = [
    {path: 'developers', component: DevelopersComponent},
    {path: 'home', component: HomeComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DevelopersComponent,
        DeveloperComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
