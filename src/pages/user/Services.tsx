import React from 'react'
const ServiceComponent = React.lazy(() => import('@/components/service/ServiceComponent'))

const Services = () => {
  return (
    <>
      <ServiceComponent/>
    </>
  )
}

export default Services
