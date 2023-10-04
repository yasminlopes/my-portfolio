import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export interface ItemDropdown {
  img?: string;
  icon?: string;
  bgColor?: string;
  description: string;
  isVisible: boolean;
  onClickFunction: string;
  value?: unknown;
}

@Component({
  selector: 'app-button-dropdown',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
})
export class ButtonDropdownComponent {
  @Input() public img: string;
  @Input() public icon: string = 'more_vert';
  @Input() public title: string;
  @Input() public items: ItemDropdown[];
  @Input() public disabled: boolean = false;

  @Output() public selected = new EventEmitter<ItemDropdown>();

  ngOnDestroy() {
    window.removeEventListener('click', this.onClick);
  }

  private _elementRef = inject(ElementRef);

  public isOpen = signal(false);

  public toggleDropdown() {
    this.isOpen.update((isOpen) => !isOpen);
  }

  public selectItem(item: ItemDropdown) {
    this.selected.emit(item);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen.set(false);
    }
  }
}
