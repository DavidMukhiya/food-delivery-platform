package com.david.fooddeliveryplatform.service;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.entity.Restaurant;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface DishService {
    List<Dish> getAllDish();

    ResponseEntity<Dish> getDishByID(int dishID);

    Dish addDish(int restaurantID, Dish dish);

    ResponseEntity<Dish> updateDish(int dishID, Dish dish);

    String deleteDish(int dishID);
//   List<Dish> getAllDishByRestaurant(Restaurant restaurant);


}
