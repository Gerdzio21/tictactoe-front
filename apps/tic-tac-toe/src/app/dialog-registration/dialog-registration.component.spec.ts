import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectNameOverviewComponent } from './dialog-registration.component';

describe('DialogSelectNameOverviewComponent', () => {
  let component: DialogSelectNameOverviewComponent;
  let fixture: ComponentFixture<DialogSelectNameOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSelectNameOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogSelectNameOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
