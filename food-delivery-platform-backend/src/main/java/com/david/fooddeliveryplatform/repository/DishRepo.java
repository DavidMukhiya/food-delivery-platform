package com.david.fooddeliveryplatform.repository;

import com.david.fooddeliveryplatform.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepo extends JpaRepository<Dish, Integer> {
}
