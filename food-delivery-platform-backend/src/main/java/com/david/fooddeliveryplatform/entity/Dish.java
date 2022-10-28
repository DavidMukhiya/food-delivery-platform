//package com.david.fooddeliveryplatform.entity;
//
//import javax.persistence.*;
//import java.util.List;
//@Entity
//public class Dish {
//    @Id
//    int dishId;
//    String dishName;
//    String description;
//    double price;
//    List<String> Category;
//    String dishImage;
//
//    @ManyToOne
//    @JoinColumn(name="restaurant_id", foreignKey = @ForeignKey(name= "FK_restaurant_id"))
//    int restaurantId;
//
//    public Dish() {
//    }
//
//    public Dish(int dishId, String dishName, String description, double price, List<String> category, String dishImage, int restaurantId) {
//        this.dishId = dishId;
//        this.dishName = dishName;
//        this.description = description;
//        this.price = price;
//        Category = category;
//        this.dishImage = dishImage;
//        this.restaurantId = restaurantId;
//    }
//
//    public int getDishId() {
//        return dishId;
//    }
//
//    public void setDishId(int dishId) {
//        this.dishId = dishId;
//    }
//
//    public String getDishName() {
//        return dishName;
//    }
//
//    public void setDishName(String dishName) {
//        this.dishName = dishName;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public double getPrice() {
//        return price;
//    }
//
//    public void setPrice(double price) {
//        this.price = price;
//    }
//
//    public List<String> getCategory() {
//        return Category;
//    }
//
//    public void setCategory(List<String> category) {
//        Category = category;
//    }
//
//    public String getDishImage() {
//        return dishImage;
//    }
//
//    public void setDishImage(String dishImage) {
//        this.dishImage = dishImage;
//    }
//
//    public int getRestaurantId() {
//        return restaurantId;
//    }
//
//    public void setRestaurantId(int restaurantId) {
//        this.restaurantId = restaurantId;
//    }
//}
