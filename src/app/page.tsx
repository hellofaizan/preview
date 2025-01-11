import SearchBar from "@/components/search";

export default function Home() {
  return (
    <div className="flex items-center pt-[80px] pb-20 w-full justify-center ">
      <div className="max-w-[38rem] w-full h-full flex">
        <SearchBar />
      </div>
    </div>
  );
}
