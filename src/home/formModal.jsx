import React from 'react';
import './home.css'

const FormModal = (payload) => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [odometer, setOdometer] = useState('');
    const [scratch, setScratch] = useState('');
    const [originalPaint, setOriginalPaint] = useState('');
    const [accidents, setAccidents] = useState('');
    const [buyers, setBuyers] = useState('');
    const [regPlace, setRegPlace] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        image,
        title,
        price,
        odometer,
        scratch,
        originalPaint,
        accidents,
        buyers,
        regPlace,
      };
      submitForm(formData);
    };
}

export default FormModal