package com.david.fooddeliveryplatform.controller;

import com.david.fooddeliveryplatform.entity.Dish;
import com.david.fooddeliveryplatform.service.DishService;
import com.david.fooddeliveryplatform.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
public class DishController {

    @Autowired
    private DishService dishService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

    @GetMapping("/dishes")
    public List<Dish> getAllDish() {
        return this.dishService.getAllDish();
    }

    @GetMapping("/dishes/{dishID}")
    public Dish getDishByID(@PathVariable String dishID) {
        return this.dishService.getDishByID(Integer.parseInt(dishID));
    }

    @GetMapping("/restaurants/{restaurantID}/dishes")
    public ResponseEntity<List<Dish>> getDishByRestaurant(@PathVariable int restaurantID){
        return this.dishService.getDishesByRestaurant(restaurantID);
    }

    @PostMapping("/restaurant/{restaurantID}/dishes/")
    public Dish addDish(@PathVariable int restaurantID,@RequestBody Dish dish) {
        return this.dishService.addDish(restaurantID, dish);
    }

    @PutMapping("dishes/{dishID}")
    public ResponseEntity<Dish> updateDish(@PathVariable int dishID, @RequestBody Dish dish) {
        return this.dishService.updateDish(dishID, dish);
    }

    @DeleteMapping("dishes/{dishID}")
    public String deleteDishByID(@PathVariable String dishID) {
        return this.dishService.deleteDish(Integer.parseInt(dishID));
    }

    @PostMapping("/dish/image/upload/{dishID}")
    public ResponseEntity<Dish> uploadDishImage(@RequestParam("image") MultipartFile image, @PathVariable String dishID) throws IOException {
        Dish dish = this.dishService.getDishByID(Integer.parseInt(dishID));
        String fileName = this.fileService.uploadImage(path, image);
        dish.setDishImage(fileName);
        dishService.updateDish(Integer.parseInt(dishID), dish);
        System.out.println(dish);
        return ResponseEntity.ok(dish);
    }

    @GetMapping(value = "dish/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }
}
