import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuideComponent } from './edit-guide.component';

describe('EditGuideComponent', () => {
  let component: EditGuideComponent;
  let fixture: ComponentFixture<EditGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
