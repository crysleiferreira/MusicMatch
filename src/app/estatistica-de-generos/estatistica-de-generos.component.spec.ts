import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaDeGenerosComponent } from './estatistica-de-generos.component';

describe('EstatisticaDeGenerosComponent', () => {
  let component: EstatisticaDeGenerosComponent;
  let fixture: ComponentFixture<EstatisticaDeGenerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticaDeGenerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaDeGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
