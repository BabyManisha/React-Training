import React, { Component } from 'react'

export class ReForms extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            age: 0,
            developer: true,
            citizen: 'i',
            gender: 'f',
            hobbies: ['r','m'],
        }
        this.resume = React.createRef();
    }

    saveData(e){
        e.preventDefault();
        console.log(this.state);
        console.log(this.resume.current.files[0].name)
    }

    updateData(e){
        let name = e.target.name, val = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'select-multiple' ? [...this.state[name], e.target.value] : e.target.value;
        this.setState({[name]: val});
    }

    render() {
        return (
            <form onSubmit={(e) => this.saveData(e)}>
                <fieldset>
                    <legend>Detailsss</legend>
                    Username: <input type="text" name="username" id="username" value={this.state.username} onChange={(e) => this.updateData(e)} />
                    Password: <input type="password" name="password" id="password" value={this.state.password} onChange={(e) => this.updateData(e)} />
                    <br/>
                    Age: <input type="number" name="age" id="age" value={this.state.age} onChange={(e) => this.updateData(e)} />
                    <br/>
                    <input type="checkbox" name="developer" id="developer" checked={this.state.developer} onChange={(e) => this.updateData(e)} /> Developer
                    <br/>
                    <input type="radio" name="citizen" id="indian" value="i" checked={this.state.citizen === 'i'} onChange={(e) => this.updateData(e)} />Indian
                    <input type="radio" name="citizen" id="nri" value="o" checked={this.state.citizen === 'o'} onChange={(e) => this.updateData(e)} />NRI
                    <br/>
                    Gender<select name="gender" id="gender" value={this.state.gender} onChange={(e) => this.updateData(e)}>
                        <option value="f">Female</option>
                        <option value="m">Male</option>
                        <option value="o">Other</option>
                    </select>
                    <br/>
                    Hobbies<select name="hobbies" id="hobbies" value={this.state.hobbies} multiple onChange={(e) => this.updateData(e)}>
                        <option value="r">Reading</option>
                        <option value="w">Watching TV</option>
                        <option value="m">Listening to Music</option>
                        <option value="p">Playing Games</option>
                        <option value="o">Others</option>
                    </select>
                    <br/>
                    <input type="file" name="resume" id="resume" ref={this.resume} />
                    <button type="submit">Submit Form</button>
                </fieldset>
            </form>
        )
    }
}

export default ReForms
