package com.payen.demo.company.fleet;

import com.payen.demo.company.model.*;

import java.util.*;
import java.util.stream.Collectors;

public class VehiclesAvailableRepository {

    private static Map<String, Vehicle> vehiclesAvailable = new HashMap<>();
    private VehiclesHiredRepository hiredVehicles;

    static {
        Vehicle car1 = new Car("AB12 ZXC", 4, 5);
        Vehicle car2 = new Car("ER56 CVG", 4, 4);
        Vehicle car3 = new Car("AS34 OPL", 4, 2);
        Vehicle van1 = new Van("KL36 NVM", 4, 3);
        Vehicle van2 = new Van("VB63 QAZ", 4, 3);
        Vehicle convertible1 = new Convertible("PO73 UCP", 4, 2);
        Vehicle convertible2 = new Convertible("YT09 AQW", 4, 4);
        Vehicle motorbike1 = new Motorbike("XC10 FPX", 2, 2);
        Vehicle motorbike2 = new Motorbike("BB59 MNB", 2, 1);
        Vehicle motorbike3 = new Motorbike("GO96 DOR", 3, 2);

        vehiclesAvailable.put(car1.getRegistrationNumber(), car1);
        vehiclesAvailable.put(car2.getRegistrationNumber(), car2);
        vehiclesAvailable.put(car3.getRegistrationNumber(), car3);
        vehiclesAvailable.put(van1.getRegistrationNumber(), van1);
        vehiclesAvailable.put(van2.getRegistrationNumber(), van2);
        vehiclesAvailable.put(convertible1.getRegistrationNumber(), convertible1);
        vehiclesAvailable.put(convertible2.getRegistrationNumber(), convertible2);
        vehiclesAvailable.put(motorbike1.getRegistrationNumber(), motorbike1);
        vehiclesAvailable.put(motorbike2.getRegistrationNumber(), motorbike2);
        vehiclesAvailable.put(motorbike3.getRegistrationNumber(), motorbike3);
    }

    public List<VehicleAvailableDTO> getAllAvailableVehicles() {
        return vehiclesAvailable.values().stream()
                .map(this::vehicleAvailableToDTOMapper)
                .collect(Collectors.toList());
    }

    private VehicleAvailableDTO vehicleAvailableToDTOMapper(Vehicle vehicle) {
        return new VehicleAvailableDTO(
                vehicle.getClass().toString().toLowerCase(),
                vehicle.getRegistrationNumber(),
                vehicle.getNumberOfWheels(),
                vehicle.getNumberOfPassengers()
                );
    }

    public void addNewVehicle(Vehicle vehicle) {
        vehiclesAvailable.put(vehicle.getRegistrationNumber(), vehicle);
    }

    public Vehicle removeAvailableVehicle(String registrationNumber) {
        return vehiclesAvailable.remove(registrationNumber);
    }
}
