import { Badge } from "@/components/ui/badge"
import {Carousel1} from "./Carousel1";
import { useState } from 'react'
import { Button } from '../components/ui/button'

const Homepage = () => {
    const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Carousel1/>
      <Badge variant="outline" className='mb-5'>{count}</Badge>
        <Button className='mb-5' onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
        <Button variant="destructive" onClick={() => setCount((count) => count - 1)}>Decrement</Button>
        <Button variant="secondary" onClick={() => setCount((count) => 0)}>Reset</Button>
      </div>
    </>
  )
}

export default Homepage
