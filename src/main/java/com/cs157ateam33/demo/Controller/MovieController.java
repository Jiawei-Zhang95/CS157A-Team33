package com.cs157ateam33.demo.Controller;

import com.cs157ateam33.demo.Model.Movie;
import com.cs157ateam33.demo.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {
    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/demo")
    public List<Movie> retrieveAll(){
        return movieRepository.findAll();
    }


}
