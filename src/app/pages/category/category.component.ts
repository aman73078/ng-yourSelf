import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from "../../components/courses/courses.component";
import { InterviewCoursesComponent } from '../../components/interview-courses/interview-courses.component';
import { ProblemSolvingComponent } from '../../components/problem-solving/problem-solving.component';
import { SideNavComponent } from "../../components/side-nav/side-nav.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, CoursesComponent, InterviewCoursesComponent, ProblemSolvingComponent, SideNavComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '88vh',
          width:'500px',
          opacity: 1,
          backgroundColor: 'white',
        }),
      ),
      state(
        'closed',
        style({
          height: '88vh',
          // width: '5px',
          opacity: 0.8,
          backgroundColor: 'white',
        }),
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
})
export class CategoryComponent {
  isOpen:boolean = false;
  tabDetailList = [
    {
      label: 'Courses',
      key: 'courses',
      iconClass: 'bi bi-book fs-5 text-primary me-2',
    },
    {
      label: 'Interview Questions',
      key: 'interviewQuestions',
      iconClass: 'bi bi-question-circle fs-5 text-warning me-2',
    },
    {
      label: 'Practice Problems',
      key: 'practiceProblems',
      iconClass: 'bi bi-lightbulb fs-5 text-success me-2',
    }
  ];
  
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
  activeTab:string = 'courses';

  openOrClose(){
    this.isOpen = !this.isOpen;
  }

  onSelect(tab:string){
    this.activeTab = tab;
  }

  onSelectedTab(tab:string){
    this.activeTab = tab;
  }
}
