"use client";

import React from "react";
import Image from "next/image";
import DynamicIcon from "../DynamicIcon";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Hero() {
  const { ref, isInView } = useSectionInView(`#home`);
  const setOpacity: string = isInView ? "opacity-100" : "opacity-0";
  const setTransitionY: string = isInView ? "translate-y-0" : "translate-y-6";
  const setScale: string = isInView ? "scale-100" : "scale-0";

  return (
    <section className="w-full flex items-center flex-col mb-28">
      <div
        ref={ref}
        className={`transition-opacity duration-1000 relative ${setOpacity}`}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-8 border-white mb-2">
          <Image
            width={9999}
            height={9999}
            alt="cover"
            src="https://b-f9-zpcloud.zdn.vn/4749568201873479293/6c812d0592404c1e1551.jpg"
            className="w-full h-full object-center object-cover"
          />
        </div>

        <DynamicIcon
          icon="StarIcon"
          solid
          className="w-10 h-10 z-10 text-yellow-500 absolute bottom-1 right-1 rotate-6"
        />
      </div>

      <div className="flex flex-col items-center mb-4">
        <h1
          ref={ref}
          className={`transition-all duration-200   mb-2 ${setTransitionY} ${setOpacity}`}
        >{`Huu Phuong`}</h1>
        <h2
          ref={ref}
          className={`transition-all duration-200 mb-4 ${setOpacity}`}
        >{`Front-End Web Developer`}</h2>

        <div
          ref={ref}
          className={`transition-all duration-300 flex gap-x-2 items-center ${setOpacity}`}
        >
          <div className="w-3 h-3 relative flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="font-medium">Available for new position</p>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-x-2">
        <div ref={ref}>
          <svg
            className={`transition-transform duration-300 w-6 h-6 ${setScale}`}
            viewBox="0 0 128 128"
          >
            <rect
              className="text-black"
              x="4.83"
              y="4.83"
              width="118.35"
              height="118.35"
              rx="6.53"
              ry="6.53"
            ></rect>
            <path
              fill="#fff"
              d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
            ></path>
          </svg>
        </div>
        <div ref={ref}>
          <svg
            className={`transition-transform duration-500 w-6 h-6 ${setScale} fill-current text-white`}
            viewBox="0 0 128 128"
          >
            <path
              className="text-white dark:text-black"
              d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
            ></path>
            <path
              className="text-black dark:text-white"
              d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
            ></path>
          </svg>
        </div>
        <div ref={ref}>
          <svg
            className={`transition-transform duration-700 w-6 h-6 ${setScale} fill-current text-black dark:text-white`}
            viewBox="0 0 128 128"
          >
            <g>
              <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="flex gap-x-2 items-center">
        <div
          ref={ref}
          className={`transition-transform duration-300 flex items-center ${
            isInView ? "translate-x-0" : "-translate-x-6"
          } ${setOpacity}`}
        >
          <DynamicIcon
            icon="ChevronDoubleRightIcon"
            className="w-6 h-6 font-bold animate-bounce-from-left dark:text-white"
          />

          <button className="bg-black hover:bg-white hover:text-black hover:border transition-colors uppercase font-medium text-white px-4 py-2 rounded-md w-36">
            Contact Me
          </button>
        </div>

        <div
          ref={ref}
          className={`transition-transform duration-300 flex items-center ${
            isInView ? "translate-x-0" : "translate-x-6"
          } ${isInView ? "opacity-1" : "opacity-0"}`}
        >
          <button className="bg-white hover:text-white transition-colors hover:bg-black font-medium uppercase text-black border px-4 py-2 rounded-md w-36">
            My CV
          </button>

          <DynamicIcon
            icon="ChevronDoubleLeftIcon"
            className="w-6 h-6 font-bold animate-bounce-from-right dark:text-white"
          />
        </div>
      </div>
    </section>
  );
}
