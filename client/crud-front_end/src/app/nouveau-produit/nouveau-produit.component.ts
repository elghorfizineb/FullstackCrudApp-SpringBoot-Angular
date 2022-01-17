import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
  public currentProduct:Product;
  public mode: number=1;

  constructor(private catService:CatalogueService) { }

  ngOnInit(): void {
  }

  onSaveProduct(data: any) {
    this.catService.saveRessource(this.catService.host+"/produits",data)
      .subscribe(res=>{
        this.currentProduct = res;
        this.mode=2;

      },error => {
        console.log(error)
      })


  }

  onNewProduct() {
    this.mode=1;
  }
}
