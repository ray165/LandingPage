package net.landingpage.server.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;    
import java.math.BigDecimal;  

public class Product {

    @Id
    @GenerateValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String description;

    private String code;

    private Float price;

    public Product(String name, String description, String code, Float price) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.price = price;
    }


    // Getters & Setters redundant because of lombok import

    // public String getName() {
    //     return this.name;
    // }

    // public String getDescription() {
    //     return this.description;
    // }

    // public String getCode() {
    //     return this.code;
    // }

    // public Float getPrice() {
    //     return this.price;
    // }

    // //Setters
    // public void setName(String newName) {
    //     this.name = newName;
    // }

    // public void setDescription(String newDescription) {
    //     this.description = newDescription;
    // }

    // public void setCode(String newCode) {
    //     this.code = newCode;
    // }

    // public void setPrice(Float newPrice) {
    //     this.price = newPrice;
    // }

}