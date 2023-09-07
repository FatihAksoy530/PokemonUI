import './PokeballSpinner.css';

export default function PokeballSpinner(props) { 
    const { loading } = props;

    return (
    <>
        {loading && 
        <div className="pokeball-spinner-container">
            <div className="pokeball-spinner"></div>
        </div>
        }
    </>
    )
}