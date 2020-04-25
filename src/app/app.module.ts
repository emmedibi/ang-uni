import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MyButtonComponent } from './my-button/my-button.component';
import { Form1Component } from './form1/form1.component';
import { BooklistComponent} from './booklist/booklist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const appRoutes: Routes = [
  { path: 'form1', component: Form1Component },
  { path: 'booklist', component: BooklistComponent }
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      AppRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ],
  declarations: [
    AppComponent,
    MyButtonComponent,
    Form1Component,
    BooklistComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
