package com.payen.demo.fleet.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Car extends Vehicle {

    public Car(String registrationNumber, int numberOfWheels, int numberOfPassengers) {
        super("car", registrationNumber, numberOfWheels, numberOfPassengers);
    }
}
