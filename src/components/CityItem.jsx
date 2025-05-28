// import { Link } from "react-router-dom";
// import styles from "./CityItem.module.css";
// import { useCities } from "../contexts/CitiesContext";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));

// function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }
// function CityItem({ city }) {
//   const { cityName, emoji, date, id, position } = city;
//   const {currentCity} = useCities();
//   console.log(convertToEmoji(emoji));
//   console.log(position);
//   return (
//     <li>
//       <Link
//         className={`${styles.cityItem} ${
//           id === currentCity.id ? styles["cityItem--active"] : ""
//         }`}
//         to={`${id}?lat=${position.lat}&lng=${position.lng}`}
//       >
//         <span className={styles.emoji}>{(emoji)}</span>
//         <h3 className={styles.name}>{cityName}</h3>
//         <time className={styles.date}>({formatDate(date)})</time>
//         <button className={styles.deleteBtn}>&times;</button>
//       </Link>
//     </li>
//   );
// }

// export default CityItem;


import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import TinyFlag from "tiny-flag-react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));


function CityItem({ city }) {
  const { cityName,countryCode, date, id, position } = city;
  console.log(`ksjghdckl ${countryCode}`)
  const { currentCity, deleteCity } = useCities();

  function handleDelete(e){
    e.preventDefault()
    deleteCity(id)
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity?.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}&id=${id}`}
      >
        <span className={styles.emoji}>
          {countryCode && (
            <TinyFlag
              country={countryCode}
              alt={`${countryCode} Flag`}
              fallbackImageURL={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${countryCode}.svg`}
              style={{ width: 24, height: 18 }}
            />
          )}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
