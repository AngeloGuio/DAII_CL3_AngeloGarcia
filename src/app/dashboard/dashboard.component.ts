import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute

  ){
  }
     salir(): void{
    
      this.router.navigateByUrl("/home")
  }

    irHome():void{
      this.router.navigate(["home"],{relativeTo: this.route})
  
    }
    irEpisodies():void{
      this.router.navigate(["episodie"],{relativeTo: this.route})
    }
    irImagenes():void{
      this.router.navigate(["imagenes"],{relativeTo: this.route})
    }

  }

