package com.david.fooddeliveryplatform.repository;

import com.david.fooddeliveryplatform.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {
    Optional<Restaurant> findByRestaurantEmail(String email);
}
