import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function CorporateCommercial() {
  return <ServicePage data={getServiceBySlug('corporate-commercial')} />
}
