"use client";

import { useProps } from "@/lib/PropsContext";
import VinylAlbumCard from "../../ui/VinylAlbumCard";

export default function VinylAlbumCardPreview() {
  const { props } = useProps();

  return (
    <div className="flex w-full items-center justify-center p-6">
      <VinylAlbumCard {...props} />
    </div>
  );
}
