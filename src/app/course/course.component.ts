import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  isLoading = false;
  toggleLoading = () => {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 5000)
  }
  constructor() { }

  ngOnInit() {
  }

}
