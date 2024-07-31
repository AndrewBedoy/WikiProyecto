import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-pais.component.html',
  styleUrl: './detalles-pais.component.css'
})
export class DetallesPaisComponent implements OnInit{
  country: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('name')!;
    this.dataService.getCountryByName(countryName).subscribe(data => {
      this.country = data[0]; // Assuming the response is an array
    });
  }

  getLanguages(languages: any): string[] {
    return Object.values(languages);
  }
}
