import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemProvider {

  data: any;


  constructor(public http: Http) {
    this.data = null;
  }

  getItems() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

  return new Promise(resolve => {
    this.http.get('https://kickpusherz.herokuapp.com/api/items')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      resolve(this.data);
    });
  });
}

  getUserItems(seller) {

    return new Promise(resolve => {
      this.http.post('https://kickpusherz.herokuapp.com/api/useritems', { seller: seller} )
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  createItem(item) {
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://kickpusherz.herokuapp.com/api/items', JSON.stringify(item), {headers: headers})
    .subscribe(res => {
      console.log(res.json());
    });
  }

  deleteItem(id) {
    this.http.delete('https://kickpusherz.herokuapp.com/api/items/' + id)
    .subscribe((res) => {
      console.log(res.json());
    });
  }

}
