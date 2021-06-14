package com.payen.demo.company.fleet;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class VehicleAvailableDTO {
    private String vehicleType;
    private String registrationNumber;
    private int numberOfWheels;
    private int numberOfPassengers;
}
