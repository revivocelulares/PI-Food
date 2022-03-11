import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../detalles/detalle.module.css';

import { getDetalles, reloadDetalles } from '../../actions/index';
import RecipeDetails from '../RecipeDetails';


export default function Detail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const detail = useSelector((state) => state.detalles);


    useEffect(() => {
            dispatch(getDetalles(id))
        return () => {
            dispatch(reloadDetalles())
        }
    }, [dispatch, id, ]);


    function handle_button_home(e) {
        e.preventDefault();
        dispatch(reloadDetalles());
        history.push('/home');
    }


    return (
        <div className={styles.contenedor}>
            <div className={styles.infoContenedor}>
                <button className={styles.btn} onClick={handle_button_home}>Go Back</button>
                {
                    Object.keys(detail).length > 0 ?
                        <div >
                            <div >
                                <img className={styles.img} src={detail[0].imagen} alt={"imagen no encontrada"} />
                            </div>
                            <div >
                                <li>
                                    <RecipeDetails name="Id" data={detail[0].id} />
                                </li>
                                <li><RecipeDetails name="Name" data={detail[0].nombre ? detail[0].nombre : detail[0].nombre} /></li>
                                <li><RecipeDetails name="Diets" data={Array.isArray(detail[0].dieta) ? detail[0].dieta.map(d => d.name ? <label key={d.name}> {d.name} * </label> :
                                    <label  key={d}> {d} * </label>) : detail[0].dieta} /></li>
                                <li className={styles.resumen}><RecipeDetails name="Summary" data={detail[0].resumen} /></li>
                                <li><RecipeDetails name="Score" data={detail[0].puntuacion} /></li>
                                <li><RecipeDetails name="Healthy" data={detail[0].nivel_de_comida_saludable} /></li>
                                <li><RecipeDetails name="Instructions" data={detail[0].paso_a_paso} /></li>
                            </div>
                        </div>
                        : <p>Wait...</p>
                }

            </div>

        </div>
    )
}
