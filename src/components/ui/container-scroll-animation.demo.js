"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[200px] pt-[40px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-6xl md:text-[8rem] font-black leading-none text-black dark:text-white">
              Teen Dost
            </h1>
          </>
        }
      >
        <div className="bg-white dark:bg-black w-full h-full flex items-center justify-center p-8 rounded-2xl">
          <img
            src="https://i.ibb.co/tKpcNDy/image.png"
            alt="hero"
            className="mx-auto object-contain h-full w-full max-h-[600px]"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
} 