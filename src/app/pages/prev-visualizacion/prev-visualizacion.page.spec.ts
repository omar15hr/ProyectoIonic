import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevVisualizacionPage } from './prev-visualizacion.page';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('PrevVisualizacionPage', () => {
  let component: PrevVisualizacionPage;
  let fixture: ComponentFixture<PrevVisualizacionPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevVisualizacionPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], //  OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
    });


    fixture = TestBed.createComponent(PrevVisualizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
