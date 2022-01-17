package com.example.crudbackend;

import com.example.crudbackend.entities.Produit;
import com.example.crudbackend.repositories.ProduitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {

    @Autowired
    private ProduitRepo produitRepo;

    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(CrudBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Produit.class);
        produitRepo.save(new Produit(null,"Ordinateur LX45",6700,3));
        produitRepo.save(new Produit(null,"Imprimante HP",1700,3));
        produitRepo.save(new Produit(null,"SmartPhone Samsung",8000,1));
        produitRepo.save(new Produit(null,"Iphone 10",10000,3));
        produitRepo.save(new Produit(null,"Iphone 11 PRO Max",15000,10));
        produitRepo.save(new Produit(null,"Iphone 13 PRO",20000,2));
        produitRepo.save(new Produit(null,"Ordinateur LX45",6700,3));
        produitRepo.save(new Produit(null,"Imprimante HP",1700,3));
        produitRepo.save(new Produit(null,"SmartPhone Samsung",8000,1));
        produitRepo.save(new Produit(null,"Iphone 10",10000,3));
        produitRepo.save(new Produit(null,"Iphone 11 PRO Max",15000,10));
        produitRepo.save(new Produit(null,"Iphone 13 PRO",20000,2));
        produitRepo.save(new Produit(null,"Ordinateur LX45",6700,3));
        produitRepo.save(new Produit(null,"Imprimante HP",1700,3));
        produitRepo.save(new Produit(null,"SmartPhone Samsung",8000,1));
        produitRepo.save(new Produit(null,"Iphone 10",10000,3));
        produitRepo.save(new Produit(null,"Iphone 11 PRO Max",15000,10));
        produitRepo.save(new Produit(null,"Iphone 13 PRO",20000,2));
        produitRepo.save(new Produit(null,"Ordinateur LX45",6700,3));
        produitRepo.save(new Produit(null,"Imprimante HP",1700,3));
        produitRepo.save(new Produit(null,"SmartPhone Samsung",8000,1));
        produitRepo.save(new Produit(null,"Iphone 10",10000,3));
        produitRepo.save(new Produit(null,"Iphone 11 PRO Max",15000,10));
        produitRepo.save(new Produit(null,"Iphone 13 PRO",20000,2));

        produitRepo.findAll().forEach(p->{
            System.out.println(p.toString());
        });

    }
}
