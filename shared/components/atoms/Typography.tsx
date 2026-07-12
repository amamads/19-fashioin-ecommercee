import { ElementType, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/shared/types";

export const textStyles = {
  base: "scroll-m-20",

  /* Display */
  display: "font-bold text-[64px] leading-[76px]",
  displayLg: "font-bold text-[56px] leading-[68px]",
  displaySm: "font-bold text-[48px] leading-[58px]",

  /* Heading */
  h1: "text-[36px] leading-[44px] font-bold max-sm:font-semibold max-sm:text-[32px] max-sm:leading-[38px]",
  h2: "text-[31px] leading-[38px] font-bold max-sm:font-semibold max-sm:text-[24px] max-sm:leading-[30px]",
  h3: "text-[27px] leading-[32px] font-bold max-sm:font-semibold max-sm:text-[20px] max-sm:leading-[24px]",
  h4: "text-[24px] leading-[28px] font-bold max-sm:font-semibold max-sm:text-[18px] max-sm:leading-[22px]",
  h5: "text-[21px] leading-[26px] font-bold max-sm:font-semibold max-sm:text-[16px] max-sm:leading-[20px]",
  h6: "text-[18px] leading-[22px] font-bold max-sm:font-semibold max-sm:text-[14px] max-sm:leading-[16px]",

  /* Body */
  bodyLg: "text-[24px] leading-[40px] max-sm:text-[20px] max-sm:leading-[34px]",
  bodyMd: "text-[20px] leading-[34px] max-sm:text-[18px] max-sm:leading-[30px]",
  bodySm: "text-[16px] leading-[28px] max-sm:text-[16px] max-sm:leading-[28px]",
  bodyXs: "text-[14px] leading-[24px] max-sm:text-[14px] max-sm:leading-[24px]",

  /* Caption */
  caption:
    "text-neutral-9 text-[14px] leading-[20px] max-sm:text-[14px] max-sm:leading-[20px]",
  captionSm:
    "text-neutral-9 text-[12px] leading-[18px] max-sm:text-[12px] max-sm:leading-[18px]",

  /* buttons */
  buttonLg: "text-[18px] leading-[26px]",
  buttonMd: "text-[16px] leading-[22px]",
  buttonSm: "text-[14px] leading-[20px]",
} satisfies Record<string, string>;
function createTypography(defaultTag: ElementType, baseClass?: string) {
  const Typography = ({
    as,
    children,
    className,
    ...props
  }: PropsWithChildren &
    PropsWithClassName & {
      as?: ElementType;
    }) => {
    const Tag = as ?? defaultTag;

    return (
      <Tag className={cn(textStyles.base, baseClass, className)} {...props}>
        {children}
      </Tag>
    );
  };

  Typography.displayName = `Typography.${defaultTag}`;

  return Typography;
}

export const Display = createTypography("h1", textStyles.display);
export const DisplayLg = createTypography("h2", textStyles.displayLg);
export const DisplaySm = createTypography("h2", textStyles.displaySm);

export const H1 = createTypography("h1", textStyles.h1);
export const H2 = createTypography("h2", textStyles.h2);
export const H3 = createTypography("h3", textStyles.h3);
export const H4 = createTypography("h4", textStyles.h4);
export const H5 = createTypography("h5", textStyles.h5);
export const H6 = createTypography("h6", textStyles.h6);

export const BodyLg = createTypography("p", textStyles.bodyLg);
export const BodyMd = createTypography("p", textStyles.bodyMd);
export const BodySM = createTypography("p", textStyles.bodySm);
export const BodyXs = createTypography("p", textStyles.bodyXs);

export const Caption = createTypography("span", textStyles.caption);
export const CaptionSm = createTypography("span", textStyles.captionSm);
