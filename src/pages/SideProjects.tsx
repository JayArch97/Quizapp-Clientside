import NavBar from "../components/NavBar.tsx";

export default function SideProjects() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center align-items:center width:'100%'">
        <p className="text-lg text-sky-950 dark:text-white mt-5">
          Hey there here are some of my other additional projects in case you
          are interested
        </p>
      </div>
    </>
  );
}
