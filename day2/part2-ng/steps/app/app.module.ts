import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComp } from './article.component';
import { HeaderComp } from './header.component';
import { MainComp } from './main.component';
import { NavComp } from './nav.component';

@NgModule({
  /* declarations is a list of all components, pipes and directives that your project contains  */
  declarations: [ AppComponent, HeaderComp, NavComp, MainComp, ArticleComp ],
  /* imports is a list of all modules that your project uses */
  imports: [ BrowserModule ],
  /* providers is a list of all services that your project uses */
  providers: [],
  /* bootstrap is a list of components that will be main components for your application */
  /* usually you will have one root component */
  bootstrap: [ AppComponent ]
})
export class AppModule { }
