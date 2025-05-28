import TinyFlag from "tiny-flag";

export default function Flag({ code }) {
  const country = code;
  const FALLBACK_URL = `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG`;

  return (
    <TinyFlag
      country="US" // ISO 3166-1 alpha-2 code
      alt="United States Flag" // Used as the image alt tag
      fallbackImageURL="https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/US.svg"
      // Used when emoji flags are not supported.
    />
  );
}

// country={country} // ISO 3166-1 alpha-2 code
// alt={`${country} Flag`} // Used as the image alt tag
// fallbackImageURL={`${FALLBACK_URL}/${country}.svg`}
