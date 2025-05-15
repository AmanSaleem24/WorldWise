
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
function Map() {
     const [searchParams, setSearchParams] = useSearchParams();
     const lat = searchParams.get('lat')
     const lng = searchParams.get('lng')
     const navigate = useNavigate();
     console.log(`Lat is: ${lat} and Lng is: ${lng}`);
    return (
        <div className={styles.mapContainer} onClick={()=> navigate('form')}>
            <h1>{`Lat is: ${lat} and Lng is: ${lng}`}</h1>
        </div>
    )
}

export default Map
