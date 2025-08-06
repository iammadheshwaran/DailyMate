import React, { useState } from 'react'
import { Input } from './input'
import { Button } from './button'
import { Plus } from 'lucide-react'

interface Props {
  onAdd: (activity: string, hours: number) => void
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState("")
  const [hours, setHours] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!activity.trim() || !hours.trim()) {
      setError(true)
      alert("Please fill in both Activity and Hours!")
      return
    }

    const activityRegex = /^[A-Za-z ]+$/;
    if (!activityRegex.test(activity.trim())) {
      alert("Activity name should only contain letters and spaces.")
      return
    }

    const parsedHours = Number(hours)
    if (isNaN(parsedHours) || parsedHours <= 0) {
      setError(true)
      alert("Please enter a valid number for Hours.")
      return
    }

    const capitalizedActivity = activity
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase())

    onAdd(capitalizedActivity, parsedHours)

    setActivity("")
    setHours("")
    setError(false)
  }

  return (
    <div className='font-poppins space-y-4'>
      <Input
        type='text'
        placeholder='Activity (e.g. Sleep)'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className={`${error && !activity.trim() ? 'border-red-500' : ''}`}
      />

      <Input
        type='number'
        placeholder='Hours (e.g. 8)'
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className={`${error && (!hours.trim() || Number(hours) <= 0) ? 'border-red-500' : ''}`}
      />

      <Button
        onClick={handleSubmit} // ✅ Fix added here
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Plus size={18} /> Add Activity
      </Button>
    </div>
  )
}

export default TimeForm
