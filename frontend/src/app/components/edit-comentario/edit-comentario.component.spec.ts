import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComentarioComponent } from './edit-comentario.component';

describe('EditComentarioComponent', () => {
  let component: EditComentarioComponent;
  let fixture: ComponentFixture<EditComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComentarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
