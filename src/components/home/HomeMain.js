import React from 'react'
import { HomeComponent1 } from './components/HomeComponent1'
import { HomeComponent2 } from './components/HomeComponent2'
import { HomeComponent3 } from './components/HomeComponent3'
import { HomeComponent4 } from './components/HomeComponent4'

export const Home = () => {
  return (
    <section>
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 />
    </section>
  )
}
