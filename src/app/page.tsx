import SearchBar from "@/components/search";

export default function Home() {
  return (
    <div className="flex justify-center pt-[75px] pb-12">
      <div className="max-w-[38rem] w-full h-full flex">
        <SearchBar />
      </div>
    </div>
  );
}
