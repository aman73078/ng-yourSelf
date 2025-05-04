import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive,NgbTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { class: 'd-block' },
})
export class HeaderComponent {

}
