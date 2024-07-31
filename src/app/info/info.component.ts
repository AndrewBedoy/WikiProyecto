import { Component , OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  data: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
      this.llenarData();

  }

  llenarData(){
    this.dataService.getData().subscribe( data=> {
      this.data = data;
      console.log(this.data)
      
    })
  }


  viewCountryDetails(country: any): void {
    this.router.navigate(['/country', country.name.common]);
    console.log(country);
  }

 
}
