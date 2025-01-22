export default interface Course {
    id: string;
    title: string;
    description: string;
    chapterCount: number;
    authorId: string;
    category: string;
    usersEnrolled: string[];
  }