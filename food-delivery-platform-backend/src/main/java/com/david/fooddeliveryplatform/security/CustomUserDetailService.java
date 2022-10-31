package com.david.fooddeliveryplatform.security;

import com.david.fooddeliveryplatform.entity.Restaurant;
import com.david.fooddeliveryplatform.repository.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private RestaurantRepo restaurantRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //loading user from database by username
        Restaurant restaurant = this.restaurantRepo.findByRestaurantEmail(username).orElseThrow(()->new RuntimeException("Couldn't find the restaurant with email: "+username));
        return restaurant;
    }
}
