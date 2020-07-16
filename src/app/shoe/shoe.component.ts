import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.sass']
})
export class ShoeComponent implements OnInit {
  id: number;
  shoe;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private shoesService: ShoesService) { 
    route.params.subscribe(
      params => { 
        this.id = params['id']; 
      }
    ); 
  };

  loadShoe(): void {    
    this.shoesService.requestShoeById(this.id).subscribe(
      (item) => {
        this.shoe = item;
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadShoe();
  }
}
