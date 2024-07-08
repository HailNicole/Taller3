import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlatosComponent } from './form-platos.component';

describe('FormPlatosComponent', () => {
  let component: FormPlatosComponent;
  let fixture: ComponentFixture<FormPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPlatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
