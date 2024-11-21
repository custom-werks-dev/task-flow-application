import Stats from "@/components/Stats";

const Dashboard = () => {
  return (
    <div className="flex gap-4 m-1 justify-center flex-wrap">
      {/* <Stats category="Business" /> */}
      <Stats category="Tasks" />
      {/* <Stats category="Male" />
      <Stats category="Female" /> */}
    </div>
  );
};

export default Dashboard;
