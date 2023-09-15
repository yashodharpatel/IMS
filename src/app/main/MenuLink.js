"use client";
import React from "react";
import "./style.css";
import Link from "next/link";

export default function MenuLink({ icon, text,link }) {
  const name = "anna";

  return (
    <Link href={`/${link}`}>
      <div className="menulink">
        {icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">
          {text === "Logout" && `( ${name} )`}
        </span>
      </div>
    </Link>
  );
}
