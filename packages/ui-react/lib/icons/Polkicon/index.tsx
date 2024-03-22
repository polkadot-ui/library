import { PolkiconProps } from "./types";

import { getParams } from "./utils";
import { useCallback, useEffect, useState } from "react";

export const Polkicon = ({
  size = "2rem",
  address,
  copy = false,
  outerColor = "white",
  copyTimeout = 750,
  copyMsg = "✔",
  style = {},
  className = "",
}: PolkiconProps) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [message, setMessage] = useState<string | JSX.Element>(copyMsg);
  const [s, setS] = useState<string | number>();
  const [f, setF] = useState<string>();
  const [p, setP] = useState<string>();

  useEffect(() => {
    const InfoText = (type: string, value: string | number) =>
      console.warn(
        `Polkicon: 'Size' expressed in '${type}' cannot be less than ${value}. Will be resized to minimum size.`
      );

    if (
      typeof size === "string" &&
      !size.includes("px") &&
      !size.includes("rem")
    ) {
      throw new Error(
        "Providing a string for 'size' in Polkicon should be expressed either in 'px', 'rem' or 'em'"
      );
    }

    let sizeNumb: number;
    let fontType: string;
    if (typeof size === "string") {
      fontType = size.replace(/[0-9.]/g, "");
      switch (fontType) {
        case "px":
          sizeNumb = parseFloat(size);
          break;
        case "rem":
          sizeNumb = parseFloat(size) * 10;
          break;
      }
    } else if (typeof size === "number") {
      sizeNumb = size;
    }

    setS(
      fontType
        ? `${fontType === "px" ? sizeNumb + "px" : sizeNumb / 10 + "rem"}`
        : sizeNumb
    );
    if (sizeNumb < 12) {
      InfoText(
        fontType || "number",
        fontType === "px" ? "12px" : fontType === "rem" ? "1.2rem" : 12
      );
    }

    if (sizeNumb < 32) {
      setP("0rem 0.5rem");
      setF("0.5rem");
    } else if (sizeNumb >= 32 && sizeNumb < 64) {
      setP("1rem 0.5rem");
      setF("1rem");
    } else if (sizeNumb >= 64 && sizeNumb < 100) {
      setP("2rem 1rem");
      setF("1.5rem");
    } else if (sizeNumb >= 100) {
      setP("3rem 1rem");
      setF("2rem");
    }
  }, [size]);

  const handleClick = useCallback(() => {
    const copyText = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopySuccess(true);
        setMessage(copyMsg);
      } catch (err) {
        setCopySuccess(true);
        setMessage("Failed!");
      }
    };
    copy && copyText(address);
  }, [copy, address]);

  useEffect(() => {
    if (copy && copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, copyTimeout);
    }
  }, [copy, copySuccess]);

  const { c, r, rroot3o2, ro2, rroot3o4, ro4, r3o4, z, rot, scheme, palette } =
    getParams(address);

  const colors = scheme?.colors?.map(
    (_, i) => palette[scheme?.colors[i < 18 ? (i + rot) % 18 : 18]]
  );

  let i = 0;

  return !colors ? null : (
    <div
      onClick={copy ? handleClick : undefined}
      style={
        copy
          ? {
              cursor: copySuccess ? "none" : "copy",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
      }
    >
      <svg
        id={Math.random().toString(36).substring(2, 9)}
        className={className}
        style={style}
        width={s}
        height={s}
        viewBox="0 0 64 64"
      >
        <circle cx={64 / 2} cy={64 / 2} r={64 / 2} fill={outerColor} />
        <circle cx={c} cy={c - r} r={z} fill={colors[i++]} />
        <circle cx={c} cy={c - ro2} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o4} cy={c - r3o4} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o2} cy={c - ro2} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o4} cy={c - ro4} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o2} cy={c} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o2} cy={c + ro2} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o4} cy={c + ro4} r={z} fill={colors[i++]} />
        <circle cx={c - rroot3o4} cy={c + r3o4} r={z} fill={colors[i++]} />
        <circle cx={c} cy={c + r} r={z} fill={colors[i++]} />
        <circle cx={c} cy={c + ro2} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o4} cy={c + r3o4} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o2} cy={c + ro2} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o4} cy={c + ro4} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o2} cy={c} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o2} cy={c - ro2} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o4} cy={c - ro4} r={z} fill={colors[i++]} />
        <circle cx={c + rroot3o4} cy={c - r3o4} r={z} fill={colors[i++]} />
        <circle cx={c} cy={c} r={z} fill={colors[i++]} />
      </svg>
      {copy && copySuccess && (
        <p
          style={{
            fontSize: f,
            fontWeight: "bold",
            padding: p,
            width: s,
            height: s,
            position: "absolute",
            borderRadius: "55rem",
            color: "white",
            background: "green",
            opacity: "80%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};
