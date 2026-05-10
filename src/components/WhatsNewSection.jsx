import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsNewSection = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1.2,
        spaceBetween: 20,
        pagination: {
          el: paginationRef.current,
          type: "progressbar",
        },
        breakpoints: {
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        },
      });

      return () => {
        if (swiper) swiper.destroy();
      };
    }
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          {/* Header Section */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2
                  className=" flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3 flex flex-col text-left justify-start text-gray-900 text-6xl leading-[0.9] md:text-7xl md:leading-none lg:text-7xl lg:leading-none 2xl:text-8xl 2xl:leading-[0.9] font-sans-primary font-medium tracking-tight js-heading-animate"
                  aria-label="What'sNew"
                >
                  <div
                    className="w-full"
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-left justify-start">
                      <div
                        className="inline mr-2 pointer-fine:mr-0 js-word"
                        style={{ marginRight: "16px" }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              W
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              h
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              a
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              t
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              '
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              s
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className=" shrink-0 flex bg-black/10 relative overflow-hidden mr-2 pointer-fine:mr-0 js-image-wrapper"
                        style={{
                          marginRight: "16px",
                          borderRadius: "15%",
                          width: "108px",
                          height: "auto",
                        }}
                      >
                        <div className="w-full h-full relative js-image">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad 200w"
                              sizes="100vw"
                            />
                            <img
                              src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                              srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=196df3f09231b9e6d4b20b3b56f237ea 200w"
                              sizes="100vw"
                              alt="FOS25 3380"
                              className="w-full h-full object-cover object-center absolute inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                      <div
                        className="inline mr-2 pointer-fine:mr-0 js-word"
                        style={{ marginRight: "16px" }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              N
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              e
                            </span>
                          </span>
                          <span className="inline-flex flex-col relative h-full">
                            <span
                              className="block relative w-full h-full"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0%)",
                              }}
                            >
                              w
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>

              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <a
                  href="https://riseatseven.com/blog/"
                  target=""
                  className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 focus:ring-3 hover:rounded-xl bg-white text-gray-900 ring-gray-900/5 flex-row-reverse"
                >
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-300 group-hover:-translate-y-6">
                      <div className="flex items-center gap-x-2">
                        <span>Explore More Thoughts</span>
                        <span
                          className="inline-block align-middle transition-transform text-xs mt-1"
                          aria-hidden="true"
                        >
                          <i
                            className="fa-regular fa-sharp fa-arrow-up-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                      <div className="flex items-center gap-x-2">
                        <span>Explore More Thoughts</span>
                        <span
                          className="inline-block align-middle transition-transform text-xs mt-1"
                          aria-hidden="true"
                        >
                          <i
                            className="fa-regular fa-sharp fa-arrow-up-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="col-span-12 lg:px-7">
            <div className="w-full swiper js-carousel-64" ref={swiperRef}>
              <div className="ease-smooth swiper-wrapper">
                {/* Slide 1 */}
                <div
                  className="py-2 swiper-slide group"
                  style={{ width: "821.333px", marginRight: "20px" }}
                >
                  <a
                    href="https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/"
                    className="w-full flex flex-col items-start gap-y-5 transition-transform duration-300 group-hover:-translate-y-2 circle-mask-container"
                  >
                    <div className="w-full grid">
                      <div className="col-start-1 row-start-1 z-20 p-3"></div>
                      <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
                        <div className="w-full h-full transition-all duration-700 scale-120 circle-mask blur-0 group-hover:blur-md">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=cc5aeea20f2c582efb622c4b2e0baa15 400w, https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=c1f448d85e1b3664a2da9764a7496bfd 800w, https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=2cb8dafd9577761f7614e12b191332d2 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=956fbe55cbc565d2ee1fbf6106ffda9e 1600w"
                              sizes="100vw"
                            />
                            <img
                              src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8"
                              alt="0 B5 A8137"
                              className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                              loading="lazy"
                              style={{ opacity: 1 }}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl overflow-hidden lg:rounded-3xl">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=cc5aeea20f2c582efb622c4b2e0baa15 400w"
                            sizes="100vw"
                          />
                          <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8"
                            alt="0 B5 A8137"
                            className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                            loading="lazy"
                            style={{ opacity: 1 }}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <img
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89"
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>Ray Saddiq</div>
                        </div>
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <i
                            className="fa-sharp fa-regular fa-stopwatch"
                            aria-hidden="true"
                          ></i>
                          <div>3 mins</div>
                        </div>
                      </div>
                      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-2xl leading-none xl:text-3xl xl:leading-none font-sans-primary font-medium tracking-tight js-heading">
                        Rise at Seven Appoints Hollie Lovell as Senior
                        Operations Lead
                      </h2>
                    </div>
                  </a>
                </div>

                {/* Slide 2 */}
                <div
                  className="py-2 swiper-slide group"
                  style={{ width: "821.333px", marginRight: "20px" }}
                >
                  <a
                    href="https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/"
                    className="w-full flex flex-col items-start gap-y-5 transition-transform duration-300 group-hover:-translate-y-2 circle-mask-container"
                  >
                    <div className="w-full grid">
                      <div className="col-start-1 row-start-1 z-20 p-3"></div>
                      <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
                        <div className="w-full h-full transition-all duration-700 scale-120 circle-mask blur-0 group-hover:blur-md">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=58d95c3de719797c1528ef86ea7c1349 400w"
                              sizes="100vw"
                            />
                            <img
                              src="https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e809ec791a3a4026cf5673426e4d3395"
                              alt="WRAS Manchester 01"
                              className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                              loading="lazy"
                              style={{ opacity: 1 }}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl overflow-hidden lg:rounded-3xl">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=58d95c3de719797c1528ef86ea7c1349 400w"
                            sizes="100vw"
                          />
                          <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e809ec791a3a4026cf5673426e4d3395"
                            alt="WRAS Manchester 01"
                            className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                            loading="lazy"
                            style={{ opacity: 1 }}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <img
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89"
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>Ray Saddiq</div>
                        </div>
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <i
                            className="fa-sharp fa-regular fa-stopwatch"
                            aria-hidden="true"
                          ></i>
                          <div>2 mins</div>
                        </div>
                      </div>
                      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-2xl leading-none xl:text-3xl xl:leading-none font-sans-primary font-medium tracking-tight js-heading">
                        Rise at Seven Exits Sheffield and Triples Manchester as
                        new HQ as they go for global expansion
                      </h2>
                    </div>
                  </a>
                </div>

                {/* Slide 3 */}
                <div
                  className="py-2 swiper-slide group"
                  style={{ width: "821.333px", marginRight: "20px" }}
                >
                  <a
                    href="https://riseatseven.com/blog/global-operations-director-promotion/"
                    className="w-full flex flex-col items-start gap-y-5 transition-transform duration-300 group-hover:-translate-y-2 circle-mask-container"
                  >
                    <div className="w-full grid">
                      <div className="col-start-1 row-start-1 z-20 p-3">
                        <div className="flex flex-wrap gap-1">
                          <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                            <div>News</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
                        <div className="w-full h-full transition-all duration-700 scale-120 circle-mask blur-0 group-hover:blur-md">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=69c3ee1d52b842d82374bc94dccd5e57 400w"
                              sizes="100vw"
                            />
                            <img
                              src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371"
                              alt="0 B5 A7827"
                              className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                              loading="lazy"
                              style={{ opacity: 1 }}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl overflow-hidden lg:rounded-3xl">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=69c3ee1d52b842d82374bc94dccd5e57 400w"
                            sizes="100vw"
                          />
                          <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371"
                            alt="0 B5 A7827"
                            className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                            loading="lazy"
                            style={{ opacity: 1 }}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <img
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967"
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>Carrie Rose</div>
                        </div>
                        <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-300 bg-white">
                          <i
                            className="fa-sharp fa-regular fa-stopwatch"
                            aria-hidden="true"
                          ></i>
                          <div>2 mins</div>
                        </div>
                      </div>
                      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-2xl leading-none xl:text-3xl xl:leading-none font-sans-primary font-medium tracking-tight js-heading">
                        Ryan McNamara Is Now Rise at Seven's Global Operations
                        Director
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Explore Button */}
          <div className="col-span-12 md:hidden px-4 md:px-7">
            <a
              href="https://riseatseven.com/blog/"
              target=""
              className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 focus:ring-3 hover:rounded-xl bg-white text-gray-900 ring-gray-900/5 flex-row-reverse"
            >
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-6">
                  <div className="flex items-center gap-x-2">
                    <span>Explore More Thoughts</span>
                    <span
                      className="inline-block align-middle transition-transform text-xs mt-1"
                      aria-hidden="true"
                    >
                      <i
                        className="fa-regular fa-sharp fa-arrow-up-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                  <div className="flex items-center gap-x-2">
                    <span>Explore More Thoughts</span>
                    <span
                      className="inline-block align-middle transition-transform text-xs mt-1"
                      aria-hidden="true"
                    >
                      <i
                        className="fa-regular fa-sharp fa-arrow-up-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;
