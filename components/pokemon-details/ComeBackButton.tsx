"use client";

import { Button } from "@/styling/common";
import Link from "next/link";

export default function ComeBackButton() {
  return (
    <Link href="/" data-cy="come-back-button">
      <Button>Back</Button>
    </Link>
  );
}
