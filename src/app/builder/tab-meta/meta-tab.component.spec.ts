import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTabComponent } from './meta-tab.component';

describe('MetaTabComponent', () => {
  let component: MetaTabComponent;
  let fixture: ComponentFixture<MetaTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
