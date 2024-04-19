import { termsOfService } from '@/data/terms'
import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'



export default function Conditions(){
  return(

    <Markdown>{termsOfService}</Markdown>

  )

}