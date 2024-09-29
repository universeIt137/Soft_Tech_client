import axios from 'axios';
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const ApplicationPage = () => {
  const axiosPublic = useAxiosPublic();
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [resume, setResume] = React.useState('');

  const handleSubmitValue = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('resume', resume);

    const result = await axiosPublic.post(`/applyJob`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })

    console.log(result);

    if(result){
      console.log(result)
      toast.success('Application submitted successfully!')
      setFullName('');
      setPhoneNumber('');
      setAddress('');
      setResume('');
    }else{
      toast.error('Failed to submit application!')
    }
    

  }
  return (
    <>
    <div className='max-w-screen-xl mx-auto '  >
        <div className='mx-12' >
          <form onSubmit={handleSubmitValue} >
            <div className='m-10' >
            <div className='grid md:grid-cols-2 md:gap-6 ' >
              <div className='w-full' >
                <label htmlFor='fullName' className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id='fullName'
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  onChange={(e)=>{setFullName(e.target.value)}}
                  required
                />
              </div>
              <div className='w-full' >
              {/* phoneNumber */}
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                onChange={(e)=>{setPhoneNumber(e.target.value)}}
                required
              />
            </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6 my-3 ' >
            {/* address */}
              <div className='w-full' >
                <label htmlFor='fullName' className="block text-lg font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id='address'
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  onChange={(e)=>{setAddress(e.target.value)}}
                  required
                />
              </div>
              <div className='w-full' >
              {/* resume */}
              <label className="block text-lg font-medium text-gray-700 mb-2">
              Resume
              </label>
              <input
                type="file"
                accept='application/json'
                name="resume"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                onChange={(e)=>{setResume(e.target.files[0])}}
                required
              />
            </div>
            </div>
            
            <div className='my-8' >
              <button className='btn bg-text_primari text-white text-lg block mx-auto ' >Submit</button>
            </div>
            </div>
            
          </form>
        </div>
    </div>
    </>
  )
}

export default ApplicationPage




