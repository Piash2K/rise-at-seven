import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule["module.exports"] ?? MarqueeModule.default ?? MarqueeModule;

const logos = [
  { type: "jd" },     
  { type: "kroger" },     
  { type: "sharkninja" },   
  { type: "redbull" },     
  { type: "playstation" }, 
  { type: "spaseekers" },      
];

// No repetition - using single set
const repeatedLogos = [...logos];

export default function ClientLogoMarquee() {
  return (
    <section className="w-full bg-[#f4f1ec] py-12 xl:py-16">
      <div className="w-full px-6 md:px-10">
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-center">
          <div className="shrink-0">
            <h2 className="text-base/tight font-medium tracking-tight text-[#111111] md:text-lg/tight">
              The agency behind
            </h2>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <Marquee autoFill gradient={false} speed={24} pauseOnHover={false} className="w-full">
              {repeatedLogos.map((logo, index) => (
                <div key={`${logo.type}-${index}`} className="mx-6 flex h-20 w-48 items-center justify-center sm:w-52 md:mx-8 md:h-24 md:w-56">
                  <LogoMark logo={logo} />
                </div>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#f4f1ec] via-[#f4f1ec]/90 to-transparent sm:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#f4f1ec] via-[#f4f1ec]/90 to-transparent sm:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMark({ logo }) {
  switch (logo.type) {
    case "jd": return <JDMark />;
    case "kroger": return <KrogerMark />;
    case "sharkninja": return <SharkNinjaMark />;
    case "redbull": return <RedBullMark />;
    case "playstation": return <PlayStationMark />;
    case "spaseekers": return <SpaseekersMark />;
    default: return null;
  }
}

const svgClass = "h-12 w-auto fill-current text-[#111111] md:h-14";

// 0. JD - SVG from HTML
const JDMark = () => (
  <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2052.6 2051.1" aria-hidden="true">
    <path d="M502 1847.6c5.8.6 9.3 1.4 12.9 1.4 40.3.1 80.7-.2 121 .2 8.7.1 13.1-3.3 16.6-11 14.3-31.5 35.2-58.7 57.1-85.2 1-1.2 2.4-2.1 4.9-4.2 1.6 3.7 3.1 6.5 4 9.4 8.6 26.3 16.5 52.7 20.2 80.3 1.3 9.9 2.2 10.6 12.1 10.6 42.3.1 84.7-.1 127 .1 7.4 0 11.2-3.3 14.5-9.6 7-13.6 13.9-27.4 22.7-39.8 11-15.4 23.8-29.5 35.9-44.2 1-1.2 2.4-2.2 4.8-4.4 11.9 31.6 20.5 63 23.7 96.6 4.5.5 8.3 1.3 12.2 1.3 54.7.1 109.3.1 164 0 3.5 0 7.1-.7 11.6-1.2-1.3-3.5-2-6-3.2-8.2-4-7.3-8.2-14.5-12.5-21.6-11-18.4-18.9-38.1-25.3-58.5-9.3-29.5-19.5-58.8-29-88.2-7.8-24.1-15.1-48.3-22.8-72.4-1.3-4.1-.9-7.6 1.7-11.2 13.1-18.5 26.2-37 39-55.7 3.4-5 7.6-7.1 13.4-6.8 2.7.1 5.3 0 8 0h273c18.2 0 16.6-.1 21.4 15.5 13.1 42.3 26.3 84.5 39.3 126.8 10.6 34.4 20.9 68.8 31.3 103.2 5.3 17.6 9.3 35.4 9.5 53.9.1 7.6 1.4 15.1 2.1 22.3 11.2 3.3 184.5 3.1 193.5-.2-1.4-2.6-2.6-5.3-4-7.8-16-27.9-27.8-57.5-37.8-87.9-7.7-23.4-16.4-46.5-24.1-69.9-11.7-35.4-22.9-71-34.4-106.4-11-33.9-22.5-67.6-33.1-101.6-9-28.9-16.8-58.2-25.3-87.2-9.9-33.9-20.2-67.6-30.1-101.5-13.4-46-27.1-92-39.6-138.2-4.4-16.3-5.5-33.4-8.1-50.2-.4-2.3-.4-4.6-.7-7-.5-4.2-2.6-6.7-7.2-6.5-1.7.1-3.3-.1-5-.1-43.3 0-86.7.1-130-.1-7.3 0-11 2.3-14.5 9-16.1 31.4-33.9 61.8-55.7 89.8-17.6 22.6-33.9 46.2-51 69.1-10.5 14.2-21.6 27.9-32.3 42-14.9 19.6-29.5 39.4-44.4 59-7.9 10.3-16.1 20.4-24.1 30.7-20.7 26.9-41.3 53.9-61.9 80.9-2.6 3.4-5.4 6.6-8.9 10.9-1.5-3.2-2.7-5-3.3-7.1-6.4-22.1-12.6-44.1-19-66.2-1.3-4.6-.4-8.3 2.6-12 7.3-9.1 14.3-18.4 21.5-27.5 18.4-23.2 37-46.3 55.3-69.7 16.6-21.2 32.6-42.9 49.5-64 26.4-33 52.9-66 80-98.4 11.1-13.2 24.1-24.9 36.3-37.1 2.1-2.1 4.9-3.5 7.3-5.2-.4-.8-.8-1.5-1.3-2.3-1.7-.6-3.4-1.6-5-1.6-47.7-.1-95.3 0-143 0-1.3 0-2.6.5-4.5.9-.7 2.4-1.7 4.8-2.1 7.4-3.5 20.2-12.4 37.7-25.2 53.5-16 19.7-31.3 39.8-47 59.7-15.7 19.8-31.7 39.4-47.4 59.3-6 7.6-11.6 15.4-17.5 23.1-2 2.5-4.3 4.8-7.9 8.7-1.8-5-3.2-8.2-4.1-11.5-12.2-43.2-24.2-86.6-36.7-129.7-5.1-17.6-11-35-12.1-53.4-.3-5.3-.7-10.6-1.2-17-3.3-.3-6.5-.9-9.7-.9-55-.1-110-.1-165 0-2.9 0-5.8.4-10.2.7 1.7 4 2.8 7 4.2 9.8 12.3 23 21.7 47.1 29.5 72 8.7 27.6 18.2 55 27.2 82.5 13.2 40.2 26.2 80.4 39.2 120.6 5.1 15.8 10.1 31.7 15.3 47.5 1.5 4.6 2.1 8.6-1.4 13-13.5 16.9-26.7 34.2-40 51.2-1.6 2-3.8 3.5-6.8 6.3-1.7-3.9-3.2-6.7-4.1-9.7-10.4-32.7-20.9-65.3-31.1-98-13.2-42.6-26.2-85.3-39.3-127.9-8.8-29-18-57.8-26.1-87-3.6-13.1-5.2-26.7-7.2-40.2-1.4-9.5-1.9-19.2-3-28.8-.4-3.6-1.2-7.1-1.9-11.3-3.8-.3-7-.7-10.3-.7-46 0-92 .1-138-.2-7.3 0-11.3 2.4-14.6 9.1-11.1 22.7-22.6 45.3-34.6 67.5-5.4 9.9-12.1 19.2-18.8 28.3-23.6 32.2-47.4 64.3-71.3 96.3-17.6 23.4-35.6 46.5-53.4 69.8-21.4 28.1-42.7 56.2-64.1 84.3-16.8 22-33.8 43.7-50.6 65.7-21.6 28.3-43 56.8-64.8 85-16.3 21.1-32.9 41.9-49.4 62.8-26.3 33.1-52.7 66.2-79 99.3-7.3 9.1-14.3 18.4-21.6 27.5-2 2.4-4.3 4.5-6.5 6.8-.7-.3-1.5-.5-2.2-.8V14.3C0 0 .1 0 14.8 0h1900.9c40.7 0 81.3.1 122 .2 2 0 4-.1 6 .1 7.2.6 8.6 2 8.9 9.2.1 2.7 0 5.3 0 8v2016.9c0 16.7 0 16.8-16.4 16.8H16.3c-16.3 0-16.3 0-16.3-15.9v-170c0-2-.1-4 0-6 .3-8.2 1.7-10 10.1-10.1 19.7-.2 39.3-.1 59-.1 1.7 0 3.4-.2 5 0 11.6 1.7 18.4-2.9 24.5-13.5 10.2-17.9 22.1-34.9 34.4-51.4 28.2-37.5 57.2-74.4 85.8-111.7 14.8-19.3 29-39 43.8-58.3 21.2-27.8 42.6-55.5 63.8-83.3 2.8-3.7 6.2-5.8 11-5.8 3.3 0 6.7-.1 10-.1h270c16.6 0 16.5.1 21.2 16.1 9.3 31.6 18.5 63.3 28.3 94.7 2.5 7.9 1.4 13.8-3.7 20.2-19.1 24-37.8 48.3-56.6 72.4-11.9 15.2-24 30.3-35.7 45.6-16.8 22.1-36.7 41.3-56.5 60.6-3.9 3.7-7.3 7.6-12.4 13z" />
  </svg>
);

// 1. Kroger - PNG from HTML
const KrogerMark = () => (
  <picture className="flex h-full w-full items-center justify-center">
    <source type="image/webp" srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=9620cd0054c98a89bec08446f5a9a4ec" />
    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=20251d29c648fcfe02a7b00f7be08051" alt="Kroger" className="max-h-12 w-auto object-contain md:max-h-14" loading="lazy" />
  </picture>
);

// 2. Shark Ninja (SN) - WebP from HTML
const SharkNinjaMark = () => (
  <picture className="flex h-full w-full items-center justify-center">
    <source type="image/webp" srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=dc8da7a54ae0924be6b41ec39aeb4afe" />
    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=2000&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=ad328a249c4d309f51ae6cae9bd50b99" alt="Shark Ninja" className="max-h-12 w-auto object-contain md:max-h-14" loading="lazy" />
  </picture>
);

// 3. Red Bull - PNG from HTML
const RedBullMark = () => (
  <picture className="flex h-full w-full items-center justify-center">
    <source type="image/webp" srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=1238863992eebc5037f8ea74e5c62491" />
    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=922fd65459eb43b54458e6992f0b8bf2" alt="Red Bull" className="max-h-12 w-auto object-contain md:max-h-14" loading="lazy" />
  </picture>
);

// 4. PlayStation - SVG from HTML
const PlayStationMark = () => (
  <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1983.9 1980.2" aria-hidden="true">
    <path d="M3.9 990.3C3.7 442.9 448.5-.8 996.3 0c544.7.8 987.8 444.7 987.6 990.8-.2 547-444 989.8-991.8 989.4-545.2-.3-988.2-443.9-988.2-989.9zm863.2 465.6h6.5c105.8 0 211.6.1 317.5 0 27.3 0 54.6-1.7 81.7-5.5 62.1-8.7 120.9-27.6 176-57.6 74.5-40.6 135.8-96.2 183.8-165.9 81-117.5 119.5-247.2 107.5-390.5-4-47.3-15.4-92.9-35.1-136.1-35.5-77.9-91.7-135.2-170.1-170.2-54.7-24.4-112.5-34.8-172-35.2-111-.7-222-.3-333-.3-1.2 0-2.3.1-4 .2-53 320-105.8 640.2-158.8 961.1zm-578.4 26.2c2 .4 3.6.8 5.2 1 29.4 3.1 58.6 1.5 87.6-3.3 66.3-11.1 126.3-37.6 181.6-75.4 55.2-37.8 101.9-84.6 142.8-137.3 49.9-64.3 89.6-134.6 123-208.6 50.6-112.3 85.8-229.5 113-349.4 13.7-60.4 25-121.3 34.8-182.4 1.6-9.8 3-19.7 4.5-29.9H752.3c-.2 1.1-.3 1.9-.4 2.7-2.9 24-5.5 48-8.8 71.9-10.6 75.9-25.4 151-45.1 225-21.4 80.2-48.1 158.5-86.2 232.6-24.2 47.2-52.5 91.6-89.2 130.3-54.5 57.5-119.3 93.1-200.4 93.4-2.9 0-3.7 1.3-4 3.8-3 23.6-6.1 47.2-9.2 70.8-5.2 39.5-10.3 78.9-15.5 118.4-1.7 12-3.2 24.1-4.8 36.4z" />
  </svg>
);

// 5. Spaseekers - PNG from HTML
const SpaseekersMark = () => (
  <picture className="flex h-full w-full items-center justify-center">
    <source type="image/webp" srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=334f2c51c4083328985ac9902448eb94" />
    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=3f52ba67380db13286776a36880213d0" alt="Spaseekers" className="max-h-12 w-auto object-contain md:max-h-14" loading="lazy" />
  </picture>
);