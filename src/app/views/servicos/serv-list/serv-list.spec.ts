import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServList } from './serv-list';

describe('ServList', () => {
  let component: ServList;
  let fixture: ComponentFixture<ServList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
