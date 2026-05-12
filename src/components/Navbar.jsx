import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const links = [
  {
    id: 102,
    label: "Services",
    href: "https://riseatseven.com/services/",
    plus: true,
    items: [
      {
        id: 4790,
        label: "Search & Growth Strategy",
        href: "https://riseatseven.com/services/strategy-growth/",
      },
      {
        id: 11981,
        label: "Onsite SEO",
        href: "https://riseatseven.com/services/onsite-seo/",
      },
      {
        id: 4789,
        label: "Content Experience",
        href: "https://riseatseven.com/services/content-experience/",
      },
      {
        id: 22669,
        label: "B2B Marketing",
        href: "https://riseatseven.com/services/b2b-marketing/",
      },
      {
        id: 12019,
        label: "Digital PR",
        href: "https://riseatseven.com/services/digital-pr/",
      },
      {
        id: 12020,
        label: "Social Media & Campaigns",
        href: "https://riseatseven.com/services/social/",
      },
      {
        id: 12021,
        label: "Data & Insights",
        href: "https://riseatseven.com/services/data-insights/",
      },
      {
        id: 16559,
        label: "Social SEO/Search",
        href: "https://riseatseven.com/services/social-seo-tiktok-youtube/",
      },
    ],
  },
  {
    id: 23929,
    label: "Industries",
    href: "https://riseatseven.com/services/b2b-marketing/",
    plus: true,
    items: [
      {
        id: 23931,
        label: "B2B Marketing",
        href: "https://riseatseven.com/services/b2b-marketing/",
      },
    ],
  },
  {
    id: 103,
    label: "International",
    href: "https://riseatseven.com/international/",
    plus: true,
    items: [
      {
        id: 4762,
        label: "US Digital PR",
        href: "https://riseatseven.com/international/us-digital-pr/",
      },
      {
        id: 23207,
        label: "Spain Digital PR",
        href: "https://riseatseven.com/international/us-digital-pr/spain-digital-pr/",
      },
      {
        id: 23208,
        label: "Germany Digital PR",
        href: "https://riseatseven.com/germany-digital-pr/",
      },
      {
        id: 23603,
        label: "Netherlands Digital PR",
        href: "https://riseatseven.com/netherlands-digital-pr/",
      },
    ],
  },
  {
    id: 16913,
    label: "About",
    href: "https://riseatseven.com/about/",
    plus: true,
    items: [
      { id: 16915, label: "About Us", href: "https://riseatseven.com/about/" },
      {
        id: 16916,
        label: "Meet The Risers",
        href: "https://riseatseven.com/meet-the-team/",
      },
      { id: 16917, label: "Culture", href: "https://riseatseven.com/culture/" },
      {
        id: 16918,
        label: "Testimonials",
        href: "https://riseatseven.com/testimonials/",
      },
    ],
  },
  {
    id: 104,
    label: "Work",
    href: "https://riseatseven.com/work/",
    badge: "25",
  },
  { id: 105, label: "Careers", href: "https://riseatseven.com/careers/" },
  {
    id: 106,
    label: "Blog & Resources",
    href: "https://riseatseven.com/blog/",
    plus: true,
    items: [
      { id: 24144, label: "Blog", href: "https://riseatseven.com/blog/" },
      {
        id: 24145,
        label: "Category Leaderboard",
        href: "https://riseatseven.com/category-leaderboard/",
      },
      {
        id: 24146,
        label: "Multi-Channel Search Report",
        href: "https://riseatseven.com/multi-channel-search-report-2026-/",
      },
    ],
  },
  { id: 107, label: "Webinar", href: "https://riseatseven.com/webinars/" },
];

// Mega Menu Images (unchanged)
const serviceImages = {
  4790: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a51fa90e59f4de7a51395aaed8e58428",
  11981:
    "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268&s=7b53d90905d984816762e873a47f385d",
  4789: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=0eac1033a387c2e512f40f9edecda2a3",
  22669:
    "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015&s=df051a63ff34be86c30633107a8ae59a",
  12019:
    "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=8c235c12e9ec64b43656efc0e9e378a1",
  12020:
    "https://rise-atseven.transforms.svdcdn.com/production/images/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858840&s=7dfec3a2b398ef12b573b6eb019ea248",
  12021:
    "https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751376823&s=66a5710ec8714197799253183ec9457a",
  16559:
    "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1758739812&s=0cc3aecb5a3a3d8c6b19c43cf1d5e5ed",
};

const industriesImages = {
  23931:
    "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015&s=df051a63ff34be86c30633107a8ae59a",
};

const internationalImages = {
  4762: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
  23207:
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-101020_frxy.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776939020&s=34b9c756d414c9d5fe741610b6586270",
  23208:
    "https://rise-atseven.transforms.svdcdn.com/production/images/27.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776937869&s=a63e93c2b6125756595bcd4261110e3e",
  23603:
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-095313_xfhk.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776937993&s=7ec4824e91e732244781774bbd2a5506",
};

const aboutImages = {
  16915:
    "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7487.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751838846&s=ea95f9b1f06ee4da75582cc8d2b9060c",
  16916:
    "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a51fa90e59f4de7a51395aaed8e58428",
  16917:
    "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_4280-2.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=21ccf01b7608f94ccc3007f71a8081ec",
  16918:
    "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
};

const blogImages = {
  24144:
    "https://rise-atseven.transforms.svdcdn.com/production/images/987a2051e11c80faa2a669c0eb61c514c7cc2314.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846498&s=9486511bfbd4d41fbb880cdff23322eb",
  24145:
    "https://rise-atseven.transforms.svdcdn.com/production/images/RA7-CL-VERSION-1-3-1_2026-05-05-132743_kfxk.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777987663&s=77133958a3f81720da736a6356a32b55",
  24146:
    "https://rise-atseven.transforms.svdcdn.com/production/images/homepage-image.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.4856&fp-y=0.5205&dm=1762943735&s=691f0bc8b24b3bf4319db013b52132d5",
};

const Logo = () => (
  <svg
    className="h-auto w-full fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 168 21"
    aria-hidden="true"
  >
    <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
    <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
    <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
    <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
    <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
    <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
    <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
    <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
    <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
    <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
    <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
    <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
    <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
    <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
  </svg>
);

// Mega Menu Component
const MegaMenu = ({
  menu,
  activeSubmenu,
  setActiveSubmenu,
  isOpen,
  images,
}) => {
  const menuRef = useRef(null);
  const isSingleColumnMenu =
    menu.id === 23929 ||
    menu.id === 103 ||
    menu.id === 16913 ||
    menu.id === 106;
  const cardWidthClass =
    menu.id === 102 ? "w-5xl" : menu.id === 23929 ? "w-3xl" : "w-4xl";
  const imageWidthClass = menu.id === 102 ? "w-96" : "w-80";

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.style.display = "flex";
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, scaleX: 0.95, scaleY: 0.95 },
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            if (menuRef.current) menuRef.current.style.display = "none";
          },
        });
      }
    }
  }, [isOpen]);

  const firstHalf =
    menu.items?.slice(0, Math.ceil(menu.items.length / 2)) || [];
  const secondHalf = menu.items?.slice(Math.ceil(menu.items.length / 2)) || [];

  return (
    <div
      ref={menuRef}
      className="shrink-0 absolute z-20 left-1/2 -translate-x-1/2 translate-y-full pt-1 hidden pointer-events-auto bottom-0"
      data-menu-id={menu.id}
      style={{ opacity: 0, display: "none" }}
    >
      <div
        className={`bg-white rounded-3xl flex shrink-0 shadow-2xl ${cardWidthClass}`}
      >
        <div className="flex-1 inline-flex items-center justify-center px-8 py-6">
          <div
            className={
              isSingleColumnMenu
                ? "flex min-w-75 flex-col gap-y-4"
                : "flex gap-x-8"
            }
          >
            {isSingleColumnMenu ? (
              <div className="w-full">
                <ul className="flex flex-col gap-y-1">
                  {menu.items?.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center whitespace-nowrap tracking-tight leading-none font-semibold relative text-[24px] hover:text-black transition-colors"
                        onMouseEnter={() => setActiveSubmenu(item.id)}
                      >
                        <div className="relative overflow-hidden py-0.5">
                          <div className="transition-transform duration-300 group-hover:-translate-y-full">
                            {item.label}
                          </div>
                          <div className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            {item.label}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                {firstHalf.length > 0 && (
                  <div className="flex-1">
                    <ul className="flex flex-col gap-y-1">
                      {firstHalf.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            className="group inline-flex items-center whitespace-nowrap tracking-tight leading-none font-semibold relative text-[24px] hover:text-black transition-colors"
                            onMouseEnter={() => setActiveSubmenu(item.id)}
                          >
                            <div className="relative overflow-hidden py-0.5">
                              <div className="transition-transform duration-300 group-hover:-translate-y-full">
                                {item.label}
                              </div>
                              <div className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                {item.label}
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {secondHalf.length > 0 && (
                  <div className="flex-1">
                    <ul className="flex flex-col gap-y-1">
                      {secondHalf.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            className="group inline-flex items-center whitespace-nowrap tracking-tight leading-none font-semibold relative text-[24px] hover:text-black transition-colors"
                            onMouseEnter={() => setActiveSubmenu(item.id)}
                          >
                            <div className="relative overflow-hidden py-0.5">
                              <div className="transition-transform duration-300 group-hover:-translate-y-full">
                                {item.label}
                              </div>
                              <div className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                {item.label}
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className={`shrink-0 relative p-2 ${imageWidthClass}`}>
          {menu.id === 102 && (
            <div className="absolute bottom-0 left-0 w-full z-20 p-5">
              <a
                href={menu.href}
                className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl bg-black text-white flex-row-reverse"
              >
                <div className="relative overflow-hidden">
                  <div className="transition-all duration-300 group-hover:-translate-y-6">
                    <div className="flex items-center gap-x-2">
                      <span>View all services</span>
                      <span className="inline-block align-middle text-xs mt-1">
                        ↗
                      </span>
                    </div>
                  </div>
                  <div className="transition-all duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                    <div className="flex items-center gap-x-2">
                      <span>View all services</span>
                      <span className="inline-block align-middle text-xs mt-1">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )}
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-square w-full shrink-0">
            <div className="w-full h-full relative">
              {menu.items?.map((item) => (
                <div
                  key={item.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${activeSubmenu === item.id ? "opacity-100 scale-100" : "opacity-0 scale-105 blur-md"}`}
                >
                  <img
                    src={images[item.id]}
                    alt={item.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(4790);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateHoverBackground = (element) => {
    if (!element || !navRef.current) return;

    const targetRect = element.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    const hoverBg = document.querySelector(".nav-hover-bg");
    if (hoverBg) {
      hoverBg.style.width = targetRect.width + "px";
      hoverBg.style.left = targetRect.left - navRect.left + "px";
      hoverBg.style.opacity = "1";
    }
  };

  const resetHoverBackground = () => {
    const hoverBg = document.querySelector(".nav-hover-bg");
    if (hoverBg) {
      hoverBg.style.opacity = "0";
    }
  };

  const handleNavMouseEnter = (menuId, event) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    const target = event.currentTarget;
    setHoveredElement(target);
    updateHoverBackground(target);
    const menu = links.find((l) => l.id === menuId);
    setActiveMega(menu?.items?.length ? menuId : null);

    // Reset active submenu for the new menu
    if (menu?.items?.[0]) {
      setActiveSubmenu(menu.items[0].id);
    }
  };

  const handleNavMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMega(null);
      setHoveredElement(null);
      resetHoverBackground();
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleMegaMenuMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    setActiveMega(null);
    setHoveredElement(null);
    resetHoverBackground();
  };

  // Update hover background on window resize
  useEffect(() => {
    const handleResize = () => {
      if (hoveredElement && activeMega) {
        updateHoverBackground(hoveredElement);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hoveredElement, activeMega]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const hasScrolled = currentScrollY > 24;

      setScrolled(hasScrolled);

      setHideHeader(scrollingDown && currentScrollY > 100 && !mobileMenu);

      if (currentScrollY <= 40) {
        setHideHeader(false);
      }

      if (activeMega) {
        setActiveMega(null);
        resetHoverBackground();
      }

      setLastScrollY(currentScrollY);
    };

    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileMenu(false);
        resetHoverBackground();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [lastScrollY, mobileMenu, activeMega]);

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      mobileMenu || !!activeMega,
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenu, activeMega]);

  const megaMenus = links.filter(
    (link) => Array.isArray(link.items) && link.items.length > 0,
  );

  const getImagesForMenu = (menuId) => {
    if (menuId === 102) return serviceImages;
    if (menuId === 23929) return industriesImages;
    if (menuId === 103) return internationalImages;
    if (menuId === 16913) return aboutImages;
    if (menuId === 106) return blogImages;
    return {};
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 ${
          activeMega
            ? "pointer-events-auto backdrop-blur-lg bg-black/20"
            : "pointer-events-none"
        }`}
        onClick={() => {
          setActiveMega(null);
          resetHoverBackground();
        }}
        aria-hidden="true"
      />

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-700 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="w-full px-2 pt-2 md:px-3 md:pt-3">
          <div
            className={`relative flex h-16 w-full items-center rounded-full px-2 transition-all duration-500 md:h-18 md:px-3 ${
              scrolled || mobileMenu
                ? "bg-white/55 shadow-[0_10px_30px_rgba(17,24,39,0.06)] backdrop-blur-xl"
                : "bg-transparent shadow-none"
            }`}
          >
            {/* Logo - Left */}
            <a
              href="/"
              className={`block w-40 shrink-0 transition-colors duration-300 ${scrolled || mobileMenu ? "text-black" : "text-white"}`}
              aria-label="Rise at Seven home"
            >
              <Logo />
            </a>

            {/* Navigation - Centered with increased text size and no wrap */}
            <nav
              ref={navRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden items-center gap-1 text-[16px] font-semibold tracking-[-0.3px] whitespace-nowrap xl:flex"
              aria-label="Primary navigation"
              onMouseLeave={handleNavMouseLeave}
            >
              {/* Hover background - smaller height */}
              <div
                className="nav-hover-bg absolute rounded-full h-9 top-1/2 -translate-y-1/2 bg-[#f4f5f7] transition-all duration-300 pointer-events-none"
                style={{ opacity: 0, width: 0, left: 0 }}
              />

              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative inline-flex items-center gap-0.5 rounded-full px-4 py-1.5 transition-colors duration-300 z-10 ${
                    scrolled || mobileMenu
                      ? activeMega === link.id
                        ? "text-black"
                        : "text-[#1e1e1e] hover:text-black"
                      : activeMega === link.id
                        ? "text-black"
                        : "text-white hover:text-black"
                  }`}
                  onMouseEnter={(e) => handleNavMouseEnter(link.id, e)}
                >
                  {link.label}
                  {link.plus && <span className="ml-0.5 text-[13px]">+</span>}
                  {link.badge && (
                    <em className="absolute -right-2.5 -top-2.5 grid h-4 min-w-5 place-items-center rounded-full bg-[#b9f1db] px-1 text-[9px] not-italic leading-none text-[#164432]">
                      {link.badge}
                    </em>
                  )}
                </a>
              ))}
            </nav>

            {/* Get in touch button - Right */}
            <a
              href="https://riseatseven.com/connect-with-us/"
              className={`group ml-auto shrink-0 hidden min-h-11 min-w-38.5 items-center justify-center gap-2 rounded-full transition transition-rounded text-[15px] font-bold tracking-[-0.35px] pointer-fine:hover:rounded-xl xl:inline-flex ${
                scrolled || mobileMenu
                  ? "bg-[#1e1e1e] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-6">
                  <div className="flex items-center gap-2">
                    <span>Get in touch</span>
                    <span
                      className="inline-block align-middle motion-safe:transition text-xs mt-1"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                  <div className="flex items-center gap-2">
                    <span>Get in touch</span>
                    <span
                      className="inline-block align-middle motion-safe:transition text-xs mt-1"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Mobile menu button */}
            <button
              type="button"
              className="ml-auto inline-flex h-9 w-12 flex-col items-center justify-center gap-1.5 xl:hidden"
              aria-label="Toggle menu"
              onClick={() => setMobileMenu((open) => !open)}
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-[#1e1e1e] transition-all duration-300 ${mobileMenu ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-[#1e1e1e] transition-all duration-300 ${mobileMenu ? "-translate-y-0.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mega Menus */}
        <div
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          {megaMenus.map((menu) => (
            <MegaMenu
              key={menu.id}
              menu={menu}
              activeSubmenu={activeSubmenu}
              setActiveSubmenu={setActiveSubmenu}
              isOpen={activeMega === menu.id}
              images={getImagesForMenu(menu.id)}
            />
          ))}
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-60 bg-black/30 p-2 pt-3 backdrop-blur-sm transition duration-500 xl:hidden ${
          mobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto max-h-[95svh] w-full max-w-xl overflow-auto rounded-[28px] bg-[#1f1f1f] p-6 text-white">
          <div className="mb-6 flex items-center justify-between">
            <a href="/" className="block w-36" aria-label="Rise at Seven home">
              <Logo />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
              className="text-2xl leading-none text-white"
            >
              ×
            </button>
          </div>

          <nav
            className="grid gap-4 text-lg font-semibold tracking-[-0.3px]"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <div key={link.id} className="border-b border-white/20 pb-3">
                {link.items ? (
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                    onClick={() =>
                      setExpandedMobile((open) =>
                        open === link.id ? null : link.id,
                      )
                    }
                  >
                    <span>
                      {link.label}
                      {link.badge ? ` (${link.badge})` : ""}
                    </span>
                    <span className="text-xl">
                      {expandedMobile === link.id ? "−" : "+"}
                    </span>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span>
                      {link.label}
                      {link.badge ? ` (${link.badge})` : ""}
                    </span>
                  </a>
                )}

                {link.items && expandedMobile === link.id && (
                  <ul className="mt-3 grid gap-2 text-sm font-medium text-white/80">
                    {link.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <a
            href="https://riseatseven.com/connect-with-us/"
            className="mt-6 inline-flex min-h-11 min-w-38.5 items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-bold tracking-[-0.35px] text-[#1e1e1e] hover:opacity-90"
          >
            Get in touch
            <span className="font-light">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
