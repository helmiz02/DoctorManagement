import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendPage } from './calend.page';

describe('CalendPage', () => {
  let component: CalendPage;
  let fixture: ComponentFixture<CalendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
