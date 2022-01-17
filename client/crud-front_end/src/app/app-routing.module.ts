import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NouveauProduitComponent} from "./nouveau-produit/nouveau-produit.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {path : "produits",component:ProduitsComponent},
  {path : "nouveauproduit",component:NouveauProduitComponent},
  {path : "",redirectTo:"/produits",pathMatch:"full"},
  {path : "editproduct/:id",component:EditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
