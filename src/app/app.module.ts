import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component'
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BookDetailsComponent } from './book-details/book-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MembershipComponent } from './membership/membership.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { GenreCmpComponent } from './genre-cmp/genre-cmp.component';
import { FavCmpComponent } from './fav-cmp/fav-cmp.component';
import{MatListModule} from '@angular/material/list';
import { HighlightDirective } from './highlight.directive';
import { SampleDirective } from './sample.directive';
import {MatExpansionModule} from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store';










@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AddBookComponent,
    DescriptionComponent,
    LoginComponent,
    BookDetailsComponent,
    MembershipComponent,
    GenreCmpComponent,
    FavCmpComponent,
    HighlightDirective,
    SampleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
    StoreModule.forRoot({}, {})
    
    

    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
