import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispositivoPage } from './dispositivo.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('DispositivoPage', () => {
  let component: DispositivoPage;
  let fixture: ComponentFixture<DispositivoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispositivoPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  //  OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],      
    });


    fixture = TestBed.createComponent(DispositivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
