package com.springbootFullStack.employee.service;

import com.springbootFullStack.employee.entity.EmployeeEntity;
import com.springbootFullStack.employee.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);
    List<Employee> getALlEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}
