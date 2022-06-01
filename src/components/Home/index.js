import React from 'react';
import {Container} from "./style"

function Home() {
    return (
        <Container>
            <h1> Pop-Movie</h1>
            <ul>
                <li>
                
                    <img src="https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large" alt="spy"/>
                    <span>Spider Man</span>
                </li>

                <li>
                    <img src="https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large" alt="spy"/>
                    <span>Spider Man</span>
                </li>

                <li>
                    <img src="https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large" alt="spy"/>
                    <span>Spider Man</span>
                </li>
            </ul>

        </Container>
    );
}

export default Home;