import Link from "next/link";

export default function Card() {
  return (
    <>
      {/* <section  className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container"> 
        <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
    <div className="dark bg-[#1f2937] text-[#f3f4f6] rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <div className="bg-[#4b5563] rounded-full w-16 h-16 flex items-center justify-center text-4xl font-bold">
          JD
        </div>
        <div>
          <h3 className="text-xl font-semibold">ETC-CS</h3>
          <p className="text-[#9ca3af] font-medium">Software Engineer</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
          <MailIcon className="w-5 h-5 text-[#9ca3af]" />
          <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
            john@example.com
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneIcon className="w-5 h-5 text-[#9ca3af]" />
          <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
            +1 (234) 567-890
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <LinkIcon className="w-5 h-5 text-[#9ca3af]" />
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
              Facebook
            </Link>
            {/* <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
              GitHub
            </Link> 
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-[#4b5563] pt-4">
        <div className="flex items-center justify-between">
          <button className="bg-[#4b5563] text-[#f3f4f6] px-4 py-2 rounded-md hover:bg-[#6b7280] transition-colors">
            Follow
          </button>
          <button className="bg-[#4b5563] text-[#f3f4f6] px-4 py-2 rounded-md hover:bg-[#6b7280] transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </section> */}
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <div className="flex items-center space-x-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4b5563] text-4xl font-bold">
                    JD
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold">ETC-CS</h1>
                    <p className="font-medium text-[#9ca3af]">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                    <div className="flex items-center space-x-2">
                      <MailIcon className="h-10 w-10 text-[#9ca3af]" />
                      <Link
                        href="#"
                        className="text-l [#d1d5db] transition-colors hover:text-[#9ca3af] hover:underline"
                      >
                        john@example.com
                      </Link>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-10 w-10 text-[#9ca3af]" />
                      <Link
                        href="#"
                        className="text-l [#d1d5db] transition-colors hover:text-[#9ca3af] hover:underline"
                      >
                        +1 (234) 567-890
                      </Link>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                    <div className="flex items-center space-x-2">
                      <LinkIcon className="h-10 w-10 text-[#9ca3af]" />
                      <div className="flex items-center space-x-4">
                        <Link
                          href="#"
                          className="text-l [#d1d5db] transition-colors hover:text-[#9ca3af] hover:underline"
                        >
                          Facebook
                        </Link>
                      </div>
                    </div>
                  </div>
                    {/* <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-[#d1d5db] hover:underline hover:text-[#9ca3af] transition-colors">
              GitHub
            </Link> 
          </div>
        </div>
      </div>
                
        {/* Background */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}

function LinkIcon(props) {
  return (
    <svg
      className="h-[48px] w-[48px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      className="h-[48px] w-[48px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
      />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      className="h-[48px] w-[48px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
      />
    </svg>
  );
}
