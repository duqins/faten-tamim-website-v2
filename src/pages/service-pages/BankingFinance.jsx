import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

export default function BankingFinance() {
  return <ServicePage data={getServiceBySlug('banking-finance')} />
}
