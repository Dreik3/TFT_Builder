import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderTabComponent } from './builder-tab.component';

describe('BuilderTabComponent', () => {
  let component: BuilderTabComponent;
  let fixture: ComponentFixture<BuilderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
