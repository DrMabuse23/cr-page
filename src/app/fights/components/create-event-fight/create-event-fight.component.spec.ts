import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventFightComponent } from './create-event-fight.component';

describe('CreateEventFightComponent', () => {
  let component: CreateEventFightComponent;
  let fixture: ComponentFixture<CreateEventFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
