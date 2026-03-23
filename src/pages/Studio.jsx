import { useEffect } from 'react'

export default function StudioPage() {
  useEffect(() => {
    window.location.replace('https://fatentamim.sanity.studio/')
  }, [])

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B1120', color: '#fff', fontFamily: 'Outfit, sans-serif' }}>
      <p>Redirecting to Sanity Studio…</p>
    </div>
  )
}
