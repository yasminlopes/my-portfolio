import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSectionComponent } from './banner-section.component';

describe('BannerSectionComponent', () => {
  let component: BannerSectionComponent;
  let fixture: ComponentFixture<BannerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSectionComponent]
    });
    fixture = TestBed.createComponent(BannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
