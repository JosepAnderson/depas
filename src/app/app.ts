import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portada } from './portada/portada';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Portada],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('entregadepa');
}
