import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdownComponent } from './button-dropdown.component';

describe('ButtonDropdownComponent', () => {
  let component: ButtonDropdownComponent;
  let fixture: ComponentFixture<ButtonDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDropdownComponent]
    });
    fixture = TestBed.createComponent(ButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
