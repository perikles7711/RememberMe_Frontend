import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsuariosComponent } from './login-usuarios.component';

describe('LoginUsuariosComponent', () => {
  let component: LoginUsuariosComponent;
  let fixture: ComponentFixture<LoginUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
