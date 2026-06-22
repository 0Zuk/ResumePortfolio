import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideImages = [
  {
    url: "/Slides/Bilannonser.png",
    caption: "Bilannonser – AI-genererade bilannonser",
    link: "https://django-bil-annonser.vercel.app/",
  },
  {
    url: "/Slides/Web_dev.png",
    caption: "Web Development",
    caption: "Web Development (Coming Soon)",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects"
     className="py-0">
      <div className="container mx-auto">
        <h2 className="text-4xl p-4 font-semibold text-center">
          Projects
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[400px] flex items-top justify-top bg-cover bg-center relative rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${slide.url})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  {slide.link ? (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl font-semibold underline hover:text-primary transition-colors"
                    >
                      {slide.caption}
                    </a>
                  ) : (
                    <span className="text-white text-xl font-semibold">
                      {slide.caption}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

