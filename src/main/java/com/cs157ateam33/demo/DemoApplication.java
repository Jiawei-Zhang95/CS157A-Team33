package com.cs157ateam33.demo;

import com.cs157ateam33.demo.domain.Movie;
import com.cs157ateam33.demo.domain.Rating;
import com.cs157ateam33.demo.domain.User;
import com.cs157ateam33.demo.repositories.MovieRepository;
import com.cs157ateam33.demo.repositories.RatingRepository;
import com.cs157ateam33.demo.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository, MovieRepository MovieRepository, RatingRepository
            ratingRepository) {
        return (args) -> {
            Arrays.asList("jackson,russel,quentin".split(",")).forEach(a -> {
                userRepository.save(new User(a, "password"));
            });
            MovieRepository.save(new Movie("Deadpool", "A fast-talking mercenary with a morbid sense of humor is " +
                    "subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for " +
                    "revenge."));

            MovieRepository.save(new Movie("Avengers: Infinity War", "The Avengers and their allies must be willing " +
                    "to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and" +
                    " ruin puts an end to the universe."));

            MovieRepository.findAll().forEach(movie ->
                    userRepository.findAll().forEach(
                            user -> ratingRepository.save(new Rating(user, movie, 5))
                    )
            );
        };
    }
}
