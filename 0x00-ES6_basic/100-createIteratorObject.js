export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employeesInCurrentDepartment = allEmployees[currentDepartment];

      if (currentEmployeeIndex >= employeesInCurrentDepartment.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const currentEmployee = employeesInCurrentDepartment[currentEmployeeIndex++];
      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
