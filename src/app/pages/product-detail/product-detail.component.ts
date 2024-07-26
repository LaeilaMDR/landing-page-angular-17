import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/productmodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  loading: boolean=true;
  public product?: IProduct;
  color: string='';
  
  private _routerActive= inject(ActivatedRoute);
  private _apiService= inject(ApiService);

  ngOnInit(): void {
     this._routerActive.params.subscribe( param =>{
      this._apiService.getProductById(param['id']).subscribe((data: IProduct) =>{
        console.log(data);
        this.product=data;
        this.loading=false;
      })
    }) 
  }


}
