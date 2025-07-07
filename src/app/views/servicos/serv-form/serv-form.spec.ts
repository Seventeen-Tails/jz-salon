import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServForm } from './serv-form';

describe('ServForm', () => {
  let component: ServForm;
  let fixture: ComponentFixture<ServForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
