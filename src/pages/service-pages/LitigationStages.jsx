import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function LitigationStages() {
  return <ServicePage data={getServiceBySlug('litigation-stages')} />
}
