package com.payen.demo.fleet.service;

import com.payen.demo.fleet.dto.VehicleAvailableDTO;
import com.payen.demo.fleet.dto.VehicleHiredDTO;
import com.payen.demo.fleet.model.*;
import com.payen.demo.fleet.repository.VehiclesAvailableRepository;
import com.payen.demo.fleet.repository.VehiclesHiredRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FleetService {

    private final VehiclesAvailableRepository vehiclesAvailableRepository;
    private final VehiclesHiredRepository vehiclesHiredRepository;

    @Autowired
    public FleetService(VehiclesAvailableRepository vehiclesAvailableRepository, VehiclesHiredRepository vehiclesHiredRepository) {
        this.vehiclesAvailableRepository = vehiclesAvailableRepository;
        this.vehiclesHiredRepository = vehiclesHiredRepository;
    }

    public List<VehicleAvailableDTO> getAllAvailableVehicles() {
        return vehiclesAvailableRepository.getAllAvailableVehicles();
    }

    public List<VehicleHiredDTO> getAllHiredVehicles() {
        return vehiclesHiredRepository.getAllHiredVehicles();
    }

    public void addNewVehicle(VehicleAvailableDTO vehicle) {
        String vehicleType = vehicle.getType();
        Vehicle vehicleToBeAdded = null;
        switch (vehicleType) {
            case "car":
                vehicleToBeAdded = new Car(
                        vehicle.getRegistrationNumber(),
                        vehicle.getNumberOfWheels(),
                        vehicle.getNumberOfPassengers()
                );
                break;
            case "van":
                vehicleToBeAdded = new Van(
                        vehicle.getRegistrationNumber(),
                        vehicle.getNumberOfWheels(),
                        vehicle.getNumberOfPassengers()
                );
                break;
            case "convertible":
                vehicleToBeAdded = new Convertible(
                        vehicle.getRegistrationNumber(),
                        vehicle.getNumberOfWheels(),
                        vehicle.getNumberOfPassengers()
                );
                break;
            case "motorbike":
                vehicleToBeAdded = new Motorbike(
                        vehicle.getRegistrationNumber(),
                        vehicle.getNumberOfWheels(),
                        vehicle.getNumberOfPassengers()
                );
                break;
        }
        vehiclesAvailableRepository.addNewVehicle(vehicleToBeAdded);
    }

    public void hireVehicle(String email, String registrationNumber) {
        Vehicle vehicleToBeHired = vehiclesAvailableRepository.removeAvailableVehicle(registrationNumber);
        vehiclesHiredRepository.addHiredVehicle(email, vehicleToBeHired);
    }

    public void returnHiredVehicle(String email, String registrationNumber) {
        Vehicle vehicleToBeReturned = vehiclesHiredRepository.removeHiredVehicle(email, registrationNumber);
        vehiclesAvailableRepository.addNewVehicle(vehicleToBeReturned);
    }
}
