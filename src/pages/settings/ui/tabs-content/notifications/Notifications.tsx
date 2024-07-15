import {
  BrowserSVGIcon,
  EmailSVGIcon,
  TelegramSVGIcon,
  MobileSVGIcon,
  CrossSVGIcon,
  NotificationsSVGIcon as LinkSVGIcon,
} from "../../icons";

const notificationsData = [
  {
    id: "browser",
    label: "Browser",
    status: "Not Connected",
    connected: false,
    icon: <BrowserSVGIcon />,
  },
  {
    id: "email",
    label: "Email",
    status: "Connected",
    connected: true,
    icon: <EmailSVGIcon />,
  },
  {
    id: "telegram",
    label: "Telegram",
    status: "Coming Soon",
    connected: false,
    icon: <TelegramSVGIcon />,
  },
  {
    id: "mobile",
    label: "Mobile",
    status: "Coming Soon",
    connected: false,
    icon: <MobileSVGIcon />,
  },
];

const Notifications = () => {
  return (
    <div className="relative p-[46px] rounded-[32px] overflow-hidden text-white bg-noise">
      <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px] "></div>
      <div className="relative z-10">
        <div className="mb-10 flex flex-col gap-[6px]">
          <h2 className="font-semibold text-[40px] leading-[44px] tracking-wider">
            Notifications
          </h2>
          <p className="font-medium text-[16px] leading-[22.4px] tracking-wider text-[#ffffffb2]">
            Select your chosen methods.
          </p>
        </div>
        <ul className="flex flex-col gap-9">
          {notificationsData.map((notification) => (
            <li
              key={notification.id}
              className={`flex items-center justify-between gap-6 ${
                notification.connected ? "text-white" : "text-[#3F3F3F]"
              }`}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`flex items-center justify-center size-[60px] rounded-full 
                  ${
                    notification.connected
                      ? "border-none bg-orangeBg"
                      : "bg-transparent border-2 border-[#FFFFFF33]"
                  }
                  `}
                >
                  {notification.icon}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-medium text-[24px] leading-[28.8px]">
                    {notification.label}
                  </h3>
                  <p
                    className={`${
                      notification.connected
                        ? "text-[#D59B2B]"
                        : "text-[#ffffffb3]"
                    }`}
                  >
                    {notification.status}
                  </p>
                </div>
              </div>

              {notification.status !== "Coming Soon" ? (
                !notification.connected ? (
                  <div className="flex items-center justify-center size-[60px] rounded-full bg-transparent border-2 border-[#FFFFFF33]">
                    <LinkSVGIcon color={"#7F7F7F"} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center size-[60px] rounded-full bg-transparent border-2 border-[#FFFFFF33]">
                    <CrossSVGIcon />{" "}
                  </div>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
