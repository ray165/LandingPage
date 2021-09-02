package net.landingpage.server.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;    
import java.math.BigDecimal;  

public class Product {
    public Product(String name, String description, String code, Float price) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.price = price;
    }

    @Id
    @GenerateValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String description;

    private String code;

    private Float price;
}