import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const workItems = [
  {
    id: 8366,
    title: "SIXT",
    subtitle: "An extra 3m clicks regionally through SEO",
    date: "[2023-2025]",
    href: "https://riseatseven.com/work/sixt/",
    colour: "#cb7b3a",
    category: "Car rental",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=c9b2882ec0696688382570d204d7ecc2 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=bf524dde2504ba79b4d5ab02667aace4 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=76467833147208ffa375ae3f53b8e5dc 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=6a940081a5055b966d3f1e7e86ce5cb6 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=4fc6345587184c87793709b9ccab3b72 2000w",
  },
  {
    id: 7670,
    title: "Dojo - B2B",
    subtitle: "A B2B success story for Dojo card machines",
    date: "[2021-2025]",
    href: "https://riseatseven.com/work/dojo/",
    colour: "#fdd8c4",
    category: "Card Machines",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=0b804f46d42cf69b05f4c7f3d8822c43 400w, https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=4965982f072410f112ac39321187ffc3 800w, https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=96cf6d61b2b2a079f4870e05689186ad 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=6f823ce638559a040d8bb024c3333846 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=b40b3be012a07b7f4218d9d078de7ce2 2000w",
  },
  {
    id: 19708,
    title: "Magnet Trade - B2B",
    subtitle: "A full service SEO success story 170%+ increase",
    date: "[2023-2024]",
    href: "https://riseatseven.com/work/magnet-trade-b2b/",
    colour: "#d8c4fd",
    category: "",
    icon: null,
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=400&h=300&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=4d5e7263af9db44e65e1b6f02eefc52d 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=800&h=600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=626a62d1b9a4656e9551fad47738360f 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1200&h=900&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=78c4ed1f047684ba34e8228767c0f03d 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=7b5a67cd253301fb5f207ce3c91940f0 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=613668eb3a49745dfdb40ebf0c01086f 2000w",
  },
  {
    id: 16982,
    title: "Leading E Sim brand globally",
    subtitle: "Increasing brand and non brand visibility UK/ES",
    date: "[2023-2025]",
    href: "https://riseatseven.com/work/esim-case-study/",
    colour: "#cb7b3a",
    category: "Esims",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=54733d285dc1e4c542ea0d9c05cb3ef6 400w, https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=5f01f578f0d0a7772e6a5c6ed8a91463 800w, https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=664af83a58942c892485fd781688ace1 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=993d9a55219710ca2b55f2fa50970740 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=05dc6e7996a060df26c1aa2d95b30bf0 2000w",
  },
  {
    id: 17067,
    title: "JD Sports",
    subtitle: "65% up YoY in clicks for JDSports FR, IT, ES",
    date: "[2025]",
    href: "https://riseatseven.com/work/jd-sports-/",
    colour: "#3a8ccb",
    category: "Trainers",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=47ef6bf55bf5e197b166bfbd69345f41 400w, https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=5f8c9e501d692d49d43e979d103381ba 800w, https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=ce2eebc3d43979ee7b38850fe77af369 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=d9b2a7a9f10857a01095b625c76cb74b 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=700eec41cd4af9ef431abdad699e4e0d 2000w",
  },
  {
    id: 8221,
    title: "Parkdean Resorts",
    subtitle: "Dominating Google and AI search",
    date: "[2019-2025]",
    href: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/",
    colour: "#d2b59d",
    category: "Easter Breaks",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=0b98fb962429582a7a2a7e6395a80e26 400w, https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=645a617ae7c6114d501606677780ff6b 800w, https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=67524a96893bc2f8c1abd49d194878af 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=a8f60d37c970a82ab0753a4818399af3 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=80d867d6e343c76b5affb3df693846c5 2000w",
  },
  {
    id: 301,
    title: "Pooky",
    subtitle: "Driving demand for Pooky Rechargeable Lights",
    date: "[2025]",
    href: "https://riseatseven.com/work/pooky/",
    colour: "#39b0bd",
    category: "Rechargeable Lights",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=a42d0ad7a0f8458c7b22b128993d1d8b",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=8fa9eb7b4557b16030498856360d7063 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=6f7d7d57624b6adb223e2e96ba9a35d6 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=04405eb4280d171395a128e0fd21e367 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=a8427907057cf2e3e129de37273e93f9 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=32d3a406e70332628dd96604f55c0b5c 2000w",
  },
  {
    id: 11781,
    title: "Parkdean Resorts",
    subtitle: "Social search and multi channel content to #1",
    date: "[2019-2025]",
    href: "https://riseatseven.com/work/parkdean-resorts-social-search/",
    colour: "#d29dd0",
    category: "UK holidays",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=39124d20abc57ddd5fe8d65337b36d2d",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=400&h=300&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=85ae86ce4917d0842c94b7dd0039d62f 400w, https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=800&h=600&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=6d7dbd582ce175d524dee06afc611973 800w, https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=1200&h=900&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=3e2ffdc7dc553460bafa0bf8d130d5be 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=1600&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=043ebac0971e34adf6ad01c6bc10e9a1 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=11ae3735c6a97d516857fa82df85007b 2000w",
  },
  {
    id: 27,
    title: "Revolution Beauty",
    subtitle: "Building the UK's leading beauty dupe brand",
    date: "[2022-2025]",
    href: "https://riseatseven.com/work/revolution-beauty/",
    colour: "#fecacc",
    category: "Beauty Dupes",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=1297f5bff1af8057f9908e26956825ac",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=400&h=300&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=c5e0ad96393848f80ac5c4d343932d28 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=800&h=600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=36c21c1c42f14e1300c741dc1b410b22 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1200&h=900&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=c690c4bf3fc68aa08ffc8daa2d6a2e86 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1600&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=629be03f234ee9209d29a5a962b9e6a5 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=c10c767482740b56c94f9f5366777f61 2000w",
  },
  {
    id: 297,
    title: "Lloyds Pharmacy",
    subtitle: "Driving category leadership for STI tests",
    date: "[2022-23]",
    href: "https://riseatseven.com/work/lloyds-pharmacy/",
    colour: "#60dcfb",
    category: "STI tests",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=04aee1885f0d515e965b94f9bae6727a",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=400&h=300&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=4f539af88efe027388e1431bf04804b4 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=800&h=600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=dc46ee93cd4912fbbca2f7318e708a76 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1200&h=900&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=71ae384c29c298030f21c898724a88c3 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1600&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=84dab967da5d3e187c1094e933418986 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=73c1e46713fdda8095e11060cb2b09d5 2000w",
  },
  {
    id: 8004,
    title: "PrettyLittleThing",
    subtitle: 'Driving discovery for everything "outfits" for PLT',
    date: "[2021-2023]",
    href: "https://riseatseven.com/work/prettylittlething/",
    colour: "#fecacc",
    category: "Outfits",
    icon: "fa-chart-line-up",
    imgSrc:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d730c3765e685a8264bc8304fc54e357",
    imgSet:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=400&h=300&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=98a9f20a4d46d33ab5a19f3bba910805 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=800&h=600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=12dc79fb7f2c39d396ffdfa37dc61d58 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1200&h=900&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=b2b0218048c6eb27cb83f44bd558618a 1200w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1600&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=3f01fffd09fe07979134d11939568cdc 1600w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a202be154c30436386fd285345517e9b 2000w",
  },
];

const Heading = ({ children, className = "", style }) => {
  return (
    <div
      className={`inline-flex flex-wrap text-balance relative text-left justify-start ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function FeaturedWork() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const leftListRef = useRef(null);
  const rightViewportRef = useRef(null);
  const rightListRef = useRef(null);
  const headingRefs = useRef({});
  const [hoveredId, setHoveredId] = useState(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);

  const activeId =
    hoveredId ?? workItems[scrollActiveIndex]?.id ?? workItems[0].id;

  useLayoutEffect(() => {
    if (!sectionRef.current || !panelRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const leftList = leftListRef.current;
    const rightViewport = rightViewportRef.current;
    const rightList = rightListRef.current;

    if (!leftList || !rightViewport || !rightList) return undefined;

    const leftShift = Math.max(
      leftList.scrollHeight - leftList.clientHeight,
      0,
    );
    const rightShift = Math.max(
      rightList.scrollHeight -
        Math.max(
          rightViewport.clientHeight -
            (parseFloat(window.getComputedStyle(rightViewport).paddingTop) ||
              0) -
            (parseFloat(
              window.getComputedStyle(rightViewport).paddingBottom,
            ) ||
              0),
          0,
        ),
      0,
    );

    const ctx = gsap.context(() => {
      gsap.set(leftList, { y: 150, willChange: "transform" });
      gsap.set(rightList, { y: 0, willChange: "transform" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${workItems.length * window.innerHeight}`,
          scrub: 1,
          pin: panelRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollActiveIndex(
              clamp(
                Math.floor(self.progress * workItems.length),
                0,
                workItems.length - 1,
              ),
            );
          },
        },
      });

      timeline.to(leftList, { y: -leftShift * 2.55, ease: "none" }, 0);
      timeline.to(rightList, { y: -rightShift, ease: "none" }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const activeHeading = headingRefs.current[activeId];

    if (!activeHeading) return;

    gsap.fromTo(
      activeHeading,
      { yPercent: 20, autoAlpha: 0.7 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power4.out",
        overwrite: true,
      },
    );
  }, [activeId]);

  return (
    <section className="w-full">
      <div className="w-full px-3 md:px-5">
        <div
          ref={sectionRef}
          className="w-full relative flex overflow-hidden"
          style={{ height: `${workItems.length * 100 + 100}vh` }}
        >
          <div
            ref={panelRef}
            className="w-full py-7 h-screen-fix-110 pointer-fine:h-screen-fix"
          >
            <div className="w-full h-screen lg:h-[96svh] overflow-hidden bg-black rounded-2xl rounded-b-2xl lg:rounded-3xl lg:rounded-b-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">
              <div className="relative col-span-12 hidden items-start lg:flex lg:flex-row lg:items-center lg:col-span-6 lg:h-[96svh] 4xl:col-span-6">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-20">
                  <Heading className="sticky top-6 z-20 text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
                    Featured Work
                  </Heading>

                  <div
                    className="relative flex-1 overflow-hidden pr-5 lg:inline-block text-white"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                    }}
                  >
                    <div className="absolute top-0 left-0 hidden h-28 w-full pointer-events-none lg:block bg-linear-to-b from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 hidden h-28 w-full pointer-events-none lg:block bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    <div
                      ref={leftListRef}
                      className="grid gap-y-2 relative z-10 2xl:gap-y-3 4xl:gap-y-5 js-headings-40"
                    >
                      {workItems.map((item, index) => {
                        const isActive = activeId === item.id;
                        const signedDistance = index - scrollActiveIndex;
                        const distance = Math.abs(scrollActiveIndex - index);
                        const opacity = clamp(1 - distance * 0.2, 0.35, 1);
                        const scale = clamp(1 - distance * 0.06, 0.82, 1);
                        const y = signedDistance * 24;

                        return (
                          <div
                            key={item.id}
                            className="relative transition js-heading-40"
                          >
                            <a
                              href={item.href}
                              className={`flex items-start gap-x-2 transition-all duration-500 ${isActive ? "translate-x-2" : ""}`}
                              onMouseEnter={() => setHoveredId(item.id)}
                              onMouseLeave={() => setHoveredId(null)}
                            >
                              <Heading
                                className={`font-sans-primary font-medium text-6xl/none lg:text-7xl/none xl:text-8xl/0.9 3xl:text-8xl/0.9 4xl:text-9xl/0.9 js-heading transition-all duration-700 ${
                                  isActive ? "tracking-[-0.04em]" : "tracking-tight"
                                }`}
                                style={{
                                  color: isActive
                                    ? "#ffffff"
                                    : `rgba(255,255,255,${opacity})`,
                                  transform: `translateY(${y}px) scale(${scale})`,
                                  textShadow: isActive
                                    ? "0 0 30px rgba(255,255,255,0.15)"
                                    : "none",
                                  transition:
                                    "transform 0.8s cubic-bezier(0.22,1,0.36,1), color 0.45s ease",
                                  willChange: "transform, color",
                                }}
                                ref={(el) => {
                                  if (el) {
                                    headingRefs.current[item.id] = el;
                                  }
                                }}
                              >
                                {item.title}
                              </Heading>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 relative overflow-hidden lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-8 js-images-40">
                <div className="mb-5 lg:hidden">
                  <Heading className="text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
                    Featured Work
                  </Heading>
                </div>

                <div
                  ref={rightViewportRef}
                  className="relative h-full lg:h-[96svh] pt-7 pb-7 pr-5"
                >
                  <div ref={rightListRef} className="relative">
                  {workItems.map((item, index) => {
                    const isActive = activeId === item.id;
                    const shouldReveal = hoveredId === item.id;

                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`cursor-trigger grid group overflow-hidden rounded-3xl mb-5 lg:mb-7 circle-mask-container ${isActive ? "is-active" : ""}`}
                        style={{
                          zIndex: isActive ? 999 : workItems.length - index,
                        }}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <div className="col-start-1 row-start-1">
                          <div
                            className="relative overflow-hidden w-full"
                            style={{ paddingTop: "75%" }}
                          >
                            <picture className="absolute top-0 left-0 w-full h-full">
                              <source
                                type="image/webp"
                                srcSet={item.imgSet}
                                sizes="100vw"
                              />
                              <img
                                src={item.imgSrc}
                                srcSet={item.imgSet}
                                sizes="100vw"
                                alt={item.title.replace(/\s/g, "")}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                style={{ opacity: isActive ? 1 : 0.85 }}
                              />
                            </picture>
                          </div>
                        </div>

                        <div className="col-start-1 row-start-1 p-3 z-20 flex justify-end items-start lg:items-end lg:p-5">
                          {item.category ? (
                            <div
                              className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base"
                              style={{ backdropFilter: "blur(8px)" }}
                            >
                              <i
                                className="fa-regular fa-sharp fa-magnifying-glass"
                                aria-hidden="true"
                              ></i>
                              <div>{item.category}</div>
                              <i
                                className={`fa-regular fa-sharp ${item.icon}`}
                                aria-hidden="true"
                              ></i>
                            </div>
                          ) : null}
                        </div>

                        <div className="col-start-1 row-start-1 p-3 z-20 relative flex justify-start items-end lg:hidden lg:p-5">
                          <div className="grid gap-y-1 relative z-20">
                            <div className="text-white/70 text-xs font-medium mt-2">
                              {item.date}
                            </div>
                            <Heading className="text-white text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
                              {item.title}
                            </Heading>
                          </div>
                          <div className="absolute w-full bottom-0 left-0 h-32 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                        </div>

                        <div
                          className={`col-start-1 row-start-1 grid-cols-12 flex flex-col items-start justify-between z-30 p-3 lg:p-5 circle-mask ${
                            shouldReveal
                              ? "active opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
                          style={{
                            backgroundColor: item.colour,
                            color: "#111212",
                            clipPath: shouldReveal
                              ? "circle(140% at 50% 100%)"
                              : "circle(0% at 50% 100%)",
                            transition:
                              "clip-path 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
                          }}
                        >
                          <Heading className="text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-sans-primary font-medium tracking-tight js-heading">
                            {item.subtitle}
                          </Heading>
                          <div className="w-full flex items-end justify-between">
                            <div className="w-8 lg:w-24" />
                            {item.category ? (
                              <div
                                className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base"
                                style={{ backdropFilter: "blur(8px)" }}
                              >
                                <i
                                  className="fa-regular fa-sharp fa-magnifying-glass"
                                  aria-hidden="true"
                                ></i>
                                <div>{item.category}</div>
                                <i
                                  className={`fa-regular fa-sharp ${item.icon}`}
                                  aria-hidden="true"
                                ></i>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-10 pb-12 lg:pb-24">
          <a
            href="https://riseatseven.com/work/"
            className="w-full md:w-auto group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary! font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none text-base px-6 py-3 rounded-full transition transition-rounded focus:ring-3 pointer-fine:hover:rounded-2xl bg-white text-black ring-grey-900/5 flex-row-reverse"
          >
            <div className="relative overflow-hidden">
              <div className="transition pointer-fine:group-hover:-translate-y-6">
                <div className="flex items-center gap-x-2">
                  <span>Explore Our Work</span>
                  <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                    <i className="fa-regular fa-sharp fa-arrow-up-right" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div className="transition absolute top-0 left-0 translate-y-6 pointer-fine:group-hover:translate-y-0">
                <div className="flex items-center gap-x-2">
                  <span>Explore Our Work</span>
                  <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                    <i className="fa-regular fa-sharp fa-arrow-up-right" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;