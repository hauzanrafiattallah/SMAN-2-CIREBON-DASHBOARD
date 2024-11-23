import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="rounded-md h-full bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule Hauzan Ganteng</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
