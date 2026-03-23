import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function CriminalDefense() {
  return <ServicePage data={getServiceBySlug('criminal-defense')} />
}
