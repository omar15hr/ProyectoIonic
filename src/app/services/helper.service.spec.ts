import { TestBed } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('HelperService', () => {
  let service: HelperService;
  let modal:ModalController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HelperService, ModalController, AngularDelegate]
    });
    service = TestBed.inject(HelperService);
    modal = TestBed.inject(ModalController);
  });

  it('Probando el Toast', async() => {
    let toast = await service.showToast('This is a toast message', 2000);
    expect(toast.message).toBe('This is a toast message');
    expect(toast.duration).toBe(2000);
    expect(toast.position).toBe('bottom');
    expect(toast.color).toBe('dark');
  }, 15000);
});