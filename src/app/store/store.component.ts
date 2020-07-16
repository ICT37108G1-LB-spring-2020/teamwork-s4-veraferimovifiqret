import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  shoes: Object; 
  loading: boolean = true;

  constructor(private shoesService: ShoesService) {

  }

  loadShoesList(): void { 
    this.shoesService.requestShoes().subscribe(data => {
      this.shoes = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loadShoesList();
  }
}
