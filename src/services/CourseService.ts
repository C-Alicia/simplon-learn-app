
import { courses } from "../../assets/data/data";
import Course from "../types/course";

// Obtenir tous les cours
export const getAllCourses = (): Course[] => {
  return courses;
};

// Obtenir un cours par ID
export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

// Ajouter un nouveau cours
export const addToCourse = (newCourse: Course): Course[] => {
  courses.push(newCourse);
  return courses;
};

// Modifier un cours
export const updateCourse = (id: string, updatedCourse: Partial<Course>): Course | undefined => {
  const index = courses.findIndex((course) => course.id === id);
  if (index !== -1) {
    courses[index] = { ...courses[index], ...updatedCourse };
    return courses[index];
  }
  return undefined;
};

// Supprimer un cours
export const deleteCourse = (id: string): boolean => {
  const index = courses.findIndex((course) => course.id === id);
  if (index !== -1) {
    courses.splice(index, 1);
    return true;
  }
  return false;
};
