package com.david.fooddeliveryplatform.controller;

import com.david.fooddeliveryplatform.entity.Restaurant;
import com.david.fooddeliveryplatform.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants(){
        return restaurantService.getAllRestaurant();
    }

    @GetMapping("/restaurants/{restaurantID}")
    public ResponseEntity<Restaurant> getRestaurantByID(@PathVariable String restaurantID){
        return this.restaurantService.getRestaurantByID(Integer.parseInt(restaurantID));
    }

    @PostMapping("/restaurants")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant){
        return this.restaurantService.addRestaurant(restaurant);
    }

    @PutMapping("/restaurants/{restaurantID}")
    public ResponseEntity<Restaurant> updateRestaurant(@PathVariable int restaurantID, @RequestBody Restaurant restaurant){
        return this.restaurantService.updateRestaurant(restaurantID, restaurant);
    }

    @DeleteMapping
    public String deleteUserByID(@PathVariable String restaurantID) {
        return this.restaurantService.deleteRestaurant(Integer.parseInt(restaurantID));
    }

}
