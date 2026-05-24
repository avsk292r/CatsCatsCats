import CatCard from '../css/CatCard'
import './css/catcard.css'

function CatCard({ cat }) {
    return (
        <div className="cat-card">
            <h3>{cat.name}</h3>
            <img src={cat.image} alt={cat.name} />
            <p>{cat.description}</p>
        </div>
    )
}
export default CatCard
