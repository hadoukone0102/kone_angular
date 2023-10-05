import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifModelComponent } from './reactif-model.component';

describe('ReactifModelComponent', () => {
  let component: ReactifModelComponent;
  let fixture: ComponentFixture<ReactifModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactifModelComponent]
    });
    fixture = TestBed.createComponent(ReactifModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
