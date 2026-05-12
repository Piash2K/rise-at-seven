import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsNewSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
      author: "Ray Saddiq",
      readTime: "3 mins",
      href: "https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/",
      imgSrc: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8",
      imgSrcSet: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=cc5aeea20f2c582efb622c4b2e0baa15 400w, https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=c1f448d85e1b3664a2da9764a7496bfd 800w",
      authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89"
    },
    {
      id: 2,
      title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
      author: "Ray Saddiq",
      readTime: "2 mins",
      href: "https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/",
      imgSrc: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e809ec791a3a4026cf5673426e4d3395",
      imgSrcSet: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=58d95c3de719797c1528ef86ea7c1349 400w",
      authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89"
    },
    {
      id: 3,
      title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
      author: "Carrie Rose",
      readTime: "2 mins",
      href: "https://riseatseven.com/blog/global-operations-director-promotion/",
      imgSrc: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371",
      imgSrcSet: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=69c3ee1d52b842d82374bc94dccd5e57 400w",
      authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967"
    }
  ];

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          {/* Header Section */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2
                  className="flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3 flex flex-col text-left justify-start text-gray-900 text-6xl leading-[0.9] md:text-7xl md:leading-none lg:text-7xl lg:leading-none 2xl:text-8xl 2xl:leading-[0.9] font-sans-primary font-medium tracking-tight js-heading-animate"
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
                        className="shrink-0 flex bg-black/10 relative overflow-hidden mr-2 pointer-fine:mr-0 js-image-wrapper"
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
                         <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                      <svg className="w-4 h-4 text-grey-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                      </div>
                    </div>
                    <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                      <div className="flex items-center gap-x-2">
                        <span>Explore More Thoughts</span>
                        <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                      <svg className="w-4 h-4 text-grey-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 3 Column Grid for News Items */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {newsItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="cursor-trigger group flex flex-col items-start gap-y-5 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full relative rounded-2xl lg:rounded-3xl overflow-hidden">
                    <div className="aspect-square w-full">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={item.imgSrcSet}
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        />
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    
                    {/* Circular reveal overlay with blur (starts hidden, expands on hover) */}
                    <div
                      className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center"
                      style={{
                        clipPath: "circle(0% at 50% 100%)",
                        transition: "clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                        willChange: "clip-path",
                      }}
                    >
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    
                    {/* Hover trigger to expand the circle */}
                    <div
                      className="absolute inset-0 group-hover:child-blur-reveal"
                      style={{
                        clipPath: "circle(0% at 50% 100%)",
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col items-start gap-y-3 w-full">
                    <div className="flex items-start gap-1 mt-1">
                      <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-900 bg-gray-100">
                        <div className="inline-flex items-center justify-center -ml-1.5">
                          <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                            <img
                              src={item.authorImg}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>{item.author}</div>
                      </div>
                      <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-900 bg-gray-100">
                        <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true"></i>
                        <div>{item.readTime}</div>
                      </div>
                    </div>
                    <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-2xl leading-tight xl:text-3xl xl:leading-tight font-sans-primary font-medium tracking-tight">
                      {item.title}
                    </h2>
                  </div>
                </a>
              ))}
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
                      <i className="fa-regular fa-sharp fa-arrow-up-right" aria-hidden="true"></i>
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
                      <i className="fa-regular fa-sharp fa-arrow-up-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .group:hover .absolute.inset-0[style*="clip-path: circle(0% at 50% 100%)"] {
          clip-path: circle(140% at 50% 100%) !important;
        }
      `}</style>
    </section>
  );
};

export default WhatsNewSection;