import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogueService} from "../service/catalogue.service";
import {Route, Router} from "@angular/router";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public totalPages:number;
  public pages:Array<number>;
  public produits:any;
  public size:number=5;
  public currentPage:number;
  public currentKeyword:string="";




  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetProducts() {
    this.catService.getProducts(this.currentPage,this.size)
      .subscribe(data=>{
        this.produits = data;
        this.totalPages = (data as any).page.totalPages;
        this.pages=new Array<number>(this.totalPages);

      }, error => {
        console.log(error);
      })

  }
  onPageProduct(i:number) {
    this.currentPage=i;
    this.chercherProduit();

  }
  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherProduit();
  }



  chercherProduit() {
    this.catService.getProductsByKeywords(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        this.produits = data;
        this.totalPages = (data as any).page.totalPages;
        this.pages=new Array<number>(this.totalPages);

      }, error => {
        console.log(error);
      })



  }

  onDeleteProduct(p: any){
    let conf=confirm("Etes-vous sure ?");
    if(conf){
      this.catService.deleteRessource(p._links.self.href)
        .subscribe(data =>{

        },error => {
          console.log(error);
          }
        )
    }



  }

  onUpdtateProduct(p:any) {
    let url = p._links.self.href;
    this.router.navigateByUrl("/editproduct/"+btoa(url));

  }
}
