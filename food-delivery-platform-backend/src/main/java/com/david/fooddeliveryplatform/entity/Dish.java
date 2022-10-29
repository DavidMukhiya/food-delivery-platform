package com.david.fooddeliveryplatform.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dishId;
    private String dishName;
    private String description;
    private double price;
    private String category;
    private String dishImage;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="restaurant_id")
    private Restaurant restaurant;
}
