import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from "./author.service";
import {AutoGrowDirective} from './auto-grow.directive';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './components/loginPage/loginPage.component'
import {RegistryPageComponent} from './components/registry/registryPage.component'
import {MainPageComponent} from './components/mainPage/mainPage.component'


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent,
        AutoGrowDirective,
        LoginPageComponent,
        RegistryPageComponent,
        MainPageComponent
    ],
    bootstrap: [AppComponent],
    providers: [AuthorService],

})
    export class AppModule {
}
