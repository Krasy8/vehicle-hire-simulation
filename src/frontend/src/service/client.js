import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const showAllAvailableVehicles = () =>
    fetch("api/v1/vehicles/available")
        .then(checkStatus);

export const showAllHiredVehicles = () =>
    fetch("api/v1/vehicles/hired")
        .then(checkStatus);

export const hireVehicle = (email, registrationNumber) =>
    fetch("api/v1/vehicles/hire", {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(email, registrationNumber)
}).then(checkStatus);
