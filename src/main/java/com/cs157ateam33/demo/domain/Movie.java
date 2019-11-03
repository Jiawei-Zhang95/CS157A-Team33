package com.cs157ateam33.demo.domain;


import javax.persistence.*;

@Entity
@Table(name = "movietable")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name")
    private String title;
    private String description;


    public Movie(){}

    public Movie(final String title, final String description){
        this.title = title;
        this.description = description;
    }

    public Long getId(){
        return id;
    }

    public String getTitle(){
        return title;
    }

    public String getDescription(){
        return description;
    }


    @Override
    public String toString(){
        return "Movie" + "id=" + id + "Title" + title;
    }

}
