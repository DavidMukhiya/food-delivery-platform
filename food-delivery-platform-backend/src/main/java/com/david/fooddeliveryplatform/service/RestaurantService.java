package com.david.fooddeliveryplatform.service;

import org.springframework.http.ResponseEntity;
import com.david.fooddeliveryplatform.entity.Restaurant;

import java.util.List;

public interface RestaurantService {
    List<Restaurant> getAllRestaurant();

    ResponseEntity<Restaurant> getRestaurantByID(int restaurantID);

    Restaurant addRestaurant(Restaurant restaurant);

    ResponseEntity<Restaurant> updateRestaurant(int restaurantID, Restaurant restaurant);

    String deleteRestaurant(int restaurantID);
}
