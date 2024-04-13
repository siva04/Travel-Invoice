import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguecComponent } from './dialoguec.component';

describe('DialoguecComponent', () => {
  let component: DialoguecComponent;
  let fixture: ComponentFixture<DialoguecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialoguecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialoguecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
