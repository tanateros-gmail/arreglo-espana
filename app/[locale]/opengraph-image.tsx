import { ImageResponse } from "next/og";
import { getFallbackContent, isLocale, type Locale } from "@/lib/i18n";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type OgImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: OgImageProps) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "es";
  const content = getFallbackContent(locale);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 18% 12%, rgba(139,0,0,0.62), transparent 320px), radial-gradient(circle at 82% 18%, rgba(47,24,63,0.7), transparent 300px), linear-gradient(135deg, #050505, #0a0a0a 48%, #16080c)",
          color: "#e8e0d0",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(232,224,208,0.34)",
            bottom: 42,
            left: 42,
            position: "absolute",
            right: 42,
            top: 42
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 880 }}>
          <div
            style={{
              color: "#b51515",
              fontSize: 28,
              letterSpacing: 8,
              textTransform: "uppercase"
            }}
          >
            Arreglo Espana
          </div>
          <div style={{ fontSize: 78, lineHeight: 0.95 }}>{content.metadata.ogTitle}</div>
          <div style={{ color: "#bcb09c", fontSize: 34, lineHeight: 1.25 }}>
            {content.metadata.ogDescription}
          </div>
        </div>
      </div>
    ),
    size
  );
}
