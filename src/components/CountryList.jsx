import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext"

function CityList() {

  const { cities, isLoading } = useCities()
  cities.map(city=>console.log(city))

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add a country by clicking on a country in the map" />; 
    
    const countries = cities.reduce((arr, city) => {
      if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country, countryCode: city.countryCode }];
      else return arr;
    }, []);
  
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CityList;
