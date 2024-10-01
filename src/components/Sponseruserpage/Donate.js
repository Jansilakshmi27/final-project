import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import ngosData from './ngos.json';
import './Donate.css';

const Donate = () => {
  const { upiId } = useParams();
  const [ngo, setNgo] = useState(null);

  useEffect(() => {
    const foundNgo = ngosData.find(ngo => ngo.upiId === upiId);
    if (foundNgo) {
      setNgo(foundNgo);
    }
  }, [upiId]);

  if (!ngo) {
    return <p>Loading...</p>;
  }

  // Construct the UPI payment URL
  const upiPaymentUrl = `upi://pay?pa=${ngo.upiId}&pn=${encodeURIComponent(ngo.name)}&tn=Donation&cu=INR`;

  return (
    <div className="donate-container">
      {/* Motivational quotes and short notes for sponsors */}
      <div className="sponsor-notes">
        <blockquote>
          "The best way to find yourself is to lose yourself in the service of others." <br/> 
          <span>– Mahatma Gandhi</span>
        </blockquote>
        <p className="short-note">
          Your support can create lasting change. A small contribution today can lead to a brighter future tomorrow.
        </p>
      </div>

      <h1>HOPE FOUNDATION</h1>
      <p><strong>Description:</strong> {ngo.description}</p>
      <p><strong>Since:</strong> {ngo.since}</p>

      <h2>Scan to Pay</h2>
      <div className="qr-code">
        {/* Pass the UPI payment URL to the QR code */}
        <QRCodeCanvas value={upiPaymentUrl} />
      </div>
      <p className="pay-instruction">
        Use any UPI app like Google Pay, PhonePe, Paytm, or your bank’s UPI app to scan the QR code above. <br />
        Once scanned, confirm the details and enter the amount you'd like to donate.
      </p>
      <p className="upi-id-info">
        <strong>UPI ID:</strong> {ngo.upiId}
      </p>

      {/* Additional notes or help instructions */}
      <div className="additional-notes">
        <h3>How to Pay:</h3>
        <ul>
          <li>1. Open your preferred UPI app.</li>
          <li>2. Choose the option to scan a QR code.</li>
          <li>3. Scan the code displayed above.</li>
          <li>4. Enter the amount you wish to donate and proceed with the payment.</li>
        </ul>
        <p>Thank you for your generous support!</p>
      </div>
    </div>
  );
};

export default Donate;
