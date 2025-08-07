import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectTypeDemo } from './rx-subject-type-demo';

describe('RxSubjectTypeDemo', () => {
  let component: RxSubjectTypeDemo;
  let fixture: ComponentFixture<RxSubjectTypeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxSubjectTypeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxSubjectTypeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
