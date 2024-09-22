import React from 'react'

const SocialContent = () => {
  return (
    <section className="w-full py-10 my-10 bg-slate-100 px-7  flex flex-col items-start">
    <div className="w-full flex flex-row items-start justify-center max-w-full">
      <h1 className="m-0 mb-7 relative text-inherit leading-[2.625rem] font-bold font-inherit z-[1] mq450:text-[1.5rem] mq450:leading-[1.563rem] leptop:text-[2rem] mq825:leading-[2.125rem]">
        Lorem Ipsum Is A Dummy Text
      </h1>
    </div>
    <div className="grid grid-cols-6 grid-rows-6 gap-4 items-start pl-12 mx-36">
      <div className="row-span-4 col-span-1 rounded-sm bg-cover bg-no-repeat bg-top relative">
        <div className="w-full h-full bg-gradient-to-t from-[#0E275DCC] to-[#062A72] opacity-60 rounded-sm  inset-0" />
        <img
          className="w-36 h-[350px] object-cover rounded-sm absolute inset-0"
          alt=""
          src="/rectangle-160@2x.png"
        />

      </div>

      <div className="col-span-3 w-[425px] h-32 row-span-2 bg-white rounded-sm p-4 flex flex-col gap-4">
        <div className=" flex items-start justify-between text-xl flex-wrap">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
              alt=""
              src="/pfp@2x.png"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <b className="text-[20px]">username</b>
                <img
                  className="h-7 w-7"
                  loading="lazy"
                  alt=""
                  src="/badge.svg"
                />
              </div>
              <div className="text-lg leading-6 text-dark-white">@username</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-whitesmoke-100 relative flex items-center justify-center">
              <div className="absolute top-1 left-1 bg-whitesmoke-100 rounded-full w-full h-full transform rotate-180" />
              <img
                className="w-2.5 h-4"
                alt=""
                src="/icon-2.svg"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-whitesmoke-100 flex items-center justify-center">
              <img
                className="w-2.5 h-4"
                alt=""
                src="/icon-3.svg"
              />
            </div>
          </div>
        </div>
        <div className=" gap-5">
          <div className="text-lg leading-2">Lorem Ipsum is simply dummy text of the printing </div>
          <div className="text-lg leading-2"> and typesetting industry.</div>
          <div className="text-dark-grey whitespace-nowrap">5:25 PM · Sep 1, 2022 · username</div>
        </div>
      </div>

      <div className="col-span-2  row-span-2 col-start-5 bg-gray-200 flex items-center justify-center relative">
        <div className="w-full h-full bg-gradient-to-t from-[#0E275DCC] to-[#062A72] opacity-60 rounded-sm absolute inset-0" />
        <img
          className="w-64 h-40 object-cover rounded-sm absolute inset-0"
          alt=""
          src="/rectangle-160@2x.png"
        />
      </div>
      <div className="col-span-3 w-[465px]  row-span-2 col-start-2 row-start-3 flex items-center justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.162rem] max-w-full text-[1rem] text-white-color font-typography-desktop-h5-22-bold lg:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[23.75rem] max-w-full mq825:min-w-full">
            <div className="flex-1 rounded-sm w-[460px] [background:linear-gradient(180deg,_#ff7f2d,_#f96302)] flex flex-col items-start justify-start py-[1rem]  pr-[1.25rem] pl-[1.875rem] box-border gap-[1.125rem] max-w-full z-[2]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.35rem]">
                <div className="relative leading-[1rem] font-extrabold z-[3] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                  About The Company
                </div>
                <b className="w-96 self-stretch relative text-[0.8rem] leading-[1.1rem] font-typography-desktop-p-18-bold z-[3]">
                  <p className="m-0">Vita-Mix Corporation, doing business as Vitamix, is an  American company that manufactures and sells commercial   and residential blenders.</p>
                </b>
              </div>
              <button className="cursor-pointer py-[0.312rem] px-[1.062rem] bg-[transparent] rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[1px] border-solid border-white-color hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <b className="relative text-[1rem] leading-[1.625rem] font-typography-desktop-h5-22-bold text-white-color text-center">
                  Company Website
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-2 col-start-5 bg-gray-200 flex items-center justify-center relative">
        <div className="w-full h-full bg-gradient-to-t from-[#0E275DCC] to-[#062A72] opacity-60 rounded-sm absolute inset-0" />
        <img
          className="w-64 h-40 object-cover rounded-sm absolute inset-0"
          alt=""
          src="/rectangle-160@2x.png"
        />
      </div>

      <div className="col-span-6  row-span-2 row-start-5  flex items-center justify">
        <div className="self-stretch w-full mr-12 flex flex-row items-start justify-start max-w-full text-[1.5rem] text-white-color font-typography-desktop-h5-22-bold">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch rounded-sm [background:linear-gradient(90deg,_#399afb_31.5%,_#0080ff)] flex flex-row items-start justify-start gap-[2.062rem] max-w-full z-[1] lg:flex-wrap mq450:gap-[1rem]">
              <img
                className="h-[10.125rem] w-[13.625rem] relative rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm object-cover z-[2] lg:flex-1"
                loading="lazy"
                alt=""
                src="/rectangle-331@2x.png"
              />
              <div className="w-[30.313rem] flex flex-col items-start justify-start pt-[1.737rem] px-[0rem] pb-[0rem] box-border min-w-[37.313rem] max-w-full lg:flex-1 lg:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.906rem]">
                  <div className="w-[12.938rem] relative leading-[0.5rem] font-extrabold inline-block z-[2] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                    Blog Article Title
                  </div>
                  <img
                    className="h-2 self-stretch  relative max-w-full overflow-hidden z-[2]"
                    alt=""
                    src="/vector-61-1.svg"
                  />
                  <b className="w-80 self-stretch absolute relative text-[.8rem] leading-[1.325rem] font-typography-desktop-p-18-bold z-[2]">
                    <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s.</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10.375rem] w-[26.938rem] relative max-w-full flex items-center ml-[-26.938rem]">
            <button className=" cursor-pointer [border:none] rounded-full bg-yellow py-[0.425rem]  pl-[1.25rem] bg-amber-400 absolute items-center left-[13.188rem] rounded-44xl flex flex-row items-start justify-start gap-[1.062rem] z-[4]">
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <div className="relative text-[1.375rem] leading-[1.5rem] font-extrabold font-typography-desktop-h5-22-bold text-dark-blue text-left inline-block min-w-[7.313rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                  Know More
                </div>
              </div>
              <img
                className="h-[2rem] w-[2rem] relative z-[1]"
                alt=""
                src="/group-737.svg"
              />
            </button>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SocialContent
