import { ElementType, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/shared/types";

export const textStyles = {
  base: "scroll-m-20",

  /* Display */
  display: "text-[48px] leading-[58px] lg:text-[64px] lg:leading-[76px]",
  displayLg: "text-[48px] leading-[58px] lg:text-[56px] lg:leading-[68px]",

  /* Heading */
  h1: "text-[32px] leading-[38px] lg:text-[36px] lg:leading-[44px]",
  h2: "text-[24px] leading-[30px] lg:text-[31px] lg:leading-[38px]",
  h3: "text-[20px] leading-[24px] lg:text-[27px] lg:leading-[32px]",
  h4: "text-[18px] leading-[22px] lg:text-[24px] lg:leading-[28px]",
  h5: "text-[16px] leading-[20px] lg:text-[21px] lg:leading-[26px]",
  h6: "text-[14px] leading-[16px] lg:text-[18px] lg:leading-[22px]",

  /* Body */
  bodyLg: "text-[20px] leading-[34px] lg:text-[24px] lg:leading-[40px]",
  body: "text-[18px] leading-[30px] lg:text-[20px] lg:leading-[34px]",
  p: "text-[16px] leading-[28px]",
  small: "text-[14px] leading-[24px]",

  /* Button */
  button: "text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px]",
  buttonSm: "text-[14px] leading-[20px]",

  /* Caption */
  caption: "text-[14px] leading-[20px]",
  captionSm: "text-[12px] leading-[18px]",
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
export const H1 = createTypography("h1", textStyles.h1);
export const H2 = createTypography("h2", textStyles.h2);
export const H3 = createTypography("h3", textStyles.h3);
export const H4 = createTypography("h4", textStyles.h4);
export const H5 = createTypography("h5", textStyles.h5);
export const H6 = createTypography("h6", textStyles.h6);
export const BodyLg = createTypography("p", textStyles.bodyLg);
export const Body = createTypography("p", textStyles.body);
export const P = createTypography("p", textStyles.p);
export const Small = createTypography("small", textStyles.small);
export const Button = createTypography("span", textStyles.button);
export const ButtonSm = createTypography("span", textStyles.buttonSm);
export const Caption = createTypography("span", textStyles.caption);
export const CaptionSm = createTypography("span", textStyles.captionSm);
