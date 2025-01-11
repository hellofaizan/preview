import React from "react";
import Discord from "./cards/discord";
import Facebook from "./cards/facebook";
import Google from "./cards/google";
import LinkedIn from "./cards/linkedin";
import Telegram from "./cards/telegram";
import Twitter from "./cards/twitter";
import WhatsApp from "./cards/whatsapp";
import Slack from "./cards/slack";

export default function Cards({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="flex flex-col gap-10 w-full">
      <Google data={data} />
      <Twitter data={data} />
      <LinkedIn data={data} />
      <Facebook data={data} />
      <Discord data={data} />
      <Slack data={data} />
      <Telegram data={data} />
      <WhatsApp data={data} />
    </div>
  );
}
