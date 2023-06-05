import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() typeButton: 'submit' | 'reset'|'button'='button';
  @Input() bgColor='green';
  @Input() callback:()=>void=()=>{}
}
