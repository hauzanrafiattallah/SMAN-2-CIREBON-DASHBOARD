import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="rounded-md h-full bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule Guru</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
