import React from "react";



class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            Password:"",
            error:""
        }
        this.changeText=this.changeText.bind(this);
        this.submitHander=this.submitHander.bind(this);
    }

    changeText(event){
            console.log(this)
            console.log(event.target.value);
            this.setState({
                [event.target.name]:event.target.value
            })
              console.log(this.state.email);  
          
    }
    submitHander(e){
       
        if(this.state.email ==="" || this.state.Password === ""){
            this.setState({
                error:"enter the details"
            })
        }
    }

render(){
    return (
        <div>

                <h1>registration form</h1>

            <div>
         
                        
                <form action="#">
                    <div className="form-group">
                        <label >email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"name="email" value={this.state.email } onChange={this.changeText} />
                        <span style={{color:'red',font:'20px'}}>{this.state.error}</span>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.Password} onChange={this.changeText}/>
                        <span style={{color:'red'}}>{this.state.error}</span>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.submitHander}>Submit</button>
                </form>
                    
                    </div>
        </div>
       
    )
}
}

export default Contact;