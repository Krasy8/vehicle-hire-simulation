package com.payen.demo.fleet.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class VehicleHiredDTO {

    private String type;
    private String registrationNumber;
    private int numberOfWheels;
    private int numberOfPassengers;
    private String hiredBy;

}
