import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'

const Routers = () => {
  return (
    <>
  <Routes>
        {/* Ana sayfa için bir route belirle ve bu route'da Navigate ile /project'e yönlendir */}
        <Route
          path="/"
          element={<Navigate to="/project" replace />} 
        />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Projects />} />
      </Routes>
    </>
  )
}

export default Routers