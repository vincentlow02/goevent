"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const imgMap = "https://www.figma.com/api/mcp/asset/adce325b-45e4-48ac-9ae8-afb846696c00";
const imgFlagJapan = "https://www.figma.com/api/mcp/asset/2cd8eec8-91a8-4e77-85f0-3003d2fd9cc0";
const imgSearch = "https://www.figma.com/api/mcp/asset/0d558fc2-a39c-4856-ac3a-75ec1cc121c4";
const imgBlur = "https://www.figma.com/api/mcp/asset/535aecc5-6603-4564-bcbd-5a5abd124e85";
const imgBlur1 = "https://www.figma.com/api/mcp/asset/ac8dd367-0209-4e97-880e-8e377f72c690";
const imgMusic = "https://www.figma.com/api/mcp/asset/c444e480-9249-4779-85c0-aa2b40458fae";
const imgFood = "https://www.figma.com/api/mcp/asset/dfa06596-ab4b-4eac-b8eb-a410b46eba77";
const imgPlus = "https://www.figma.com/api/mcp/asset/0a23a19c-9297-4e9c-bc38-5de0fdc7b087";
const imgUnionOden = "https://www.figma.com/api/mcp/asset/3b79a8e0-e365-409e-9319-d44cb22041f8";
const imgUnionWorkshop = "https://www.figma.com/api/mcp/asset/2dcdfda0-ba78-4b9c-9482-c9926f5c84ec";
const imgUnionJazz = "https://www.figma.com/api/mcp/asset/6dd23ca1-1702-4d82-97b8-1e18a5e0debb";
const imgRoundPushpin = "https://www.figma.com/api/mcp/asset/a948e336-1073-4342-8ca7-3b9625fa51fb";
const imgArtistPalette = "https://www.figma.com/api/mcp/asset/acac8ccc-ce76-4806-b2b5-cf304fe2de19";
const imgOden = "https://www.figma.com/api/mcp/asset/70cc06db-0f17-4cb5-8c8c-76d93001b141";
const imgAvatar = "https://www.figma.com/api/mcp/asset/d6eed040-a513-4221-893f-5ed58f037a6a";
const imgJazz = "https://www.figma.com/api/mcp/asset/f2bd5858-0b17-41b4-a74c-64b8194cae4f";
const imgTumbler = "https://www.figma.com/api/mcp/asset/d6e47a06-2a8f-4e66-a3ce-19b52a419648";
const imgFav = "https://www.figma.com/api/mcp/asset/4fc5f25a-e92d-41f3-8619-9fa39218671a";
const imgNavDiscover = "https://www.figma.com/api/mcp/asset/e4160e7c-53d6-4793-957d-5215057a7d79";
const imgNavTicket = "https://www.figma.com/api/mcp/asset/371ec9ae-6803-47c6-9008-c4f7ab25fdaf";
const imgNavSaved = "https://www.figma.com/api/mcp/asset/48885c77-5c4a-4540-9c13-3ff86aab0e8b";
const imgNavProfile = "https://www.figma.com/api/mcp/asset/72658752-f53c-4aca-baa6-f16490c1d014";
const imgSignInClose = "https://www.figma.com/api/mcp/asset/0ea6613c-02b0-40cc-b870-629829007913";
const imgGoEventMark = "https://www.figma.com/api/mcp/asset/922469f4-7894-476e-a683-e0ad5484ef79";
const imgTicketAvatar = "https://www.figma.com/api/mcp/asset/6b0d2a36-6d2f-45b9-8eae-6dc9541ed14b";
const imgTicketHero = "https://www.figma.com/api/mcp/asset/0e6c9ea0-fbac-446e-898c-e492bba9a2f1";
const imgTicketLiveMusic = "https://www.figma.com/api/mcp/asset/bdd17d26-6c0e-4068-8ad6-330fcf2ae496";
const imgTicketLocation = "https://www.figma.com/api/mcp/asset/164b2cc7-4ba8-4190-8e2a-250a95064749";
const imgTicketDivider = "https://www.figma.com/api/mcp/asset/1944c6f3-f9a1-46be-836c-6265bd65630e";
const imgTicketDiscover = "https://www.figma.com/api/mcp/asset/a389a697-e71e-4571-b43e-190a92780586";
const imgTicketActive = "https://www.figma.com/api/mcp/asset/4be5f639-a772-4ddb-93b7-24b1801bdabd";
const imgTicketSaved = "https://www.figma.com/api/mcp/asset/6f5a54c7-b3bc-4927-bde9-f0ae998ebd9a";
const imgTicketProfile = "https://www.figma.com/api/mcp/asset/9f9de917-05be-4760-ac40-58df89e3a265";

function GlassPill({
  widthClass,
  blurMask,
  children,
}: {
  widthClass: string;
  blurMask: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative h-[38px] ${widthClass}`}>
      <div className="absolute inset-0 rounded-[296px] shadow-[0_0_15.8px_rgba(0,0,0,0.07)]">
        <div className="absolute inset-[-26px] opacity-[0.67]">
          <div
            className="absolute inset-[28px_26px_24px_26px] rounded-[1000px] blur-[10px]"
            style={{
              maskImage: `url('${blurMask}')`,
              maskPosition: "-158.33% -162.5%",
              maskRepeat: "no-repeat",
              maskSize: "416.67% 416.67%",
            }}
          >
            <div className="absolute inset-0 rounded-[1000px] bg-transparent backdrop-blur-[20px] mix-blend-hard-light" />
          </div>
        </div>
        <div className="absolute inset-0 rounded-[296px] bg-white" />
      </div>
      <div className="relative flex h-full items-center">{children}</div>
    </div>
  );
}

function SearchField() {
  return (
    <GlassPill blurMask={imgBlur} widthClass="w-full min-w-0">
      <div className="flex min-w-0 items-center gap-[11px] px-[13px] py-[8px]">
        <img alt="" className="h-[15px] w-[13.33px] shrink-0" src={imgSearch} />
        <div className="flex min-w-0 items-center gap-[8px]">
          <img alt="" className="h-[19px] w-[19px] shrink-0" src={imgFlagJapan} />
          <span className="truncate text-[13px] leading-[20px] text-[#949494]">
            Search event nearby
          </span>
        </div>
      </div>
    </GlassPill>
  );
}

function SignInButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="block h-[38px] w-[65px] shrink-0" onClick={onClick} type="button">
      <GlassPill blurMask={imgBlur1} widthClass="w-[65px]">
        <div className="flex w-full items-center justify-center px-[4px] py-[14px] text-[13px] font-medium leading-[20px] text-slate-900">
          Sign In
        </div>
      </GlassPill>
    </button>
  );
}

function FilterChip({
  icon,
  label,
  iconClassName,
}: {
  icon: string;
  label: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex h-[28px] items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.7)] px-[7px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
      <img
        alt=""
        className={`mr-[1px] shrink-0 ${iconClassName ?? "h-[15px] w-auto"}`}
        src={icon}
      />
      <span className="text-[11px] font-medium leading-[20px] text-[#334155]">
        {label}
      </span>
    </div>
  );
}

function TopControls({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex w-full flex-col items-center gap-[12px]">
      <div className="flex w-full items-center gap-[10px]">
        <SearchField />
        <SignInButton onClick={onSignIn} />
      </div>
      <div className="flex w-full items-center justify-center gap-[9px]">
        <div className="w-[67px]">
          <FilterChip icon={imgMusic} iconClassName="h-[13px] w-[9px]" label="Music" />
        </div>
        <div className="w-[67px]">
          <FilterChip icon={imgFood} iconClassName="h-[15px] w-[11px]" label="Food" />
        </div>
        <div className="flex h-[28px] w-[37px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.7)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
          <img alt="" className="h-[12px] w-[12px]" src={imgPlus} />
        </div>
      </div>
    </div>
  );
}

function RoundPushpin({ className }: { className?: string }) {
  return <img alt="" className={className} src={imgRoundPushpin} />;
}

function MarkerCard({
  union,
  icon,
  iconClass,
  label,
  className,
  contentClass,
}: {
  union: string;
  icon: string;
  iconClass: string;
  label: string;
  className: string;
  contentClass: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <img alt="" className="absolute inset-0 h-full w-full max-w-none" src={union} />
      <div className={`relative flex items-center gap-[5px] ${contentClass}`}>
        <img alt="" className={iconClass} src={icon} />
        <p className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.5px] text-black">
          {label}
        </p>
      </div>
    </div>
  );
}

function JazzMarker() {
  return (
    <div className="absolute left-0 top-[26.42%] grid w-[128px] max-w-[35.1%] justify-items-start">
      <div className="relative h-[62px] w-[128px]">
        <img alt="" className="absolute inset-0 h-full w-full" src={imgUnionJazz} />
        <div className="absolute left-[10px] top-[6px] flex h-[29px] w-[108px] items-center gap-[8px]">
          <div className="relative h-[30px] w-[30px] overflow-hidden rounded-[5px]">
            <img
              alt=""
              className="absolute left-[-40.11%] top-[-41.23%] h-[182.1%] w-[183.97%] max-w-none"
              src={imgJazz}
            />
            <div className="absolute inset-0 rounded-[5px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent" />
          </div>
          <div className="flex w-[63px] flex-col items-end pb-[9px]">
            <img alt="" className="mb-[-9px] h-[12px] w-[12px]" src={imgTumbler} />
            <p className="mb-[-9px] min-w-full text-[10px] font-bold leading-[10px] text-black">
              Summer Rooftop Jazz
            </p>
          </div>
        </div>
      </div>
      <RoundPushpin className="h-[21px] w-[22px]" />
    </div>
  );
}

function AvatarMarker() {
  return (
    <div className="absolute left-[52.88%] top-[58.03%] flex h-[52px] w-[52px] items-start rounded-[26px] bg-[rgba(0,199,190,0.21)] p-[8px]">
      <div className="h-[36px] w-[36px] overflow-hidden rounded-[17px] border border-[#00c7be]">
        <img alt="" className="h-full w-full object-cover" src={imgAvatar} />
      </div>
    </div>
  );
}

function MapMarkers() {
  return (
    <div className="relative aspect-[365/386] w-full overflow-hidden">
      <MarkerCard
        className="left-[60%] top-0 h-[58px] w-[126px] max-w-[34.52%] px-[5px] py-[11px]"
        contentClass="items-end justify-center"
        icon={imgOden}
        iconClass="h-[20px] w-[20px]"
        label="oden Event"
        union={imgUnionOden}
      />
      <JazzMarker />
      <AvatarMarker />
      <MarkerCard
        className="left-0 top-[72.8%] h-[59px] w-[126px] max-w-[34.52%] px-[8px] py-[12px]"
        contentClass="items-center justify-center"
        icon={imgArtistPalette}
        iconClass="h-[18px] w-[18px]"
        label="WORKSHOP"
        union={imgUnionWorkshop}
      />
    </div>
  );
}

function EventPreviewCard() {
  return (
    <div className="w-full rounded-[24px] bg-white p-[clamp(10px,3vw,12px)] shadow-[0_2px_66.8px_-12px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-[clamp(10px,4vw,16px)]">
        <div className="relative h-[clamp(68px,22vw,80px)] w-[clamp(68px,22vw,80px)] shrink-0 overflow-hidden rounded-[11px]">
          <img
            alt=""
            className="absolute left-[-40.11%] top-[-41.23%] h-[182.1%] w-[183.97%] max-w-none"
            src={imgJazz}
          />
          <div className="absolute inset-0 rounded-[11px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[clamp(11px,3vw,12px)] font-bold uppercase tracking-[0.5px] text-[#4aa6a2]">
            Tonight <span className="text-black">&bull; 8:00 PM</span>
          </p>
          <p className="text-[clamp(14px,4vw,15px)] font-bold leading-[1.25] text-[#0f172a]">
            Summer Rooftop Jazz
          </p>
          <div className="flex items-center pt-[3.5px]">
            <RoundPushpin className="mr-[1px] h-[15px] w-[16px]" />
            <p className="truncate text-[clamp(9px,2.7vw,10px)] leading-[16px] text-[#4e4e4e]">
              DRESS GRAPE , SHIBUYA <span className="ml-[8px] text-[11px] font-bold text-black">200M</span>
            </p>
          </div>
        </div>

        <div className="flex h-[clamp(36px,11vw,40px)] w-[clamp(36px,11vw,40px)] shrink-0 items-center justify-center rounded-full bg-[#f2f2f2]">
          <img alt="" className="h-[18.35px] w-[20px]" src={imgFav} />
        </div>
      </div>
    </div>
  );
}

function NavItem({
  active = false,
  icon,
  iconClass,
  label,
  onClick,
}: {
  active?: boolean;
  icon: string;
  iconClass: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button className="flex w-[38px] flex-col items-center gap-[2px]" onClick={onClick} type="button">
      <img alt="" className={iconClass} src={icon} />
      <span className={`text-[9px] leading-[20px] ${active ? "text-black" : "text-[#94a3b8]"}`}>
        {label}
      </span>
    </button>
  );
}

function BottomNav({
  activeTab,
  onTabChange,
}: {
  activeTab: "discover" | "ticket";
  onTabChange: (tab: "discover" | "ticket") => void;
}) {
  return (
    <div className="w-full max-w-[312px] rounded-[32px] bg-white pb-[10px] pl-[clamp(20px,6vw,26px)] pr-[clamp(16px,5vw,17px)] pt-[15px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] backdrop-blur-[6px]">
      <div className="flex items-center justify-between gap-[16px]">
        <NavItem
          active={activeTab === "discover"}
          icon={imgNavDiscover}
          iconClass="h-[20px] w-[20px]"
          label="Discover"
          onClick={() => onTabChange("discover")}
        />
        <NavItem
          active={activeTab === "ticket"}
          icon={imgNavTicket}
          iconClass="h-[29px] w-[28px]"
          label="Ticket"
          onClick={() => onTabChange("ticket")}
        />
        <NavItem icon={imgNavSaved} iconClass="h-[24px] w-[24px]" label="Saved" />
        <NavItem icon={imgNavProfile} iconClass="h-[23px] w-[23px]" label="Profile" />
      </div>
    </div>
  );
}

function AuthButton({
  dark = false,
  icon,
  label,
}: {
  dark?: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      className={`flex h-[47px] w-full items-center justify-center gap-[10px] rounded-[34.5px] text-[18px] ${
        dark ? "bg-[#090909] text-white" : "bg-[#e8e8ea] text-black"
      }`}
      type="button"
    >
      <span className="flex h-[24px] min-w-[24px] items-center justify-center">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function SignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-20 bg-[rgba(0,0,0,0.46)]">
      <div className="flex min-h-full items-end px-[8px] pb-[17px] pt-[120px]">
        <div className="w-full rounded-[34px] bg-white px-[19px] pb-[20px] pt-[19px]">
          <div className="flex min-h-[611px] flex-col items-end gap-[76px]">
            <button className="h-[34px] w-[34px]" onClick={onClose} type="button">
              <img alt="Close sign in modal" className="h-[34px] w-[34px]" src={imgSignInClose} />
            </button>

            <div className="flex flex-1 flex-col items-center justify-between self-stretch">
              <div className="flex w-full flex-col items-center gap-[41px]">
                <div className="flex w-full max-w-[314px] flex-col items-center gap-[25px] text-center">
                  <div className="flex flex-col items-center">
                    <img alt="" className="mb-[14px] h-[42px] w-[41px]" src={imgGoEventMark} />
                    <p className="text-[30px] font-bold tracking-[0.6px] text-black">GoEvent</p>
                  </div>
                  <div className="text-[20px] leading-[18px] text-[#585858]">
                    <p>Sign in to book tickets and save</p>
                    <p>events you love</p>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-[12px]">
                  <AuthButton
                    dark
                    icon={<span className="text-[14px] font-semibold leading-none">Apple</span>}
                    label="Continue with Apple"
                  />
                  <AuthButton
                    icon={<span className="text-[28px] font-bold leading-none text-[#ea4335]">G</span>}
                    label="Continue with Google"
                  />
                  <AuthButton
                    icon={
                      <svg
                        aria-hidden="true"
                        className="h-[18px] w-[18px]"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M4 7l8 6 8-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    }
                    label="Log in with email"
                  />
                </div>
              </div>

              <div className="flex w-full items-center justify-between text-[12px] text-black">
                <span>Term Of Service</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TicketSegment({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`flex h-[43px] items-center justify-center rounded-[28.5px] border px-[clamp(14px,4vw,20px)] text-[13px] font-bold sm:text-[14px] ${
        active
          ? "border-black bg-black text-white"
          : "border-[#c5c5c5] bg-white text-[#8e8e93]"
      }`}
      type="button"
    >
      {children}
    </button>
  );
}

function TicketCard() {
  return (
    <div className="w-full rounded-[24px] border-[0.4px] border-[rgba(219,219,219,0.96)] bg-white px-[clamp(14px,4.8vw,20px)] pb-[12px] pt-[clamp(18px,7vw,29px)] shadow-[0_4px_29.3px_rgba(0,0,0,0.07)]">
      <div className="flex flex-col gap-[13px]">
        <div className="flex items-center gap-[clamp(10px,4vw,15px)]">
          <div className="relative h-[clamp(72px,24vw,85px)] w-[clamp(72px,24vw,85px)] shrink-0 overflow-hidden rounded-[11px]">
            <img
              alt=""
              className="absolute left-[-40.11%] top-[-41.23%] h-[182.1%] w-[183.97%] max-w-none"
              src={imgTicketHero}
            />
            <div className="absolute inset-0 rounded-[12px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-[12px] inline-flex items-center gap-[3px] rounded-[12px] bg-[#ffecee] px-[11px] pb-[3px] pt-[5px] text-[11px] font-bold text-[#dc2626] sm:text-[12px]">
              <img alt="" className="h-[14px] w-[14px]" src={imgTicketLiveMusic} />
              <span>Live Music</span>
            </div>
            <p className="text-[clamp(16px,4.8vw,18px)] font-bold leading-[1.15] text-[#0f172a]">
              Summer Rooftop Jazz
            </p>
            <div className="mt-[1px] flex items-end gap-[3px]">
              <img alt="" className="h-[17px] w-[17px]" src={imgTicketLocation} />
              <p className="truncate text-[clamp(11px,3.5vw,13px)] font-bold leading-[16px] text-[#6c6868]">
                DRESS GRAPE , SHIBUYA
              </p>
            </div>
          </div>
        </div>

        <img alt="" className="h-px w-full" src={imgTicketDivider} />

        <div className="flex items-end justify-between gap-[12px]">
          <div>
            <p className="text-[13px] font-bold leading-[17px] text-black">Fri, Aug 24</p>
            <p className="text-[11px] font-bold leading-[17px] text-[#999999]">
              Gates open 6:00pm
            </p>
          </div>
          <button
            className="h-[42px] shrink-0 rounded-[23.5px] bg-[#04bcb4] px-[clamp(16px,6vw,22px)] text-[14px] font-bold text-white"
            type="button"
          >
            View Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

function TicketBottomNav({
  onTabChange,
}: {
  onTabChange: (tab: "discover" | "ticket") => void;
}) {
  return (
    <div className="w-full max-w-[312px] rounded-[32px] border border-[#ededed] bg-white pb-[8px] pl-[clamp(20px,6vw,25px)] pr-[clamp(20px,6vw,24px)] pt-[15px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] backdrop-blur-[6px]">
      <div className="flex items-center justify-between gap-[16px]">
        <button
          className="flex w-[38px] flex-col items-center gap-[3px]"
          onClick={() => onTabChange("discover")}
          type="button"
        >
          <img alt="" className="h-[17.73px] w-[18px]" src={imgTicketDiscover} />
          <span className="text-[9px] leading-[20px] text-[#94a3b8]">Discover</span>
        </button>
        <div className="flex w-[29px] flex-col items-start">
          <img alt="" className="h-[29px] w-[29px]" src={imgTicketActive} />
          <span className="text-[9px] leading-[20px] text-black">Ticket</span>
        </div>
        <div className="flex w-[29px] flex-col items-start">
          <img alt="" className="h-[24px] w-[24px]" src={imgTicketSaved} />
          <span className="text-[9px] leading-[20px] text-[#94a3b8]">Saved</span>
        </div>
        <div className="flex w-[38px] flex-col items-start justify-center">
          <img alt="" className="h-[23px] w-[23px]" src={imgTicketProfile} />
          <span className="text-[9px] leading-[20px] text-[#94a3b8]">Profile</span>
        </div>
      </div>
    </div>
  );
}

function TicketPage({
  onTabChange,
}: {
  onTabChange: (tab: "discover" | "ticket") => void;
}) {
  return (
    <div className="relative min-h-dvh w-full bg-white px-[clamp(20px,10.5vw,42px)] pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(24px,env(safe-area-inset-top))]">
      <div className="flex min-h-[calc(100dvh-max(48px,env(safe-area-inset-top))-max(24px,env(safe-area-inset-bottom)))] flex-col">
        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="flex justify-end">
            <div className="h-[43px] w-[43px] overflow-hidden rounded-[21.5px] border border-[#929292]">
              <img alt="" className="h-full w-full object-cover" src={imgTicketAvatar} />
            </div>
          </div>

          <div className="flex flex-col gap-[19px]">
            <h1 className="text-[24px] font-bold leading-[20px] text-black">Ticket</h1>
            <div className="flex items-center gap-[8px] overflow-x-auto pb-[2px]">
              <TicketSegment active>Upcoming(1)</TicketSegment>
              <TicketSegment>Past events</TicketSegment>
              <TicketSegment>Transfer</TicketSegment>
            </div>
          </div>

          <TicketCard />
        </div>

        <div className="mt-auto flex justify-center pt-[40px]">
          <TicketBottomNav onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}

function MobileShell({
  showSignIn,
  onCloseSignIn,
  onOpenSignIn,
  onTabChange,
}: {
  showSignIn: boolean;
  onCloseSignIn: () => void;
  onOpenSignIn: () => void;
  onTabChange: (tab: "discover" | "ticket") => void;
}) {
  return (
    <div
      className="relative min-h-dvh w-full overflow-hidden bg-white px-[clamp(14px,4.5vw,18px)] pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(28px,env(safe-area-inset-top))]"
      style={{ fontFamily: '"Nimbus Sans L","Nimbus Sans",Arial,Helvetica,sans-serif' }}
    >
      <div className="absolute inset-0">
        <img alt="" className="h-full w-full object-cover" src={imgMap} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.58)_84%,rgba(255,255,255,0.9)_100%)]" />
      </div>

      <div className="relative flex min-h-[calc(100dvh-max(52px,env(safe-area-inset-top))-max(24px,env(safe-area-inset-bottom)))] flex-col">
        <div className="flex flex-col gap-[10px]">
          <TopControls onSignIn={onOpenSignIn} />
          <MapMarkers />
        </div>

        <div className="mt-auto flex flex-col items-center gap-[32px] pt-[22px]">
          <EventPreviewCard />
          <BottomNav activeTab="discover" onTabChange={onTabChange} />
        </div>
      </div>

      {showSignIn ? <SignInModal onClose={onCloseSignIn} /> : null}
    </div>
  );
}

export default function Page() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"discover" | "ticket">("discover");

  return (
    <main className="min-h-dvh overflow-x-hidden bg-white">
      <div className="mx-auto w-full max-w-[430px]">
        {activeTab === "discover" ? (
          <MobileShell
            onCloseSignIn={() => setShowSignIn(false)}
            onOpenSignIn={() => setShowSignIn(true)}
            onTabChange={setActiveTab}
            showSignIn={showSignIn}
          />
        ) : (
          <TicketPage onTabChange={setActiveTab} />
        )}
      </div>
    </main>
  );
}
