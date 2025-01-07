export default function Footer() {
  return (
    <footer className="relative w-full bg-[url('../images/nav-image.jpg')] bg-center bg-cover before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#82C341E5] before:z-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="relative grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start">
              <svg
                width="320"
                height="91"
                viewBox="0 0 320 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.8364 23.0021C37.1914 23.0021 42.3431 17.8529 42.3431 11.501C42.3431 5.14919 37.1914 0 30.8364 0C24.4813 0 19.3296 5.14919 19.3296 11.501C19.3296 17.8529 24.4813 23.0021 30.8364 23.0021Z"
                  fill="white"
                />
                <path
                  d="M55.2626 19.3702C55.2626 19.3702 43.2511 20.5808 31.6434 29.8119H31.3406C31.3406 29.8119 23.7704 21.8419 7.7215 19.0675V27.4411C7.7215 27.4411 22.5592 30.5685 31.0378 38.3872C31.0378 38.3872 31.6434 38.7908 32.0472 38.3872C32.4509 37.9837 40.0212 30.8208 55.2626 27.4411V19.3702Z"
                  fill="white"
                />
                <path
                  d="M62.8834 28.349C62.8834 28.349 62.9843 77.3797 62.8834 77.3797C62.7825 77.3797 49.9635 82.3736 49.9635 82.3736V46.6598L31.694 58.4131L13.475 46.7607V69.561L31.694 76.7239L46.1784 70.1159V83.1806L31.2903 90.848L0 77.985L0.353284 28.4499C0.353284 28.4499 19.6826 31.8295 31.694 42.927C31.694 42.927 39.5166 33.6959 62.8329 28.4499L62.8834 28.349Z"
                  fill="white"
                />
                <path
                  d="M77.1043 17H81.5043L93.6543 39.45L105.504 17H109.904V52H105.254V25.9L96.0543 43.1C95.6543 43.8333 95.271 44.35 94.9043 44.65C94.571 44.95 94.171 45.1 93.7043 45.1H92.3543L81.8043 25.9V52H77.1043V17ZM121.09 52C119.923 52 118.99 51.6667 118.29 51C117.623 50.3333 117.29 49.4167 117.29 48.25V17H141.84V21.15H122.04V32.05H140.34V36.15H122.04V47.85H141.84V52H121.09ZM151.559 52C150.392 52 149.459 51.6667 148.759 51C148.092 50.3333 147.759 49.4167 147.759 48.25V17H163.009C165.542 17 167.759 17.4833 169.659 18.45C171.592 19.4167 173.075 20.8 174.109 22.6C175.175 24.3667 175.709 26.4 175.709 28.7V39.3C175.709 43.4667 174.642 46.6333 172.509 48.8C170.409 50.9333 167.309 52 163.209 52H151.559ZM163.059 47.75C165.659 47.75 167.625 47.0333 168.959 45.6C170.292 44.1667 170.959 42.0333 170.959 39.2V28.8C170.959 26.5333 170.209 24.7167 168.709 23.35C167.242 21.95 165.292 21.25 162.859 21.25H152.509V47.75H163.059ZM182.389 17H187.139V52H182.389V17ZM205.874 52.4C203.541 52.4 201.474 51.8667 199.674 50.8C197.874 49.7333 196.474 48.2333 195.474 46.3C194.508 44.3333 194.024 42.0667 194.024 39.5V29.5C194.024 26.9333 194.524 24.6833 195.524 22.75C196.524 20.7833 197.924 19.2667 199.724 18.2C201.558 17.1333 203.674 16.6 206.074 16.6H211.374C213.641 16.6 215.641 17.1 217.374 18.1C219.141 19.0667 220.491 20.4333 221.424 22.2C222.391 23.9667 222.874 26 222.874 28.3H218.224C218.224 26.0667 217.591 24.2667 216.324 22.9C215.091 21.5333 213.441 20.85 211.374 20.85H206.074C203.908 20.85 202.141 21.65 200.774 23.25C199.441 24.85 198.774 26.9667 198.774 29.6V39.4C198.774 42.0333 199.424 44.15 200.724 45.75C202.024 47.35 203.741 48.15 205.874 48.15H211.274C213.408 48.15 215.108 47.4 216.374 45.9C217.674 44.3667 218.324 42.3667 218.324 39.9H222.974C222.974 42.3667 222.491 44.55 221.524 46.45C220.558 48.35 219.191 49.8167 217.424 50.85C215.658 51.8833 213.608 52.4 211.274 52.4H205.874ZM239.721 52.4C237.288 52.4 235.138 51.8667 233.271 50.8C231.438 49.7333 230.005 48.2333 228.971 46.3C227.971 44.3667 227.471 42.1167 227.471 39.55V29.45C227.471 26.8833 227.971 24.6333 228.971 22.7C230.005 20.7667 231.455 19.2667 233.321 18.2C235.188 17.1333 237.338 16.6 239.771 16.6H245.071C247.505 16.6 249.638 17.1333 251.471 18.2C253.338 19.2667 254.771 20.7667 255.771 22.7C256.805 24.6333 257.321 26.8833 257.321 29.45V39.55C257.321 42.1167 256.805 44.3667 255.771 46.3C254.771 48.2333 253.338 49.7333 251.471 50.8C249.605 51.8667 247.471 52.4 245.071 52.4H239.721ZM244.971 48.15C247.238 48.15 249.071 47.3667 250.471 45.8C251.871 44.2 252.571 42.0833 252.571 39.45V29.55C252.571 26.9167 251.871 24.8167 250.471 23.25C249.071 21.65 247.238 20.85 244.971 20.85H239.821C237.555 20.85 235.721 21.65 234.321 23.25C232.921 24.8167 232.221 26.9167 232.221 29.55V39.45C232.221 42.0833 232.905 44.2 234.271 45.8C235.671 47.3667 237.505 48.15 239.771 48.15H244.971ZM274.999 52C273.532 52 272.482 51.1333 271.849 49.4L259.849 17H264.799L275.099 46.1H275.199L285.549 17H290.499L277.349 52H274.999ZM310.436 42.8H295.836L292.436 52H287.486L301.036 17H303.186C304.619 17 305.636 17.7833 306.236 19.35L318.786 52H313.886L310.436 42.8ZM297.236 38.8H309.036L303.186 23H303.136L297.236 38.8Z"
                  fill="white"
                />
                <path
                  d="M83.6534 65.6H85.5894L90.9354 75.478L96.1494 65.6H98.0854V81H96.0394V69.516L91.9914 77.084C91.8154 77.4067 91.6467 77.634 91.4854 77.766C91.3387 77.898 91.1627 77.964 90.9574 77.964H90.3634L85.7214 69.516V81H83.6534V65.6ZM103.007 81C102.494 81 102.083 80.8533 101.775 80.56C101.482 80.2667 101.335 79.8633 101.335 79.35V65.6H112.137V67.426H103.425V72.222H111.477V74.026H103.425V79.174H112.137V81H103.007ZM116.413 81C115.9 81 115.489 80.8533 115.181 80.56C114.888 80.2667 114.741 79.8633 114.741 79.35V65.6H121.451C122.566 65.6 123.541 65.8127 124.377 66.238C125.228 66.6633 125.881 67.272 126.335 68.064C126.805 68.8413 127.039 69.736 127.039 70.748V75.412C127.039 77.2453 126.57 78.6387 125.631 79.592C124.707 80.5307 123.343 81 121.539 81H116.413ZM121.473 79.13C122.617 79.13 123.483 78.8147 124.069 78.184C124.656 77.5533 124.949 76.6147 124.949 75.368V70.792C124.949 69.7947 124.619 68.9953 123.959 68.394C123.314 67.778 122.456 67.47 121.385 67.47H116.831V79.13H121.473ZM129.979 65.6H132.069V81H129.979V65.6ZM140.312 81.176C139.285 81.176 138.376 80.9413 137.584 80.472C136.792 80.0027 136.176 79.3427 135.736 78.492C135.311 77.6267 135.098 76.6293 135.098 75.5V71.1C135.098 69.9707 135.318 68.9807 135.758 68.13C136.198 67.2647 136.814 66.5973 137.606 66.128C138.413 65.6587 139.344 65.424 140.4 65.424H142.732C143.729 65.424 144.609 65.644 145.372 66.084C146.149 66.5093 146.743 67.1107 147.154 67.888C147.579 68.6653 147.792 69.56 147.792 70.572H145.746C145.746 69.5893 145.467 68.7973 144.91 68.196C144.367 67.5947 143.641 67.294 142.732 67.294H140.4C139.447 67.294 138.669 67.646 138.068 68.35C137.481 69.054 137.188 69.9853 137.188 71.144V75.456C137.188 76.6147 137.474 77.546 138.046 78.25C138.618 78.954 139.373 79.306 140.312 79.306H142.688C143.627 79.306 144.375 78.976 144.932 78.316C145.504 77.6413 145.79 76.7613 145.79 75.676H147.836C147.836 76.7613 147.623 77.722 147.198 78.558C146.773 79.394 146.171 80.0393 145.394 80.494C144.617 80.9487 143.715 81.176 142.688 81.176H140.312ZM158.647 76.952H152.223L150.727 81H148.549L154.511 65.6H155.457C156.088 65.6 156.535 65.9447 156.799 66.634L162.321 81H160.165L158.647 76.952ZM152.839 75.192H158.031L155.457 68.24H155.435L152.839 75.192ZM165.849 81C165.335 81 164.925 80.8533 164.617 80.56C164.323 80.2667 164.177 79.8707 164.177 79.372V65.6H166.267V79.152H174.627V81H165.849ZM187.384 81.176C186.358 81.176 185.448 80.9413 184.656 80.472C183.864 80.0027 183.248 79.3427 182.808 78.492C182.383 77.6267 182.17 76.6293 182.17 75.5V71.1C182.17 69.9707 182.39 68.9807 182.83 68.13C183.27 67.2647 183.886 66.5973 184.678 66.128C185.485 65.6587 186.416 65.424 187.472 65.424H189.804C190.802 65.424 191.682 65.644 192.444 66.084C193.222 66.5093 193.816 67.1107 194.226 67.888C194.652 68.6653 194.864 69.56 194.864 70.572H192.818C192.818 69.5893 192.54 68.7973 191.982 68.196C191.44 67.5947 190.714 67.294 189.804 67.294H187.472C186.519 67.294 185.742 67.646 185.14 68.35C184.554 69.054 184.26 69.9853 184.26 71.144V75.456C184.26 76.6147 184.546 77.546 185.118 78.25C185.69 78.954 186.446 79.306 187.384 79.306H189.76C190.699 79.306 191.447 78.976 192.004 78.316C192.576 77.6413 192.862 76.7613 192.862 75.676H194.908C194.908 76.7613 194.696 77.722 194.27 78.558C193.845 79.394 193.244 80.0393 192.466 80.494C191.689 80.9487 190.787 81.176 189.76 81.176H187.384ZM202.277 81.176C201.207 81.176 200.261 80.9413 199.439 80.472C198.633 80.0027 198.002 79.3427 197.547 78.492C197.107 77.6413 196.887 76.6513 196.887 75.522V71.078C196.887 69.9487 197.107 68.9587 197.547 68.108C198.002 67.2573 198.64 66.5973 199.461 66.128C200.283 65.6587 201.229 65.424 202.299 65.424H204.631C205.702 65.424 206.641 65.6587 207.447 66.128C208.269 66.5973 208.899 67.2573 209.339 68.108C209.794 68.9587 210.021 69.9487 210.021 71.078V75.522C210.021 76.6513 209.794 77.6413 209.339 78.492C208.899 79.3427 208.269 80.0027 207.447 80.472C206.626 80.9413 205.687 81.176 204.631 81.176H202.277ZM204.587 79.306C205.585 79.306 206.391 78.9613 207.007 78.272C207.623 77.568 207.931 76.6367 207.931 75.478V71.122C207.931 69.9633 207.623 69.0393 207.007 68.35C206.391 67.646 205.585 67.294 204.587 67.294H202.321C201.324 67.294 200.517 67.646 199.901 68.35C199.285 69.0393 198.977 69.9633 198.977 71.122V75.478C198.977 76.6367 199.278 77.568 199.879 78.272C200.495 78.9613 201.302 79.306 202.299 79.306H204.587ZM212.839 65.6H214.775L220.121 75.478L225.335 65.6H227.271V81H225.225V69.516L221.177 77.084C221.001 77.4067 220.832 77.634 220.671 77.766C220.524 77.898 220.348 77.964 220.143 77.964H219.549L214.907 69.516V81H212.839V65.6ZM230.521 65.6H232.457L237.803 75.478L243.017 65.6H244.953V81H242.907V69.516L238.859 77.084C238.683 77.4067 238.514 77.634 238.353 77.766C238.206 77.898 238.03 77.964 237.825 77.964H237.231L232.589 69.516V81H230.521V65.6ZM253.108 81.176C252.111 81.176 251.231 80.9633 250.468 80.538C249.72 80.098 249.141 79.482 248.73 78.69C248.32 77.898 248.114 76.9887 248.114 75.962V65.6H250.204V75.962C250.204 76.9593 250.468 77.766 250.996 78.382C251.539 78.998 252.243 79.306 253.108 79.306H255.462C256.328 79.306 257.024 78.998 257.552 78.382C258.095 77.766 258.366 76.9593 258.366 75.962V65.6H260.456V75.962C260.456 76.9887 260.251 77.898 259.84 78.69C259.43 79.482 258.843 80.098 258.08 80.538C257.332 80.9633 256.46 81.176 255.462 81.176H253.108ZM263.628 65.6H265.564L273.704 77.634V65.6H275.75V81H273.836L265.674 69.01V81H263.628V65.6ZM279.231 65.6H281.321V81H279.231V65.6ZM288.574 67.426H283.69V65.6H295.548V67.426H290.664V81H288.574V67.426ZM301.97 75.06L296.294 65.6H298.56L303.026 73.146L307.492 65.6H309.758L304.082 75.06V81H301.97V75.06Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left">
              Browse Jobs by Career Level Employers and Recruiters, go to our
              RECRUITMENT SERVICES. Great platform for the job seeker that
              passionate about startups. Find your dream job easier
            </p>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-white font-medium mb-7">About</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-900">
                  Companies
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Advice
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-white font-medium mb-7">Resources</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-900">
                  Help Docs
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Guide
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Updates
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-white hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* End Col */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-white font-medium mb-7">
              Get job notifications
            </h4>
            <p className="text-sm text-white leading-6 mb-7">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                className="p-3 rounded-md outline-none text-gray-500 "
                type="email"
                placeholder="Email Adress"
              />
              <button className="p-3 text-white bg-black rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
        <div className="relative py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white ">
              ©<a href="https://pagedone.io/">2025.Medicova </a> All rights
              reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="javascript:;"
                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#2BA149] hover:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <g id="Social Media">
                    <path
                      id="Vector"
                      d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="javascript:;"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#2BA149]  hover:bg-gradient-to-b from-gray-900 to-gray-900  
                        ">
                <svg
                  className="w-[1.25rem] h-[1.125rem] text-white"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766ZM5.132 13.7759C4.43946 13.7444 4.06304 13.6291 3.81289 13.5317C3.48125 13.4027 3.24463 13.249 2.99584 13.0007C2.74705 12.7524 2.59305 12.5161 2.46451 12.1847C2.367 11.9348 2.25164 11.5585 2.22016 10.8664C2.18572 10.1181 2.17885 9.89331 2.17885 7.99752C2.17885 6.10174 2.18629 5.87758 2.22016 5.12866C2.2517 4.43654 2.36791 4.06097 2.46451 3.81035C2.59362 3.47891 2.7474 3.24242 2.99584 2.99379C3.24428 2.74515 3.48068 2.59124 3.81289 2.46278C4.06292 2.36532 4.43946 2.25004 5.132 2.21857C5.88074 2.18416 6.10566 2.17729 8.00173 2.17729C9.89779 2.17729 10.1229 2.18472 10.8723 2.21857C11.5648 2.25009 11.9406 2.36623 12.1914 2.46278C12.5231 2.59124 12.7597 2.74549 13.0085 2.99379C13.2573 3.24208 13.4107 3.47891 13.5398 3.81035C13.6373 4.06023 13.7527 4.43654 13.7841 5.12866C13.8186 5.87758 13.8255 6.10174 13.8255 7.99752C13.8255 9.89331 13.8186 10.1175 13.7841 10.8664C13.7526 11.5585 13.6367 11.9347 13.5398 12.1847C13.4107 12.5161 13.2569 12.7526 13.0085 13.0007C12.76 13.2488 12.5231 13.4027 12.1914 13.5317C11.9414 13.6292 11.5648 13.7444 10.8723 13.7759C10.1236 13.8103 9.89865 13.8172 8.00173 13.8172C6.10481 13.8172 5.88051 13.8103 5.132 13.7759ZM5.07318 0.941429C4.31699 0.975845 3.80027 1.09568 3.34902 1.27116C2.88168 1.45239 2.48605 1.69552 2.09071 2.09C1.69537 2.48447 1.45272 2.88049 1.27139 3.34755C1.0958 3.79882 0.975892 4.31494 0.941455 5.07068C0.90645 5.82761 0.898438 6.0696 0.898438 7.99747C0.898438 9.92534 0.90645 10.1673 0.941455 10.9243C0.975892 11.68 1.0958 12.1961 1.27139 12.6474C1.45272 13.1142 1.69543 13.5106 2.09071 13.9049C2.48599 14.2992 2.88168 14.542 3.34902 14.7238C3.80113 14.8993 4.31699 15.0191 5.07318 15.0535C5.83096 15.0879 6.0727 15.0965 8.00173 15.0965C9.93075 15.0965 10.1729 15.0885 10.9303 15.0535C11.6865 15.0191 12.2029 14.8993 12.6544 14.7238C13.1215 14.542 13.5174 14.2994 13.9127 13.9049C14.3081 13.5105 14.5502 13.1142 14.7321 12.6474C14.9077 12.1961 15.0281 11.68 15.062 10.9243C15.0964 10.1668 15.1044 9.92534 15.1044 7.99747C15.1044 6.0696 15.0964 5.82761 15.062 5.07068C15.0276 4.31489 14.9077 3.79853 14.7321 3.34755C14.5502 2.88077 14.3075 2.4851 13.9127 2.09C13.518 1.69489 13.1215 1.45239 12.655 1.27116C12.2029 1.09568 11.6865 0.975277 10.9308 0.941429C10.1735 0.907013 9.93132 0.898438 8.00229 0.898438C6.07327 0.898438 5.83096 0.906445 5.07318 0.941429Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#2BA149]  hover:bg-gray-900 ">
                <svg
                  className="w-[1rem] h-[1rem] text-white"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#2BA149]  hover:bg-gray-900 ">
                <svg
                  className="w-[1.25rem] h-[0.875rem] text-white"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9191 1.10651C14.558 1.27906 15.0602 1.78251 15.2299 2.42069C15.5388 3.57887 15.5388 5.99687 15.5388 5.99687C15.5388 5.99687 15.5388 8.41487 15.2299 9.57306C15.0578 10.2136 14.5556 10.7171 13.9191 10.8872C12.7638 11.1969 8.12875 11.1969 8.12875 11.1969C8.12875 11.1969 3.49603 11.1969 2.33844 10.8872C1.69952 10.7147 1.19735 10.2112 1.0276 9.57306C0.71875 8.41487 0.71875 5.99687 0.71875 5.99687C0.71875 5.99687 0.71875 3.57887 1.0276 2.42069C1.1997 1.78015 1.70188 1.27669 2.33844 1.10651C3.49603 0.796875 8.12875 0.796875 8.12875 0.796875C8.12875 0.796875 12.7638 0.796875 13.9191 1.10651ZM10.4981 5.99687L6.6481 8.22578V3.76796L10.4981 5.99687Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}