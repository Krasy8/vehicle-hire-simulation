package com.payen.demo.fleet.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Van extends Vehicle {

    public Van(String registrationNumber, int numberOfWheels, int numberOfPassengers) {
        super("van", registrationNumber, numberOfWheels, numberOfPassengers);
    }
}
