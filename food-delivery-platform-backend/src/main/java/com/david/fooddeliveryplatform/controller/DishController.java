package com.david.fooddeliveryplatform.controller;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DishController {

    @Autowired
    DishService dishService;

    @GetMapping("/dishes")
    public List<Dish> getAllDish() {
        return this.dishService.getAllDish();
    }

    @GetMapping("/dishes/{dishID}")
    public ResponseEntity<Dish> getDishByID(@PathVariable String dishID) {
        return this.dishService.getDishByID(Integer.parseInt(dishID));
    }

    @PostMapping("/dishes")
    public Dish addDish(@RequestBody Dish dish) {
        return this.dishService.addDish(dish);
    }

    @PutMapping("dishes/{dishID}")
    public ResponseEntity<Dish> updateDish(@PathVariable int dishID, @RequestBody Dish dish) {
        return this.dishService.updateDish(dishID, dish);
    }

    @DeleteMapping("dishes/{dishID}")
    public String deleteDishByID(@PathVariable String dishID) {
        return this.dishService.deleteDish(Integer.parseInt(dishID));
    }
}
