package com.payen.demo.fleet.controller;

import com.payen.demo.fleet.dto.VehicleAvailableDTO;
import com.payen.demo.fleet.dto.VehicleHiredDTO;
import com.payen.demo.fleet.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/vehicles")
public class fleetController {

    private final FleetService fleetService;

    @Autowired
    public fleetController(FleetService fleetService) {
        this.fleetService = fleetService;
    }

    @GetMapping(path = "/available")
    public List<VehicleAvailableDTO> showAllAvailableVehicles() {
        return fleetService.getAllAvailableVehicles();
    }

    @GetMapping(path = "/hired")
    public List<VehicleHiredDTO> showAllHiredVehicles() {
        return fleetService.getAllHiredVehicles();
    }

    @PostMapping
    public void addNewVehicle(@RequestBody VehicleAvailableDTO vehicle) {
        fleetService.addNewVehicle(vehicle);
    }

    @PostMapping(path = "/hire/{email}/{registrationNumber}")
    public void hireVehicle(@PathVariable("email") String email,
                            @PathVariable("registrationNumber") String registrationNumber) {
        fleetService.hireVehicle(email, registrationNumber);
    }

    @PostMapping(path = "/return/{email}/{registrationNumber}")
    public void returnVehicle(@PathVariable("email") String email,
                              @PathVariable("registrationNumber") String registrationNumber) {
        fleetService.returnHiredVehicle(email, registrationNumber);
    }

}
