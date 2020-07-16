import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  shoes: Object; 
  loading: boolean;

  constructor(private shoesService: ShoesService) {

  }

  loadShoesList(): void { 
    this.loading = true; 
    
    this.shoesService.requestShoes().subscribe(data => {
      this.shoes = data;
      this.loading = false; 
    });
  }

  deleteShoe(id): void {
    this.shoesService.requestShoeDelete(id).subscribe(() => {
      this.loadShoesList();
    });
  }

  ngOnInit(): void {
    this.loadShoesList();
  }
}
