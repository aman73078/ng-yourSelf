import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messanger',
  imports: [CommonModule,FormsModule],
  templateUrl: './messanger.component.html',
  styleUrl: './messanger.component.scss'
})
export class MessangerComponent {
  isMessanger:boolean = false;
  newMessage: string = '';
  
  messages = [
    { type: 'incoming', text: 'Hi! How can I help you today?' },
    { type: 'outgoing', text: 'I have a question about your product.' }
  ];

  @HostListener('document:click', ['$event'])
onClick(event: MouseEvent) {
  const messengerBox = document.getElementById('messanger-box');
  
  if (this.isMessanger && messengerBox && !messengerBox.contains(event.target as Node)) {
    this.isMessanger = false;
  }
}


  openMessanger(){
    this.isMessanger =  !this.isMessanger;
    console.log('this.isMessanger',this.isMessanger);
    
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ type: 'outgoing', text: this.newMessage });
      this.newMessage = '';
      // Optionally simulate an incoming reply
      setTimeout(() => {
        this.messages.push({ type: 'incoming', text: 'Thanks for your message!' });
      }, 1000);
    }
  }
}
