import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { MatchPrediction } from '../../../../common/models';

@Component({
  selector: 'app-prediction-container',
  templateUrl: './prediction-container.component.html',
  styleUrls: ['./prediction-container.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
  ],
})
export class PredictionContainerComponent {
  private _modalCtrl = inject(ModalController);

  constructor() {}

  public onCancel(): void {
    this._modalCtrl.dismiss(null, 'cancel');
  }

  public onConfirm(): void {
    this._modalCtrl.dismiss({} as MatchPrediction, 'confirm');
  }
}
