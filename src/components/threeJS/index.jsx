import React, { Suspense, lazy, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './styles.css'
const LazyApp = lazy(() => import('./App'))

function SceneThree({ model, label, rot, picker }) {
    const [loaded, setLoaded] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: false, // Esto asegura que la carga se dispare solo una vez
        threshold: 0.9, // Ajusta según tus necesidades
    })

    useEffect(() => {
        if (inView) {
            // Simulamos un retraso en la carga. En realidad, aquí iniciarías la carga de tu modelo.
            console.log('Inicio de carga del modelo:', label)
            setTimeout(() => {
                setLoaded(true)
                console.log('Modelo cargado:', label)
            }, 500)
        }
    }, [inView])

    return (
        <div ref={ref} className="h-96 fit-content">
            {loaded && (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyApp model={model} rot={rot} picker={picker} />
                </Suspense>
            )}
            <span>{label}</span>
        </div>
    )
}

export default SceneThree
