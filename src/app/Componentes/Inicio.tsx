import Resultado from '../../../imgs/Wolves_ManCity.jpg'
import ManCityLogo from '../../../imgs/ManchesterCity.png'
import WolvesLogo from '../../../imgs/Wolves.png'
import { Card } from 'react-bootstrap'
import '../../Estadisticas.css';

export const Inicio = () => {
    return (
        <>
            <div className="progress mt-4 mb-3" role="progressbar" aria-label="Animated striped example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ backgroundColor: '#00e3ea', width: '100%' }}></div>
            </div>

            <Card className='container border-5' style={{ borderColor: '#00e3ea' }}>
                <h1><b>¡Polémico triunfo del City en el 95'!</b></h1>

                <img className="rounded img-fluid mx-auto d-block mt-3 mb-5" src={Resultado} alt="Wolves 1 - Manchester City 2" />

                <div><p>El <b>Manchester City</b> partía con la obligación de sacar adelante el encuentro, después del pinchazo del Arsenal ante el Bornemouth. Los <b>Wolves</b>, en el puesto 19, querían dar un golpe en la mesa y lograr, por fin, la primera victoria de la temporada en Premier League. El partido arrancó como viene siendo habitual para los de Pep, con un batacazo. El Wolverhampton trazó una combinación perfecta. Semedo centró en dirección a Larsen, que no perdonó. El resto del encuentro fue a contracorriente para los citizens.</p><p>Lograron recortas distancias, tras un asedio asfixiante, gracias a un espectacular gol de Gvardiol. Un tanto muy similar al que dejó en su día en el Santiago Bernabéu, con su pierna derecha. Los de Gary O'Neil tuvieron sus oportunidades para anotar, pero no las aprovecharon. El City acechó el área rival y el premio llegó en el 95'. Stones remató a la perfección un lanzamiento de córner. Un gol no exento de polémica, pues el árbitro revisó en el VAR la posición de Bernardo Silva, que se encontraba cerca de Sá. Finalmente, el colegiado aprobó el gol y <i>los de Pep se llevan tres puntos importantísimos</i> de cara a la pelea por la Premier League.</p></div>

                <div className="stats-container mt-3 mb-4" style={{ border: '3px solid', borderImage: 'linear-gradient(to right, #df9200, #00e3ea) 1' }}>
                    <header className="header">
                        <img
                            src={WolvesLogo}
                            alt="Logo Wolves"
                            className="team-logo"
                        />
                        <h3>Wolverhampton</h3>
                        <h1>1 - 2</h1>
                        <h3>Manchester City</h3>
                        <img
                            src={ManCityLogo}
                            alt="Logo City"
                            className="team-logo"
                        />
                    </header>

                    <div className="stat-row">
                        <h3>Posesión</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "22%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "78%" }}></div>
                        </div>
                        <div className="stat">
                            <span>22%</span>
                            <span>78%</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Tarjetas Amarillas</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "80%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "20%" }}></div>
                        </div>
                        <div className="stat">
                            <span>4</span>
                            <span>1</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Tarjetas Rojas</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "50%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "50%" }}></div>
                        </div>
                        <div className="stat">
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Faltas Recibidas</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "33%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "67%" }}></div>
                        </div>
                        <div className="stat">
                            <span>4</span>
                            <span>8</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Faltas Cometidas</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "60%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "40%" }}></div>
                        </div>
                        <div className="stat">
                            <span>8</span>
                            <span>5</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Balones disputados donde se ha perdido la posesión</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "52%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "48%" }}></div>
                        </div>
                        <div className="stat">
                            <span>44</span>
                            <span>41</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Recuperaciones de posesión</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "49%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "51%" }}></div>
                        </div>
                        <div className="stat">
                            <span>45</span>
                            <span>46</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Fueras de juego</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "75%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "25%" }}></div>
                        </div>
                        <div className="stat">
                            <span>2</span>
                            <span>1</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Penaltis lanzados</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "50%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "50%" }}></div>
                        </div>
                        <div className="stat">
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </div>

                    <div className="stat-row">
                        <h3>Disparos</h3>
                        <div className="bar-container">
                            <div style={{ backgroundColor: '#df9200', width: "20%" }}></div>
                            <div style={{ backgroundColor: '#00e3ea', width: "80%" }}></div>
                        </div>
                        <div className="stat">
                            <span>3</span>
                            <span>14</span>
                        </div>
                    </div>
                </div>
            </Card>


            <div className="progress mt-3 mb-4" role="progressbar" aria-label="Animated striped example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ backgroundColor: '#00e3ea', width: '100%' }}></div>
            </div>
        </>
    )
}