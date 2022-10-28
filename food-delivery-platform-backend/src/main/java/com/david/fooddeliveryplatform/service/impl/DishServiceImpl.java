package com.david.fooddeliveryplatform.service.impl;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.repository.DishRepo;
import com.david.fooddeliveryplatform.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishServiceImpl implements DishService {

    @Autowired
    private DishRepo dishRepo;
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
    public Dish addDish(Dish dish) {
        return this.dishRepo.save(dish);
    }

    @Override
    public ResponseEntity<Dish> updateDish(int dishID, Dish dish) {
        Dish updateDish = dishRepo.findById(dishID).orElseThrow(()->new RuntimeException("Dish not exist with id:"+ dishID));
        updateDish.setDishId(dish.getDishId());
        updateDish.setDishName(dish.getDishName());
        updateDish.setDishImage(dish.getDishImage());
        //updateDish.setCategory(dish.setCategory());
        updateDish.setDescription(dish.getDescription());
        updateDish.setPrice(dish.getPrice());
        updateDish.setRestaurantId(dish.getRestaurantId());
        dishRepo.save(updateDish);
        return ResponseEntity.ok(updateDish);
    }

    @Override
    public String deleteDish(int dishID) {
        this.dishRepo.deleteById(dishID);
        return "Movie with ID: "+dishID+ " is deleted Successfully.";
    }
}
