"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

export default function UserMenu() {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "!h-10 !w-10",
          footer: "!hidden",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Organizations"
          labelIcon={<Menu size={15} />}
          href="/onboarding"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
}
