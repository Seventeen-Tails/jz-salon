import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliForm } from './cli-form';

describe('CliForm', () => {
  let component: CliForm;
  let fixture: ComponentFixture<CliForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
