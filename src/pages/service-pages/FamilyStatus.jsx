import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function FamilyStatus() {
  return <ServicePage data={getServiceBySlug('family-status')} />
}
