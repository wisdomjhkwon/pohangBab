import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ReviewData {
    data: any = null;
    constructor(public http: Http) { }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('assets/data.json')
                .map(res => res.json()).subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
    getReviews() {
        return this.load().then(data => {
            return data;
          });
        }
}