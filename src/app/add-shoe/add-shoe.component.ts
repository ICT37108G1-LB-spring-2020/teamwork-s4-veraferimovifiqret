import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.sass']
})
export class AddShoeComponent implements OnInit {
  addShoeForm:FormGroup; 

  constructor(formBuilder: FormBuilder, private shoesService: ShoesService) {
    this.addShoeForm = formBuilder.group({
      'model': [''],
      'type': [''],
      'price': [''],
      'imgUrl': ['']
    })
  }

  addShoe(){
    this.shoesService.requestShoeAdding(this.addShoeForm.value).subscribe(() => {
      alert("Shoe has been successfully added!");
      this.addShoeForm.reset();
    });
  }

  onSubmit(): void {
    this.addShoe();
  }

  ngOnInit(): void {
  }
}
