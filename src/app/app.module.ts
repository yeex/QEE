import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CourselistComponent } from './courselist/courselist.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { StudentboardComponent } from './studentboard/studentboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { TutorboardComponent } from './tutorboard/tutorboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CourselistComponent,
    HomeComponent,
    CourseComponent,
    StudentboardComponent,
    NavbarComponent,
    FooterPageComponent,
    TutorboardComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
