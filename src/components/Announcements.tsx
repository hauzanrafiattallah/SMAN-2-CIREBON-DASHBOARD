"use client";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Anouncements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-SkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Judul Announcements</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-02-09
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            repellat, soluta corrupti sint officia
          </p>
        </div>
        <div className="bg-PurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Judul Announcements</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-02-09
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            repellat, soluta corrupti sint officia
          </p>
        </div>
        <div className="bg-YellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Judul Announcements</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-02-09
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            repellat, soluta corrupti sint officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
