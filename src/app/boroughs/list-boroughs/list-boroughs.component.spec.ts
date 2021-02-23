import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoroughsComponent } from './list-boroughs.component';

describe('ListBoroughsComponent', () => {
  let component: ListBoroughsComponent;
  let fixture: ComponentFixture<ListBoroughsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoroughsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoroughsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
