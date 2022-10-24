package com.david.fooddeliveryplatform.Entity;

public class Restaurant {
    int restaurantId;
    String restaurantName;
    String restaurantEmail;
    String password;

    public Restaurant() {
    }

    public Restaurant(int restaurantId, String restaurantName, String restaurantEmail, String password) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantEmail = restaurantEmail;
        this.password = password;
    }

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantEmail() {
        return restaurantEmail;
    }

    public void setRestaurantEmail(String restaurantEmail) {
        this.restaurantEmail = restaurantEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
