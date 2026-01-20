import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata: Metadata = {
  title: {
    default: "Road Helper - Instant Roadside Assistance",
    template: "%s | Road Helper",
  },

  description:
    "Road Helper is a smart roadside assistance web platform that connects drivers with nearby certified helpers for car and bike emergencies such as puncture repair, fuel delivery, battery issues, and vehicle breakdown support.",

  keywords: [
    "road helper",
    "roadside assistance",
    "car breakdown help",
    "bike puncture service",
    "fuel delivery service",
    "battery jump start",
    "emergency road help",
    "car help near me",
    "bike help near me",
  ],

  authors: [{ name: "Road Helper Team" }],
  creator: "Road Helper",
  publisher: "Road Helper",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Road Helper - Instant Roadside Assistance",
    description:
      "Get instant help for car and bike problems on the road. Road Helper connects you with nearby verified helpers for fast and reliable roadside assistance.",
    type: "website",
    locale: "en_US",
    siteName: "Road Helper",
  },

  twitter: {
    card: "summary_large_image",
    title: "Road Helper - Instant Roadside Assistance",
    description:
      "Stuck on the road? Road Helper connects you with certified nearby helpers for puncture, fuel, battery, and breakdown emergencies.",
  },

  category: "Technology",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        {/* ---------------- MANTINE PROVIDER ---------------- */}
        <MantineProvider theme={{ fontFamily: "Satosi, sans-serif" }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
