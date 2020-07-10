import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  records: Array<any>;
  isDesc = false;
  column = 'CategoryName';
  cars: any;
  sorter = false;
  posts: FormGroup;
  post: any;
  subscription: Subscription = new Subscription();

  constructor(private carService: AppService,
              private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.cars = this.carService.getProducts();

    this.posts = this.fb.group({
      productName: ['', Validators.required],
      year: ['', Validators.required],
      ImageUrl: ['', Validators.required],
    });
  }
  addPost(form: FormGroup) {
    this.cars.push(
      {
        productName: form.value.productName,
        year: form.value.year,
        ImageUrl: form.value.ImageUrl,
      }
    );
    console.log(form);
    console.log(this.carService);
    form.reset();
  }
  removeItem(i: number): void {
    this.cars.splice(i, 1);
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    const direction = this.isDesc ? 1 : -1;

    // tslint:disable-next-line: only-arrow-functions
    this.cars.sort(function(a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

}
