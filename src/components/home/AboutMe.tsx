import { NavLink } from "react-router-dom";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

export default function AboutMe({ aboutRef }: Props) {
  return (
    <div className="py-20" ref={aboutRef}>
      <div className=" p-3 md:p-10 max-w-5xl gap-10  mx-auto">
        <p className="font-semibold  text-3xl md:text-5xl text-center">
          The Face of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Innovation
          </span>
        </p>
        <p className="mt-4 text-center text-gray-600 w-full md:w-2/3 mx-auto">
          Leverage the power of advanced technology to streamline operations and
          drive growth. Stay ahead with innovative solutions built for the
          future.{" "}
        </p>

        <div className="max-w-80 h-full mt-10 mb-6 mx-auto">
          <img
            src="/me.webp"
            className="h-full w-full object-cover object-center "
            style={{ borderRadius: `10px` }}
          />

          <p className="mt-2 font-medium">Aditya Naida</p>

          <p className="text-sm text-gray-600">
            CEO at{" "}
            <NavLink
              target="_blank"
              to={"https://www.nextwebflow.com/"}
              className={`underline`}
            >
              Nextwebflow
            </NavLink>{" "}
            , SDE{" "}
            <NavLink
              className={`underline`}
              to={"https://www.yadukaagrotech.com/"}
              target="_blank"
            >
              Yaduka Agrotech Limited
            </NavLink>
          </p>
        </div>
        <div className="mx-auto max-w-80 flex items-center gap-3">
          <NavLink to={"https://github.com/AdityaNaida"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={128}
              height={128}
              viewBox="0 0 128 128"
              className="size-7"
            >
              <g fill="#181616">
                <path
                  fillRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  clipRule="evenodd"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/aditya-naida/"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={256}
              height={256}
              viewBox="0 0 256 256"
              className="size-6"
            >
              <g fill="none">
                <rect width={256} height={256} fill="#fff" rx={60}></rect>
                <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                ></path>
              </g>
            </svg>
          </NavLink>

          <NavLink to={"https://x.com/AdityaNaid46542"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={128}
              height={128}
              viewBox="0 0 128 128"
              className="size-5"
            >
              <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
