import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('StorageService', () => {
  let service: StorageService;
  let modal:ModalController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService, ModalController, AngularDelegate],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,
      ],
    });
    service = TestBed.inject(StorageService);
    modal = TestBed.inject(ModalController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
