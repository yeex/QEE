import { ResultComponent } from './result/result.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StudentboardComponent } from './studentboard/studentboard.component';
import { TutorboardComponent } from './tutorboard/tutorboard.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent },
  { path: 'course', component: CourseComponent},
  { path: 'studentboard', component: StudentboardComponent},
  { path: 'tutorboard', component: TutorboardComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
