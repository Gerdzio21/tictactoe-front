import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogRegistrationComponent} from './dialog-registration.component';

describe('DialogSelectNameOverviewComponent', () => {
  let component: DialogRegistrationComponent;
  let fixture: ComponentFixture<DialogRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
