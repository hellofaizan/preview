"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { linkSchema } from "@/schemas";
import { Loader, Search } from "lucide-react";
import axios from "axios";
import Cards from "./cards";

type formValues = z.infer<typeof linkSchema>;

export default function SearchBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<object>();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<formValues>({
    resolver: zodResolver(linkSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: formValues) => {
    setLoading(true);

    await axios(`/api/metadata?url=${encodeURIComponent(data.link)}`).then(
      (res) => {
        if (res.status === 200) {
          setLoading(false);
          setData(res.data.props);
        } else if (res.status === 502) {
          setLoading(false);
        }
      }
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <form className="flex gap-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="https://mohammadfaizan.in"
          className="h-12 rounded-lg border p-2 px-3 focus:border-muted-foreground focus:outline-none flex-1"
          {...register("link")}
        />

        <Button
          className="flex gap-1 flex-none rounded-lg h-full"
          type="submit"
          disabled={loading}
          variant={"outline"}
        >
          {loading ? <Loader className="animate-spin" size={15} /> : <Search />}
        </Button>
      </form>

      {data && <Cards data={data} />}
    </div>
  );
}
