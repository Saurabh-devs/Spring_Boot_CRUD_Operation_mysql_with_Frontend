package com.CRUD.Crud_Operations.Repository;

import com.CRUD.Crud_Operations.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {

    Product findByName(String name);
}

