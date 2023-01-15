import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertItemComponent } from './concert-item.component';

describe('ConcertItemComponent', () => {
  let component: ConcertItemComponent;
  let fixture: ComponentFixture<ConcertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
