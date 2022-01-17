import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../service/catalogue.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;
  private url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService:CatalogueService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params['id']);
    this.catService.getRessource(this.url)
      .subscribe(data=>{
        this.currentProduct=data;

      }, error => {
        console.log(error);
      })
  }

  onUpdateProduct(value: any) {
    this.catService.updateRessource(this.url,value)
      .subscribe(data =>{
        alert("Mise a jour effectué avec succés");
        this.router.navigateByUrl("/produits");

      }, error => {
        console.log(error);
      })


  }
}
