import { Component, OnInit } from '@angular/core';
import { Photo } from '../imagen';
import { ImagenService } from '../imagen.service';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagen-filtrar',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './imagen-filtrar.component.html',
  styleUrl: './imagen-filtrar.component.css'
})
export class ImagenFiltrarComponent implements OnInit{

  photos: any[] = [];
  filteredPhotos: any[] = [];

  constructor(private photoService: ImagenService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data: any[]) => {
      this.photos = data;
      this.filteredPhotos = this.photos.filter(photo => 
        photo.title.startsWith('a') || 
        photo.title.startsWith('r') || 
        photo.title.startsWith('s')
      );
    });
  }
}
