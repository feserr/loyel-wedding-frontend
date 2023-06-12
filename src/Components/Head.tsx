import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export default function Head() {
  const dateAndPlace = "Sábado, 20 Abril 2024";

  const background: BannerLayer = {
    image:
      './image/header.png',
    translateY: [0, 10],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, -20],
    scale: [1, 1.15, "easeOutCubic"],
    opacity: [1, 0.3],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div>
        <div className="container has-text-centered">
          <h1 className="subtitle">¡Nos casamos!</h1>
          <h2 className="title">Lorena & Elías</h2>
          <h4 className="subtitle tempatwaktu msg-wrapper">{dateAndPlace}</h4>
        </div>
      </div>
    )
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          className="parallax-banner-welcome"
          layers={[background, headline, gradientOverlay]}
        />
      </ParallaxProvider>
    </div>
  );
}
