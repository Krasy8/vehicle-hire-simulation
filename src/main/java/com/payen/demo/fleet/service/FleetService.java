package com.payen.demo.fleet.service;

import com.payen.demo.fleet.repository.VehiclesAvailableRepository;
import com.payen.demo.fleet.repository.VehiclesHiredRepository;
import com.payen.demo.fleet.model.Vehicle;


public class VehiclesHireService {
    private VehiclesAvailableRepository vehiclesAvailableRepository;
    private VehiclesHiredRepository vehiclesHiredRepository;

    public void hireVehicle (String email, String registrationNumber) {
        Vehicle vehicleToBeHired = vehiclesAvailableRepository.removeAvailableVehicle(registrationNumber);
        vehiclesHiredRepository.addHiredVehicle(email, vehicleToBeHired);
    }

    public void returnHiredVehicle (String email, String registrationNumber) {
        Vehicle vehicleToBeReturned = vehiclesHiredRepository.removeHiredVehicle(email, registrationNumber);
        vehiclesAvailableRepository.addNewVehicle(vehicleToBeReturned);
    }
}
