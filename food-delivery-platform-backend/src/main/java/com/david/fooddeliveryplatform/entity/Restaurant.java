package com.david.fooddeliveryplatform.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int restaurantId;
    private String restaurantName;
    private String restaurantEmail;
    private String password;
    private String safetyLicenseDoc;


    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Dish> dish = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
    joinColumns = @JoinColumn(name="restaurant", referencedColumnName = "restaurantId"),
    inverseJoinColumns = @JoinColumn(name="role", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();
}
