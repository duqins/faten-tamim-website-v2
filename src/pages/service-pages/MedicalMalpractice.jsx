import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function MedicalMalpractice() {
  return <ServicePage data={getServiceBySlug('medical-malpractice')} />
}
