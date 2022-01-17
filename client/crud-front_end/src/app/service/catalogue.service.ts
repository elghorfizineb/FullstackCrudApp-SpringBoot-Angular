import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string="http://localhost:8080";

  constructor(private httpClient:HttpClient) {}

    public getProducts(page:number,size:number){
      return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
    }

    public getProductsByKeywords(mc:string,page:number,size:number){
      return this.httpClient.get(this.host+"/produits/search/byNamePage?nom="+mc+"&page="+page+"&size="+size);

    }

    public deleteRessource(url:any){
    return this.httpClient.delete(url);
    }

    public saveRessource(url:any,data:any):Observable<Product>{
      return this.httpClient.post<Product>(url,data);
    }
  public getRessource(url:any):Observable<Product>{
    return this.httpClient.get<Product>(url);
  }
  public updateRessource(url:any,data:any):Observable<Product>{
    return this.httpClient.put<Product>(url,data);
  }

}
