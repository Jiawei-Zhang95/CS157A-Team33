package com.cs157ateam33.demo.controllers;

import com.cs157ateam33.demo.domain.Movie;
import com.cs157ateam33.demo.exception.MovieNotFoundException;
import com.cs157ateam33.demo.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/all")
    public Collection<Movie> retrieveAll(){
        return movieRepository.findAll();
    }

    @PostMapping("")
    ResponseEntity<?> createMovie(@RequestBody Movie input){
        Movie movie = movieRepository.save(new Movie(input.getTitle(), input.getDescription()));

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/movieId").buildAndExpand(movie.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{movieId}")
    Movie getMovie(@PathVariable Long movieId){
        return this.movieRepository.findById(movieId)
                .orElseThrow(() -> new MovieNotFoundException(movieId));
    }


}
