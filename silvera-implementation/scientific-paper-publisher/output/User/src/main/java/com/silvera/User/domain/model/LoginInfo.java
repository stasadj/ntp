/**
    THIS IS GENERATED CODE AND SHOULD NOT BE CHANGED MANUALLY!!!

    Generated by: silvera
    Date: 2022-05-19 13:06:03
*/

package com.silvera.User.domain.model;

import org.springframework.data.annotation.Id;
import javax.validation.constraints.*;
public class LoginInfo {

    
    
    
    @Id
    
    @NotBlank(message="Field 'username' cannot be empty!")
    private java.lang.String username;
    
    
    @NotBlank(message="Field 'password' cannot be empty!")
    private java.lang.String password;


    
    public java.lang.String getUsername() {
        return this.username;
    }

    public void setUsername(java.lang.String username) {
        this.username = username;
    }
    
    public java.lang.String getPassword() {
        return this.password;
    }

    public void setPassword(java.lang.String password) {
        this.password = password;
    }
    

    
    public java.lang.String getId(){
        return this.username;
    }
    
}