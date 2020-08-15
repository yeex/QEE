import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
import { IntroductionComponent } from './containers/introduction/introduction.component';
import { QuestionComponent } from './containers/question/question.component';
import { ResultsComponent } from './containers/results/results.component';

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
    IntroductionComponent,
    QuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
