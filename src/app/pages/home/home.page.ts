import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { NextMatchComponent } from './components/next-match/next-match.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NextMatchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor() {}
}
