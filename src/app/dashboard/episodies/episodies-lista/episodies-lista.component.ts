import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';

import { EpisodeService } from '../episode.service';
import { Episode } from '../episodie';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-episodies-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './episodies-lista.component.html',
  styleUrl: './episodies-lista.component.css'
})
export class EpisodiesListaComponent implements OnInit{

  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episodeService.getOddEpisodes().subscribe({
      next: (data: Episode[]) => {
        console.log(data); // Verifica los datos recibidos en la consola
        this.episodes = data;
      },
      error: (err) => {
        console.error('Error fetching episodes:', err); // Maneja errores
      }
    });
  }
}
