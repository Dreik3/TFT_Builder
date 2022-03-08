import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBuildsByRankTreeComponent } from './meta-builds-by-rank-tree.component';

describe('MetaBuildsByRankTreeComponent', () => {
  let component: MetaBuildsByRankTreeComponent;
  let fixture: ComponentFixture<MetaBuildsByRankTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaBuildsByRankTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaBuildsByRankTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
