// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [isLoadingGeocode, setIsLoadingGeocode] = useState(false);
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState(null);
  const [emoji, setEmoji] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const navigate = useNavigate();

  const { postCity, isLoading } = useCities();
  const [lat, lng] = useUrlPosition();
  console.log(`Form: ${lat} ${lng}`);

  const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

  useEffect(
    function () {
      if (!lat || !lng) return;
      async function fetchCityData() {
        try {
          setIsLoadingGeocode(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);

          if (!data.countryName)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else.😯"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setCountryCode(data.countryCode);
          setEmoji(convertToEmoji(countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocode(true);
        }
      }

      fetchCityData();
    },
    [lat, lng]
  );

  if (!lat || !lng) {
    return <Message message={"Start by clicking somewhere"} />;
  }
  if (geocodingError) {
    return <Message message={geocodingError} />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if(!cityName || !date) return

    const newCity = {
      cityName, 
      country,
      emoji, 
      date,
      notes, 
      position: {lat, lng},
    }
    await postCity(newCity)
    console.log(newCity)
    navigate("/app/cities")
  }

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
        {console.log(`EMoji ${emoji}`)}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
       
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton></BackButton>
      </div>
    </form>
  );
}

export default Form;
