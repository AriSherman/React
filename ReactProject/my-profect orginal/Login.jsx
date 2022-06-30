// import './Login.css'
// import { connect } from "react-redux";


// class Login extends React.Component {
//     constructor(props) {
//         super(props);
        
//         //this.props.logout();

//         this.state = {
//             username: "",
//             password: "",
//             submitted: false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }

//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//       }
    
//     handleSubmit(e) {
//         e.preventDefault();
    
//         this.setState({ submitted: true });
//         const { username, password } = this.state;
//         if (username && password) {
//           this.props.login(username, password);
//         }
//       }
    
//       render() {
//         //const { loggingIn } = this.props;
//         const { username, password, submitted } = this.state;
//         return (
//             <div className='login'>
//                 <h2>Login</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div
//                         className={
//                             "form-group" + (submitted && !username ? " has-error" : "")
//                         }
//                     >
//                         <label htmlFor='username'></label>
//                         <input
//                             type='text'
//                             className='from-control'
//                             name='username'
//                             value={username}
//                             onChange={this.handleSubmit}
//                         />
//                     {submitted && !username &&(
//                         <div className='help-block'>UserName is required</div>
//                     )}
//                 <div/>
//                 <div
//                     className={
                        
//                     }
//                 </form>
//             </div>



//       }


//     // const Login = (props) =>{ 
    
//     //     const onSubmit = () =>{
//     //         props.onLogin("dd", "ddd")
//     //     }
    
//     //     return(
//     //         <div className='login'>
//     //             <input type="text" placeholder="UserName" />
//     //             <input type="text" placeholder="Password" />
    
//     //             <button onClick={onSubmit}>Login</button>
//     //         </div>
//     //     )
//     // }
// }

// export default Login;