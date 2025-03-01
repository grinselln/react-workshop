import type { CourseWithLessons } from 'course-platform/utils/types'

const COURSES = 10000

let lessonId = 0
function makeLesson(courseSlug: string) {
  return {
    id: ++lessonId,
    name: '',
    slug: '',
    courseSlug,
    content: '',
    draftContent: '',
  }
}

const courses: CourseWithLessons[] = []
for (let i = 0; i < COURSES; i++) {
  const id = i + 1
  const lessons = Math.floor(Math.random() * 6)
  const course = {
    id,
    name: `Course ${id}`,
    slug: `course-${id}`,
    lessons: [...Array(lessons).keys()].map(() => makeLesson(`course-${id}`)),
  }
  courses.push(course)
}

// Mock out the useCourses with 1000s of fakes
export function useCourses() {
  return { courses, isLoading: false, error: null, refetch: () => {} }
}
