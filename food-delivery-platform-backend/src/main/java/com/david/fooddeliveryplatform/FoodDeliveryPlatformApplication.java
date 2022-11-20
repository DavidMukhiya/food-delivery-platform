package com.david.fooddeliveryplatform;

import com.david.fooddeliveryplatform.config.AppConstants;
import com.david.fooddeliveryplatform.entity.Role;
import com.david.fooddeliveryplatform.repository.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication

public class FoodDeliveryPlatformApplication implements CommandLineRunner {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RoleRepo roleRepo;
	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryPlatformApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(this.passwordEncoder.encode("pizzahouse"));

		try{
			Role role1 = new Role();
			role1.setId(AppConstants.ADMIN_USER);
			role1.setName("ADMIN_USER");

			Role role2 = new Role();
			role2.setId(AppConstants.NORMAL_USER);
			role2.setName("NORMAL_USER");

			List<Role> roles = List.of(role1, role2);

			List<Role> saveRoles = this.roleRepo.saveAll(roles);
		}catch (Exception e){
			System.out.println(e.getMessage());
		}
	}
}
