import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-nav',
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
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
          width: '50px',
          opacity: 0.8,
          backgroundColor: 'white',
        }),
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
})
export class SideNavComponent {

  isOpen:boolean = false;
  @Input() activeTab!:string;
  @Input() tabDetailList:any;
  @Output() selectedTab: EventEmitter<any> = new EventEmitter<string>;
  ngOnInit(){
    console.log('this.tabDetailList',this.tabDetailList);
    
  }
  openOrClose(){
    this.isOpen = !this.isOpen;
  }

  onSelect(tab:string){
    console.log('tab-----------',tab);
    
    this.selectedTab.emit(tab);
  }
}
