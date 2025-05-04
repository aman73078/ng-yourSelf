import { Component } from '@angular/core';
import { SideNavComponent } from "../../components/side-nav/side-nav.component";

@Component({
  selector: 'app-admin',
  imports: [SideNavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  selectTab:string = 'create-course';
  tabDetailList = [
    {
      label: 'Create Courses',
      key: 'createCourse',
      iconClass: 'bi bi-journal-plus fs-5 text-primary me-2'
    },
    {
      label: 'Add Interview Questions',
      key: 'addInterviewQuestions',
      iconClass: 'bi bi-question-square fs-5 text-warning me-2'
    },
    {
      label: 'Add Practice Questions',
      key: 'addPracticeQuestions',
      iconClass: 'bi bi-pencil-square fs-5 text-success me-2'
    }
  ];
  

  onSelectedTab(tab:string){
    this.selectTab = tab;
  }
}
