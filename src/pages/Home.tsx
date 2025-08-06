import React, { useState } from 'react'
import TimeForm from '../components/ui/TimeForm'
import TimeChart from '@/components/ui/TimeChart'

const Home = () => {
  const [data, setData] = useState<{ activity: string; hours: number }[]>([])

  const handleAdd = (activity: string, hours: number) => {
    const totalHours = data.reduce((sum, d) => sum + d.hours, 0)

    if (totalHours + hours > 24) {
      alert('You can only track up to 24 hours a day!')
      return
    }

    if (hours <= 0) {
      alert('Please enter a valid number of hours.')
      return
    }

    setData((prev) => [...prev, { activity, hours }])
  }

  return (
    <>
      <div
        className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm space-y-4 hover:shadow-xl"
      >
        <div className="animate-fadeInDown">
          <h1 className="text-4xl font-semibold font-poppins text-center text-gray-800 tracking-tight">
            Track Your <span className="text-indigo-600">Time</span>
          </h1>
          <p className="text-center font-poppins text-gray-500 text-sm mt-1 mb-6">
            Stay organized. Stay balanced.
          </p>
        </div>

        <TimeForm onAdd={handleAdd} />

        {data.length > 0 && (
          <div className="p-4 bg-gray-100 rounded-xl shadow-inner">
            <TimeChart data={data} />
          </div>
        )}
      </div>

      {data.length === 0 && (
        <p className="text-center font-poppins text-gray-400 mt-4 italic animate-pulse">
          No activity yet
        </p>
      )}
    </>
  )
}

export default Home
