package com.david.fooddeliveryplatform.entity;

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
    int dishId;
    String dishName;
    String description;
    double price;
    //List<String> Category;
    String dishImage;

//    @ManyToOne
//    @JoinColumn(name="restaurant_id", foreignKey = @ForeignKey(name= "FK_restaurant_id"))
    int restaurantId;
}
