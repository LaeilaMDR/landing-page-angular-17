import { HttpClient } from '@angular/common/http';
import { Injectable , inject} from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http=inject(HttpClient);
  private urlBase: string='https://fakestoreapi.com/products';

  geProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }
    
  getProductById(id:number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
}
