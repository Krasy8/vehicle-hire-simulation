package com.payen.demo.fleet.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class Convertible extends Vehicle {

    public Convertible(String registrationNumber, int numberOfWheels, int numberOfPassengers) {
        super("convertible", registrationNumber, numberOfWheels, numberOfPassengers);
    }
}
