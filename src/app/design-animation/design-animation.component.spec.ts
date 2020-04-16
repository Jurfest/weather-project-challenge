import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAnimationComponent } from './design-animation.component';

describe('DesignAnimationComponent', () => {
  let component: DesignAnimationComponent;
  let fixture: ComponentFixture<DesignAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
