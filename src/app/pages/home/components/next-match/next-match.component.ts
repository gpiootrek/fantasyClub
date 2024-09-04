import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  viewChild,
} from '@angular/core';
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { PredictionContainerComponent } from '../prediction/prediction-container.component';

@Component({
  selector: 'app-next-match',
  templateUrl: './next-match.component.html',
  styleUrls: ['./next-match.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonIcon,
    IonModal,
    IonRow,
    PredictionContainerComponent,
  ],
  providers: [ModalController],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextMatchComponent {
  eventTitle = input<string>();
  eventDetails = input<string>();
  modal = viewChild.required<IonModal>(IonModal);
  private _modalCtrl = inject(ModalController);

  constructor() {
    addIcons({ arrowForwardOutline });
  }

  public async openModal() {
    const modal = await this._modalCtrl.create({
      component: PredictionContainerComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
    }
  }
}
