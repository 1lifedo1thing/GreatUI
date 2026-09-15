"use client";

import { useProps } from "@/lib/PropsContext";
import DeploymentChecklist from "../../ui/DeploymentChecklist";

export default function DeploymentChecklistPreview() {
  const { props } = useProps();

  return (
    <div className="flex w-full items-center justify-center p-6">
      <DeploymentChecklist {...props} />
    </div>
  );
}
