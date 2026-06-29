import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className="container not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        {error?.statusText || error?.message || "The page you are looking for does not exist."}
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
