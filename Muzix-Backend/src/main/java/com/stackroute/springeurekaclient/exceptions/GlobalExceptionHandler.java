package com.stackroute.springeurekaclient.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorMessage> resourceNotFoundException(TrackAlreadyExists ex) {
        ErrorMessage errorDetails = new ErrorMessage(ex.getMessage(),"Can't save");
        return new ResponseEntity<ErrorMessage>(errorDetails, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(NoTracksExists.class)
    public ResponseEntity<ErrorMessage> resourceNotFoundException(NoTracksExists ex) {
        ErrorMessage errorDetails = new ErrorMessage(ex.getMessage(),"Bad Request");
        return new ResponseEntity<ErrorMessage>(errorDetails, HttpStatus.NOT_FOUND);
    }



}