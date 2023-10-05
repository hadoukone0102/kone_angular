import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemodelComponent } from './templatemodel.component';

describe('TemplatemodelComponent', () => {
  let component: TemplatemodelComponent;
  let fixture: ComponentFixture<TemplatemodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatemodelComponent]
    });
    fixture = TestBed.createComponent(TemplatemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
