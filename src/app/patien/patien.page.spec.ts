import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatienPage } from './patien.page';

describe('PatienPage', () => {
  let component: PatienPage;
  let fixture: ComponentFixture<PatienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
