import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoverComponent } from './create-cover.component';

describe('CreateCoverComponent', () => {
  let component: CreateCoverComponent;
  let fixture: ComponentFixture<CreateCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
