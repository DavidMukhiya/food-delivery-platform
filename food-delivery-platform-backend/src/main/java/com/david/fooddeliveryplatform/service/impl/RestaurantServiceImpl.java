package com.david.fooddeliveryplatform.service.impl;

import com.david.fooddeliveryplatform.entity.Restaurant;
import com.david.fooddeliveryplatform.repository.RestaurantRepo;
import com.david.fooddeliveryplatform.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepo restaurantRepo;

    @Override
    public List<Restaurant> getAllRestaurant() {
        return this.restaurantRepo.findAll();
    }

    @Override
    public ResponseEntity<Restaurant> getRestaurantByID(int restaurantID) {
        Restaurant restaurant = restaurantRepo.findById(restaurantID).orElseThrow(()->
                new RuntimeException("Restaurant doesn't exist with id:" + restaurantID));
        return ResponseEntity.ok(restaurant);
    }

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        return this.restaurantRepo.save(restaurant);
    }

    @Override
    public ResponseEntity<Restaurant> updateRestaurant(int restaurantID, Restaurant restaurant) {
        Restaurant updateRestaurant = restaurantRepo.findById(restaurantID).orElseThrow(()->new RuntimeException("Restaurant doesn't exist with id:"+restaurantID));
        updateRestaurant.setRestaurantId(restaurant.getRestaurantId());
        updateRestaurant.setRestaurantName(restaurant.getRestaurantName());
        updateRestaurant.setRestaurantEmail(restaurant.getRestaurantEmail());
        updateRestaurant.setPassword(restaurant.getPassword());
        restaurantRepo.save(updateRestaurant);
        return ResponseEntity.ok(updateRestaurant);
    }

    @Override
    public String deleteRestaurant(int restaurantID) {
        this.restaurantRepo.deleteById(restaurantID);
        return "Restaurant with ID: "+restaurantID+ " is deleted Successfully.";
    }
}
