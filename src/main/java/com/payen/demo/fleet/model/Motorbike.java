package com.payen.demo.fleet.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Motorbike extends Vehicle {

    public Motorbike(String registrationNumber, int numberOfWheels, int numberOfPassengers) {
        super("motorbike", registrationNumber, numberOfWheels, numberOfPassengers);
    }
}
