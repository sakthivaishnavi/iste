import { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";

const EventDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollno: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    alert(`Thank you for registering, ${formData.name}!`);
    setFormData({ name: '', email: '', rollno: '' }); // Clear form after submission
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div id="events" className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full p-10 mt-6">
        <h1 className="font-bold font-palanquin text-2xl justify-center ml-16 mb-16">
          Our Upcoming Events
        </h1>
        <div className="bg-emerald-400 p-6  text-center">
          <h2 className="text-3xl font-bold text-white">Inaugural Ceremony</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg">
            <strong>Guest:</strong> Dr. S. NITHYANANDHAM, Ph.D
          </p>
          <p className="text-gray-700 text-lg">
            <strong>CEO:</strong> Barani Ferrocast Pvt Ltd
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <button className="w-full py-2 px-4 bg-emerald-400 text-white  hover:bg-emerald-600 mb-4 flex items-center gap-2 rounded-full justify-center">
            Add to Cart <MdShoppingCart/>
          </button>
          <button
            className="w-full py-2 px-4 bg-gray-500 text-white rounded-full hover:bg-gray-700"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Register Now'}
          </button>
        </div>

        {/* Registration Form */}
        {showForm && (
          <form className="mt-6 p-4 py-4 bg-gray-50 rounded" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded text-gray-700"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded text-gray-700"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
               Register Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded text-gray-700"
                placeholder="Enter your register number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
               Session
              </label>
              <select className='bg-gray-300 rounded-sm'>
               <option>Session 1</option>
               <option>Session 2</option>
               <option>Session 3</option>
               </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-emerald-400 text-white rounded hover:bg-emerald-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
