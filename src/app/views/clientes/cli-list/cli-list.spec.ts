import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliList } from './cli-list';

describe('CliList', () => {
  let component: CliList;
  let fixture: ComponentFixture<CliList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
