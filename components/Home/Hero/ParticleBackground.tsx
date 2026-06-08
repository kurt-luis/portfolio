"use client";

import { useEffect, useMemo } from "react";
import {
  tsParticles,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#f8f6f7" },
        links: {
          color: "#f8f6f7",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2,
        },
        number: {
          density: { enable: true, width: 800 },
          value: 60,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    let containerInstance: any = null;

    loadSlim(tsParticles).then(() => {
      tsParticles
        .load({ id: "tsparticles-container", options })
        .then((container) => {
          containerInstance = container;
        });
    });

    return () => {
      if (containerInstance) {
        containerInstance.destroy();
      }
    };
  }, [options]);

  return (
    <div
      id="tsparticles-container"
      className="absolute inset-0 w-full h-full z-[1]"
    />
  );
}