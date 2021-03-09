import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter/SABSN2GL/Header/N2GL_PC_header_English.jpg" alt="homelogo"/>
                <div className="home_row">
                    <Product
                        id="15345"
                        title="The lean startup"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product
                    id="12345"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg'
                    rating={4}
                />
                </div>  
                <div className="home_row">
                    <Product
                        id="22345"
                        title="The lean startup"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={4}
                    />
                    
                    <Product
                    id="12335"
                    title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
                    price={199.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/3103u363LpL.jpg'
                    rating={3}
                    />
                    <Product
                        id="12385"
                        title="New Apple IPad Pro (12.9- inch ,wi-fi, 128GB )-Silver (4th generation)"
                        price={598.99}
                        image='https://www.extremetech.com/wp-content/uploads/2015/07/Galaxy-Tab-S2.jpg'
                        rating={4}
                    />
                </div>   
                <div className="home_row">
                <Product
                id="12343"
                title="Samsung LC49RG90SSUXEN 49 Curved 5120 x 1440"
                price={1024.99}
                image='https://i.gadgets360cdn.com/large/Samsung_Odyssey_G9_launch_1592989821732.jpg'
                rating={5}
            />
                </div>  
            </div>  
        </div>
    )
}

export default Home
