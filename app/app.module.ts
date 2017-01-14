import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent } from './courses.component';
import {AuthorsComponent } from './authors.component';
import {AuthorService} from "./author.service";
import {AutoGrowDirective} from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective ],
  bootstrap:    [ AppComponent ],
  providers: [AuthorService],
})
export class AppModule { }
