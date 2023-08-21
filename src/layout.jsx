import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import React, { useState, useEffect } from 'react'

export default function Layout(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div className="flex flex-col pt-0 min-w-screen">
            {loading && <Loader />}
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
