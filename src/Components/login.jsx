var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          {/* @format */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>
            Login | ऐlaan | iOS Club </title>
          <link rel="shortcut icon" href="../images/logo/icon.ico" type="image/x-icon" />
          {/* Scroll Lock System Start */}
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
          {/* Lock Import End */}
          <link rel="stylesheet" href="../css/glightbox.min.css" />
          <link rel="stylesheet" href="../css/animate.css" />
          <link rel="stylesheet" href="../css/apexcharts.css" />
          <link rel="stylesheet" href="../css/tailwind.css" />
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="dist/lock.css" />
          <header x-data="
          {
            navbarOpen: false,
            dropdownOpen: false
          }
        " :class="scrolledFromTop ? 'a1 dark:a3 a4 dark:a4 a5 a6 ' : ' a7 dark:a7' " className="a8 a9 aa ab ac ad">
            <div className="ae">
              <div className="af ag aa ac ah">
                <div className="ai aj ak">
                  <a name="#home" :class="scrolledFromTop && '!al lg:!am' " className="an ab a2h lg:aW">
                    <img src="../images/logo/clublogoblack.png" alt="logo" className="ab dark:ao" />
                    <img src="../images/logo/clublogo.png" alt="logo" className="ao ab dark:an" />
                  </a>
                </div>
                <div className="aa ab ac ap ak">
                  <div>
                    <button @click="navbarOpen = !navbarOpen" :class="navbarOpen && 'navbarTogglerActive' " id="navbarToggler" className="aq ar as/2 an at/2 au av aw[6px] ax focus:ay lg:ao">
                      <span :class="navbarOpen && 'az aA[7px]' " className="af aB[6px] an aC[2px] aD[30px] a2 dark:a1" />
                      <span :class="navbarOpen && 'aE' " className="af aB[6px] an aC[2px] aD[30px] a2 dark:a1" />
                      <span :class="navbarOpen && 'aA[-8px] aF[135deg]' " className="af aB[6px] an aC[2px] aD[30px] a2 dark:a1" />
                    </button>
                    <nav :class="!navbarOpen && 'ao' " id="navbarCollapse" className="aq ar aG ab aH[250px] au a1 al aI aJ dark:a2 lg:aK lg:an lg:ab lg:aj lg:a7 lg:aL lg:aM dark:lg:a7">
                      <ul className="aN lg:aa">
                        <li className="aQ dark:aS">
                          <a href="https://iosclub.vercel.app/#home" className="scroll-menu aa am aO aP aR hover:aR dark:aT dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="https://iosclub.vercel.app/#features" className="scroll-menu aa am aO aP aQ hover:aR dark:aS dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY">
                            Features
                          </a>
                        </li>
                        <li>
                          <a href="https://iosclub.vercel.app/#roadmap" className="scroll-menu aa am aO aP aQ hover:aR dark:aS dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY">
                            Roadmap
                          </a>
                        </li>
                        <li>
                          <a href="https://iosclub.vercel.app/#team" className="scroll-menu aa am aO aP aQ hover:aR dark:aS dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="https://iosclub.vercel.app/#contact" className="scroll-menu aa am aO aP aQ hover:aR dark:aS dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY">
                            Support
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="aa ap a1l lg:a1m xl:a1n 2xl:a1o">
                    <div className="a1p">
                      <label htmlFor="darkToggler" className="aa a1q a1r a1s ac a1t a1u a1v dark:a1w[#1E2763]">
                        <input type="checkbox" name="darkToggler" id="darkToggler" className="a1x" aria-label="darkToggler" />
                        <span className="aa a1y a1z ac a1t a1u a1A aT dark:a7 dark:aS">
                          <svg width={16} height={16} viewBox="0 0 16 16" className="a1B">
                            <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                          </svg>
                        </span>
                        <span className="aa a1y a1z ac a1t a1u a7 aQ dark:a1A dark:aT">
                          <svg width={13} height={15} viewBox="0 0 13 15" className="a1B">
                            <path d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="a1v aw[120px] dark:a1w[#14102C]" style={{textAlign: 'center'}}>
            <h1 className="a1N a2o a1P a2p a1k dark:aT md:a2Q[25px]">
              Login With Google
            </h1><br />
            <button className="ab a1u a1A a4C a2G a1F aP aT hover:a2X dark:a1 dark:a1k dark:hover:a2X" style={{fontSize: '1.2rem', fontWeight: 700, color: '#080321', width: 'auto', paddingLeft: '5%', paddingRight: '5%'}}>
              <img width={30} height={30} src="https://img.icons8.com/fluency/30/google-logo.png" style={{display: 'inline'}} alt="google-logo" />&nbsp;&nbsp;
              Login With College ID
            </button>
            <img src="../images/shapes/hero-shape-2.svg" alt="" className="aq a19 a8 a2Z" /> </section>
          <footer className="af a2E a1J[120px]" id="footer">
            <div className="ae">
              <div className="ag aa a1L">
                <div className="ab ak md:a1M/2 lg:a1U/12 xl:a1U/12">
                  <div className="wow fadeInUp a2_ aH[330px] xl:a30" data-wow-delay="0s">
                    <a href="#home" className="a2a a2i">
                      <img src="../images/logo/clublogo.png" alt="logo" className="ao dark:an" />
                      <img src="../images/logo/clublogoblack.png" alt="logo" className="dark:ao" />
                    </a>
                    <p className="a1W a1F a1R aQ dark:aS">
                      Come, Build an iOS Ecosystem With Us
                    </p>
                    <div className="aa ac a31">
                      <a href="https://www.instagram.com/iosclub_vitb/" className="aa a32 a33 ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aT dark:hover:a1A" name="social-link" aria-label="social-link" target="__blank">
                        <svg className="a1B" width={18} height={18} viewBox="0 0 30 30">
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
                          </path>
                        </svg>
                      </a><a href="https://chat.whatsapp.com/FXI1WeGjcI99n1Fk3p70Uo" className="aa a32 a33 ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aT dark:hover:a1A" name="social-link" aria-label="social-link" target="__blank">
                        <svg className="a1B" width={18} height={18} viewBox="0 0 30 30">
                          <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z">
                          </path>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/ios-club-vit-bhopal" className="aa a32 a33 ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aT dark:hover:a1A" name="social-link" aria-label="social-link" target="__blank">
                        <svg width={16} height={16} viewBox="0 0 16 16" className="a1B">
                          <path d="M13.8333 0.5C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.5 14.2754 15.3244 14.6993 15.0118 15.0118C14.6993 15.3244 14.2754 15.5 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333ZM13.4167 13.4167V9C13.4167 8.27949 13.1304 7.5885 12.621 7.07903C12.1115 6.56955 11.4205 6.28333 10.7 6.28333C9.99167 6.28333 9.16667 6.71667 8.76667 7.36667V6.44167H6.44167V13.4167H8.76667V9.30833C8.76667 8.66667 9.28333 8.14167 9.925 8.14167C10.2344 8.14167 10.5312 8.26458 10.75 8.48338C10.9688 8.70217 11.0917 8.99891 11.0917 9.30833V13.4167H13.4167ZM3.73333 5.13333C4.10464 5.13333 4.46073 4.98583 4.72328 4.72328C4.98583 4.46073 5.13333 4.10464 5.13333 3.73333C5.13333 2.95833 4.50833 2.325 3.73333 2.325C3.35982 2.325 3.0016 2.47338 2.73749 2.73749C2.47338 3.0016 2.325 3.35982 2.325 3.73333C2.325 4.50833 2.95833 5.13333 3.73333 5.13333ZM4.89167 13.4167V6.44167H2.58333V13.4167H4.89167Z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/channel/UCqUYjA1pjpdrDFJDzTb45PA" className="aa a32 a33 ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aT dark:hover:a1A" name="social-link" aria-label="social-link" target="__blank">
                        <svg width={18} height={12} viewBox="0 0 18 12" className="a1B">
                          <path d="M7.33366 8.49984L11.6587 5.99984L7.33366 3.49984V8.49984ZM16.967 1.97484C17.0753 2.3665 17.1503 2.8915 17.2003 3.55817C17.2587 4.22484 17.2837 4.79984 17.2837 5.29984L17.3337 5.99984C17.3337 7.82484 17.2003 9.1665 16.967 10.0248C16.7587 10.7748 16.2753 11.2582 15.5253 11.4665C15.1337 11.5748 14.417 11.6498 13.317 11.6998C12.2337 11.7582 11.242 11.7832 10.3253 11.7832L9.00033 11.8332C5.50866 11.8332 3.33366 11.6998 2.47533 11.4665C1.72533 11.2582 1.24199 10.7748 1.03366 10.0248C0.925326 9.63317 0.850326 9.10817 0.800326 8.44151C0.741992 7.77484 0.716992 7.19984 0.716992 6.69984L0.666992 5.99984C0.666992 4.17484 0.800326 2.83317 1.03366 1.97484C1.24199 1.22484 1.72533 0.741504 2.47533 0.533171C2.86699 0.424837 3.58366 0.349837 4.68366 0.299837C5.76699 0.241504 6.75866 0.216504 7.67533 0.216504L9.00033 0.166504C12.492 0.166504 14.667 0.299837 15.5253 0.533171C16.2753 0.741504 16.7587 1.22484 16.967 1.97484Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ab ak sm:a1M/2 md:a1M/2 lg:a1U/12 xl:a12/12">
                  <div className="wow fadeInUp a2_ xl:a30" data-wow-delay="0s">
                    <h2 className="a2K a2B a1P a1k dark:aT">Quick Links</h2>
                    <div className="a34">
                      <a href="https://iosclub.vercel.app/#home" className="an a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                        Home
                      </a>
                      <a href="https://iosclub.vercel.app/#roadmap" className="an a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                        Roadmap</a>
                    </div>
                  </div>
                </div>
                {/*
                  <div class="ab ak sm:a1M/2 md:a1M/2 lg:a1U/12 xl:a12/12">
                      <div class="wow fadeInUp a2_ xl:a30" data-wow-delay="0s">
                          <h2 class="a2K a2B a1P a1k dark:aT">Supports</h2>
                          <div class="a34">
                              <a href="#contact" class="an a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                                  Contact
                              </a>
                              <a href="#footer" class="an a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                                  Connect
                              </a>
                              <a href="javascript:void(0)" class="an a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                                  Terms & Conditions
                              </a>
  
                          </div>
                      </div>
                  </div>
              */}
                <div className="ab ak md:a1M/2 lg:a1M/2 xl:a1U/12">
                  <div className="wow fadeInUp a2_ xl:a30" data-wow-delay="0s">
                    <h2 className="a2K a2B a1P a1k dark:aT">News &amp; Posts</h2>
                    <div className="a34">
                      <div className="aa">
                        <div className="a20 aC[75px] ab aH[75px] a1X">
                          <img src="../images/logo/gameflixlogo.webp" alt="post" className="a2w ab a1X a2x a2y" />
                        </div>
                        <div>
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0GXzQNSImCr3wB7kzbht0o_r3iRTDzA7_DfcoO_nC_gmkRQ/viewform" target="_blank" className="a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                            GameFlix Seats Filling Faster Than Any Other Event. Reserve Yours Now
                          </a>
                          <p className="aa ac" style={{paddingTop: '3px'}}>
                            <span className="a35 aQ dark:aS">
                              <svg width={14} height={16} viewBox="0 0 14 16" className="a1B">
                                <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z" />
                              </svg>
                            </span>
                            <span className="a1j a1R aQ dark:aS"> Jan 29, 2023 </span>
                          </p>
                        </div>
                      </div>
                      <div className="aa">
                        <div className="a20 aC[75px] ab aH[75px] a1X">
                          <img src="../images/logo/sampurnalogo.webp" alt="post" className="a2w ab a1X a2x a2y" />
                        </div>
                        <div>
                          <a className="a1F a1R aQ hover:aR dark:aS dark:hover:aR">
                            Sampurna to KickStart on 30<sup>th</sup> Jan, Are You Ready ?
                          </a>
                          <p className="aa ac" style={{paddingTop: '3px'}}>
                            <span className="a35 aQ dark:aS">
                              <svg width={14} height={16} viewBox="0 0 14 16" className="a1B">
                                <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z" />
                              </svg>
                            </span>
                            <span className="a1j a1R aQ dark:aS"> Jan 21, 2023 </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wow fadeInUp a36 a2l[#F3F4F4] a37 a2G dark:a2l[#2D2C4A]" data-wow-delay="0s">
                <p className="a1F a1R a4u aQ dark:aS">
                  © iOS Club | VIT Bhopal | 2023
                </p>
              </div>
            </div>
            <div className="aq a8 a1a a2Z">
              <img src="../images/shapes/footer-shape-2.svg" alt="shape" />
            </div>
            <div className="aq a2J a19 a2Z">
              <img src="../images/shapes/footer-shape-1.svg" alt="shape" />
            </div>
          </footer>
          <a x-show="scrolledFromTop" href="#home" name="scrollToTop" aria-label="scrollToTop" className="hover:a38 back-to-top ad a39 a3a a3b a2I[999] aa a32 a33 ac a1t au a1A aT a3c a3d">
            <span className="a10[6px] a3e a3f az a36 a3g a1I" />
          </a>
        </div>
      );
    }
  });