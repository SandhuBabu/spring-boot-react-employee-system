import axios from "axios"

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees"

export function saveEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URL, employee);
}

export function getEmployees() {
    return axios.get(EMPLOYEE_BASE_URL);
}

export function deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_BASE_URL}/${id}`)
}

export function getEmployeeById(id) {
    return axios.get(`${EMPLOYEE_BASE_URL}/${id}`)
}

export function updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_BASE_URL}/${id}`, employee);
}