import getMetadata from "@/actions/getMetadata";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = decodeURIComponent(searchParams.get("url") || "");
  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  const metadata = await getMetadata(url as unknown as string);

  if (metadata === null) {
    return NextResponse.json(null, { status: 502 });
  } else {
    return NextResponse.json(metadata, { status: 200 });
  }
}
