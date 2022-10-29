package com.david.fooddeliveryplatform.repository;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepo extends JpaRepository<Dish, Integer> {
    List<Dish> findByRestaurant(Restaurant restaurant);
}
