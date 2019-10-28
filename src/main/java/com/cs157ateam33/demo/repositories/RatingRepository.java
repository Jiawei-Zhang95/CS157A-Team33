package com.cs157ateam33.demo.repositories;

import com.cs157ateam33.demo.domain.Movie;
import com.cs157ateam33.demo.domain.Rating;
import com.cs157ateam33.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    /**
     * Retrieves all ratings by the specific user
     * @param user The user to filter.
     * @return All ratings created by the user
     */
    List<Rating> findByUser(User user);

    /**
     * Retrieves all ratings by the specific movie
     * @param movie The movie to filter
     * @return All ratings related to the movie
     */
    List<Rating> findByMovie(Movie movie);

    /**
     * Retrieves a rating created by {@literal user} having the specified {@literal ratingId}.
     *
     * @param user The user to filter.
     * @param ratingId The rating id to look for.
     * @return A rating created by the specified user, with the specified id.
     */
    List<Rating> findByUserAndId(User user, Long ratingId);

}
