package com.david.fooddeliveryplatform.service.impl;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.entity.Restaurant;
import com.david.fooddeliveryplatform.repository.DishRepo;
import com.david.fooddeliveryplatform.repository.RestaurantRepo;
import com.david.fooddeliveryplatform.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishServiceImpl implements DishService {

    @Autowired
    private DishRepo dishRepo;

    @Autowired
    private RestaurantRepo restaurantRepo;
    @Override
    public List<Dish> getAllDish() {
        return this.dishRepo.findAll();
    }

    @Override
    public ResponseEntity<Dish> getDishByID(int dishID) {
        Dish dish = dishRepo.findById(dishID).orElseThrow(()->new RuntimeException("Dish not exist with id:"+ dishID));
        return ResponseEntity.ok(dish);
    }

    @Override
    public List<Dish> getDishesByRestaurant(int restaurantID) {
        Restaurant restaurant = this.restaurantRepo.findById(restaurantID)
                .orElseThrow(()->new RuntimeException("Restaurant not exist with id:"+ restaurantID));
        List<Dish> dishes = this.dishRepo.findByRestaurant(restaurant);
        return dishes;
    }

    @Override
    public Dish addDish(int restaurantID,Dish dish) {
        Restaurant restaurant = this.restaurantRepo.findById(restaurantID).orElseThrow(()->new RuntimeException("Restaurant not exist with id:"+ restaurantID));
        dish.setRestaurant(restaurant);
        return this.dishRepo.save(dish);
    }

    @Override
    public ResponseEntity<Dish> updateDish(int dishID, Dish dish) {
        Dish updateDish = dishRepo.findById(dishID).orElseThrow(()->new RuntimeException("Dish not exist with id:"+ dishID));
        updateDish.setDishId(dish.getDishId());
        updateDish.setDishName(dish.getDishName());
        updateDish.setDishImage(dish.getDishImage());
        updateDish.setCategory(dish.getCategory());
        updateDish.setDescription(dish.getDescription());
        updateDish.setPrice(dish.getPrice());
        updateDish.setRestaurant(dish.getRestaurant());
        dishRepo.save(updateDish);
        return ResponseEntity.ok(updateDish);
    }

    @Override
    public String deleteDish(int dishID) {
        this.dishRepo.deleteById(dishID);
        return "Dish with ID: "+dishID+ " is deleted Successfully.";
    }

}
