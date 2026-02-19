"use client";

import * as React from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mock Exams",
    href: "/docs/primitives/alert-dialog",
    description:
      "Take a myriad of exams scraped from ExamTopics to help you get your certification",
  },
  {
    title: "Discussion Board",
    href: "/docs/primitives/hover-card",
    description:
      "The discussion board allows users to collaborate with each other, post questions about a topic they are unfamiliar with and recieve responses from the community",
  },
  {
    title: "Stats Tracker",
    href: "/docs/primitives/progress",
    description: "Displays how well you are performing on the mock exams",
  },
  {
    title: "AI Overview",
    href: "/docs/primitives/scroll-area",
    description:
      "Having some trouble, you can ask for some help from the AI assistant to better understand the reasioning behing the correct / incorrect answers",
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="flex justify-center items-center w-screen md:w-screen/2">
      <NavigationMenu className="px-4 py-2 border rounded-lg border-be-emerald-300 mt-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/docs" title="Introduction">
                  User friendly docs to get you started.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Open Sourced Side Projects"
                >
                  Check out some of my other projects
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/Stats">Stats</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
