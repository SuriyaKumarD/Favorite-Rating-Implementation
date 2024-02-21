import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  @Input() likesCount: any;
  @Input() isActive: any;

  LikedUnliked() {
    this.likesCount = this.isActive ? 1 : -1;
    this.isActive = !this.isActive;
  }
}
