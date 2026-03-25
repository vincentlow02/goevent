import type { ReactNode } from "react";

const imgRoundPushpin = "https://www.figma.com/api/mcp/asset/e9b9dadf-ed9e-4685-9b8c-513597af4a32";
const imgSummerRooftopJazzBand = "https://www.figma.com/api/mcp/asset/cfb68542-0822-4a25-8982-afc4e35c3361";
const imgTumblerGlass = "https://www.figma.com/api/mcp/asset/199faf8d-fc5a-489c-8dff-7a21ecbe2f86";
const imgArtistPalette = "https://www.figma.com/api/mcp/asset/533ed434-5d52-435e-94b3-51cee1bfe5fd";
const imgOden = "https://www.figma.com/api/mcp/asset/c2d0df17-364a-4b8a-ad06-8863e6c0631d";
const imgReal1 = "https://www.figma.com/api/mcp/asset/1e26eb1b-abc1-4b50-9525-db5bc511b05b";
const imgFlagJapan = "https://www.figma.com/api/mcp/asset/1fc393c1-c3ef-4aba-a29f-06e418054fd2";
const imgImage = "https://www.figma.com/api/mcp/asset/b942e6dc-416f-4ae3-800c-1b2ca47d9994";
const imgPhoto6154637394884366112Y1 = "https://www.figma.com/api/mcp/asset/2fb10f95-3b67-46b9-a21b-421d1ef72086";
const imgBlur = "https://www.figma.com/api/mcp/asset/626da54e-4d17-42b2-b4fa-c8156e15b3e7";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/910be6f8-dec0-47eb-a592-3ec8239cc4f3";
const imgBlur1 = "https://www.figma.com/api/mcp/asset/75709e4e-cdeb-46b5-add5-6f1a6b2bf4a1";
const imgIcon = "https://www.figma.com/api/mcp/asset/545968c5-6b0b-446e-b959-3ce08bbd4f2d";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/253069d1-a8d5-42ed-925f-3aea2d4b401f";
const imgVector = "https://www.figma.com/api/mcp/asset/32980f73-36aa-46e1-b7b3-ddabcd9cf41b";
const imgUnion = "https://www.figma.com/api/mcp/asset/7ed554f2-742a-4c7b-83c4-fd8d2977cb57";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/23465a47-411d-4f24-80c3-4f708e89fe4d";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/43c2be3d-76f3-4da8-acf9-95b745f109a9";
const imgContainer = "https://www.figma.com/api/mcp/asset/790fe264-7d02-4784-8a58-fae9217840b8";
const imgVector1 = "https://www.figma.com/api/mcp/asset/4e193b7e-ed2a-4538-9022-65df69f95691";
const imgFrame = "https://www.figma.com/api/mcp/asset/22c88fe4-383c-42bc-8fdd-a323b1124775";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/ee1c8a9c-e105-4b51-9adc-a6850506e104";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/38fdbea9-9498-45b1-a00c-3c343548e61a";

function RoundPushpin({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-node-id="1:6">
      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={imgRoundPushpin} />
    </div>
  );
}

function ArtistPalette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-node-id="1:4">
      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={imgArtistPalette} />
    </div>
  );
}

function Oden({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-node-id="1:2">
      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={imgOden} />
    </div>
  );
}

function SummerRooftopThumb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} data-node-id="3:272">
      <img
        alt=""
        className="absolute left-[-40.11%] top-[-41.23%] h-[182.1%] w-[183.97%] max-w-none"
        src={imgSummerRooftopJazzBand}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] via-1/2 to-transparent" />
    </div>
  );
}

function GlassPill({
  widthClass,
  children,
  blurMask,
}: {
  widthClass: string;
  children: ReactNode;
  blurMask: string;
}) {
  return (
    <div className={`relative h-[38px] ${widthClass}`}>
      <div className="absolute inset-0 rounded-[296px] shadow-[0px_0px_15.8px_0px_rgba(0,0,0,0.07)]">
        <div className="absolute inset-[-26px] opacity-67">
          <div
            className="absolute inset-[28px_26px_24px_26px] rounded-[1000px] blur-[10px]"
            style={{ maskImage: `url('${blurMask}')`, maskSize: "416.67% 416.67%", maskPosition: "-158.33% -162.5%" }}
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

function CategoryChip({
  icon,
  label,
  width,
  iconWidth,
}: {
  icon: string;
  label: string;
  width: string;
  iconWidth: string;
}) {
  return (
    <div className={`relative flex h-[28px] items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.7)] px-[7px] backdrop-blur-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${width}`}>
      <img alt="" className={`mr-px h-[15px] ${iconWidth}`} src={icon} />
      <span className="font-sans text-[11px] font-medium leading-[20px] text-slate-700">
        {label}
      </span>
    </div>
  );
}

function BottomNavItem({
  icon,
  label,
  active = false,
  iconClass,
}: {
  icon: string;
  label: string;
  active?: boolean;
  iconClass: string;
}) {
  return (
    <div className="flex w-[38px] flex-col items-center gap-[2px]">
      <img alt="" className={iconClass} src={icon} />
      <span className={`font-sans text-[9px] leading-[20px] ${active ? "text-black" : "text-slate-400"}`}>
        {label}
      </span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#e9edf2] md:flex md:items-center md:justify-center md:p-8">
      <div className="relative h-[874px] w-full overflow-hidden bg-white md:h-[874px] md:w-[402px] md:rounded-[40px] md:shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
        <div className="absolute left-0 top-[-38px] h-[912px] w-[402px]">
          <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-85" src={imgReal1} />
        </div>
        <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[rgba(0,0,0,0.48)] to-transparent" />

        <div className="absolute left-[21px] top-[70px] flex w-[365px] flex-col items-center gap-[52px]">
          <div className="relative h-[93px] w-[348px] overflow-hidden">
            <div className="absolute left-[3px] top-[3px] flex items-center gap-[13px]">
              <GlassPill blurMask={imgBlur} widthClass="w-[267px]">
                <div className="flex items-center gap-[11px] px-[13px] py-[10px]">
                  <div className="relative h-[15px] w-[13.33px]">
                    <img alt="" className="absolute inset-0 h-full w-full" src={imgGroup3} />
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img alt="" className="h-[19px] w-[19px]" src={imgFlagJapan} />
                    <span className="w-[127px] font-sans text-[13px] leading-[20px] text-[#949494]">
                      Search event nearby
                    </span>
                  </div>
                </div>
              </GlassPill>

              <GlassPill blurMask={imgBlur1} widthClass="w-[65px]">
                <div className="flex w-full items-center justify-center px-[4px] py-[14px]">
                  <span className="font-sans text-[13px] font-medium leading-[20px] text-slate-900">
                    Sign In
                  </span>
                </div>
              </GlassPill>
            </div>

            <div className="absolute left-[78px] top-[53px] flex items-center gap-[9px]">
              <CategoryChip icon={imgIcon} iconWidth="w-[9px]" label="Music" width="w-[67px]" />
              <CategoryChip icon={imgIcon1} iconWidth="w-[11px]" label="Food" width="w-[67px]" />
              <div className="flex h-[28px] w-[37px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.7)] backdrop-blur-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img alt="" className="h-[12px] w-[12px]" src={imgVector} />
              </div>
            </div>
          </div>

          <div className="relative h-[347px] w-full overflow-hidden">
            <div className="absolute left-[239px] top-[9px] flex h-[64px] w-[126px] flex-col items-start px-[5px] py-[11px]">
              <img alt="" className="absolute inset-[-15.16%_-8.49%_-18.28%_-8.49%] h-[133.44%] w-[116.98%] max-w-none" src={imgUnion} />
              <div className="relative flex items-end justify-center gap-[5px]">
                <Oden className="h-[20px] w-[20px]" />
                <p className="font-serif text-[13px] font-bold uppercase tracking-[0.5px] text-black">oden Event</p>
              </div>
            </div>

            <div className="absolute left-[11px] top-[288px] flex h-[59px] w-[126px] flex-col items-start px-[8px] py-[12px]">
              <img alt="" className="absolute inset-[-16.44%_-8.49%_-19.83%_-8.49%] h-[136.27%] w-[116.98%] max-w-none" src={imgUnion1} />
              <div className="relative flex items-center justify-center gap-[5px]">
                <ArtistPalette className="h-[18px] w-[18px]" />
                <p className="font-serif text-[13px] font-bold uppercase tracking-[0.5px] text-black">WORKSHOP</p>
              </div>
            </div>

            <div className="absolute left-[14px] top-[113px] h-[25px] w-[25px] overflow-hidden rounded-[5px] border border-white">
              <img alt="" className="h-full w-full object-cover" src={imgImage} />
            </div>

            <div className="absolute left-[187px] top-[193px] flex h-[52px] w-[52px] items-start rounded-[26px] bg-[rgba(0,199,190,0.21)] p-[8px]">
              <div className="h-[36px] w-[36px] overflow-hidden rounded-[17px] border border-[#00c7be]">
                <img alt="" className="h-full w-full object-cover" src={imgPhoto6154637394884366112Y1} />
              </div>
            </div>

            <div className="absolute left-[302px] top-[183px] h-[10px] w-[22px] bg-white" />

            <div className="absolute left-[11px] top-[105px] flex w-[68px] flex-col items-center justify-center">
              <div className="relative flex h-[62px] w-full flex-col items-start px-[10px] py-[6px]">
                <img alt="" className="absolute inset-0 h-full w-[128px] max-w-none" src={imgUnion2} />
                <div className="relative flex items-center gap-[8px]">
                  <SummerRooftopThumb className="h-[30px] w-[30px] rounded-[5px]" />
                  <div className="flex w-[63px] flex-col justify-center pb-[10px]">
                    <img alt="" className="mb-[-10px] h-[12px] w-[12px]" src={imgTumblerGlass} />
                    <p className="mb-[-10px] font-serif text-[10px] font-bold leading-[10px] text-black">
                      Summer Rooftop Jazz
                    </p>
                  </div>
                </div>
              </div>
              <RoundPushpin className="h-[21px] w-[22px]" />
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex w-full items-center gap-[16px] rounded-[24px] bg-white p-[12px]">
              <div className="absolute inset-0 rounded-[24px] shadow-[0px_2px_66.8px_-12px_rgba(0,0,0,0.25)]" />
              <SummerRooftopThumb className="relative h-[80px] w-[80px] shrink-0 rounded-[11px]" />
              <div className="relative flex min-w-0 flex-1 flex-col gap-[0.5px]">
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.5px] text-[#4aa6a2]">
                  Tonight <span className="text-black">• 8:00 PM</span>
                </p>
                <p className="font-serif text-[15px] font-bold leading-[20px] text-slate-900">Summer Rooftop Jazz</p>
                <div className="flex items-center pt-[3.5px]">
                  <RoundPushpin className="mr-[1px] h-[15px] w-[16px]" />
                  <p className="font-serif text-[10px] leading-[16px] text-[#4e4e4e]">
                    DRESS GRAPE &nbsp; SHIBUYA &nbsp; <span className="text-[11px] font-bold text-black">200M</span>
                  </p>
                </div>
              </div>
              <div className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#f2f2f2]">
                <img alt="" className="h-[18.35px] w-[20px]" src={imgContainer} />
              </div>
            </div>
          </div>

          <div className="relative h-[65px] w-[312px] rounded-[32px] bg-white pb-[10px] pl-[26px] pr-[35px] pt-[15px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6px]">
            <div className="flex items-center gap-[43px]">
              <BottomNavItem active icon={imgVector1} iconClass="h-[20px] w-[20px]" label="Discover" />
              <BottomNavItem icon={imgFrame} iconClass="h-[29px] w-[28px]" label="Ticket" />
              <BottomNavItem icon={imgFrame1} iconClass="h-[24px] w-[24px]" label="Saved" />
              <BottomNavItem icon={imgFrame2} iconClass="h-[23px] w-[23px]" label="Profile" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
