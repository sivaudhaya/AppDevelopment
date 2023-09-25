import './Landcss.css'; // Import your new CSS file
import { Link } from 'react-router-dom';

function Appone() {
  return (
    <div className="new-appone-container">
      <main className="new-appone-content">
        <h2 className="new-appone-heading">Welcome to</h2>
        <h1 className="new-appone-title">WE Express T</h1>

        <p className="new-appone-motto">Our Motto: If it’s yours, you should be able to customize it!</p>

        <div className="new-appone-button">
          <Link to="/signup">Explore now!</Link>
        </div>
        <div className='hello'>
        <form
          action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
         

          <div className="new-appone-disclaimer">
            By subscribing, you agree with WE Express T's{' '}
            <Link to='/term'> Terms of Service</Link>
             
         
            and{' '}
           <Link to='/privacy'>Privacy Policy</Link>
            .
          </div>
        </form>
        </div>
      </main>

      <footer className="new-appone-footer">
        <div className="new-appone-footer-content">
          <div className="new-appone-social-links">
            {/* Add your social links here */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Appone;