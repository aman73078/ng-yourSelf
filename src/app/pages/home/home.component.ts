import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MessangerComponent } from "../../components/header/messanger/messanger.component";

@Component({
  selector: 'app-home',
  imports: [NgbTooltipModule, NgbCarouselModule, CommonModule, MessangerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { class: 'd-block' },
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imagesList = [
    {language:'Javascript',imageUrl:'https://ik.imagekit.io/ably/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png?tr=w-1728,q-50'},
    {language:'Typescript',imageUrl:'https://angularexperts.imgix.net/blog/advanced-typescript/title-16x9.webp?auto=format&w=1920'},
    {language:'Angular',imageUrl:'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*MXvOz8l93IDpSbcK'}
  ]
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

  faqs = [
    {
      question: 'What is this service about?',
      answer: 'We provide [brief description] to help users [benefit].',
      open: false
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact us at support@example.com.',
      open: false
    },
    {
      question: 'Do I need an account to use the service?',
      answer: 'Creating an account allows access to premium features.',
      open: false
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page.',
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
