export const Footer = ({ className, style, ...props }) => {
  return (
    <div
      style={{
        background: "var(--primary-gold-light, #dfe3e7)",
        padding: "140px 277px 140px 277px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "660px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          flexShrink: "0",
          width: "1780px",
          height: "412px",
          position: "static",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "1780px",
            position: "absolute",
            left: "70px",
            top: "108px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "88px",
              alignItems: "flex-end",
              justifyContent: "center",
              alignSelf: "stretch",
              flexShrink: "0",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "123px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flex: "1",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexShrink: "0",
                  width: "615px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    alignSelf: "stretch",
                    flexShrink: "0",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      color: "var(--dark, #181d24)",
                      textAlign: "center",
                      fontFamily: "'Raleway-Medium', sans-serif",
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Pretty tours{" "}
                  </div>
                  <div
                    style={{
                      color: "var(--primary-gold-dark, #5b656f)",
                      textAlign: "left",
                      fontFamily:
                        "var(--mobile-body-large-font-family, 'Raleway-Regular', sans-serif)",
                      fontSize: "var(--mobile-body-large-font-size, 18px)",
                      lineHeight: "var(--mobile-body-large-line-height, 28px)",
                      fontWeight: "var(--mobile-body-large-font-weight, 400)",
                      position: "relative",
                      alignSelf: "stretch",
                    }}
                  >
                    We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut{" "}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexShrink: "0",
                  width: "313px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "var(--dark, #181d24)",
                    textAlign: "left",
                    fontFamily: "'Raleway-Bold', sans-serif",
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontWeight: "700",
                    position: "relative",
                  }}
                >
                  Connect with us{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexShrink: "0",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--dark, #181d24)",
                          textAlign: "left",
                          fontFamily:
                            "var(--desktop-body-font-family, 'Raleway-Medium', sans-serif)",
                          fontSize: "var(--desktop-body-font-size, 16px)",
                          lineHeight: "var(--desktop-body-line-height, 24px)",
                          fontWeight: "var(--desktop-body-font-weight, 500)",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        +00 000 000 00{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--dark, #181d24)",
                          textAlign: "left",
                          fontFamily:
                            "var(--desktop-body-font-family, 'Raleway-Medium', sans-serif)",
                          fontSize: "var(--desktop-body-font-size, 16px)",
                          lineHeight: "var(--desktop-body-line-height, 24px)",
                          fontWeight: "var(--desktop-body-font-weight, 500)",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span>
                          <span
                            className={"info-prettytours-com-span " + className}
                          >
                            info@p
                          </span>
                          <span className="info-prettytours-com-span2">
                            rettytours.com
                          </span>
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexShrink: "0",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "0px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                      }}
                    >
                      <svg
                        className="vuesax-linear-facebook"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 7.75V10.1667H13.8333C14 10.1667 14.0833 10.3333 14.0833 10.5L13.75 12.0833C13.75 12.1667 13.5833 12.25 13.5 12.25H11.6667V18.3333H9.16667V12.3333H7.75C7.58333 12.3333 7.5 12.25 7.5 12.0833V10.5C7.5 10.3333 7.58333 10.25 7.75 10.25H9.16667V7.5C9.16667 6.08333 10.25 5 11.6667 5H13.9167C14.0833 5 14.1667 5.08333 14.1667 5.25V7.25C14.1667 7.41667 14.0833 7.5 13.9167 7.5H11.9167C11.75 7.5 11.6667 7.58333 11.6667 7.75Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12.5013 18.3327H7.5013C3.33464 18.3327 1.66797 16.666 1.66797 12.4993V7.49935C1.66797 3.33268 3.33464 1.66602 7.5013 1.66602H12.5013C16.668 1.66602 18.3346 3.33268 18.3346 7.49935V12.4993C18.3346 16.666 16.668 18.3327 12.5013 18.3327Z"
                          stroke="#181D24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "0px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                      }}
                    >
                      <svg
                        className="vuesax-linear-youtube"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.168 16.6673H5.83464C3.33464 16.6673 1.66797 15.0006 1.66797 12.5007V7.50065C1.66797 5.00065 3.33464 3.33398 5.83464 3.33398H14.168C16.668 3.33398 18.3346 5.00065 18.3346 7.50065V12.5007C18.3346 15.0006 16.668 16.6673 14.168 16.6673Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 7.91676L11.5833 9.16676C12.3333 9.66676 12.3333 10.4168 11.5833 10.9168L9.5 12.1668C8.66667 12.6668 8 12.2501 8 11.3334V8.83342C8 7.75009 8.66667 7.41676 9.5 7.91676Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "0px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                      }}
                    >
                      <svg
                        className="vuesax-linear-dribbble"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4154 3.99219C13.2487 7.78385 9.0737 9.95885 4.7237 9.56719L2.08203 9.32552"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.58203 16.1417C6.7487 12.3501 10.9237 10.1751 15.2737 10.5667L17.9154 10.8084"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.35742 2.5L9.00742 5.79167C10.7824 7.99167 12.0408 10.55 12.7074 13.2917L13.7158 17.45"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "0px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                      }}
                    >
                      <svg
                        className="vuesax-linear-figma"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0013 1.66602H7.2513C5.66797 1.66602 4.41797 2.91602 4.41797 4.41602C4.41797 5.91602 5.66797 7.16602 7.16797 7.16602H10.0013V1.66602Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M10 7.25H7.25C5.75 7.25 4.5 8.5 4.5 10C4.5 11.5 5.75 12.75 7.25 12.75H10V7.25Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M10 12.75H7.25C5.75 12.75 4.5 14 4.5 15.5C4.5 17 5.75 18.25 7.25 18.25C8.75 18.25 10 17 10 15.5V12.75Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M10 1.66602H12.75C14.25 1.66602 15.5 2.91602 15.5 4.41602C15.5 5.91602 14.25 7.16602 12.75 7.16602H10V1.66602Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M12.75 7.25C14.25 7.25 15.5 8.5 15.5 10C15.5 11.5 14.25 12.75 12.75 12.75C11.25 12.75 10 11.5 10 10C10 8.5 11.25 7.25 12.75 7.25Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "0px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                      }}
                    >
                      <svg
                        className="vuesax-linear-whatsapp"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.7513 17.166C7.0013 17.916 8.5013 18.3327 10.0013 18.3327C14.5846 18.3327 18.3346 14.5827 18.3346 9.99935C18.3346 5.41602 14.5846 1.66602 10.0013 1.66602C5.41797 1.66602 1.66797 5.41602 1.66797 9.99935C1.66797 11.4993 2.08464 12.916 2.7513 14.166L2.10841 16.6387C1.91369 17.3876 2.60689 18.0644 3.35096 17.8518L5.7513 17.166Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.75 12.3737C13.75 12.5087 13.72 12.6475 13.6561 12.7825C13.5923 12.9175 13.5096 13.045 13.4007 13.165C13.2167 13.3675 13.0139 13.5138 12.7848 13.6075C12.5595 13.7013 12.3153 13.75 12.0525 13.75C11.6694 13.75 11.26 13.66 10.8281 13.4763C10.3962 13.2925 9.96432 13.045 9.53618 12.7338C9.10428 12.4188 8.69492 12.07 8.30433 11.6837C7.9175 11.2937 7.56823 10.885 7.25651 10.4575C6.94855 10.03 6.70068 9.6025 6.52041 9.17875C6.34014 8.75125 6.25 8.3425 6.25 7.9525C6.25 7.6975 6.29507 7.45375 6.3852 7.22875C6.47534 7 6.61805 6.79 6.8171 6.6025C7.05746 6.36625 7.32036 6.25 7.59827 6.25C7.70343 6.25 7.80859 6.2725 7.90248 6.3175C8.00013 6.3625 8.0865 6.43 8.15411 6.5275L9.02541 7.75375C9.09301 7.8475 9.14184 7.93375 9.17564 8.01625C9.20944 8.095 9.22822 8.17375 9.22822 8.245C9.22822 8.335 9.20193 8.425 9.14935 8.51125C9.10053 8.5975 9.02917 8.6875 8.93903 8.7775L8.65361 9.07375C8.61229 9.115 8.59352 9.16375 8.59352 9.22375C8.59352 9.25375 8.59727 9.28 8.60478 9.31C8.61605 9.34 8.62732 9.3625 8.63483 9.385C8.70243 9.50875 8.81885 9.67 8.9841 9.865C9.1531 10.06 9.33337 10.2588 9.52867 10.4575C9.73147 10.6563 9.92677 10.84 10.1258 11.0087C10.3211 11.1737 10.4826 11.2862 10.6103 11.3537C10.6291 11.3612 10.6516 11.3725 10.6779 11.3837C10.7079 11.395 10.738 11.3987 10.7718 11.3987C10.8356 11.3987 10.8845 11.3763 10.9258 11.335L11.2112 11.0538C11.3051 10.96 11.3952 10.8887 11.4816 10.8438C11.568 10.7912 11.6544 10.765 11.7482 10.765C11.8196 10.765 11.8947 10.78 11.9773 10.8138C12.06 10.8475 12.1463 10.8963 12.2402 10.96L13.4834 11.8412C13.581 11.9087 13.6486 11.9875 13.6899 12.0812C13.7275 12.175 13.75 12.2687 13.75 12.3737Z"
                          stroke="#181D24"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexShrink: "0",
                  width: "305.81px",
                  height: "94.83px",
                  position: "static",
                }}
              >
                <div
                  style={{
                    color: "#28292a",
                    textAlign: "left",
                    fontFamily: "'OpenSans-Bold', sans-serif",
                    fontSize: "20px",
                    lineHeight: "124.5%",
                    fontWeight: "700",
                    position: "absolute",
                    left: "1174px",
                    top: "0px",
                  }}
                >
                  Discover our app{" "}
                </div>
                <div
                  style={{
                    width: "150.41px",
                    height: "49.2px",
                    position: "static",
                  }}
                >
                  <div
                    style={{
                      background: "var(--black, #080809)",
                      borderRadius: "10px",
                      width: "150.41px",
                      height: "49.2px",
                      position: "absolute",
                      left: "1174px",
                      top: "45.63px",
                    }}
                  ></div>
                  <svg
                    className="google-play-1"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_5765)">
                      <path
                        d="M16.1756 14.5305L2.05777 28.125C1.39665 27.6732 1.00414 26.9217 1.01108 26.121V2.94009C1.00414 2.13938 1.39665 1.38785 2.05777 0.936035L16.1756 14.5305Z"
                        fill="#2196F3"
                      />
                      <path
                        d="M21.1154 9.7823L16.1754 14.5308L2.05762 0.936297C2.11081 0.89507 2.16622 0.856716 2.22354 0.821414C2.96968 0.369181 3.90167 0.354581 4.66163 0.783119L21.1154 9.7823Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M27.1022 14.5307C27.1114 15.4347 26.6202 16.2696 25.8257 16.7008L21.1155 19.2792L16.1755 14.5307L21.1155 9.78223L25.8257 12.3607C26.6202 12.7919 27.1114 13.6268 27.1022 14.5307Z"
                        fill="#F0BB1F"
                      />
                      <path
                        d="M21.1154 19.2793L4.66163 28.2784C3.9 28.7003 2.97154 28.6857 2.22354 28.2401C2.16622 28.2048 2.11081 28.1665 2.05762 28.1253L16.1755 14.5308L21.1154 19.2793Z"
                        fill="#F15A2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5765">
                        <rect
                          width="28.1133"
                          height="28.1133"
                          fill="white"
                          transform="translate(0 0.47168)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="vector"
                    width="76"
                    height="22"
                    viewBox="0 0 76 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.60887 4.33147H4.66177V5.90581H6.76464C6.48351 6.65925 5.79755 7.12031 4.75173 7.12031C3.22237 7.12031 2.27777 6.14196 2.27777 4.80377C2.27777 3.4206 3.26735 2.44226 4.5943 2.44226C5.48268 2.44226 6.19113 2.84709 6.51725 3.36437L8.04661 2.48724C7.38314 1.43018 6.11242 0.687988 4.60554 0.687988C2.28901 0.687988 0.478516 2.50973 0.478516 4.79253C0.478516 7.05283 2.25527 8.87457 4.72924 8.87457C6.93332 8.87457 8.60887 7.41268 8.60887 5.00619V4.33147Z"
                      fill="white"
                    />
                    <path
                      d="M10.8602 6.98536V5.59094H13.6715V3.88166H10.8602V2.5772H13.9527V0.845423H9.06097V8.71714H14.0089V6.98536H10.8602Z"
                      fill="white"
                    />
                    <path
                      d="M19.7471 0.845423H13.8995V2.5772H15.9237V8.71714H17.7229V2.5772H19.7471V0.845423Z"
                      fill="white"
                    />
                    <path
                      d="M22.2215 0.845423V8.71714H24.0207V0.845423H22.2215Z"
                      fill="white"
                    />
                    <path
                      d="M30.0963 0.845423H24.2487V2.5772H26.2729V8.71714H28.0721V2.5772H30.0963V0.845423Z"
                      fill="white"
                    />
                    <path
                      d="M36.3266 8.87457C38.5869 8.87457 40.4199 7.09782 40.4199 4.78128C40.4199 2.46475 38.5869 0.687988 36.3266 0.687988C34.0663 0.687988 32.2333 2.46475 32.2333 4.78128C32.2333 7.09782 34.0663 8.87457 36.3266 8.87457ZM36.3266 7.12031C35.0447 7.12031 34.0326 6.18695 34.0326 4.78128C34.0326 3.37562 35.0447 2.44226 36.3266 2.44226C37.6086 2.44226 38.6207 3.37562 38.6207 4.78128C38.6207 6.18695 37.6086 7.12031 36.3266 7.12031Z"
                      fill="white"
                    />
                    <path
                      d="M45.2564 0.845423V5.11864L42.2201 0.845423H40.8707V8.71714H42.6699V4.44392L45.7062 8.71714H47.0556V0.845423H45.2564Z"
                      fill="white"
                    />
                    <path
                      d="M8.60887 17.7021V18.0058C8.60887 18.9879 8.26027 19.8163 7.56306 20.491C6.86585 21.1582 5.94748 21.4918 4.80796 21.4918C3.60846 21.4918 2.61887 21.102 1.8392 20.3223C1.05952 19.5351 0.669686 18.5718 0.669686 17.4323C0.669686 16.2927 1.05577 15.3331 1.82795 14.5535C2.60013 13.7663 3.57847 13.3727 4.76298 13.3727C5.48268 13.3727 6.1424 13.5451 6.74215 13.89C7.3494 14.2348 7.81795 14.6959 8.14782 15.2732L7.61929 15.588C7.3569 15.0932 6.96706 14.6959 6.44977 14.396C5.93999 14.0961 5.37772 13.9462 4.76298 13.9462C3.7434 13.9462 2.90375 14.2836 2.24403 14.9583C1.5918 15.6255 1.26569 16.4502 1.26569 17.4323C1.26569 18.4143 1.59555 19.2428 2.25527 19.9175C2.915 20.5847 3.76589 20.9183 4.80796 20.9183C5.73008 20.9183 6.47601 20.6672 7.04578 20.1649C7.61554 19.6626 7.93416 19.0291 8.00163 18.2644H4.66177V17.7021H8.60887Z"
                      fill="white"
                    />
                    <path
                      d="M16.5911 20.3111C15.8039 21.0982 14.8443 21.4918 13.7123 21.4918C12.5803 21.4918 11.6207 21.0982 10.8335 20.3111C10.0463 19.5164 9.65275 18.5568 9.65275 17.4323C9.65275 16.3077 10.0463 15.3519 10.8335 14.5647C11.6207 13.77 12.5803 13.3727 13.7123 13.3727C14.8443 13.3727 15.8039 13.77 16.5911 14.5647C17.3783 15.3519 17.7719 16.3077 17.7719 17.4323C17.7719 18.5568 17.3783 19.5164 16.5911 20.3111ZM11.2496 19.9062C11.9243 20.5809 12.7452 20.9183 13.7123 20.9183C14.6794 20.9183 15.4966 20.5809 16.1638 19.9062C16.8385 19.224 17.1759 18.3994 17.1759 17.4323C17.1759 16.4652 16.8385 15.6442 16.1638 14.9695C15.4966 14.2873 14.6794 13.9462 13.7123 13.9462C12.7452 13.9462 11.9243 14.2873 11.2496 14.9695C10.5824 15.6442 10.2488 16.4652 10.2488 17.4323C10.2488 18.3994 10.5824 19.224 11.2496 19.9062Z"
                      fill="white"
                    />
                    <path
                      d="M25.7719 20.3111C24.9847 21.0982 24.0251 21.4918 22.8931 21.4918C21.761 21.4918 20.8014 21.0982 20.0143 20.3111C19.2271 19.5164 18.8335 18.5568 18.8335 17.4323C18.8335 16.3077 19.2271 15.3519 20.0143 14.5647C20.8014 13.77 21.761 13.3727 22.8931 13.3727C24.0251 13.3727 24.9847 13.77 25.7719 14.5647C26.559 15.3519 26.9526 16.3077 26.9526 17.4323C26.9526 18.5568 26.559 19.5164 25.7719 20.3111ZM20.4303 19.9062C21.105 20.5809 21.926 20.9183 22.8931 20.9183C23.8601 20.9183 24.6773 20.5809 25.3445 19.9062C26.0192 19.224 26.3566 18.3994 26.3566 17.4323C26.3566 16.4652 26.0192 15.6442 25.3445 14.9695C24.6773 14.2873 23.8601 13.9462 22.8931 13.9462C21.926 13.9462 21.105 14.2873 20.4303 14.9695C19.7631 15.6442 19.4295 16.4652 19.4295 17.4323C19.4295 18.3994 19.7631 19.224 20.4303 19.9062Z"
                      fill="white"
                    />
                    <path
                      d="M35.9534 17.7021V18.0058C35.9534 18.9879 35.6048 19.8163 34.9076 20.491C34.2104 21.1582 33.292 21.4918 32.1525 21.4918C30.953 21.4918 29.9634 21.102 29.1837 20.3223C28.4041 19.5351 28.0142 18.5718 28.0142 17.4323C28.0142 16.2927 28.4003 15.3331 29.1725 14.5535C29.9447 13.7663 30.923 13.3727 32.1075 13.3727C32.8272 13.3727 33.487 13.5451 34.0867 13.89C34.6939 14.2348 35.1625 14.6959 35.4924 15.2732L34.9638 15.588C34.7014 15.0932 34.3116 14.6959 33.7943 14.396C33.2845 14.0961 32.7223 13.9462 32.1075 13.9462C31.088 13.9462 30.2483 14.2836 29.5886 14.9583C28.9364 15.6255 28.6102 16.4502 28.6102 17.4323C28.6102 18.4143 28.9401 19.2428 29.5998 19.9175C30.2595 20.5847 31.1104 20.9183 32.1525 20.9183C33.0746 20.9183 33.8206 20.6672 34.3903 20.1649C34.9601 19.6626 35.2787 19.0291 35.3462 18.2644H32.0063V17.7021H35.9534Z"
                      fill="white"
                    />
                    <path
                      d="M38.0431 20.8058H41.7541V21.3681H37.4471V13.4964H38.0431V20.8058Z"
                      fill="white"
                    />
                    <path
                      d="M43.5889 20.8058H47.5248V21.3681H42.9929V13.4964H47.4685V14.0587H43.5889V17.1174H47.1874V17.6797H43.5889V20.8058Z"
                      fill="white"
                    />
                    <path
                      d="M54.6633 13.4964C55.368 13.4964 55.9528 13.7288 56.4176 14.1936C56.8824 14.6584 57.1148 15.2394 57.1148 15.9366C57.1148 16.6338 56.8824 17.2148 56.4176 17.6797C55.9528 18.137 55.368 18.3656 54.6633 18.3656H52.583V21.3681H51.987V13.4964H54.6633ZM54.6633 17.8034C55.2031 17.8034 55.6454 17.6272 55.9903 17.2748C56.3426 16.9225 56.5188 16.4764 56.5188 15.9366C56.5188 15.3894 56.3426 14.9395 55.9903 14.5872C55.6454 14.2348 55.2031 14.0587 54.6633 14.0587H52.583V17.8034H54.6633Z"
                      fill="white"
                    />
                    <path
                      d="M59.183 20.8058H62.8939V21.3681H58.587V13.4964H59.183V20.8058Z"
                      fill="white"
                    />
                    <path
                      d="M69.6489 21.3681L68.8843 19.3664H64.9372L64.1725 21.3681H63.5427L66.6015 13.4964H67.2312L70.2787 21.3681H69.6489ZM65.1621 18.8042H68.6706L66.9163 14.2273L65.1621 18.8042Z"
                      fill="white"
                    />
                    <path
                      d="M75.8795 13.4964L73.012 18.1295V21.3681H72.416V18.1295L69.5484 13.4964H70.2232L72.7196 17.556L75.2048 13.4964H75.8795Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    width: "140.57px",
                    height: "49.2px",
                    position: "static",
                  }}
                >
                  <div
                    style={{
                      background: "var(--black, #080809)",
                      borderRadius: "10px",
                      width: "140.57px",
                      height: "49.2px",
                      position: "absolute",
                      left: "1339.25px",
                      top: "45.63px",
                    }}
                  ></div>
                  <svg
                    className="apple-2-1"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.87488 23.3677C3.5276 23.3484 0.758789 16.5155 0.758789 13.0356C0.758789 7.35128 5.023 6.10683 6.6664 6.10683C7.40701 6.10683 8.19783 6.39767 8.89534 6.65503C9.38311 6.83456 9.88757 7.01989 10.1681 7.01989C10.3361 7.01989 10.7318 6.86224 11.0812 6.72391C11.8263 6.42727 12.7535 6.05859 13.8333 6.05859C13.8352 6.05859 13.8378 6.05859 13.8397 6.05859C14.6459 6.05859 17.0905 6.23553 18.5601 8.4426L18.9044 8.95993L18.4089 9.33379C17.7011 9.86786 16.4097 10.8421 16.4097 12.7718C16.4097 15.0574 17.8723 15.9364 18.5749 16.3591C18.8851 16.5457 19.2062 16.7381 19.2062 17.1589C19.2062 17.4337 17.0132 23.3336 13.8287 23.3336C13.0495 23.3336 12.4987 23.0994 12.0129 22.8928C11.5213 22.6837 11.0972 22.5035 10.3965 22.5035C10.0413 22.5035 9.59216 22.6715 9.11665 22.8497C8.46683 23.0923 7.73132 23.3677 6.89675 23.3677H6.87488Z"
                      fill="white"
                    />
                    <path
                      d="M14.1706 0.877441C14.2535 3.86782 12.1149 5.9424 9.97886 5.81229C9.62687 3.42587 12.1147 0.877441 14.1706 0.877441Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="vector2"
                    width="78"
                    height="26"
                    viewBox="0 0 78 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.10877 6.90583H6.58472L4.57743 1.00204H2.8569L0.849609 6.90583H2.32556L2.62075 5.97809H4.81358L5.10877 6.90583ZM3.02558 4.713L3.71716 2.54546L4.40875 4.713H3.02558Z"
                      fill="white"
                    />
                    <path
                      d="M9.57167 2.68884L8.69453 5.36241L7.8174 2.68884H6.41736L7.97764 6.90583H9.41142L10.9717 2.68884H9.57167Z"
                      fill="white"
                    />
                    <path
                      d="M14.3327 2.68884V3.08524C14.0544 2.76475 13.6411 2.57076 13.0761 2.57076C11.9712 2.57076 11.0603 3.54067 11.0603 4.79734C11.0603 6.054 11.9712 7.02391 13.0761 7.02391C13.6411 7.02391 14.0544 6.82992 14.3327 6.50943V6.90583H15.5978V2.68884H14.3327ZM13.3291 5.82628C12.7471 5.82628 12.3254 5.42988 12.3254 4.79734C12.3254 4.16479 12.7471 3.76839 13.3291 3.76839C13.911 3.76839 14.3327 4.16479 14.3327 4.79734C14.3327 5.42988 13.911 5.82628 13.3291 5.82628Z"
                      fill="white"
                    />
                    <path
                      d="M16.5259 6.90583H17.791V0.749023H16.5259V6.90583Z"
                      fill="white"
                    />
                    <path
                      d="M19.3494 2.31774C19.7626 2.31774 20.1084 1.97195 20.1084 1.55869C20.1084 1.14542 19.7626 0.799627 19.3494 0.799627C18.9361 0.799627 18.5903 1.14542 18.5903 1.55869C18.5903 1.97195 18.9361 2.31774 19.3494 2.31774ZM18.7168 6.90583H19.9819V2.68884H18.7168V6.90583Z"
                      fill="white"
                    />
                    <path
                      d="M23.4294 2.57076C22.8643 2.57076 22.4511 2.76475 22.1728 3.08524V1.00204H20.9077V6.90583H22.1728V6.50943C22.4511 6.82992 22.8643 7.02391 23.4294 7.02391C24.5343 7.02391 25.4451 6.054 25.4451 4.79734C25.4451 3.54067 24.5343 2.57076 23.4294 2.57076ZM23.1764 5.82628C22.5945 5.82628 22.1728 5.42988 22.1728 4.79734C22.1728 4.16479 22.5945 3.76839 23.1764 3.76839C23.7584 3.76839 24.18 4.16479 24.18 4.79734C24.18 5.42988 23.7584 5.82628 23.1764 5.82628Z"
                      fill="white"
                    />
                    <path
                      d="M26.1624 6.90583H27.4275V0.749023H26.1624V6.90583Z"
                      fill="white"
                    />
                    <path
                      d="M29.4834 5.30337H32.4775C32.5112 5.14313 32.5281 4.97445 32.5281 4.79734C32.5281 3.5238 31.6172 2.57076 30.3859 2.57076C29.0533 2.57076 28.1424 3.54067 28.1424 4.79734C28.1424 6.054 29.0364 7.02391 30.4787 7.02391C31.2799 7.02391 31.904 6.72872 32.3173 6.15521L31.3052 5.57326C31.1365 5.75881 30.8413 5.89375 30.4955 5.89375C30.0317 5.89375 29.6437 5.74194 29.4834 5.30337ZM29.4581 4.35877C29.5762 3.92863 29.8967 3.69248 30.3774 3.69248C30.757 3.69248 31.1365 3.8696 31.2714 4.35877H29.4581Z"
                      fill="white"
                    />
                    <path
                      d="M37.3783 7.02391C38.6181 7.02391 39.6133 6.054 39.6133 4.79734C39.6133 3.54067 38.6181 2.57076 37.3783 2.57076C36.1385 2.57076 35.1433 3.54067 35.1433 4.79734C35.1433 6.054 36.1385 7.02391 37.3783 7.02391ZM37.3783 5.79254C36.8301 5.79254 36.4084 5.39615 36.4084 4.79734C36.4084 4.19852 36.8301 3.80212 37.3783 3.80212C37.9265 3.80212 38.3482 4.19852 38.3482 4.79734C38.3482 5.39615 37.9265 5.79254 37.3783 5.79254Z"
                      fill="white"
                    />
                    <path
                      d="M42.8 2.57076C42.2434 2.57076 41.8217 2.77318 41.594 3.08524V2.68884H40.3289V6.90583H41.594V4.60335C41.594 4.00454 41.9145 3.73465 42.3783 3.73465C42.7832 3.73465 43.1121 3.97924 43.1121 4.50215V6.90583H44.3772V4.3166C44.3772 3.17801 43.6519 2.57076 42.8 2.57076Z"
                      fill="white"
                    />
                    <path
                      d="M49.8256 3.90333V2.68884H48.9569V1.50808L47.6918 1.88761V2.68884H47.0171V3.90333H47.6918V5.39615C47.6918 6.57691 48.1726 7.07451 49.8256 6.90583V5.75881C49.269 5.79255 48.9569 5.75881 48.9569 5.39615V3.90333H49.8256Z"
                      fill="white"
                    />
                    <path
                      d="M53.0131 2.57076C52.4564 2.57076 52.0347 2.77318 51.807 3.08524V1.00204H50.5419V6.90583H51.807V4.60335C51.807 4.00454 52.1275 3.73465 52.5914 3.73465C52.9962 3.73465 53.3251 3.97924 53.3251 4.50215V6.90583H54.5902V4.3166C54.5902 3.17801 53.8649 2.57076 53.0131 2.57076Z"
                      fill="white"
                    />
                    <path
                      d="M56.5891 5.30337H59.5832C59.6169 5.14313 59.6338 4.97445 59.6338 4.79734C59.6338 3.5238 58.7229 2.57076 57.4916 2.57076C56.159 2.57076 55.2481 3.54067 55.2481 4.79734C55.2481 6.054 56.1421 7.02391 57.5844 7.02391C58.3856 7.02391 59.0097 6.72872 59.423 6.15521L58.4109 5.57326C58.2422 5.75881 57.947 5.89375 57.6012 5.89375C57.1374 5.89375 56.7494 5.74194 56.5891 5.30337ZM56.5638 4.35877C56.6819 3.92863 57.0024 3.69248 57.4831 3.69248C57.8627 3.69248 58.2422 3.8696 58.3771 4.35877H56.5638Z"
                      fill="white"
                    />
                    <path
                      d="M7.94821 22.3681H10.4081L7.06264 12.5285H4.19509L0.849609 22.3681H3.30952L3.8015 20.8219H7.45623L7.94821 22.3681ZM4.47622 18.7134L5.62887 15.1009L6.78151 18.7134H4.47622Z"
                      fill="white"
                    />
                    <path
                      d="M15.3798 15.143C14.438 15.143 13.7492 15.4663 13.2853 16.0005V15.3398H11.1768V25.1795H13.2853V21.7075C13.7492 22.2416 14.438 22.5649 15.3798 22.5649C17.2212 22.5649 18.7393 20.9484 18.7393 18.854C18.7393 16.7595 17.2212 15.143 15.3798 15.143ZM14.9581 20.5689C13.9882 20.5689 13.2853 19.9082 13.2853 18.854C13.2853 17.7997 13.9882 17.1391 14.9581 17.1391C15.928 17.1391 16.6308 17.7997 16.6308 18.854C16.6308 19.9082 15.928 20.5689 14.9581 20.5689Z"
                      fill="white"
                    />
                    <path
                      d="M24.1377 15.143C23.1959 15.143 22.5072 15.4663 22.0433 16.0005V15.3398H19.9348V25.1795H22.0433V21.7075C22.5072 22.2416 23.1959 22.5649 24.1377 22.5649C25.9791 22.5649 27.4973 20.9484 27.4973 18.854C27.4973 16.7595 25.9791 15.143 24.1377 15.143ZM23.716 20.5689C22.7461 20.5689 22.0433 19.9082 22.0433 18.854C22.0433 17.7997 22.7461 17.1391 23.716 17.1391C24.6859 17.1391 25.3888 17.7997 25.3888 18.854C25.3888 19.9082 24.6859 20.5689 23.716 20.5689Z"
                      fill="white"
                    />
                    <path
                      d="M28.6927 22.3681H30.8012V12.1068H28.6927V22.3681Z"
                      fill="white"
                    />
                    <path
                      d="M34.2278 19.6974H39.2179C39.2741 19.4303 39.3022 19.1492 39.3022 18.854C39.3022 16.7314 37.7841 15.143 35.7318 15.143C33.5109 15.143 31.9928 16.7595 31.9928 18.854C31.9928 20.9484 33.4828 22.5649 35.8864 22.5649C37.2218 22.5649 38.262 22.0729 38.9508 21.1171L37.264 20.1472C36.9829 20.4564 36.4909 20.6813 35.9146 20.6813C35.1414 20.6813 34.4948 20.4283 34.2278 19.6974ZM34.1856 18.123C34.3824 17.4061 34.9165 17.0126 35.7178 17.0126C36.3503 17.0126 36.9829 17.3077 37.2078 18.123H34.1856Z"
                      fill="white"
                    />
                    <path
                      d="M47.5264 22.5649C49.663 22.5649 51.1812 21.4404 51.1812 19.5427C51.1812 17.4624 49.5084 16.9423 48.0184 16.4925C46.4862 16.0286 46.2473 15.7193 46.2473 15.2695C46.2473 14.8759 46.5987 14.5245 47.3015 14.5245C48.2012 14.5245 48.665 14.9603 49.0024 15.6631L50.9 14.5526C50.1831 13.1048 48.918 12.3317 47.3015 12.3317C45.6007 12.3317 43.9982 13.4281 43.9982 15.3258C43.9982 17.2093 45.432 17.9122 46.8939 18.3198C48.3698 18.7275 48.9321 18.9664 48.9321 19.5709C48.9321 19.9504 48.665 20.3721 47.5967 20.3721C46.4862 20.3721 45.8818 19.8239 45.5304 19.0086L43.5906 20.1331C44.1388 21.581 45.4601 22.5649 47.5264 22.5649Z"
                      fill="white"
                    />
                    <path
                      d="M56.1475 17.364V15.3398H54.6997V13.3719L52.5912 14.0044V15.3398H51.4667V17.364H52.5912V19.852C52.5912 21.8199 53.3924 22.6493 56.1475 22.3681V20.4564C55.2198 20.5127 54.6997 20.4564 54.6997 19.852V17.364H56.1475Z"
                      fill="white"
                    />
                    <path
                      d="M60.5777 22.5649C62.644 22.5649 64.3027 20.9484 64.3027 18.854C64.3027 16.7595 62.644 15.143 60.5777 15.143C58.5114 15.143 56.8527 16.7595 56.8527 18.854C56.8527 20.9484 58.5114 22.5649 60.5777 22.5649ZM60.5777 20.5127C59.664 20.5127 58.9612 19.852 58.9612 18.854C58.9612 17.856 59.664 17.1953 60.5777 17.1953C61.4914 17.1953 62.1942 17.856 62.1942 18.854C62.1942 19.852 61.4914 20.5127 60.5777 20.5127Z"
                      fill="white"
                    />
                    <path
                      d="M67.6038 16.5909V15.3398H65.4953V22.3681H67.6038V19.1913C67.6038 17.7997 68.8408 17.4483 69.7123 17.5889V15.1992C68.8267 15.1992 67.8849 15.6491 67.6038 16.5909Z"
                      fill="white"
                    />
                    <path
                      d="M72.3756 19.6974H77.3657C77.4219 19.4303 77.4501 19.1492 77.4501 18.854C77.4501 16.7314 75.9319 15.143 73.8797 15.143C71.6587 15.143 70.1406 16.7595 70.1406 18.854C70.1406 20.9484 71.6306 22.5649 74.0343 22.5649C75.3697 22.5649 76.4099 22.0729 77.0986 21.1171L75.4118 20.1472C75.1307 20.4564 74.6387 20.6813 74.0624 20.6813C73.2893 20.6813 72.6427 20.4283 72.3756 19.6974ZM72.3334 18.123C72.5302 17.4061 73.0644 17.0126 73.8656 17.0126C74.4982 17.0126 75.1307 17.3077 75.3556 18.123H72.3334Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              className="footer-img"
              style={{
                opacity: "0.07000000029802322",
                flexShrink: "0",
                width: "428px",
                height: "356px",
                position: "relative",
                objectFit: "cover",
              }}
              src="footer-img0.png"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "708px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "1780px",
            position: "absolute",
            left: "70px",
            top: "496px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexShrink: "0",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "var(--dark, #181d24)",
                textAlign: "left",
                fontFamily: "'Raleway-Regular', sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "400",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Terms &amp; Conditions{" "}
            </div>
            <div
              style={{
                color: "var(--dark, #181d24)",
                textAlign: "left",
                fontFamily: "'Raleway-Regular', sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "400",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Privacy Notice and Cookies{" "}
            </div>
            <div
              style={{
                color: "var(--dark, #181d24)",
                textAlign: "left",
                fontFamily: "'Raleway-Regular', sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "400",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Work with us{" "}
            </div>
          </div>
          <div
            style={{
              color: "var(--dark, #181d24)",
              textAlign: "left",
              fontFamily: "'Raleway-Regular', sans-serif",
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: "400",
              position: "relative",
              width: "313px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            Pretty tours. | © All rights reserved 2024{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
