import { Component, ViewChild } from '@angular/core';
import { faSnapchatSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquarePollVertical, faHouse, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar-create',
  templateUrl: './nav-bar-create.component.html',
  styleUrls: ['./nav-bar-create.component.scss']
})
export class NavBarCreateComponent {
  faSquare=faSquarePollVertical
  faHouse=faHouse;
  faSquareH=faSnapchatSquare

  faUp=faChevronUp;
  faDown=faChevronDown;

  listItem=['Boards', 'Highlights', 'Members', 'Views', 'Settings']

}
