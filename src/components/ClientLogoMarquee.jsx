import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule["module.exports"] ?? MarqueeModule.default ?? MarqueeModule;

const logos = [
  { type: "jd" },
  { type: "text", label: "Kroger", className: "text-[1.35rem] font-semibold tracking-[-0.08em]" },
  { type: "text", label: "HubSpot", className: "text-[1.4rem] font-semibold tracking-[-0.08em]" },
  { type: "xbox" },
  { type: "text", label: "Sixt", className: "text-[2rem] font-black tracking-[-0.1em]" },
  { type: "revolution" },
  { type: "playstation" },
];

const repeatedLogos = [...logos, ...logos];

export default function ClinetLogoMarquee() {
  return (
    <section className="w-full bg-[#f4f1ec] pt-6 xl:pt-12">
      <div className="w-full px-4 md:px-7">
        <div className="grid w-full grid-cols-20 gap-y-2">
          <div className="col-span-20 flex items-center md:col-span-4 lg:col-span-3 xl:col-span-2">
            <h2 className="inline-flex max-w-32 flex-wrap justify-start text-balance text-left text-sm/tight font-medium tracking-tight text-[#111111]">
              The agency behind ...
            </h2>
          </div>

          <div className="relative col-span-20 w-full overflow-hidden md:col-span-16 lg:col-span-17 xl:col-span-18">
            <Marquee autoFill gradient={false} speed={24} pauseOnHover={false} className="w-full">
              {repeatedLogos.map((logo, index) => (
                <div key={`${logo.type}-${index}`} className="flex h-16 w-40 items-center justify-center px-6 sm:w-44 lg:w-48">
                  <LogoMark logo={logo} />
                </div>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#f4f1ec] via-[#f4f1ec]/90 to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#f4f1ec] via-[#f4f1ec]/90 to-transparent sm:w-28" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMark({ logo }) {
  switch (logo.type) {
    case "jd":
      return <JDMark />;
    case "text":
      return <span className={`whitespace-nowrap text-[#111111] ${logo.className}`}>{logo.label}</span>;
    case "xbox":
      return <XboxMark />;
    case "revolution":
      return <RevolutionMark />;
    case "playstation":
      return <PlayStationMark />;
    default:
      return null;
  }
}

const svgClass = "h-full w-full fill-current object-contain";

const JDMark = () => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[1.15rem] font-bold tracking-[-0.08em] text-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
    JD
  </div>
);

const XboxMark = () => (
  <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 297" aria-hidden="true">
    <path d="M700 0c1.2.5 2.4 1.1 3.6 1.4 16.3 4.3 25 16.8 22.8 33.6-.4 2.9.5 4.3 2.5 5.8 30.3 22.9 60.5 45.9 90.8 68.7 1.3 1 3.7 1.2 5.2.8 6.2-1.7 12.3-4.1 18.5-5.7 2.8-.7 3.9-1.8 3.9-4.6-.1-9.7.2-19.3-.2-29-.1-1.9-2-4.3-3.8-5.6-9.1-6.3-13.2-15.1-11.8-25.8 1.4-10.7 7.7-18.2 18.3-21.6 12.3-4 26.1 2 31.6 13.6 5.6 11.9 1.9 26.1-9 33.1-3.6 2.3-4.9 4.7-4.7 8.9.3 7.8.4 15.7 0 23.5-.3 5.2 1.6 7.1 6.6 8.2 26.4 6.2 44.9 22 53.8 47.8 14.5 42.1-13.8 87.5-58 93.7-19.2 2.7-37.1-.8-53.6-10.9-2.7-1.7-4.3-1.3-6.4.9-7.7 7.9-15.4 15.7-23.3 23.3-2.5 2.4-3.3 4.8-3.1 8.3.7 14.6-8.3 25-21.4 25.2-13.3.3-23.1-9.8-22.9-23.5.2-12.5 10.6-22.4 23.4-21 6.2.7 9.8-1.3 13.7-5.5 6.3-6.8 13.1-13.3 19.7-19.8 1.9-1.9 2.7-3.3.8-5.9-20.1-27-18.1-69.1 7.2-93.2.6-.5 1-1.3 1.7-2.4-1.5-1.2-2.9-2.4-4.3-3.4-28.3-20.5-56.7-41-85.1-61.3-1.6-1.2-4.7-1.5-6.6-.8-16.6 6.5-34-.7-39.6-16.8-5.9-16.8 3.1-33.4 20.7-38.4 1.4-.4 2.7-1.1 4.1-1.7 1.6.1 3.2.1 4.9.1zm156.9 216.5c20.9.2 41.4-19.4 41-40.2-.4-22.1-15.9-40.5-40.1-41.2-21.3-.7-40.9 19.2-41.1 41.2-.2 20.9 18.8 40 40.2 40.2zM0 56h35.6v79h76.1V56.4h34.7v193.2h-34.7v-80.5H35.8V250H0V56z" />
    <path d="M618 297c.1-2.3.2-4.7.2-7 0-37.5-.2-75 .1-112.5.1-22.2 7.1-42 23.8-57.3 24.7-22.6 61.1-24 89.6-3.1 24.5 17.9 34.3 42.7 28.6 72.3-5.7 29.7-23.9 49.5-53.6 56.7-18.8 4.6-36.8 2.1-51.9-11.4-.6-.5-1.3-1-2-1.5-.1-.1-.3.1-.9.2-.1.8-.3 1.7-.3 2.6v58.5c0 .8.2 1.6.4 2.4-11.3.1-22.7.1-34 .1zm33.3-121.5c.5 3.6.7 7.3 1.7 10.8 4.5 15.1 14 25.6 29.4 29.8 13.7 3.7 25.6-.1 35.4-10.3 16.6-17.3 16.3-44.8-.7-61.7-7.4-7.4-16.3-11.8-26.8-11-22.4 1.7-38.7 19.9-39 42.4z" />
  </svg>
);

const RevolutionMark = () => (
  <div className="flex flex-col items-center text-center text-[#111111]">
    <span className="text-[1rem] font-semibold uppercase tracking-[0.18em]">Revolution</span>
    <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.34em] text-[#777777]">Beauty London</span>
  </div>
);

const PlayStationMark = () => (
  <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 325.7" aria-hidden="true">
    <path d="M636 1.7c-59.4 13-88.4 76.5-57.9 126.9 23.9 39.4 77.6 53.9 121.4 32.7 20.3-9.8 37.1-28.3 44-48.5 3.4-10 4.6-17.6 4.6-28.6-.1-27.4-14.2-53-38-68.8-8.4-5.6-15.5-8.8-27-12.2-11.9-3.6-34.4-4.3-47.1-1.5zm39.3 25.5c13.7 4.4 25.7 13.3 33.3 24.7 14.6 22 13.2 50.8-3.4 71.5-26.7 33.1-81.1 28.8-101.7-8.1-6-10.6-7.7-17.4-7.8-30 0-9.7.3-12 3-19.7 6.7-19.2 21.4-33 41.7-39 7.4-2.2 27.2-1.9 34.9.6zM1492 1.7c-42.7 9.1-71.9 45.7-69.7 87.6.7 13.5 3.3 23.2 9.3 34.3 17.2 32.6 50.3 49.9 90 47.1 33-2.4 63-23.1 76-52.6 6.8-15.3 8.6-36.8 4.5-52.8-8.4-32.6-35.6-57.1-70.9-64.1-10.1-1.9-28.6-1.7-39.2.5zm35.7 24.6c26.9 6.3 46 29.3 46.9 56.5 1.2 35-26.1 63-61.5 63.1-19.5 0-37.5-8.6-48.7-23.4-8.9-11.8-12.8-23.4-12.8-38.2.1-27.5 19.2-51.4 46.3-58 7.5-1.8 22.2-1.8 29.8 0zM0 85.7v80.8l13.8-.1 13.7-.1.3-31.3.2-31.2h56.7L101 133c9 16.1 16.9 30.3 17.6 31.5 1.3 2.1 1.9 2.2 16.9 2.1 8.9 0 15.5-.4 15.5-1 0-.5-8.3-15.1-18.5-32.5-10.2-17.3-18.5-31.8-18.5-32.2 0-.3 3.4-2.3 7.5-4.5 30-15.4 36.6-52.5 13.4-75.7-6.8-6.8-15-11.2-25.7-14-6.9-1.8-11.4-1.9-58.4-1.9H0v80.9zm106-53.5c9.2 4.8 14.4 12.9 14.4 22.1 0 9.7-5.7 18-15.4 22.4-4.3 1.9-6.5 2.1-40.7 2.1H28V29.7l37.3.3c34 .3 37.5.5 40.7 2.2z" />
  </svg>
);
