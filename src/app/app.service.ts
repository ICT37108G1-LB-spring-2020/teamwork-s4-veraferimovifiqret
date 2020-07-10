import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httClient: any;

  constructor() { }

  products =  [
    {
        productName: 'Asus',
        year: 2015,
        ImageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc2/Asus_N_Serie.jpg',
      },
      {
        productName: 'HP',
        year: 2019,
        ImageUrl: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_HP_Envy_13_aq.jpg',
      },
      {
        productName: 'Acer',
        year: 2017,
        ImageUrl: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Aspire_1_A114_32.jpg',
      },
      {
        productName: 'MacBook',
        year: 2020,
        ImageUrl: 'https://images.macrumors.com/t/ULTXSEXwVJZE2YydZUyMQyZsEzw=/1600x0/article-new/2019/07/16inchmacbookprorender.jpg',

      },
  ];
  getProducts() {
      return this.products;
  }
  addPost(post: any): Observable<any> {
    return this.httClient.post('https://jsonplaceholder.typicode.com/posts', {
      productName: post.productName,
      year: post.year,
      ImageUrl: post.ImageUrl,
    });
  }
}
