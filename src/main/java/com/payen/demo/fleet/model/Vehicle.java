package com.payen.demo.fleet.model;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public abstract class Vehicle {

    private String type;
    private String registrationNumber;
    private int numberOfWheels;
    private int numberOfPassengers;
}
