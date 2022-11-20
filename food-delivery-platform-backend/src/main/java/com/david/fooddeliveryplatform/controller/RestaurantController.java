package com.david.fooddeliveryplatform.controller;

import com.david.fooddeliveryplatform.entity.Restaurant;
import com.david.fooddeliveryplatform.service.FileService;
import com.david.fooddeliveryplatform.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;

    @Autowired
    private FileService fileService;

    @Value("${project.safetylicense}")
    private String path;



    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants(){
        return restaurantService.getAllRestaurant();
    }

    @GetMapping("/restaurants/{restaurantID}")
    public Restaurant getRestaurantByID(@PathVariable String restaurantID){
        return this.restaurantService.getRestaurantByID(Integer.parseInt(restaurantID));
    }

    @RequestMapping(path = "/auth/restaurants", method = RequestMethod.POST)
    @PostMapping("/restaurants")
    public Restaurant addRestaurant(@Valid  @RequestBody Restaurant restaurant){
        return this.restaurantService.addRestaurant(restaurant);
    }

    @PutMapping("/restaurants/{restaurantID}")
    public ResponseEntity<Restaurant> updateRestaurant(@Valid @PathVariable int restaurantID, @RequestBody Restaurant restaurant){
        return this.restaurantService.updateRestaurant(restaurantID, restaurant);
    }

    //ADMIN
    //DELETE - delete user
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/restaurants/{restaurantID}")
    public String deleteUserByID(@PathVariable String restaurantID) {
        return this.restaurantService.deleteRestaurant(Integer.parseInt(restaurantID));
    }
    @PostMapping("/restaurant/doc/upload/{restaurantID}")
    public ResponseEntity<Restaurant> uploadRestaurantDoc(@RequestParam("safetylicense") MultipartFile safetylicense, @PathVariable String restaurantID) throws IOException {
        Restaurant restaurant = this.restaurantService.getRestaurantByID(Integer.parseInt(restaurantID));
        String fileName = this.fileService.uploadImage(path, safetylicense);
        restaurant.setSafetyLicenseDoc(fileName);
        restaurantService.updateRestaurant(Integer.parseInt(restaurantID), restaurant);
        System.out.println(restaurant);
        return ResponseEntity.ok(restaurant);
    }

    @GetMapping(value = "restaurant/doc/{docName}"  )
    public void downloaddoc(@PathVariable("docName") String docName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, docName);
        response.setContentType(MediaType.ALL_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

}
