import useCourseActivityStore from "@mf-app/store/courses/activities/store.course-activities";
import { Activity } from '@mf-app/store/models/courses.models';
import { useEffect } from "react";


const CourseActivities = ({
  title,
  fullWidth,
  onSelected
}: {
  title: string;
  fullWidth?: boolean;
  onSelected?: (activityId: number) => void;
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
              {/* <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a> */}
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {data?.activities.map((activity: Activity) => (
                  <li key={activity.id} className="py-3 sm:py-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => onSelected && onSelected(activity.id)}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={activity.badge_image}
                          alt={activity.name}
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
