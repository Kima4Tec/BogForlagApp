import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAuthorComponent } from './get-author.component';

describe('GetAuthorComponent', () => {
  let component: GetAuthorComponent;
  let fixture: ComponentFixture<GetAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
