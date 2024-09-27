"use client";

const activities = [
  {
    time: "12:00",
    title: "Activiteit 1",
  },
  {
    time: "13:00",
    title: "Activiteit 2",
  },
  {
    time: "14:00",
    title: "Activiteit 3",
  },
  {
    time: "16:00",
    title: "Activiteit 4",
  },
];

function Activities() {
  return (
    <ul role="list" className="space-y-8 w-full">
      {activities.map((activity, index) => (
        <li
          key={index}
          className="relative flex justify-between gap-x-4 items-center"
        >
          <div className="absolute left-0 top-0 flex w-6 justify-center h-16">
            {index !== activities.length - 1 && (
              <div className="w-0.5 bg-gray-200" />
            )}
          </div>
          <>
            <div className="flex gap-6 items-center">
              <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-gray-950">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              </div>
              <div className="text-gray-100">{activity.title}</div>
            </div>
            <div className="flex-none py-0.5 text-lg leading-5 text-gray-100">
              {activity.time}
            </div>
          </>
        </li>
      ))}
    </ul>
  );
}

export default function Timeline() {
  return (
    <div id="timeline" className="bg-gray-950 w-full h-full">
      <div className="flex items-center justify-center">
        <div className="container max-w-xl px-4 md:px-4 py-40 md:py-64">
          <div className="flex flex-col items-center gap-8">
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-center text-gray-200 flex flex-col sm:flex-row justify-center gap-1">
              Programma en locatie
            </h2>
            <p className="text-center text-gray-100">
              De eendenrace vind plaats op <time>19 april 2025</time> op het
              Rapenburg te Leiden.
            </p>
            <Activities />
          </div>
        </div>
      </div>
    </div>
  );
}
