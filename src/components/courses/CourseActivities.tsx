import activityState from "@mf-app/store/courses/activities/store.course-activities";
import { Component, For, createEffect } from 'solid-js';

const CourseActivities: Component<{
    title: string;
    fullWidth?: boolean;
    onSelected?: (activityId: number) => void;
  }> = ({
  title,
  fullWidth,
  onSelected
}) => {
//   const { actions, loading, data } = useCourseActivityStore();


createEffect(() => {
    activityState.fetchActivities(); // this will only be called once
});

  return (
    <div>
      {activityState.loading ? (
        <p class="text-black dark:text-white">Fetching Activities...</p>
      ) : (
        <div>
          <div
            class={`${
              fullWidth ? "w-full " : "w-auto "
            }p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700`}
          >
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
              </h5>
              {/* <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a> */}
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <For each={activityState.data?.activities}>
                {((activity) => (
                  <li class="py-3 sm:py-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => onSelected && onSelected(activity.id)}>
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src={activity.badge_image}
                          alt={activity.name}
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {activity.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {activity.description}
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {activity.mark_total} points
                      </div>
                    </div>
                  </li>
                ))}
                </For>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseActivities;
