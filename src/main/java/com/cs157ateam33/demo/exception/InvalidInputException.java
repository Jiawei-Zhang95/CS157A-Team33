package com.cs157ateam33.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidInputException extends RuntimeException{

    public InvalidInputException(){
        super("Invalid Input, Please check request parameters");
    }
}
