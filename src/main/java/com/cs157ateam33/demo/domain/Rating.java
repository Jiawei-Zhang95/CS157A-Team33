package com.cs157ateam33.demo.domain;

import com.cs157ateam33.demo.exception.InvalidInputException;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Rating {
    @Id
    @GeneratedValue
    private Long id;

    @JsonIgnore
    @ManyToOne
    private User user;

    @OneToOne
    private Movie movie;

    private Integer stars;

    private Rating(){
    }//JPA only

    public Rating(final User user, final Movie movie, Integer stars){
        this.user = user;
        this.movie = movie;
        if(stars < 1 || stars > 5){
            throw new InvalidInputException();
        }
        this.stars = stars;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Movie getMovie() {
        return movie;
    }

    public Integer getStars() { return stars; }

}
