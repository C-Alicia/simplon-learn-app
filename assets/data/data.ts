// data.ts

import Category from "../../src/types/category";
import Course from "../../src/types/course";
import School from "../../src/types/school";
import User from "../../src/types/user";

// Dummy users
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    enrolledCourses: ["1", "2"],
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    enrolledCourses: ["1"],
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    enrolledCourses: ["2"],
  },
];

// Dummy courses
const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to React Native",
    description: "Learn the basics of React Native framework",
    chapterCount: 16,
    authorId: "2",
    category: "1",
    usersEnrolled: ["1", "3"],
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts",
    chapterCount: 20,
    authorId: "3",
    category: "1",
    usersEnrolled: ["1", "2"],
  },
];

// Dummy categories
const categories: Category[] = [
  { id: "1", name: "Programming" , icon: 'code'},
  { id: "2", name: "Web Development", icon: 'web' },
  { id: "3", name: "Mobile Development", icon: 'smartphone' },
];

const schools: School[] = [
  {
    id: "1",
    name: "Simplon",
    location: "123 Main Street",
    city: "Springfield",
    zipCode: "12345",
    latitude: 45.757759581048056,
    longitude: 4.8993630341461,
    description: "A welcoming elementary school in the heart of Springfield.",
  },
  {
    id: "2",
    name: "Simplon Bel Air",
    location: "456 Oak Avenue",
    city: "Oakville",
    zipCode: "67890",
    latitude: 45.75628493019015,
    longitude: 4.8960907391479545,
    description: "A prestigious high school known for its academic excellence.",
  },
  {
    id: "3",
    name: "Human Booster",
    location: "789 Pine Street",
    city: "Lakeview",
    zipCode: "23456",
    latitude: 45.75847817851117,
    longitude: 4.899695628063944,
    description: "A vibrant middle school located near the scenic Lakeview.",
  },
];

export { users, courses, categories, schools };
