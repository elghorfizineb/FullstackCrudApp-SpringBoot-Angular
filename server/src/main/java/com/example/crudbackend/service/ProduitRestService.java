package com.example.crudbackend.service;

import com.example.crudbackend.entities.Produit;
import com.example.crudbackend.repositories.ProduitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProduitRestService {

    @Autowired
    private ProduitRepo produitRepo;

    @GetMapping(value= "/listProduits")
    public List<Produit> liste_produits(){
        return produitRepo.findAll();
    }

    @GetMapping(value = "/listProduits/{id}")
    public Produit liste_produits(@PathVariable(name="id") Long id){
        return produitRepo.findById(id).get();
    }

    @PutMapping(value= "/listProduits/{id}")
    public Produit update(@PathVariable(name="id") Long id,@RequestBody Produit p){
        p.setId(id);
        return produitRepo.save(p);
    }

    @PostMapping(value="/listProduits")
    public Produit save(@RequestBody Produit p){
        return produitRepo.save(p);
    }

    @DeleteMapping(value="/listProduits/{id}")
    public void delete(@PathVariable(name="id") Long id){
        produitRepo.deleteById(id);

    }


}
