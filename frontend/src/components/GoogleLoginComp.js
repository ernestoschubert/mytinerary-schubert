import GoogleLogin from 'react-google-login';


const GoogleLoginComp = () => {
    
    const responseGoogle = (response) => {
        console.log(response);
      }

    return <>
            <GoogleLogin
                clientId="988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com"
                buttonText="Sign Up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

    </>
}

export default GoogleLoginComp;