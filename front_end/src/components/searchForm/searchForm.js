import React from 'react';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: '',
            budget: '',
            score: '',
            actor0: '',
            actor1: '',
            director: '',
            genre: '',
            recom:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        fetch('http://localhost:8080', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                movie:this.state.name
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ year: res.year })
                this.setState({ budget: res.budget })
                this.setState({ score: res.score })
                this.setState({ actor0: res.actor0 })
                this.setState({ actor1: res.actor1 })
                this.setState({ director: res.director })
                this.setState({ genre: res.genre })
                this.setState({ recom: res.recoms })

                }

            )



        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <p> Year: {this.state.year}</p>
                <p> Budget: {this.state.budget}</p>
                <p> Score: {this.state.score}</p>
                <p> Genre: {this.state.genre}</p>
                <p> Actor1: {this.state.actor0}</p>
                <p> Actor2: {this.state.actor1}</p>
                <p> Director: {this.state.director}</p>
                <p> Recom:</p>

                <ul>
                    {this.state.recom.map((r) => <li key={r}>{r}</li>)}
                </ul>
                

                

            </div>
        );
    }


}

export default SearchForm;