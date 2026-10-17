
import { ImageResponse } from "next/og";

export const size = {
    width: 64,
    height: 64,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#111827",
                    color: "#c4b5fd",
                    fontSize: 48,
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    borderRadius: "14px",
                }}
            >
                S
            </div>
        ),
        size
    );
}
