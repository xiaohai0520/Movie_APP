import React from 'react';

class Info extends React.Component {


    render() {
        const info = this.props.info;
        return (
            <div>
                <div>
                    <h3>Movie Information</h3>
                </div>
                <div>
                    <p> Name: {info.name}</p>
                    <p> Year: {info.year}</p>
                    <p> Budget: {info.budget}</p>
                    <p> Score: {info.score}</p>
                    <p> Genre: {info.genre}</p>
                    <p> Actor1: {info.actor0}</p>
                    <p> Actor2: {info.actor1}</p>
                    <p> Director: {info.director}</p>
                    <p> Recommendation:</p>

                    <ul>
                        {info.recommendation.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Info;