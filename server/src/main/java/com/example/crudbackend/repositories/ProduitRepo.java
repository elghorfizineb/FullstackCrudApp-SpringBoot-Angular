package com.example.crudbackend.repositories;

import com.example.crudbackend.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin("*")
@RepositoryRestResource
public interface ProduitRepo extends JpaRepository<Produit,Long> {

    @RestResource(path = "/byName")
    List<Produit> findByNomContains(@Param("nom") String nom);
    @RestResource(path = "/byNamePage")
    public Page<Produit> findByNomContains(@Param("nom") String nom, Pageable pageable);

}
