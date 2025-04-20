import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

function HomePage() {

    const [auth] = useAuth();

    return (
        <Layout title={"Home - Ecommers app"}>
            <h1>This is home page</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    )
}

export default HomePage
