

export const Welcome = ({name , isLoggedIn}) =>{

  // const {name} = props


    return(
    <div>

      {
        isLoggedIn ? <p>Welcome Back! {name ? name: "Guest"},</p> :
        <p>Your are not Logged in</p>
      }
    </div>
      
    )
  }