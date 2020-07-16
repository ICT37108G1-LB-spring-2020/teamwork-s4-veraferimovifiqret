import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShoesService} from '../services/shoes.service';

@Component({
  selector: 'app-edit-shoe',
  templateUrl: './edit-shoe.component.html',
  styleUrls: ['./edit-shoe.component.sass']
})
export class EditShoeComponent implements OnInit {
  editShoeForm:FormGroup; 
  id: number;
  shoe;
  loading: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private shoesService: ShoesService) { 
    route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
  };

  editShoe(){
    this.shoesService.requestShoeEdditing(this.id, this.editShoeForm.value).subscribe(() => {
      alert("Shoe has been successfully edited");
    });
  }

  onSubmit() {
    if(this.loading == true) {
      return;
    }
    this.editShoe();
  }

  loadShoe(): void {    
    this.shoesService.requestShoeById(this.id).subscribe(
      (item:any) => {
        this.editShoeForm = this.formBuilder.group({
          'model': [`${item.model}`],
          'type': [`${item.type}`],
          'price': [`${item.price}`],
          'imgUrl': [`${item.imgUrl}`]
        })
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadShoe();
  }
}
