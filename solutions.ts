export {};

const multiplyValue = (value: number, multiplier: number = 2): number => {
  const result = value * multiplier;
  return result === 0 ? 0 : result;
};

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    const result = value * 10;
    return result === 0 ? 0 : result;
  }

  return value ? "Active" : "Inactive";
}

function formatCoordinate(
  coord: readonly [latitude: number, longitude: number, locationName: string]
): string {
  const [latitude, longitude, locationName] = coord;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(
  courses: readonly Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}

function pluckValues<T, K extends keyof T>(items: readonly T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}

