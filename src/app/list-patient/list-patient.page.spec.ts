import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPatientPage } from './list-patient.page';

describe('ListPatientPage', () => {
  let component: ListPatientPage;
  let fixture: ComponentFixture<ListPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
