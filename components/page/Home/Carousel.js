import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Pagination, Scrollbar, A11y } from "swiper";
import Button from "../../core/Button/Button";
import HomeCard from "./HomeCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = (props) => {
  const swiperHandle = useSwiper();
  return (
    <div>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperHandle = swiper;
        }}
        className="gap-4 !p-5"
      >
        {props.cards.map((card, i) => {
          return (
            <SwiperSlide className="flex justify-center" key={i}>
              <HomeCard
                title={card.title}
                value={card.value}
                content={card.content}
                avatar={card.avatar}
                user={card.user}
              ></HomeCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center mt-14 gap-3">
        <button
          onClick={() => {
            if (!!swiperHandle) {
              swiperHandle.slidePrev();
            }
          }}
          className="py-3 px-[18px] dark:bg-blue1 bg-blue3 text-white rounded-full border border-transparent hover:bg-transparent hover:border-white transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="1x" />
        </button>

        <button
          onClick={() => {
            if (!!swiperHandle) {
              swiperHandle.slideNext();
            }
          }}
          className="py-3 px-[18px] dark:bg-blue1 bg-blue3 rounded-full text-white border border-transparent hover:bg-transparent hover:border-white transition"
        >
          <FontAwesomeIcon icon={faChevronRight} size="1x" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
