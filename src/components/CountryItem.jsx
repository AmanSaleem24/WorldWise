import TinyFlag from "tiny-flag-react";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  console.log(`country: ${country.countryCode}`)
  return (
    <li className={styles.countryItem}>
      <span>
        {country.countryCode &&
          <TinyFlag
            country={country.countryCode}
            alt={`${country.countryCode} Flag`}
            fallbackImageURL={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${country.countryCode}.svg`}
            style={{ width: 24, height: 18 }}
          />
        }
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
