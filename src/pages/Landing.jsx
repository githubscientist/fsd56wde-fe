import { Outlet } from "react-router-dom";

const Landing = () => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center'
    }

  return (
    <div style={styles}>
        <h1>Job Portal</h1>
        <p>Welcome to the Job Portal!!</p>
        <p>You can search for jobs here and apply for them. <br/><strong>Register</strong> and <strong>Login</strong> to get started.</p>
        <Outlet />
    </div>
  )
}

export default Landing;