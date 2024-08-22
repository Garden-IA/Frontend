import LoginForm from '../../../components/loginForm/LoginForm';

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="card w-6/12 max-w-sm mx-auto p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center text-text-color mb-4">Sign In</h2>
          <p className="text-center">Welcome back! Please enter your credentials to continue.</p>
          <LoginForm />
          <div className="flex flex-col items-center space-y-4 mt-6">
            <p className="text-sm">
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
            <p className="text-sm">
              Forgot your password? <a href="/reset-password">Reset it here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
