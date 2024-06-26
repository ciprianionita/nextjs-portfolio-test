"use client";

import React, { useContext, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref, inView } = useSectionInView("Experience");
    const [hasAnimated, setHasAnimated] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <section
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40"
            ref={ref}
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={hasAnimated ? true : inView}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.5rem solid #e5e7eb"
                                        : "0.5rem solid #1d2432",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "#343a47",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
