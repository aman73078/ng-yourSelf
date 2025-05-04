import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-courses',
  imports: [CommonModule],
  templateUrl: './interview-courses.component.html',
  styleUrl: './interview-courses.component.scss'
})
export class InterviewCoursesComponent {
  courses = [
    {name:'Javascript',imageUrl:'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto',
      questionCount:20
    },
    {name:'Typescript',imageUrl:'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto',
      questionCount:20
    },
    {name:'Angular',imageUrl:'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto',
      questionCount:20
    },
    {name:'NestJS',imageUrl:'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto',
      questionCount:20
    },
    {name:'MySQL',imageUrl:'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto',
      questionCount:20
    }
  ]
}
