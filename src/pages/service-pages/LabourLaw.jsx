import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function LabourLaw() {
  return <ServicePage data={getServiceBySlug('labour-law')} />
}
