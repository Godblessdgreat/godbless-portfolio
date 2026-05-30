import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Godbless Uduak — AI Web Developer & Product Designer based in Lagos.";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0C",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8A8A85",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          GU.
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              color: "#F5F5F2",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ display: "flex" }}>AI Web Developer</div>
            <div style={{ display: "flex" }}>& Product Designer</div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#8A8A85",
            }}
          >
            Lagos, Nigeria — Available for projects.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            width: 16,
            height: 16,
            borderRadius: 9999,
            backgroundColor: "#1DA1F2",
          }}
        />
      </div>
    ),
    size,
  );
}
