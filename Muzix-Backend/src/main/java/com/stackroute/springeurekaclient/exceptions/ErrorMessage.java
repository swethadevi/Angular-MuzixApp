package com.stackroute.springeurekaclient.exceptions;

public class ErrorMessage {

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    private String details;

    public ErrorMessage(String message,String details)
    {
        this.message=message;
        this.details=details;

    }

}