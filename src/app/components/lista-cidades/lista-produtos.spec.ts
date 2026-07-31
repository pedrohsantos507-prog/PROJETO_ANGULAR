import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCidade } from './lista-cidades';

describe('ListaCidade', () => {
  let component: ListaCidade;
  let fixture: ComponentFixture<ListaCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCidade],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
