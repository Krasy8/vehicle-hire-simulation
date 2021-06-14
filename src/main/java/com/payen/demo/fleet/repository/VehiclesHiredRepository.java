package com.payen.demo.company.fleet;

import com.payen.demo.company.model.Vehicle;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class VehiclesHiredRepository {

    private static Map<String, List<Vehicle>> hiredVehicles = new HashMap<>();

    public List<VehicleHiredDTO> getAllHiredVehicles() {
        List<VehicleHiredDTO> allHiredVehicles = new ArrayList<>();
        for (Map.Entry<String, List<Vehicle>> entrySet : hiredVehicles.entrySet()) {
            allHiredVehicles.addAll(hiredVehiclesEntryToDTOMapper(entrySet));
        }
        return allHiredVehicles;
    }

    private List<VehicleHiredDTO> hiredVehiclesEntryToDTOMapper(Map.Entry<String, List<Vehicle>> entrySet) {
        List<VehicleHiredDTO> hiredVehicles = new ArrayList<>();

        for (Vehicle vehicle : entrySet.getValue()) {
            hiredVehicles.add(new VehicleHiredDTO(
                    vehicle.getClass().toString().toLowerCase(),
                    vehicle.getRegistrationNumber(),
                    vehicle.getNumberOfWheels(),
                    vehicle.getNumberOfPassengers(),
                    entrySet.getKey()));
        }
        return hiredVehicles;
    }

    public void addHiredVehicle(String email, Vehicle vehicle) {
        if (hiredVehicles.containsKey(email)) {
            hiredVehicles.get(email).add(vehicle);
        } else {
            List<Vehicle> currentlyHiredVehicles = new ArrayList<>();
            currentlyHiredVehicles.add(vehicle);
            hiredVehicles.put(email, currentlyHiredVehicles);
        }
    }

    public Vehicle removeHiredVehicle(String email, String registrationNumber) {
        Vehicle vehicle = findHiredVehicle(email, registrationNumber);
        if (hiredVehicles.get(email).size() > 1) {
            hiredVehicles.get(email).remove(findHiredVehicle(email, registrationNumber));
        } else {
            hiredVehicles.remove(email);
        }
        return vehicle;
    }

    private Vehicle findHiredVehicle(String email, String registrationNumber) {
        Vehicle vehicle = null;
        for (Vehicle v : hiredVehicles.get(email)) {
            if (v.getRegistrationNumber().equals(registrationNumber)) {
                vehicle = v;
            }
        }
        return vehicle;
    }
}
