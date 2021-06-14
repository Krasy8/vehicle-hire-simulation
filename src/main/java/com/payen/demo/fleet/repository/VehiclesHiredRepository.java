package com.payen.demo.fleet.repository;

import com.payen.demo.fleet.dto.VehicleHiredDTO;
import com.payen.demo.fleet.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class VehiclesHiredRepository {

    private Map<String, List<Vehicle>> hiredVehicles;

    @Autowired
    public VehiclesHiredRepository(Map<String, List<Vehicle>> hiredVehicles) {
        this.hiredVehicles = hiredVehicles;
    }

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
                    vehicle.getType(),
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
