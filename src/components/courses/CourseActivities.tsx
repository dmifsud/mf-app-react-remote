import useCourseActivityStore from "@mf-app/store/courses/activities/store.course-activities";
import { useEffect } from "react";

// TODO: temporary for build
interface Activity {
    author: string;
    badge_image: string;
    coming_soon: boolean;
    corner_state: string | null;
    course_bookmark: boolean;
    course_cover_class: string;
    course_policy_text_long: string | null;
    course_policy_text_short: string | null;
    course_url: string;
    difficulty: string;
    duration_total: number;
    header_colour: string | null;
    id: number;
    latest_activity_at: string | null;
    lead_text: string | null;
    level: number;
    mark_total: number;
    name: string;
    not_publicly_accessible: boolean;
    not_publicly_listed: boolean;
    not_visible: boolean;
    points: number;
    recent_slide_url: string;
    type: number;
    description: string;
    band: string[] | null;
    retiring: boolean;
    sort_popular: number;
    sort_trending: number;
    sort_released: number;
}

const CourseActivities = ({
  title,
  fullWidth,
}: {
  title: string;
  fullWidth?: boolean;
}) => {
  const { actions, loading, data } = useCourseActivityStore();

  useEffect(() => {
    actions.fetchActivities();
  }, [actions]);

  return (
    <div>
      {loading ? (
        <p className="text-black dark:text-white">Fetching Activities...</p>
      ) : (
        <div>
          <div
            className={`${
              fullWidth ? "w-full " : "w-auto "
            }p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {data?.activities.map((activity: Activity) => (
                  <li key={activity.id} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={activity.badge_image}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {activity.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {activity.description}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {activity.mark_total} points
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseActivities;
