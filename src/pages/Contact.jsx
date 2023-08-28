import React from 'react'
import Layout from '../layout'

function Contact() {
    return (
        <Layout>
            <div className="bg-e8e8e8 w-full mx-auto flex flex-row justify-between pt-16">
                <iframe
                    className="w-1/2 h-[600px] border-0 p-6"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.2693916669837!2d-56.173623714001565!3d-34.824318702938925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02afcc7eb82b5%3A0x9048adb8f656152f!2sTaras%20Shevchenko%2C%2012300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1693165246226!5m2!1ses-419!2suy"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="w-1/2 mt-12">
                    <p className="text-second text-5xl not-italic">HORARIOS DE ATENCION</p>
                    <p className="text-second text-2xl not-italic mt-5">
                        Lunes a viernes: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-second text-2xl not-italic mt-2">
                        Sabados: 9:00 AM - 1:00 PM
                    </p>
                </div>
            </div>{' '}
        </Layout>
    )
}

export default Contact
