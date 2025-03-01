import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { api } from 'course-platform/utils/api'
import { Heading } from 'course-platform/Heading'
import { DataGrid, Row, Col } from 'course-platform/DataGrid'
import { Loading } from 'course-platform/Loading'
import { NoResults } from 'course-platform/NoResults'
import { useCourses, useRemoveCourse } from './useCourses'
import { queryClient } from './queryClient'
import type { CourseWithLessons } from 'course-platform/utils/types'

export function BrowseCourses() {
  // // Course Data From Context
  // const { getCourses, isLoading, fetchCourses } = useCoursesContext()
  // const courses = getCourses()
  const removeCourse = useRemoveCourse() // removeCourse(4)

  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery('courses', () => api.courses.getAll(), {
    staleTime: 1000 * 30,
  })

  // Course Data From React Query
  // const { courses, isLoading, refetch } = useCourses()

  // // ✅ Remove course via API
  // // ✅ Renew cache by refetching
  // // ❌ Requires two serial network requests
  // // ❌ over-fetches (why do we need to get all courses again)
  // function removeCourse(courseId: number) {
  //   if (!courses) return
  //   api.courses.removeCourse(courseId).then(() => {
  //     refetch()
  //   })
  // }

  // // ✅ Remove course via API
  // // ✅ Renew cache by selectively updating the array in the cache
  // // ❌ Tedious - Removing an item from an array should be abstracted
  // // ❌ Not Reusable - Should be a hook
  // // ❌ If we make our own hook, the rest of the app will not know we're mutating
  // function removeCourse(courseId: number) {
  //   if (!courses) return
  //   api.courses.removeCourse(courseId).then(() => {
  //     queryClient.setQueryData('courses', (courses) => {
  //       if (!courses) return []
  //       // They give us the old cache, we give them a new array.
  //       const i = courses.findIndex((c) => c.id === courseId)
  //       return [...courses.slice(0, i), ...courses.slice(i + 1)]
  //     })
  //   })
  // }

  // Use React Query Mutations Instead

  return (
    <div className="card spacing">
      <Heading>Courses</Heading>

      {isLoading && !courses && <Loading />}
      {!isLoading && Array.isArray(courses) && courses.length === 0 ? (
        <NoResults>
          <div className="spacing">
            <p>No Courses</p>
            <Link to="add" className="button">
              Add Course
            </Link>
          </div>
        </NoResults>
      ) : (
        <>
          <DataGrid>
            {courses?.map((course) => {
              return (
                <Row key={course.id}>
                  <Col flex>
                    {/* We don't explore the rest of the app */}
                    <Link to="." className="text-large">
                      <b>{course.name}</b>
                    </Link>
                  </Col>
                  <Col width={150}>Lessons: {course.lessons.length}</Col>
                  <Col>
                    <button
                      className="button button-small button-outline"
                      onClick={() => removeCourse(course.id)}
                    >
                      Remove
                    </button>
                  </Col>
                </Row>
              )
            })}
          </DataGrid>
          <footer>
            <Link to="add" className="button">
              Add Course
            </Link>
          </footer>
        </>
      )}
    </div>
  )
}
